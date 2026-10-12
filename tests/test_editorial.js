const assert = require("assert");

// Modules
const { DEFAULT_FOODS, calculateFoodNutrients } = require("../js/foods-data.js");
const NutriTrackCalculator = require("../js/calculator.js");
const NutriTrackHydration = require("../js/hydration.js");
const NutriTrackRefrigerator = require("../js/refrigerator.js");
const NutriTrackRecommender = require("../js/recommender.js");

console.log("================================================================================");
console.log("  NUTRITRACK EDITORIAL (AMRIT PALACE) — SUITE DE PRUEBAS AUTOMATIZADAS");
console.log("================================================================================\n");

// ------------------------------------------------------------------------------
// TEST 1: Catálogo Maestro Completo (515 Alimentos)
// ------------------------------------------------------------------------------
console.log("[TEST 1] Verificando Catálogo Maestro Completo (515 alimentos)...");
assert(Array.isArray(DEFAULT_FOODS), "DEFAULT_FOODS debe ser un arreglo");
assert.strictEqual(DEFAULT_FOODS.length, 515, `El catálogo debe contener exactamente 515 alimentos (tiene ${DEFAULT_FOODS.length})`);

const ids = new Set();
DEFAULT_FOODS.forEach((food, idx) => {
  assert(food.id && typeof food.id === "string", `Alimento sin ID en índice ${idx}`);
  assert(!ids.has(food.id), `ID duplicado detectado: ${food.id}`);
  ids.add(food.id);

  assert(food.name && typeof food.name === "string", `Nombre faltante en ${food.id}`);
  assert(food.category && typeof food.category === "string", `Categoría faltante en ${food.id}`);
  assert(typeof food.portionGrams === "number" && food.portionGrams > 0, `Gramos de porción inválidos en ${food.id}`);
  assert(food.portionName && typeof food.portionName === "string", `Nombre de porción faltante en ${food.id}`);

  const p = food.per100g;
  assert(p, `per100g faltante en ${food.id}`);
  assert(typeof p.calories === "number" && p.calories >= 0, `Calorías inválidas en ${food.id}`);
  assert(typeof p.protein === "number" && p.protein >= 0, `Proteína inválida en ${food.id}`);
  assert(typeof p.carbs === "number" && p.carbs >= 0, `Carbohidratos inválidos en ${food.id}`);
  assert(typeof p.fats === "number" && p.fats >= 0, `Grasas inválidas en ${food.id}`);
  assert(typeof p.fiber === "number" && p.fiber >= 0, `Fibra inválida en ${food.id}`);
});
console.log(`  ✓ 515/515 alimentos validados con estructura, IDs únicos y macronutrientes íntegros.`);

// ------------------------------------------------------------------------------
// TEST 2: Escalamiento por Gramos y Métodos de Cocción (+0g, +3g, +11g grasa)
// ------------------------------------------------------------------------------
console.log("\n[TEST 2] Verificando Escalamiento y Métodos de Cocción (Grasas añadidas)...");
const pollo = DEFAULT_FOODS.find(f => f.id === "pechuga_de_pollo_a_la_plancha");
assert(pollo, "Debe existir pechuga_de_pollo_a_la_plancha");

// Raw / Vapor (0g grasa añadida) a 100g
const resVapor = calculateFoodNutrients(pollo, 100, "raw");
assert.strictEqual(resVapor.calories, 165);
assert.strictEqual(resVapor.protein, 31.0);
assert.strictEqual(resVapor.fats, 3.6);
assert.strictEqual(resVapor.addedFatGrams, 0);

// Plancha (+3g grasa añadida = +27 kcal) a 100g
const resPlancha = calculateFoodNutrients(pollo, 100, "plancha");
assert.strictEqual(resPlancha.fats, 6.6); // 3.6 + 3.0
assert.strictEqual(resPlancha.addedFatGrams, 3.0);
assert.strictEqual(resPlancha.calories, 165 + 27); // 192 kcal

// Salteado/Frito (+11g grasa añadida = +99 kcal) a 100g
const resFrito = calculateFoodNutrients(pollo, 100, "fried");
assert.strictEqual(resFrito.fats, 14.6); // 3.6 + 11.0
assert.strictEqual(resFrito.addedFatGrams, 11.0);
assert.strictEqual(resFrito.calories, 165 + 99); // 264 kcal

// Escalamiento a 200g a la plancha
const resPlancha200g = calculateFoodNutrients(pollo, 200, "plancha");
// 165 * 2 = 330 kcal base + 27 kcal plancha = 357 kcal
assert.strictEqual(resPlancha200g.calories, 357);
assert.strictEqual(resPlancha200g.protein, 62.0); // 31.0 * 2
assert.strictEqual(resPlancha200g.fats, 10.2);    // 3.6 * 2 = 7.2 + 3.0 = 10.2
console.log(`  ✓ Factores de cocción validados: Raw (+0g), Plancha (+3g / +27 kcal), Frito (+11g / +99 kcal).`);

