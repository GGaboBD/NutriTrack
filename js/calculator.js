/**
 * NutriTrack Editorial — Motor Metabólico, Gasto Activo y Balance Neto
 * Implementación matemática de Mifflin-St Jeor, TDEE, Déficit Inteligente y METs de Ejercicio.
 */

(function () {
  "use strict";

  const ACTIVITY_FACTORS = {
    sedentary: { label: "Sedentario (escritorio, poco o ningún ejercicio)", factor: 1.2 },
    light: { label: "Ligero (ejercicio 1-3 días/semana)", factor: 1.375 },
    moderate: { label: "Moderado (ejercicio 3-5 días/semana)", factor: 1.55 },
    intense: { label: "Intenso (entrenamiento 6-7 días/semana)", factor: 1.725 },
    athlete: { label: "Atleta de élite / trabajo físico extenuante", factor: 1.9 }
  };

  const GOAL_FACTORS = {
    deficit_light: { label: "Déficit Ligero (-15%)", multiplier: 0.85, type: "deficit" },
    deficit_moderate: { label: "Déficit Moderado Estándar (-20%)", multiplier: 0.80, type: "deficit" },
    deficit_intense: { label: "Déficit Intenso Acelerado (-25%)", multiplier: 0.75, type: "deficit" },
    maintenance: { label: "Mantenimiento Eucalórico (100%)", multiplier: 1.0, type: "maintenance" },
    surplus: { label: "Superávit Muscular Limpio (+12%)", multiplier: 1.12, type: "surplus" },
    manual: { label: "Ajuste Personalizado Exacto", multiplier: 1.0, type: "manual" }
  };

  const EXERCISE_CATALOG = {
    walking: { name: "Caminata activa / paso ligero", met: 3.8 },
    running: { name: "Carrera continua / Running", met: 8.5 },
    strength: { name: "Pesas / Entrenamiento de fuerza", met: 5.0 },
    cycling: { name: "Ciclismo de ruta o estático", met: 6.8 },
    swimming: { name: "Natación estilo libre", met: 7.2 },
    hiit: { name: "HIIT / Circuitos funcionales", met: 9.0 },
    boxing: { name: "Boxeo / Artes marciales", met: 8.0 },
    yoga: { name: "Yoga vinyasa / Pilates", met: 3.0 }
  };

  /**
   * Tasa Metabólica Basal (TMB / BMR) mediante fórmula Mifflin-St Jeor
   */
  function calculateBMR({ sex, weight, height, age }) {
    const w = Number(weight) || 75;
    const h = Number(height) || 175;
    const a = Number(age) || 30;

    const base = 10 * w + 6.25 * h - 5 * a;
    if (sex === "female" || sex === "mujer") {
      return Math.round(base - 161);
    }
    return Math.round(base + 5);
  }

  /**
   * Gasto Energético Diario Total (TDEE)
   */
  function calculateTDEE(bmr, activityKey = "moderate") {
    const act = ACTIVITY_FACTORS[activityKey] || ACTIVITY_FACTORS.moderate;
    return Math.round(bmr * act.factor);
  }

  /**
   * Cálculo de objetivos calóricos y macronutrientes recomendados
   */
  function calculateTargets(profile) {
    const bmr = calculateBMR(profile);
    const tdee = calculateTDEE(bmr, profile.activity);
    const goalMeta = GOAL_FACTORS[profile.goal] || GOAL_FACTORS.deficit_moderate;

    let targetKcal = Math.round(tdee * goalMeta.multiplier);

    if (profile.goal === "manual" && profile.manualKcal) {
      targetKcal = Number(profile.manualKcal);
    }

    // Comprobación de seguridad fisiológica
    const isFemale = profile.sex === "female" || profile.sex === "mujer";
    const safetyFloor = isFemale ? 1200 : 1500;
    const isBelowSafetyFloor = targetKcal < safetyFloor;

    // Macronutrientes optimizados para composición corporal
    const w = Number(profile.weight) || 75;
    let proteinRatio = 2.0; // g por kg para proteger masa magra
    let fatRatioPercent = 0.25; // 25% de calorías para soporte hormonal

    if (goalMeta.type === "surplus") {
      proteinRatio = 1.8;
      fatRatioPercent = 0.25;
    } else if (goalMeta.type === "maintenance") {
      proteinRatio = 1.7;
      fatRatioPercent = 0.28;
    }

    const proteinGrams = Math.round(w * proteinRatio);
    const fatGrams = Math.round((targetKcal * fatRatioPercent) / 9);
    const usedCals = (proteinGrams * 4) + (fatGrams * 9);
    const carbsGrams = Math.max(40, Math.round((targetKcal - usedCals) / 4));

    return {
      bmr,
      tdee,
      targetKcal,
      goalLabel: goalMeta.label,
      safetyFloor,
      isBelowSafetyFloor,
      deficitKcal: tdee > targetKcal ? (tdee - targetKcal) : 0,
      macros: {
        proteinGrams,
        carbsGrams,
        fatGrams
      }
    };
  }

  /**
   * Cálculo de calorías quemadas por ejercicio físico
   * Fórmula: MET * Peso(kg) * (Minutos / 60) * FactorIntensidad
   */
  function calculateExerciseBurn(exerciseKey, durationMin, weightKg, intensity = "moderate") {
    const ex = EXERCISE_CATALOG[exerciseKey] || { met: 5.0, name: "Ejercicio" };
    const dur = Number(durationMin) || 0;
    const w = Number(weightKg) || 75;

    let intensityMult = 1.0;
    if (intensity === "low") intensityMult = 0.85;
    if (intensity === "high") intensityMult = 1.20;

    const burned = Math.round(ex.met * w * (dur / 60) * intensityMult);
    return {
      exerciseKey,
      name: ex.name,
      durationMin: dur,
      intensity,
      burnedKcal: burned
    };
  }

  /**
   * Evaluación de Balance Diario Neto y Margen Editorial
   * Calorías Netas = Consumidas - Quemadas
   */
  function evaluateNetBalance(consumedKcal, burnedKcal, targetKcal) {
    consumedKcal = Math.round(consumedKcal || 0);
    burnedKcal = Math.round(burnedKcal || 0);
    targetKcal = Math.round(targetKcal || 2000);

    const netKcal = consumedKcal - burnedKcal;
    const allowedWithBurn = targetKcal + burnedKcal;
    const remainingKcal = targetKcal - netKcal;
    const isExceeded = netKcal > targetKcal;
    const excessKcal = isExceeded ? (netKcal - targetKcal) : 0;

    const progressPercent = Math.min(100, Math.round((consumedKcal / allowedWithBurn) * 100));

    let statusType = "optimal"; // "under" | "optimal" | "exceeded"
    let statusMessage = "";

    if (isExceeded) {
      statusType = "exceeded";
      statusMessage = `Exceso metabólico de ${excessKcal.toLocaleString()} kcal sobre el límite diario neto.`;
    } else if (remainingKcal > 400) {
      statusType = "under";
      statusMessage = `Dispones de ${remainingKcal.toLocaleString()} kcal netas restantes para cumplir tu meta.`;
    } else {
      statusType = "optimal";
      statusMessage = `Balance en rango de precisión. Margen restante: ${remainingKcal.toLocaleString()} kcal.`;
    }

    return {
      consumedKcal,
      burnedKcal,
      netKcal,
      targetKcal,
      allowedWithBurn,
      remainingKcal,
      isExceeded,
      excessKcal,
      progressPercent,
      statusType,
      statusMessage
    };
  }

  const NutriTrackCalculator = {
    ACTIVITY_FACTORS,
    GOAL_FACTORS,
    EXERCISE_CATALOG,
    calculateBMR,
    calculateTDEE,
    calculateTargets,
    calculateExerciseBurn,
    evaluateNetBalance
  };

  if (typeof window !== "undefined") {
    window.NutriTrackCalculator = NutriTrackCalculator;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = NutriTrackCalculator;
  }
})();
