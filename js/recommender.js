/**
 * NutriTrack Editorial — Motor Heurístico de Recomendación Culinaria
 * Cruza insumos en el refrigerador, margen calórico/macronutrientes y check-in contextual
 * (tiempo, energía, metas cognitivas y alergias) para generar platillos de alta cocina.
 */

(function () {
  "use strict";

  // Catálogo curado de preparaciones culinarias editoriales
  const CURATED_RECIPES = [
    {
      id: "rec_sarten_huevo_espinaca",
      name: "Sartén Rápido de Huevo con Espinaca Baby y Aguacate",
      category: "Desayuno / Cena Ligera",
      timeMin: 8,
      complexity: "En 1 solo sartén",
      cognitiveBenefit: "Alto en colina y grasas monoinsaturadas para enfoque cognitivo sostenido sin somnolencia.",
      energyTarget: "exhausted", // ideal para cuando no hay ganas de ensuciar
      timeTarget: "quick",
      ingredients: [
        { foodId: "huevo_de_gallina_entero_revuelto", name: "Huevo revuelto", grams: 100, label: "2 piezas (100g)" },
        { foodId: "espinacas_frescas_baby", name: "Espinaca baby", grams: 50, label: "1 taza colmada (50g)" },
        { foodId: "aguacate_hass_maduro", name: "Aguacate hass", grams: 50, label: "1/3 pieza (50g)" },
        { foodId: "aceite_de_oliva_virgen_extra", name: "Aceite de oliva virgen extra", grams: 7, label: "1/2 cucharada (7g)" }
      ],
      steps: [
        "Calienta el aceite de oliva a fuego medio en un sartén antiadherente.",
        "Agrega las espinacas baby durante 45 segundos hasta que reduzcan de tamaño.",
        "Vierte los huevos batidos con una pizca de sal marina y revuelve suavemente hasta cuajar.",
        "Sirve de inmediato acompañado del aguacate hass en láminas finas."
      ]
    },
    {
      id: "rec_bowl_atun_arroz_cherries",
      name: "Bowl Mediterráneo de Atún, Arroz Basmati y Cherries",
      category: "Almuerzo / Cena",
      timeMin: 10,
      complexity: "Sin estufa (ensamblado directo)",
      cognitiveBenefit: "Proteína pura y carbohidratos complejos de absorción lenta que previenen picos de insulina.",
      energyTarget: "exhausted",
      timeTarget: "quick",
      ingredients: [
        { foodId: "atun_en_lata_en_agua", name: "Atún en lata en agua", grams: 120, label: "1 lata escurrida (120g)" },
        { foodId: "arroz_basmati_aromatico", name: "Arroz basmati cocido", grams: 150, label: "1 taza cocida (150g)" },
        { foodId: "jitomate_cherry_dulce", name: "Jitomate cherry", grams: 80, label: "1 puñado (80g)" },
        { foodId: "aceite_de_oliva_virgen_extra", name: "Aceite de oliva virgen extra", grams: 10, label: "1 cucharadita (10g)" }
      ],
      steps: [
        "Coloca el arroz basmati tibio o a temperatura ambiente como base en un plato hondo.",
        "Desmenuza el atún escurrido sobre el arroz.",
        "Corta los jitomates cherry por la mitad y distribúyelos alrededor.",
        "Rocía el aceite de oliva, añade pimienta negra recién molida y unas gotas de limón."
      ]
    },
    {
      id: "rec_salmon_plancha_esparragos",
      name: "Lomo de Salmón Sellado con Espárragos y Limón",
      category: "Almuerzo / Cena Noble",
      timeMin: 18,
      complexity: "Plancha rápida en 15 min",
      cognitiveBenefit: "Máxima densidad de ácidos grasos Omega-3 (DHA/EPA) para fluidez de membranas neuronales.",
      energyTarget: "normal",
      timeTarget: "medium",
      ingredients: [
        { foodId: "salmon_fresco_a_la_plancha", name: "Salmón fresco", grams: 160, label: "1 filete mediano (160g)" },
        { foodId: "esparragos_verdes_a_la_parrilla", name: "Espárragos verdes", grams: 120, label: "8 piezas (120g)" },
        { foodId: "aceite_de_oliva_virgen_extra", name: "Aceite de oliva virgen extra", grams: 8, label: "1 cucharadita (8g)" }
      ],
      steps: [
        "Sella el salmón con la piel hacia abajo en sartén bien caliente durante 4 minutos.",
        "Añade los espárragos al mismo sartén en los laterales con el aceite de oliva.",
        "Voltea el salmón durante 3 minutos más hasta lograr un punto jugoso.",
        "Termina con sal en escamas y ralladura fresca de limón amarillo."
      ]
    },
    {
      id: "rec_pechuga_arroz_brocoli",
      name: "Pechuga Dorada al Limón con Arroz y Brócoli al Vapor",
      category: "Almuerzo Completo",
      timeMin: 20,
      complexity: "Cocción limpia en 2 tiempos",
      cognitiveBenefit: "Aporte elevado de sulforafano y vitaminas del complejo B para metabolismo mitocondrial.",
      energyTarget: "normal",
      timeTarget: "medium",
      ingredients: [
        { foodId: "pechuga_de_pollo_a_la_plancha", name: "Pechuga de pollo", grams: 160, label: "1 filete grande (160g)" },
        { foodId: "arroz_blanco_cocido", name: "Arroz blanco cocido", grams: 150, label: "1 taza cocida (150g)" },
        { foodId: "brocoli_al_vapor", name: "Brócoli en ramilletes", grams: 120, label: "1 taza al vapor (120g)" },
        { foodId: "aceite_de_oliva_virgen_extra", name: "Aceite de oliva virgen extra", grams: 7, label: "1/2 cucharada (7g)" }
      ],
      steps: [
        "Dora la pechuga en el sartén con un toque de aceite de oliva, ajo picado y jugo de limón.",
        "Cocina el brócoli al vapor durante 4 minutos para mantener su textura crujiente y color verde brillante.",
        "Sirve la pechuga rebanada sobre la cama de arroz blanco con el brócoli al costado."
      ]
    },
    {
      id: "rec_avena_platano_nueces",
      name: "Avena Tibia Espesa con Plátano Maduro, Nueces y Canela",
      category: "Desayuno Cognitivo",
      timeMin: 7,
      complexity: "En 1 sola olla pequeña",
      cognitiveBenefit: "Liberación gradual de glucosa cerebral y magnesio para evitar niebla mental matutina.",
      energyTarget: "exhausted",
      timeTarget: "quick",
      ingredients: [
        { foodId: "avena_en_hojuelas", name: "Avena en hojuelas", grams: 50, label: "1/2 taza colmada (50g)" },
        { foodId: "platano_tabasco_maduro", name: "Plátano maduro", grams: 100, label: "1 pieza chica (100g)" },
        { foodId: "nueces_de_castilla_peladas", name: "Nueces de castilla", grams: 25, label: "5 mitades (25g)" }
      ],
      steps: [
        "Cocina la avena con 200 ml de agua o leche durante 4 minutos a fuego medio revolviendo con cuchara de madera.",
        "Retira del fuego y sirve en tazón de cerámica.",
        "Corona con rodajas finas de plátano, las nueces troceadas con las manos y abundante canela molida."
      ]
    },
    {
      id: "rec_tacos_pollo_pico_gallo",
      name: "Tacos de Pollo Deshebrado en Tortilla de Maíz con Pico de Gallo",
      category: "Almuerzo / Cena Práctica",
      timeMin: 12,
      complexity: "Sartén y ensamble",
      cognitiveBenefit: "Proteína magra combinada con carbohidratos de maíz nixtamalizado y licopeno fresco.",
      energyTarget: "normal",
      timeTarget: "quick",
      ingredients: [
        { foodId: "pechuga_de_pollo_deshebrada", name: "Pechuga de pollo deshebrada", grams: 130, label: "1 taza colmada (130g)" },
        { foodId: "tortilla_de_maiz_blanca", name: "Tortilla de maíz blanca", grams: 60, label: "2 tortillas (60g)" },
        { foodId: "salsa_pico_de_gallo_fresca_con_jitomate_y_cebolla", name: "Pico de gallo fresco", grams: 50, label: "2 cucharadas (50g)" },
        { foodId: "aguacate_hass_maduro", name: "Aguacate hass", grams: 40, label: "1/4 aguacate (40g)" }
      ],
      steps: [
        "Entibia las tortillas de maíz en comal seco hasta que queden flexibles.",
        "Calienta el pollo deshebrado con una cucharada de caldo o agua para mantenerlo jugoso.",
        "Arma los 2 tacos, agrega aguacate en abanico y baña con pico de gallo fresco recién hecho."
      ]
    },
    {
      id: "rec_yogur_griego_fresas_chia",
      name: "Copa de Yogur Griego Natural con Fresas Silvestres y Chía",
      category: "Snack / Colación Rápida",
      timeMin: 3,
      complexity: "Cero cocción (ensamble directo)",
      cognitiveBenefit: "Probióticos para el eje intestino-cerebro, polifenoles antioxidantes y proteína lenta.",
      energyTarget: "exhausted",
      timeTarget: "quick",
      ingredients: [
        { foodId: "yogur_griego_entero_sin_azucar", name: "Yogur griego sin azúcar", grams: 180, label: "1 pote grande (180g)" },
        { foodId: "fresas_frescas_enteras", name: "Fresas frescas", grams: 100, label: "1 taza rebanada (100g)" },
        { foodId: "semillas_de_chia_negra", name: "Semillas de chía", grams: 15, label: "1 cucharada sopera (15g)" }
      ],
      steps: [
        "Vierte el yogur griego frío en una copa o cuenco de cristal.",
        "Corta las fresas en cuartos e intégralas en la superficie.",
        "Espolvorea las semillas de chía negra y deja reposar 2 minutos para que hidraten ligeramente."
      ]
    }
  ];

  /**
   * Calcula los nutrientes totales de una receta cruzando con el catálogo de alimentos
   */
  function enrichRecipeNutrients(recipe, allFoodsMap) {
    let totalCals = 0;
    let totalProt = 0;
    let totalCarbs = 0;
    let totalFats = 0;
    let totalFiber = 0;

    const enrichedIngs = recipe.ingredients.map(ing => {
      const food = allFoodsMap[ing.foodId];
      let cals = 0, p = 0, c = 0, f = 0, fib = 0;
      if (food && food.per100g) {
        const ratio = ing.grams / 100;
        cals = Math.round(food.per100g.calories * ratio);
        p = +(food.per100g.protein * ratio).toFixed(1);
        c = +(food.per100g.carbs * ratio).toFixed(1);
        f = +(food.per100g.fats * ratio).toFixed(1);
        fib = +(food.per100g.fiber * ratio).toFixed(1);
      }
      totalCals += cals;
      totalProt += p;
      totalCarbs += c;
      totalFats += f;
      totalFiber += fib;

      return {
        ...ing,
        nutrients: { calories: cals, protein: p, carbs: c, fats: f, fiber: fib }
      };
    });

    return {
      ...recipe,
      ingredients: enrichedIngs,
      nutrients: {
        calories: totalCals,
        protein: +totalProt.toFixed(1),
        carbs: +totalCarbs.toFixed(1),
        fats: +totalFats.toFixed(1),
        fiber: +totalFiber.toFixed(1)
      },
      youtubeUrl: `https://www.youtube.com/results?search_query=receta+${encodeURIComponent(recipe.name)}`
    };
  }

  /**
   * Motor de Recomendación Heurística
   * @param {Object} options - Parámetros de contexto
   * @returns {Array} Platillos recomendados ordenados por afinidad
   */
  function getRecommendations({
    refrigeratorStock = [],
    remainingKcal = 800,
    timePreference = "any", // "quick", "medium", "slow", "any"
    energyLevel = "any",    // "exhausted", "normal", "energetic", "any"
    allergies = "",
    allFoods = []
  }) {
    const stockSet = new Set(refrigeratorStock);
    const allFoodsMap = {};
    allFoods.forEach(f => { allFoodsMap[f.id] = f; });

    const enrichedList = CURATED_RECIPES.map(r => enrichRecipeNutrients(r, allFoodsMap));

    // Ponderar y ordenar recetas
    const scoredList = enrichedList.map(rec => {
      let score = 50;

      // 1. Coincidencia con ingredientes en refrigerador
      let inStockCount = 0;
      rec.ingredients.forEach(ing => {
        const isPresent = stockSet.has(ing.foodId);
        ing.inStock = isPresent;
        if (isPresent) {
          inStockCount++;
          score += 25; // bono por cada ingrediente disponible
        }
      });
      rec.matchesStockCount = inStockCount;
      rec.stockRatio = rec.ingredients.length > 0 ? (inStockCount / rec.ingredients.length) : 0;

      // 2. Ajuste a calorías restantes
      const diffCals = Math.abs(remainingKcal - rec.nutrients.calories);
      if (rec.nutrients.calories <= remainingKcal) {
        score += 20;
      } else {
        score -= Math.min(30, Math.round(diffCals / 30));
      }

      // 3. Preferencia de tiempo
      if (timePreference === "quick" && rec.timeMin <= 10) score += 30;
      if (timePreference === "medium" && rec.timeMin <= 20) score += 20;

      // 4. Nivel de energía
      if (energyLevel === "exhausted" && rec.energyTarget === "exhausted") score += 35;
      if (energyLevel === "energetic") score += 10;

      // 5. Alergias
      if (allergies && allergies !== "Ninguna") {
        const algLow = allergies.toLowerCase();
        if (algLow.includes("huevo") && rec.name.toLowerCase().includes("huevo")) score -= 100;
        if (algLow.includes("pescado") && (rec.name.toLowerCase().includes("atún") || rec.name.toLowerCase().includes("salmón"))) score -= 100;
        if (algLow.includes("lácteos") && rec.name.toLowerCase().includes("yogur")) score -= 100;
      }

      rec.matchScore = score;
      return rec;
    });

    // Ordenar de mayor a menor afinidad
    scoredList.sort((a, b) => b.matchScore - a.matchScore);
    return scoredList;
  }

  const NutriTrackRecommender = {
    CURATED_RECIPES,
    getRecommendations
  };

  if (typeof window !== "undefined") {
    window.NutriTrackRecommender = NutriTrackRecommender;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = NutriTrackRecommender;
  }
})();