// ------------------------------------------------------------------------------
// TEST 3: Motor Metabólico Mifflin-St Jeor, TDEE y Pisos Fisiológicos
// ------------------------------------------------------------------------------
console.log("\n[TEST 3] Verificando Mifflin-St Jeor, TDEE y Pisos Fisiológicos...");
// Hombre: 80 kg, 180 cm, 30 años
// BMR = 10*(80) + 6.25*(180) - 5*(30) + 5 = 800 + 1125 - 150 + 5 = 1780 kcal
const bmrHombre = NutriTrackCalculator.calculateBMR({ sex: "male", weight: 80, height: 180, age: 30 });
assert.strictEqual(bmrHombre, 1780, `TMB Hombre esperado 1780, obtenido ${bmrHombre}`);

// Mujer: 60 kg, 165 cm, 28 años
// BMR = 10*(60) + 6.25*(165) - 5*(28) - 161 = 600 + 1031.25 - 140 - 161 = 1330.25 -> round 1330 kcal
const bmrMujer = NutriTrackCalculator.calculateBMR({ sex: "female", weight: 60, height: 165, age: 28 });
assert.strictEqual(bmrMujer, 1330, `TMB Mujer esperado 1330, obtenido ${bmrMujer}`);

// TDEE moderadamente activo (1.55) para el hombre: 1780 * 1.55 = 2759 kcal
const tdeeHombre = NutriTrackCalculator.calculateTDEE(1780, "moderate");
assert.strictEqual(tdeeHombre, 2759);

// Targets para perfil hombre (déficit moderado 20%): 2759 * 0.80 = 2207 kcal
const targetsHombre = NutriTrackCalculator.calculateTargets({
  sex: "male",
  weight: 80,
  height: 180,
  age: 30,
  activity: "moderate",
  goal: "deficit_moderate"
});
assert.strictEqual(targetsHombre.bmr, 1780);
assert.strictEqual(targetsHombre.tdee, 2759);
assert.strictEqual(targetsHombre.targetKcal, 2207);
assert.strictEqual(targetsHombre.safetyFloor, 1500);
assert.strictEqual(targetsHombre.isBelowSafetyFloor, false, "Hombre a 2207 kcal no debe activar piso de seguridad");
assert.strictEqual(targetsHombre.deficitKcal, 552); // 2759 - 2207

// Prueba de Piso Fisiológico: Mujer sedentaria con déficit intenso (-25%)
const targetsMujerBajo = NutriTrackCalculator.calculateTargets({
  sex: "female",
  weight: 50,
  height: 155,
  age: 35,
  activity: "sedentary",
  goal: "deficit_intense"
});
// BMR: 10*50 + 6.25*155 - 5*35 - 161 = 1133 kcal. TDEE: 1133 * 1.2 = 1360 kcal.
// Target (-25%): 1360 * 0.75 = 1020 kcal (< 1200 kcal) -> alerta activada
assert.strictEqual(targetsMujerBajo.targetKcal, 1020);
assert.strictEqual(targetsMujerBajo.safetyFloor, 1200);
assert.strictEqual(targetsMujerBajo.isBelowSafetyFloor, true, "Mujer con < 1200 kcal debe activar alerta fisiológica");
console.log(`  ✓ Fórmulas Mifflin-St Jeor y Alertas de Piso (<1200 mujeres / <1500 hombres) verificadas.`);

// ------------------------------------------------------------------------------
// TEST 4: Ejercicio Físico por METs y Balance Calórico Neto
// ------------------------------------------------------------------------------
console.log("\n[TEST 4] Verificando Gasto por METs y Balance Calórico Neto...");
// Running (MET 8.5) para persona de 70 kg durante 45 min
// Gasto = 8.5 * 70 * (45 / 60) = 446.25 -> round 446 kcal
const burnRunning = NutriTrackCalculator.calculateExerciseBurn("running", 45, 70);
assert.strictEqual(burnRunning.burnedKcal, 446, `Gasto esperado 446 kcal, obtenido ${burnRunning.burnedKcal}`);

// Fuerza / Pesas (MET 5.0) para persona de 80 kg durante 60 min
// Gasto = 5.0 * 80 * (60 / 60) = 400 kcal
const burnStrength = NutriTrackCalculator.calculateExerciseBurn("strength", 60, 80);
assert.strictEqual(burnStrength.burnedKcal, 400);

// Evaluación de Balance Neto
// Meta: 2000 kcal. Consumidas: 2200 kcal. Quemadas en ejercicio: 500 kcal.
// Neto = 2200 - 500 = 1700 kcal.
// Permitidas con ejercicio = 2000 + 500 = 2500 kcal.
// Restantes = 2500 - 2200 = 300 kcal (o 2000 - 1700 = 300 kcal).
const balanceNorm = NutriTrackCalculator.evaluateNetBalance(2200, 500, 2000);
assert.strictEqual(balanceNorm.netKcal, 1700);
assert.strictEqual(balanceNorm.allowedWithBurn, 2500);
assert.strictEqual(balanceNorm.remainingKcal, 300);
assert.strictEqual(balanceNorm.isExceeded, false);

