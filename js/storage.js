/**
 * NutriTrack - Módulo de Almacenamiento Local (LocalStorage)
 * Gestiona perfil, registro diario de comidas y alimentos personalizados.
 */

const STORAGE_KEYS = {
  PROFILE: "nutritrack_profile_v1",
  LOGS: "nutritrack_logs_v1",
  CUSTOM_FOODS: "nutritrack_custom_foods_v1"
};

// Perfil inicial predeterminado y realista
const DEFAULT_PROFILE = {
  sex: "male",
  age: 30,
  height: 175,
  weight: 75,
  activity: "moderate",
  goal: "maintain",
  isManualTarget: false,
  manualMinKcal: 2200,
  manualMaxKcal: 2400
};

/**
 * Obtiene la fecha actual en formato local YYYY-MM-DD
 */
function getLocalDateString(d = new Date()) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Carga el perfil del usuario
 */
function getProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (raw) {
      return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
    }
  } catch (e) {
    console.error("Error al leer perfil:", e);
  }
  return { ...DEFAULT_PROFILE };
}

/**
 * Guarda el perfil del usuario
 */
function saveProfile(profile) {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    return true;
  } catch (e) {
    console.error("Error al guardar perfil:", e);
    return false;
  }
}

/**
 * Obtiene el registro completo de todos los días
 */
function getAllLogs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LOGS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Error al leer logs:", e);
  }
  return {};
}

/**
 * Obtiene el registro de comidas de una fecha específica
 */
function getDayLog(dateStr) {
  const logs = getAllLogs();
  if (logs[dateStr]) {
    return logs[dateStr];
  }
  return {
    desayuno: [],
    almuerzo: [],
    cena: [],
    snacks: []
  };
}

/**
 * Guarda el registro de comidas de una fecha específica
 */
function saveDayLog(dateStr, dayData) {
  try {
    const logs = getAllLogs();
    logs[dateStr] = dayData;
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));
    return true;
  } catch (e) {
    console.error("Error al guardar day log:", e);
    return false;
  }
}

/**
 * Agrega un alimento consumido a una comida específica
 */
function addMealEntry(dateStr, mealKey, item) {
  const dayLog = getDayLog(dateStr);
  if (!dayLog[mealKey]) {
    dayLog[mealKey] = [];
  }
  const entry = {
    ...item,
    id: item.id || ("entry_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5)),
    createdAt: Date.now()
  };
  dayLog[mealKey].push(entry);
  saveDayLog(dateStr, dayLog);
  return entry;
}

/**
 * Actualiza un alimento consumido dentro de una comida
 */
function updateMealEntry(dateStr, mealKey, entryId, updatedFields) {
  const dayLog = getDayLog(dateStr);
  if (!dayLog[mealKey]) return false;
  const idx = dayLog[mealKey].findIndex(e => e.id === entryId);
  if (idx !== -1) {
    dayLog[mealKey][idx] = { ...dayLog[mealKey][idx], ...updatedFields };
    saveDayLog(dateStr, dayLog);
    return true;
  }
  return false;
}

/**
 * Elimina un alimento consumido de una comida
 */
function removeMealEntry(dateStr, mealKey, entryId) {
  const dayLog = getDayLog(dateStr);
  if (!dayLog[mealKey]) return false;
  dayLog[mealKey] = dayLog[mealKey].filter(e => e.id !== entryId);
  saveDayLog(dateStr, dayLog);
  return true;
}

/**
 * Obtiene los alimentos personalizados creados por el usuario
 */
function getCustomFoods() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_FOODS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Error al leer alimentos personalizados:", e);
  }
  return [];
}

/**
 * Guarda un nuevo alimento personalizado
 */
function addCustomFood(food) {
  try {
    const customFoods = getCustomFoods();
    const newFood = {
      ...food,
      id: "custom_" + Date.now(),
      isCustom: true
    };
    customFoods.push(newFood);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_FOODS, JSON.stringify(customFoods));
    return newFood;
  } catch (e) {
    console.error("Error al agregar alimento personalizado:", e);
    return null;
  }
}

/**
 * Obtiene la lista completa de alimentos (Catálogo base + Personalizados)
 */
function getAllFoods() {
  const baseFoods = (window.NutriTrackData && window.NutriTrackData.DEFAULT_FOODS) || [];
  const customFoods = getCustomFoods();
  return [...customFoods, ...baseFoods];
}

/**
 * Busca un alimento por ID (en catálogo o personalizados)
 */
function findFoodById(foodId) {
  const all = getAllFoods();
  return all.find(f => f.id === foodId) || null;
}

// Exportar globalmente
window.NutriTrackStorage = {
  getLocalDateString,
  getProfile,
  saveProfile,
  getDayLog,
  saveDayLog,
  addMealEntry,
  updateMealEntry,
  removeMealEntry,
  getCustomFoods,
  addCustomFood,
  getAllFoods,
  findFoodById
};
