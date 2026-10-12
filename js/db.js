/**
 * NutriTrack Editorial — Motor de Base de Datos Nativo (IndexedDB + Fallback LocalStorage)
 * Arquitectura multiperfil con aislamiento total de datos:
 * - profiles: Datos biométricos y metas
 * - daily_logs: Comidas, ejercicio y agua indexados por [profileId_date]
 * - refrigerator: Stock doméstico por profileId
 * - settings: Preferencias y perfil activo
 */

(function () {
  "use strict";

  const DB_NAME = "NutriTrackEditorialDB";
  const DB_VERSION = 2;

  let idbInstance = null;
  let useFallback = false;

  const DEFAULT_INITIAL_PROFILE = {
    id: "profile_master",
    name: "Alejandro Valdés",
    initials: "AV",
    sex: "male",
    age: 29,
    height: 178,
    weight: 76,
    activity: "moderate", // 1.55
    goal: "deficit_moderate", // -20% TDEE
    manualKcal: null,
    manualWaterMl: null,
    allergies: "Ninguna",
    createdAt: Date.now()
  };

  /**
   * Inicializa la conexión a IndexedDB con creación de almacenes de objetos
   */
  function openDatabase() {
    return new Promise((resolve) => {
      if (!window.indexedDB) {
        console.warn("IndexedDB no disponible. Usando fallback de localStorage.");
        useFallback = true;
        resolve(null);
        return;
      }

      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("profiles")) {
          db.createObjectStore("profiles", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("daily_logs")) {
          db.createObjectStore("daily_logs", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("refrigerator")) {
          db.createObjectStore("refrigerator", { keyPath: "profileId" });
        }
        if (!db.objectStoreNames.contains("settings")) {
          db.createObjectStore("settings", { keyPath: "key" });
        }
        if (!db.objectStoreNames.contains("custom_foods")) {
          db.createObjectStore("custom_foods", { keyPath: "id" });
        }
      };

      request.onsuccess = (e) => {
        idbInstance = e.target.result;
        resolve(idbInstance);
      };

      request.onerror = (e) => {
        console.warn("Error al abrir IndexedDB:", e);
        useFallback = true;
        resolve(null);
      };
    });
  }

  // --- Operaciones Genéricas ---
  function idbGet(storeName, key) {
    if (useFallback || !idbInstance) {
      try {
        const raw = localStorage.getItem(`${DB_NAME}_${storeName}_${key}`);
        return Promise.resolve(raw ? JSON.parse(raw) : null);
      } catch (err) {
        return Promise.resolve(null);
      }
    }
    return new Promise((resolve, reject) => {
      const tx = idbInstance.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  function idbGetAll(storeName) {
    if (useFallback || !idbInstance) {
      try {
        const prefix = `${DB_NAME}_${storeName}_`;
        const items = [];
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k.startsWith(prefix)) {
            items.push(JSON.parse(localStorage.getItem(k)));
          }
        }
        return Promise.resolve(items);
      } catch (err) {
        return Promise.resolve([]);
      }
    }
    return new Promise((resolve, reject) => {
      const tx = idbInstance.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  function idbPut(storeName, val, key = null) {
    if (useFallback || !idbInstance) {
      try {
        const k = key || val.id || val.profileId || val.key;
        localStorage.setItem(`${DB_NAME}_${storeName}_${k}`, JSON.stringify(val));
        return Promise.resolve(val);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return new Promise((resolve, reject) => {
      const tx = idbInstance.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const req = store.put(val);
      req.onsuccess = () => resolve(val);
      req.onerror = () => reject(req.error);
    });
  }

  function idbDelete(storeName, key) {
    if (useFallback || !idbInstance) {
      try {
        localStorage.removeItem(`${DB_NAME}_${storeName}_${key}`);
        return Promise.resolve(true);
      } catch (err) {
        return Promise.resolve(false);
      }
    }
    return new Promise((resolve, reject) => {
      const tx = idbInstance.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const req = store.delete(key);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  // --- API Especializada de NutriTrack ---

  async function initDB() {
    await openDatabase();

    // Comprobar si hay perfiles
    const profiles = await getAllProfiles();
    if (profiles.length === 0) {
      await saveProfile(DEFAULT_INITIAL_PROFILE);
      await setActiveProfileId(DEFAULT_INITIAL_PROFILE.id);
    } else {
      const activeId = await getActiveProfileId();
      if (!activeId || !profiles.some(p => p.id === activeId)) {
        await setActiveProfileId(profiles[0].id);
      }
    }
  }

  async function getAllProfiles() {
    return await idbGetAll("profiles");
  }

  async function getProfileById(id) {
    return await idbGet("profiles", id);
  }

  async function saveProfile(profile) {
    if (!profile.id) {
      profile.id = "profile_" + Date.now();
    }
    if (!profile.initials && profile.name) {
      const parts = profile.name.trim().split(/\s+/);
      profile.initials = (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
    }
    return await idbPut("profiles", profile);
  }

  async function deleteProfile(id) {
    const profiles = await getAllProfiles();
    if (profiles.length <= 1) {
      throw new Error("No se puede eliminar el único perfil activo.");
    }
    await idbDelete("profiles", id);
    const active = await getActiveProfileId();
    if (active === id) {
      const remaining = profiles.filter(p => p.id !== id);
      await setActiveProfileId(remaining[0].id);
    }
    return true;
  }

  async function getActiveProfileId() {
    const setting = await idbGet("settings", "activeProfileId");
    return setting ? setting.value : DEFAULT_INITIAL_PROFILE.id;
  }

  async function setActiveProfileId(id) {
    await idbPut("settings", { key: "activeProfileId", value: id });
  }

  async function getActiveProfile() {
    const id = await getActiveProfileId();
    let profile = await getProfileById(id);
    if (!profile) {
      profile = DEFAULT_INITIAL_PROFILE;
    }
    return profile;
  }

  // --- Registros Diarios (Comidas, Ejercicios, Agua) ---

  async function getDayLog(profileId, dateStr) {
    const logId = `${profileId}_${dateStr}`;
    let log = await idbGet("daily_logs", logId);
    if (!log) {
      log = {
        id: logId,
        profileId,
        date: dateStr,
        meals: {
          desayuno: [],
          almuerzo: [],
          cena: [],
          snacks: []
        },
        exercises: [],
        water: {
          consumedMl: 0,
          entries: []
        },
        updatedAt: Date.now()
      };
    }
    // Asegurar estructura
    if (!log.meals) log.meals = { desayuno: [], almuerzo: [], cena: [], snacks: [] };
    if (!log.exercises) log.exercises = [];
    if (!log.water) log.water = { consumedMl: 0, entries: [] };
    return log;
  }

  async function saveDayLog(log) {
    log.updatedAt = Date.now();
    return await idbPut("daily_logs", log);
  }

  // --- "Mi Refrigerador" (Stock Doméstico) ---

  async function getRefrigeratorStock(profileId) {
    const ref = await idbGet("refrigerator", profileId);
    if (ref && Array.isArray(ref.items)) {
      return ref.items;
    }
    // Stock inicial de cortesía
    return [
      "pechuga_de_pollo_a_la_plancha",
      "huevo_de_gallina_entero_revuelto",
      "arroz_blanco_cocido",
      "espinacas_frescas_baby",
      "jitomate_bola_maduro",
      "cebolla_blanca_en_juliana",
      "aceite_de_oliva_virgen_extra",
      "avena_en_hojuelas",
      "platano_tabasco_maduro",
      "manzana_gala_crujiente"
    ];
  }

  async function saveRefrigeratorStock(profileId, items) {
    return await idbPut("refrigerator", {
      profileId,
      items: Array.isArray(items) ? items : [],
      updatedAt: Date.now()
    });
  }

  // --- Preferencias de Recordatorio ---

  async function getReminderSettings() {
    const s = await idbGet("settings", "waterReminders");
    return s ? s.value : {
      enabled: true,
      intervalMin: 90,
      startHour: 8,
      endHour: 22
    };
  }

  async function saveReminderSettings(settings) {
    return await idbPut("settings", {
      key: "waterReminders",
      value: settings
    });
  }

  // Exportar globalmente
  const NutriTrackDB = {
    initDB,
    getAllProfiles,
    getProfileById,
    saveProfile,
    deleteProfile,
    getActiveProfileId,
    setActiveProfileId,
    getActiveProfile,
    getDayLog,
    saveDayLog,
    getRefrigeratorStock,
    saveRefrigeratorStock,
    getReminderSettings,
    saveReminderSettings
  };

  if (typeof window !== "undefined") {
    window.NutriTrackDB = NutriTrackDB;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = NutriTrackDB;
  }
})();