// Caso de Exceso Neto
// Meta: 2000 kcal. Consumidas: 2600 kcal. Quemadas: 300 kcal.
// Neto = 2600 - 300 = 2300 kcal.
// Exceso = 2300 - 2000 = 300 kcal.
const balanceExc = NutriTrackCalculator.evaluateNetBalance(2600, 300, 2000);
assert.strictEqual(balanceExc.netKcal, 2300);
assert.strictEqual(balanceExc.isExceeded, true);
assert.strictEqual(balanceExc.excessKcal, 300);
console.log(`  ✓ Gasto METs, Fórmula Neta (Net = Consumed - Burned) y detección matemática de exceso confirmadas.`);

// ------------------------------------------------------------------------------
// TEST 5: Hidratación Inteligente con Bono por Ejercicio y Deshacer
// ------------------------------------------------------------------------------
console.log("\n[TEST 5] Verificando Hidratación Inteligente y Bono por Ejercicio...");
// Persona 70 kg, sin ejercicio: 70 * 35 = 2450 ml
const targetAguaBase = NutriTrackHydration.calculateWaterTarget(70, 0);
assert.strictEqual(targetAguaBase, 2450);

// Persona 70 kg con 45 min de ejercicio: 2450 + 400 = 2850 ml
const targetAguaGym45 = NutriTrackHydration.calculateWaterTarget(70, 45);
assert.strictEqual(targetAguaGym45, 2850);

// Registro en dayLog y Deshacer (Undo)
let mockDayLog = { water: { consumedMl: 0, entries: [] } };
NutriTrackHydration.addWaterEntry(mockDayLog, 250, "Vaso mediano");
assert.strictEqual(mockDayLog.water.consumedMl, 250);
assert.strictEqual(mockDayLog.water.entries.length, 1);

NutriTrackHydration.addWaterEntry(mockDayLog, 500, "Botella");
assert.strictEqual(mockDayLog.water.consumedMl, 750);
assert.strictEqual(mockDayLog.water.entries.length, 2);

// Deshacer el último registro (500 ml)
NutriTrackHydration.undoLastWaterEntry(mockDayLog);
assert.strictEqual(mockDayLog.water.consumedMl, 250);
assert.strictEqual(mockDayLog.water.entries.length, 1);
console.log(`  ✓ Hidratación (Peso x 35 ml + 400 ml/45min ejercicio) y función Undo validadas.`);

// ------------------------------------------------------------------------------
// TEST 6: Mi Refrigerador (Stock Doméstico)
// ------------------------------------------------------------------------------
console.log("\n[TEST 6] Verificando Stock de Refrigerador...");
let stock = [];
stock = NutriTrackRefrigerator.toggleStockItem(stock, "huevo_entero");
stock = NutriTrackRefrigerator.toggleStockItem(stock, "pechuga_de_pollo_a_la_plancha");
assert(NutriTrackRefrigerator.isItemInStock(stock, "huevo_entero"));
assert(NutriTrackRefrigerator.isItemInStock(stock, "pechuga_de_pollo_a_la_plancha"));
assert(!NutriTrackRefrigerator.isItemInStock(stock, "avena_en_hojuelas"));

// Categorización culinaria
assert.strictEqual(NutriTrackRefrigerator.mapToKitchenCategory("Proteínas, Carnes y Mariscos"), "Proteínas");
assert.strictEqual(NutriTrackRefrigerator.mapToKitchenCategory("Verduras y Vegetales"), "Vegetales");
assert.strictEqual(NutriTrackRefrigerator.mapToKitchenCategory("Cereales y Granos"), "Granos y Pastas");

// Toggle para remover
stock = NutriTrackRefrigerator.toggleStockItem(stock, "huevo_entero");
assert(!NutriTrackRefrigerator.isItemInStock(stock, "huevo_entero"));
console.log(`  ✓ Gestión, mapeo categórico y alternancia de inventario de cocina confirmadas.`);

// ------------------------------------------------------------------------------
// TEST 7: Motor Culinario Heurístico y Afinidades
// ------------------------------------------------------------------------------
console.log("\n[TEST 7] Verificando Motor de Recomendación Heurística...");
const userStock = ["huevo_entero", "espinacas_frescas", "aceite_de_oliva"];
const recommendations = NutriTrackRecommender.getRecommendations({
  refrigeratorStock: userStock,
  remainingKcal: 600,
  timePreference: "quick",
  energyLevel: "exhausted",
  allergies: "Ninguna",
  allFoods: DEFAULT_FOODS
});

assert(recommendations.length > 0, "Debe generar recomendaciones");
const topRec = recommendations[0];
assert(topRec.name && topRec.matchScore > 0, "La receta recomendada debe tener nombre y puntaje");
assert(topRec.youtubeUrl.includes("https://www.youtube.com/results?search_query="), "Debe incluir enlace de YouTube");
console.log(`  ✓ Recomendación líder: "${topRec.name}" (Score: ${topRec.matchScore}, Tiempo: ${topRec.timeMin}m)`);
console.log(`  ✓ Enlace YouTube generado: ${topRec.youtubeUrl}`);

console.log("\n================================================================================");
console.log("  TODAS LAS PRUEBAS COMPLETADAS EXITOSAMENTE (100% PASS RATE)");
console.log("================================================================================\n");
