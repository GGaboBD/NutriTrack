/**
 * NutriTrack Editorial — Módulo de Hidratación Inteligente y Recordatorios
 * Control hídrico compensado por ejercicio físico y motor de alertas periódicas.
 */

(function () {
  "use strict";

  const WATER_PORTIONS = [
    { label: "+250 ml (Vaso)", amount: 250 },
    { label: "+500 ml (Botella)", amount: 500 },
    { label: "+100 ml (Sorbo)", amount: 100 }
  ];

  const REMINDER_MESSAGES = [
    "Momento de pausa: 250 ml para mantener tu claridad mental y ritmo metabólico.",
    "Pausa de hidratación: El agua fresca favorece la digestión limpia y el enfoque cognitivo.",
    "Hidratación celular: Un vaso de agua reactiva la energía y previene la fatiga posprandial.",
    "Cuidado personal: Alcanza tu meta hídrica para mantener una termorregulación óptima."
  ];

  /**
   * Calcula la meta diaria de agua recomendada
   * Base: 35 ml por kg de peso corporal
   * Ejercicio: +400 ml por cada 45 minutos de actividad
   */
  function calculateWaterTarget(weightKg, totalExerciseMinutes = 0, manualTargetMl = null) {
    if (manualTargetMl && Number(manualTargetMl) > 0) {
      return Number(manualTargetMl);
    }
    const w = Number(weightKg) || 75;
    const baseMl = Math.round(w * 35);
    const exerciseBonusMl = Math.round((Number(totalExerciseMinutes) || 0) * (400 / 45));
    return baseMl + exerciseBonusMl;
  }

  /**
   * Agrega un registro de agua al día
   */
  function addWaterEntry(dayLog, amountMl, label = "Hidratación") {
    const ml = Number(amountMl) || 0;
    if (ml <= 0) return dayLog;

    if (!dayLog.water) {
      dayLog.water = { consumedMl: 0, entries: [] };
    }

    const entry = {
      id: "water_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
      amountMl: ml,
      label,
      timestamp: Date.now()
    };

    dayLog.water.entries.unshift(entry);
    dayLog.water.consumedMl = dayLog.water.entries.reduce((sum, e) => sum + e.amountMl, 0);
    return dayLog;
  }

  /**
   * Elimina el último registro de agua (Deshacer)
   */
  function undoLastWaterEntry(dayLog) {
    if (!dayLog.water || !dayLog.water.entries || dayLog.water.entries.length === 0) {
      return dayLog;
    }
    dayLog.water.entries.shift();
    dayLog.water.consumedMl = dayLog.water.entries.reduce((sum, e) => sum + e.amountMl, 0);
    return dayLog;
  }

  /**
   * Sistema de Recordatorios con Notification API y Banner Editorial
   */
  let reminderIntervalId = null;

  function initWaterReminders(onInAppBannerCallback) {
    if (reminderIntervalId) clearInterval(reminderIntervalId);

    // Verificar cada 60 segundos si corresponde disparar recordatorio
    reminderIntervalId = setInterval(async () => {
      if (!window.NutriTrackDB) return;
      const settings = await window.NutriTrackDB.getReminderSettings();
      if (!settings || !settings.enabled) return;

      const now = new Date();
      const currentHour = now.getHours();

      // Ventana de recordatorios (8:00 AM a 10:00 PM)
      if (currentHour < (settings.startHour || 8) || currentHour >= (settings.endHour || 22)) {
        return;
      }

      const lastSent = Number(localStorage.getItem("nutritrack_last_water_reminder") || 0);
      const intervalMs = (settings.intervalMin || 90) * 60 * 1000;

      if (Date.now() - lastSent >= intervalMs) {
        localStorage.setItem("nutritrack_last_water_reminder", Date.now().toString());
        triggerReminder(onInAppBannerCallback);
      }
    }, 60000);
  }

  function triggerReminder(onInAppBannerCallback) {
    const msg = REMINDER_MESSAGES[Math.floor(Math.random() * REMINDER_MESSAGES.length)];

    // 1. Notificación del sistema si está habilitada
    if ("Notification" in window && Notification.permission === "granted") {
      try {
        new Notification("NutriTrack Editorial — Pausa Hídrica", {
          body: msg,
          icon: "assets/icon-192.png",
          badge: "assets/icon-192.png"
        });
      } catch (err) {
        console.log("Notificación bloqueada en segundo plano:", err);
      }
    }

    // 2. Banner editorial in-app
    if (typeof onInAppBannerCallback === "function") {
      onInAppBannerCallback(msg);
    }
  }

  async function requestNotificationPermission() {
    if (!("Notification" in window)) return false;
    if (Notification.permission === "granted") return true;
    if (Notification.permission !== "denied") {
      const res = await Notification.requestPermission();
      return res === "granted";
    }
    return false;
  }

  const NutriTrackHydration = {
    WATER_PORTIONS,
    calculateWaterTarget,
    addWaterEntry,
    undoLastWaterEntry,
    initWaterReminders,
    requestNotificationPermission,
    triggerReminder
  };

  if (typeof window !== "undefined") {
    window.NutriTrackHydration = NutriTrackHydration;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = NutriTrackHydration;
  }
})();
