/**
 * NutriTrack Editorial — Diccionario Maestro de Alimentos (Amrit Palace Edition)
 * Catálogo completo y exhaustivo procesando todos los alimentos del Adjunto 2.
 * Cada alimento incluye valores por 100g y porción realista por defecto.
 */

const MASTER_FOOD_CATALOG = [
  {
    "id": "pechuga_de_pollo_a_la_plancha",
    "name": "Pechuga de pollo a la plancha",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 165,
      "protein": 31.0,
      "carbs": 0.0,
      "fats": 3.6,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 filete mediano (150g)"
  },
  {
    "id": "pechuga_de_pollo_deshebrada",
    "name": "Pechuga de pollo deshebrada",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 160,
      "protein": 30.5,
      "carbs": 0.0,
      "fats": 3.4,
      "fiber": 0.0
    },
    "portionGrams": 100,
    "portionName": "1 taza deshebrada (100g)"
  },
  {
    "id": "muslo_de_pollo_con_piel",
    "name": "Muslo de pollo con piel",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 232,
      "protein": 24.0,
      "carbs": 0.0,
      "fats": 15.0,
      "fiber": 0.0
    },
    "portionGrams": 130,
    "portionName": "1 pieza con piel (130g)"
  },
  {
    "id": "contramuslo_de_pollo_horneado",
    "name": "Contramuslo de pollo horneado",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 210,
      "protein": 25.0,
      "carbs": 0.0,
      "fats": 12.0,
      "fiber": 0.0
    },
    "portionGrams": 140,
    "portionName": "1 contramuslo (140g)"
  },
  {
    "id": "alas_de_pollo_crujientes",
    "name": "Alas de pollo crujientes",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 290,
      "protein": 22.0,
      "carbs": 3.0,
      "fats": 21.0,
      "fiber": 0.0
    },
    "portionGrams": 120,
    "portionName": "3 alitas (120g)"
  },
  {
    "id": "pollo_frito_estilo_sureno",
    "name": "Pollo frito estilo sureño",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 260,
      "protein": 19.0,
      "carbs": 11.0,
      "fats": 16.0,
      "fiber": 0.8
    },
    "portionGrams": 150,
    "portionName": "1 pieza frita (150g)"
  },
  {
    "id": "tiras_de_pollo_empanizadas",
    "name": "Tiras de pollo empanizadas",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 250,
      "protein": 18.0,
      "carbs": 14.0,
      "fats": 14.0,
      "fiber": 1.0
    },
    "portionGrams": 120,
    "portionName": "3 tiras (120g)"
  },
  {
    "id": "milanesa_de_pollo",
    "name": "Milanesa de pollo",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 230,
      "protein": 24.0,
      "carbs": 12.0,
      "fats": 9.5,
      "fiber": 0.7
    },
    "portionGrams": 160,
    "portionName": "1 milanesa (160g)"
  },
  {
    "id": "pavo_molido_magro",
    "name": "Pavo molido magro",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 150,
      "protein": 27.0,
      "carbs": 0.0,
      "fats": 4.5,
      "fiber": 0.0
    },
    "portionGrams": 120,
    "portionName": "1 porción (120g)"
  },
  {
    "id": "pechuga_de_pavo_ahumada",
    "name": "Pechuga de pavo ahumada",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 104,
      "protein": 21.0,
      "carbs": 1.5,
      "fats": 1.5,
      "fiber": 0.0
    },
    "portionGrams": 100,
    "portionName": "4 rebanadas (100g)"
  },
  {
    "id": "jamon_de_pavo",
    "name": "Jamón de pavo",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 95,
      "protein": 17.0,
      "carbs": 2.0,
      "fats": 2.0,
      "fiber": 0.0
    },
    "portionGrams": 80,
    "portionName": "3 rebanadas (80g)"
  },
  {
    "id": "pato_asado",
    "name": "Pato asado",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 337,
      "protein": 19.0,
      "carbs": 0.0,
      "fats": 28.0,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 porción (150g)"
  },
  {
    "id": "magret_de_pato",
    "name": "Magret de pato",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 240,
      "protein": 26.0,
      "carbs": 0.0,
      "fats": 15.0,
      "fiber": 0.0
    },
    "portionGrams": 180,
    "portionName": "1/2 magret (180g)"
  },
  {
    "id": "lomo_de_res_a_la_parrilla",
    "name": "Lomo de res a la parrilla",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 190,
      "protein": 28.0,
      "carbs": 0.0,
      "fats": 8.5,
      "fiber": 0.0
    },
    "portionGrams": 180,
    "portionName": "1 corte mediano (180g)"
  },
  {
    "id": "bife_de_chorizo",
    "name": "Bife de chorizo",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 250,
      "protein": 25.0,
      "carbs": 0.0,
      "fats": 17.0,
      "fiber": 0.0
    },
    "portionGrams": 220,
    "portionName": "1 bife (220g)"
  },
  {
    "id": "filete_mignon",
    "name": "Filete mignon",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 215,
      "protein": 28.0,
      "carbs": 0.0,
      "fats": 11.5,
      "fiber": 0.0
    },
    "portionGrams": 180,
    "portionName": "1 medallón (180g)"
  },
  {
    "id": "entrana",
    "name": "Entraña",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 240,
      "protein": 24.0,
      "carbs": 0.0,
      "fats": 16.0,
      "fiber": 0.0
    },
    "portionGrams": 200,
    "portionName": "1 corte (200g)"
  },
  {
    "id": "ribeye_asado",
    "name": "Ribeye asado",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 290,
      "protein": 24.0,
      "carbs": 0.0,
      "fats": 22.0,
      "fiber": 0.0
    },
    "portionGrams": 250,
    "portionName": "1 corte (250g)"
  },
  {
    "id": "vacio_de_res",
    "name": "Vacío de res",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 235,
      "protein": 26.0,
      "carbs": 0.0,
      "fats": 14.5,
      "fiber": 0.0
    },
    "portionGrams": 200,
    "portionName": "1 corte (200g)"
  },
  {
    "id": "carne_molida_de_res_8020",
    "name": "Carne molida de res 80/20",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 254,
      "protein": 20.0,
      "carbs": 0.0,
      "fats": 19.0,
      "fiber": 0.0
    },
    "portionGrams": 120,
    "portionName": "1 hamburguesa (120g)"
  },
  {
    "id": "carne_molida_de_res_955",
    "name": "Carne molida de res 95/5",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 137,
      "protein": 24.0,
      "carbs": 0.0,
      "fats": 4.5,
      "fiber": 0.0
    },
    "portionGrams": 120,
    "portionName": "1 porción (120g)"
  },
  {
    "id": "falda_de_res_para_deshebrar",
    "name": "Falda de res para deshebrar",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 210,
      "protein": 27.0,
      "carbs": 0.0,
      "fats": 11.0,
      "fiber": 0.0
    },
    "portionGrams": 140,
    "portionName": "1 porción (140g)"
  },
  {
    "id": "costillas_de_res_braseadas",
    "name": "Costillas de res braseadas",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 320,
      "protein": 21.0,
      "carbs": 0.0,
      "fats": 26.0,
      "fiber": 0.0
    },
    "portionGrams": 200,
    "portionName": "2 costillas (200g)"
  },
  {
    "id": "lengua_de_res_en_salsa",
    "name": "Lengua de res en salsa",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 224,
      "protein": 16.0,
      "carbs": 2.5,
      "fats": 17.0,
      "fiber": 0.2
    },
    "portionGrams": 150,
    "portionName": "1 porción (150g)"
  },
  {
    "id": "rabo_de_toro_estofado",
    "name": "Rabo de toro estofado",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 230,
      "protein": 22.0,
      "carbs": 1.0,
      "fats": 15.5,
      "fiber": 0.0
    },
    "portionGrams": 220,
    "portionName": "1 porción (220g)"
  },
  {
    "id": "carpaccio_de_res",
    "name": "Carpaccio de res",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 130,
      "protein": 22.0,
      "carbs": 0.5,
      "fats": 4.5,
      "fiber": 0.0
    },
    "portionGrams": 90,
    "portionName": "1 plato (90g)"
  },
  {
    "id": "carne_tartara",
    "name": "Carne tártara",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 170,
      "protein": 21.0,
      "carbs": 1.5,
      "fats": 9.0,
      "fiber": 0.2
    },
    "portionGrams": 120,
    "portionName": "1 plato (120g)"
  },
  {
    "id": "cecina_curada",
    "name": "Cecina curada",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 250,
      "protein": 38.0,
      "carbs": 1.0,
      "fats": 10.5,
      "fiber": 0.0
    },
    "portionGrams": 80,
    "portionName": "2 láminas (80g)"
  },
  {
    "id": "tasajo",
    "name": "Tasajo",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 230,
      "protein": 35.0,
      "carbs": 1.0,
      "fats": 9.5,
      "fiber": 0.0
    },
    "portionGrams": 100,
    "portionName": "1 pieza (100g)"
  },
  {
    "id": "lomo_de_cerdo_al_horno",
    "name": "Lomo de cerdo al horno",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 165,
      "protein": 27.0,
      "carbs": 0.0,
      "fats": 6.0,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 filete (150g)"
  },
  {
    "id": "chuleta_de_cerdo_ahumada",
    "name": "Chuleta de cerdo ahumada",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 215,
      "protein": 24.0,
      "carbs": 1.0,
      "fats": 13.0,
      "fiber": 0.0
    },
    "portionGrams": 160,
    "portionName": "1 chuleta (160g)"
  },
  {
    "id": "costillas_de_cerdo_bbq",
    "name": "Costillas de cerdo BBQ",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 295,
      "protein": 18.0,
      "carbs": 9.0,
      "fats": 21.0,
      "fiber": 0.3
    },
    "portionGrams": 220,
    "portionName": "3 costillas (220g)"
  },
  {
    "id": "panceta_de_cerdo_crocante",
    "name": "Panceta de cerdo crocante",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 518,
      "protein": 14.0,
      "carbs": 0.0,
      "fats": 52.0,
      "fiber": 0.0
    },
    "portionGrams": 70,
    "portionName": "3 tiras (70g)"
  },
  {
    "id": "chicharron_de_cerdo",
    "name": "Chicharrón de cerdo",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 544,
      "protein": 61.0,
      "carbs": 0.0,
      "fats": 33.0,
      "fiber": 0.0
    },
    "portionGrams": 40,
    "portionName": "1 bolsa pequeña (40g)"
  },
  {
    "id": "carnitas_de_cerdo",
    "name": "Carnitas de cerdo",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 280,
      "protein": 23.0,
      "carbs": 0.5,
      "fats": 21.0,
      "fiber": 0.0
    },
    "portionGrams": 120,
    "portionName": "2 tacos (120g)"
  },
  {
    "id": "lechon_asado",
    "name": "Lechón asado",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 260,
      "protein": 25.0,
      "carbs": 0.0,
      "fats": 17.5,
      "fiber": 0.0
    },
    "portionGrams": 180,
    "portionName": "1 porción (180g)"
  },
  {
    "id": "pulled_pork",
    "name": "Pulled pork",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 220,
      "protein": 22.0,
      "carbs": 6.0,
      "fats": 12.0,
      "fiber": 0.4
    },
    "portionGrams": 150,
    "portionName": "1 sándwich (150g)"
  },
  {
    "id": "jamon_serrano",
    "name": "Jamón serrano",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 240,
      "protein": 31.0,
      "carbs": 0.5,
      "fats": 13.0,
      "fiber": 0.0
    },
    "portionGrams": 50,
    "portionName": "3 lonchas (50g)"
  },
  {
    "id": "jamon_iberico_de_bellota",
    "name": "Jamón ibérico de bellota",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 320,
      "protein": 33.0,
      "carbs": 0.5,
      "fats": 21.0,
      "fiber": 0.0
    },
    "portionGrams": 40,
    "portionName": "1 ración (40g)"
  },
  {
    "id": "jamon_york",
    "name": "Jamón york",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 105,
      "protein": 18.0,
      "carbs": 1.5,
      "fats": 3.0,
      "fiber": 0.0
    },
    "portionGrams": 60,
    "portionName": "2 lonchas (60g)"
  },
  {
    "id": "prosciutto_di_parma",
    "name": "Prosciutto di Parma",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 235,
      "protein": 28.0,
      "carbs": 0.5,
      "fats": 14.0,
      "fiber": 0.0
    },
    "portionGrams": 40,
    "portionName": "3 rebanadas (40g)"
  },
  {
    "id": "mortadela_con_pistachos",
    "name": "Mortadela con pistachos",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 290,
      "protein": 13.0,
      "carbs": 2.0,
      "fats": 26.0,
      "fiber": 0.5
    },
    "portionGrams": 60,
    "portionName": "3 rebanadas (60g)"
  },
  {
    "id": "salchicha_alemana_bratwurst",
    "name": "Salchicha alemana bratwurst",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 297,
      "protein": 14.0,
      "carbs": 2.0,
      "fats": 26.0,
      "fiber": 0.0
    },
    "portionGrams": 100,
    "portionName": "1 salchicha (100g)"
  },
  {
    "id": "salchicha_viena",
    "name": "Salchicha viena",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 270,
      "protein": 11.0,
      "carbs": 3.5,
      "fats": 24.0,
      "fiber": 0.0
    },
    "portionGrams": 60,
    "portionName": "1 salchicha (60g)"
  },
  {
    "id": "salchicha_italiana_picante",
    "name": "Salchicha italiana picante",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 310,
      "protein": 16.0,
      "carbs": 2.0,
      "fats": 27.0,
      "fiber": 0.0
    },
    "portionGrams": 100,
    "portionName": "1 pieza (100g)"
  },
  {
    "id": "chorizo_espanol_curado",
    "name": "Chorizo español curado",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 455,
      "protein": 24.0,
      "carbs": 2.0,
      "fats": 39.0,
      "fiber": 0.0
    },
    "portionGrams": 50,
    "portionName": "5 rodajas (50g)"
  },
  {
    "id": "chorizo_criollo_fresco",
    "name": "Chorizo criollo fresco",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 340,
      "protein": 16.0,
      "carbs": 1.5,
      "fats": 30.5,
      "fiber": 0.0
    },
    "portionGrams": 80,
    "portionName": "1 pieza (80g)"
  },
  {
    "id": "morcilla_de_arroz",
    "name": "Morcilla de arroz",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 280,
      "protein": 9.0,
      "carbs": 22.0,
      "fats": 17.5,
      "fiber": 1.5
    },
    "portionGrams": 80,
    "portionName": "2 rodajas (80g)"
  },
  {
    "id": "morcilla_de_cebolla",
    "name": "Morcilla de cebolla",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 295,
      "protein": 11.0,
      "carbs": 8.0,
      "fats": 25.0,
      "fiber": 1.2
    },
    "portionGrams": 80,
    "portionName": "2 rodajas (80g)"
  },
  {
    "id": "longaniza",
    "name": "Longaniza",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 360,
      "protein": 15.0,
      "carbs": 2.0,
      "fats": 33.0,
      "fiber": 0.0
    },
    "portionGrams": 80,
    "portionName": "1 porción (80g)"
  },
  {
    "id": "pepperoni",
    "name": "Pepperoni",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 494,
      "protein": 20.0,
      "carbs": 2.5,
      "fats": 45.0,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "8 rebanadas (30g)"
  },
  {
    "id": "salami_genoves",
    "name": "Salami genovés",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 425,
      "protein": 22.0,
      "carbs": 1.5,
      "fats": 37.0,
      "fiber": 0.0
    },
    "portionGrams": 40,
    "portionName": "4 rebanadas (40g)"
  },
  {
    "id": "pastrami",
    "name": "Pastrami",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 147,
      "protein": 22.0,
      "carbs": 1.0,
      "fats": 6.0,
      "fiber": 0.0
    },
    "portionGrams": 80,
    "portionName": "3 rebanadas (80g)"
  },
  {
    "id": "roast_beef_en_rebanadas",
    "name": "Roast beef en rebanadas",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 135,
      "protein": 26.0,
      "carbs": 0.5,
      "fats": 3.0,
      "fiber": 0.0
    },
    "portionGrams": 90,
    "portionName": "3 rebanadas (90g)"
  },
  {
    "id": "bacon_ahumado",
    "name": "Bacon ahumado",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 417,
      "protein": 37.0,
      "carbs": 1.4,
      "fats": 40.0,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "2 tiras (30g)"
  },
  {
    "id": "tocino_crocante",
    "name": "Tocino crocante",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 540,
      "protein": 34.0,
      "carbs": 1.0,
      "fats": 45.0,
      "fiber": 0.0
    },
    "portionGrams": 25,
    "portionName": "2 tiras (25g)"
  },
  {
    "id": "salmon_fresco_a_la_plancha",
    "name": "Salmón fresco a la plancha",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 208,
      "protein": 22.0,
      "carbs": 0.0,
      "fats": 13.0,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 filete mediano (150g)"
  },
  {
    "id": "salmon_ahumado",
    "name": "Salmón ahumado",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 117,
      "protein": 18.0,
      "carbs": 0.0,
      "fats": 4.5,
      "fiber": 0.0
    },
    "portionGrams": 60,
    "portionName": "3 láminas (60g)"
  },
  {
    "id": "filete_de_atun_fresco",
    "name": "Filete de atún fresco",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 132,
      "protein": 28.0,
      "carbs": 0.0,
      "fats": 1.5,
      "fiber": 0.0
    },
    "portionGrams": 160,
    "portionName": "1 filete (160g)"
  },
  {
    "id": "atun_en_lata_en_agua",
    "name": "Atún en lata en agua",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 116,
      "protein": 26.0,
      "carbs": 0.0,
      "fats": 1.0,
      "fiber": 0.0
    },
    "portionGrams": 120,
    "portionName": "1 lata escurrida (120g)"
  },
  {
    "id": "atun_en_lata_en_aceite_de_oliva",
    "name": "Atún en lata en aceite de oliva",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 198,
      "protein": 24.0,
      "carbs": 0.0,
      "fats": 11.5,
      "fiber": 0.0
    },
    "portionGrams": 120,
    "portionName": "1 lata escurrida (120g)"
  },
  {
    "id": "trucha_arcoiris_al_horno",
    "name": "Trucha arcoíris al horno",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 148,
      "protein": 21.0,
      "carbs": 0.0,
      "fats": 6.5,
      "fiber": 0.0
    },
    "portionGrams": 160,
    "portionName": "1 trucha (160g)"
  },
  {
    "id": "tilapia_a_la_plancha",
    "name": "Tilapia a la plancha",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 128,
      "protein": 26.0,
      "carbs": 0.0,
      "fats": 2.5,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 filete (150g)"
  },
  {
    "id": "merluza_al_vapor",
    "name": "Merluza al vapor",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 82,
      "protein": 18.0,
      "carbs": 0.0,
      "fats": 1.0,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 filete (150g)"
  },
  {
    "id": "bacalao_desalado",
    "name": "Bacalao desalado",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 105,
      "protein": 23.0,
      "carbs": 0.0,
      "fats": 1.2,
      "fiber": 0.0
    },
    "portionGrams": 160,
    "portionName": "1 lomo (160g)"
  },
  {
    "id": "dorada_a_la_sal",
    "name": "Dorada a la sal",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 110,
      "protein": 20.0,
      "carbs": 0.0,
      "fats": 3.2,
      "fiber": 0.0
    },
    "portionGrams": 180,
    "portionName": "1 pieza (180g)"
  },
  {
    "id": "lubina_al_horno",
    "name": "Lubina al horno",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 97,
      "protein": 18.5,
      "carbs": 0.0,
      "fats": 2.5,
      "fiber": 0.0
    },
    "portionGrams": 180,
    "portionName": "1 filete (180g)"
  },
  {
    "id": "pez_espada_a_la_plancha",
    "name": "Pez espada a la plancha",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 144,
      "protein": 20.0,
      "carbs": 0.0,
      "fats": 6.5,
      "fiber": 0.0
    },
    "portionGrams": 170,
    "portionName": "1 filete (170g)"
  },
  {
    "id": "sardinas_enlatadas_en_tomate",
    "name": "Sardinas enlatadas en tomate",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 185,
      "protein": 19.0,
      "carbs": 2.5,
      "fats": 11.0,
      "fiber": 0.5
    },
    "portionGrams": 120,
    "portionName": "1 lata (120g)"
  },
  {
    "id": "sardinas_frescas_asadas",
    "name": "Sardinas frescas asadas",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 160,
      "protein": 21.0,
      "carbs": 0.0,
      "fats": 8.5,
      "fiber": 0.0
    },
    "portionGrams": 120,
    "portionName": "3 sardinas (120g)"
  },
  {
    "id": "boquerones_en_vinagre",
    "name": "Boquerones en vinagre",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 140,
      "protein": 17.5,
      "carbs": 1.0,
      "fats": 7.5,
      "fiber": 0.0
    },
    "portionGrams": 80,
    "portionName": "1 tapa (80g)"
  },
  {
    "id": "anchoas_en_aceite",
    "name": "Anchoas en aceite",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 210,
      "protein": 29.0,
      "carbs": 0.0,
      "fats": 10.0,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "6 filetes (30g)"
  },
  {
    "id": "pulpo_a_la_gallega",
    "name": "Pulpo a la gallega",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 135,
      "protein": 18.0,
      "carbs": 3.5,
      "fats": 5.5,
      "fiber": 0.4
    },
    "portionGrams": 150,
    "portionName": "1 ración (150g)"
  },
  {
    "id": "calamares_a_la_romana",
    "name": "Calamares a la romana",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 220,
      "protein": 14.0,
      "carbs": 15.0,
      "fats": 12.0,
      "fiber": 0.8
    },
    "portionGrams": 120,
    "portionName": "1 ración (120g)"
  },
  {
    "id": "calamares_a_la_plancha",
    "name": "Calamares a la plancha",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 110,
      "protein": 18.0,
      "carbs": 2.5,
      "fats": 3.0,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 ración (150g)"
  },
  {
    "id": "chipirones_en_su_tinta",
    "name": "Chipirones en su tinta",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 140,
      "protein": 16.0,
      "carbs": 4.5,
      "fats": 6.5,
      "fiber": 0.5
    },
    "portionGrams": 160,
    "portionName": "1 ración (160g)"
  },
  {
    "id": "sepia_encebollada",
    "name": "Sepia encebollada",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 115,
      "protein": 17.0,
      "carbs": 4.0,
      "fats": 3.5,
      "fiber": 0.6
    },
    "portionGrams": 160,
    "portionName": "1 ración (160g)"
  },
  {
    "id": "camarones_jumbo_al_ajillo",
    "name": "Camarones jumbo al ajillo",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 125,
      "protein": 22.0,
      "carbs": 1.5,
      "fats": 3.5,
      "fiber": 0.0
    },
    "portionGrams": 140,
    "portionName": "6 camarones (140g)"
  },
  {
    "id": "langostinos_cocidos",
    "name": "Langostinos cocidos",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 98,
      "protein": 21.0,
      "carbs": 0.5,
      "fats": 1.2,
      "fiber": 0.0
    },
    "portionGrams": 100,
    "portionName": "4 langostinos (100g)"
  },
  {
    "id": "gambas_tempura",
    "name": "Gambas tempura",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 240,
      "protein": 13.0,
      "carbs": 22.0,
      "fats": 11.0,
      "fiber": 0.6
    },
    "portionGrams": 120,
    "portionName": "3 piezas (120g)"
  },
  {
    "id": "langosta_a_la_mantequilla",
    "name": "Langosta a la mantequilla",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 165,
      "protein": 20.0,
      "carbs": 0.5,
      "fats": 9.5,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 cola (150g)"
  },
  {
    "id": "cangrejo_real",
    "name": "Cangrejo real",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 97,
      "protein": 19.5,
      "carbs": 0.0,
      "fats": 1.5,
      "fiber": 0.0
    },
    "portionGrams": 130,
    "portionName": "2 patas (130g)"
  },
  {
    "id": "carne_de_jaiba_desmenuzada",
    "name": "Carne de jaiba desmenuzada",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 90,
      "protein": 18.0,
      "carbs": 0.0,
      "fats": 1.2,
      "fiber": 0.0
    },
    "portionGrams": 100,
    "portionName": "1 taza (100g)"
  },
  {
    "id": "mejillones_al_vapor",
    "name": "Mejillones al vapor",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 86,
      "protein": 12.0,
      "carbs": 3.5,
      "fats": 2.2,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 docena (150g)"
  },
  {
    "id": "ostras_frescas",
    "name": "Ostras frescas",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 68,
      "protein": 7.0,
      "carbs": 4.0,
      "fats": 2.5,
      "fiber": 0.0
    },
    "portionGrams": 100,
    "portionName": "6 ostras (100g)"
  },
  {
    "id": "vieiras_selladas",
    "name": "Vieiras selladas",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 110,
      "protein": 20.5,
      "carbs": 3.0,
      "fats": 1.5,
      "fiber": 0.0
    },
    "portionGrams": 120,
    "portionName": "4 vieiras (120g)"
  },
  {
    "id": "almejas_a_la_marinera",
    "name": "Almejas a la marinera",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 85,
      "protein": 13.0,
      "carbs": 4.0,
      "fats": 1.8,
      "fiber": 0.2
    },
    "portionGrams": 140,
    "portionName": "1 ración (140g)"
  },
  {
    "id": "tofu_firme",
    "name": "Tofu firme",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 83,
      "protein": 10.0,
      "carbs": 2.0,
      "fats": 5.3,
      "fiber": 1.0
    },
    "portionGrams": 120,
    "portionName": "1/2 bloque (120g)"
  },
  {
    "id": "tofu_sedoso",
    "name": "Tofu sedoso",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 55,
      "protein": 5.8,
      "carbs": 2.2,
      "fats": 2.8,
      "fiber": 0.5
    },
    "portionGrams": 150,
    "portionName": "1/2 bloque (150g)"
  },
  {
    "id": "tempeh_marinado",
    "name": "Tempeh marinado",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 195,
      "protein": 19.0,
      "carbs": 9.0,
      "fats": 11.0,
      "fiber": 4.5
    },
    "portionGrams": 100,
    "portionName": "1 porción (100g)"
  },
  {
    "id": "seitan_a_la_plancha",
    "name": "Seitán a la plancha",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 140,
      "protein": 25.0,
      "carbs": 4.0,
      "fats": 2.0,
      "fiber": 0.5
    },
    "portionGrams": 120,
    "portionName": "1 filete (120g)"
  },
  {
    "id": "proteina_de_soya_texturizada",
    "name": "Proteína de soya texturizada",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 330,
      "protein": 50.0,
      "carbs": 30.0,
      "fats": 1.5,
      "fiber": 16.0
    },
    "portionGrams": 40,
    "portionName": "1 taza seca (40g)"
  },
  {
    "id": "hamburguesa_de_frijol_negro_vegetal",
    "name": "Hamburguesa de frijol negro vegetal",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 180,
      "protein": 11.0,
      "carbs": 24.0,
      "fats": 4.5,
      "fiber": 6.0
    },
    "portionGrams": 110,
    "portionName": "1 pieza (110g)"
  },
  {
    "id": "chorizo_de_soya_vegetal",
    "name": "Chorizo de soya vegetal",
    "category": "Proteínas, Carnes y Mariscos",
    "per100g": {
      "calories": 190,
      "protein": 16.0,
      "carbs": 8.0,
      "fats": 10.5,
      "fiber": 4.0
    },
    "portionGrams": 70,
    "portionName": "1 pieza (70g)"
  },
  {
    "id": "arroz_blanco_cocido",
    "name": "Arroz blanco cocido",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 130,
      "protein": 2.7,
      "carbs": 28.2,
      "fats": 0.3,
      "fiber": 0.4
    },
    "portionGrams": 150,
    "portionName": "1 taza cocida (150g)"
  },
  {
    "id": "arroz_jazmin_al_vapor",
    "name": "Arroz jazmín al vapor",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 132,
      "protein": 2.5,
      "carbs": 29.0,
      "fats": 0.3,
      "fiber": 0.4
    },
    "portionGrams": 150,
    "portionName": "1 taza cocida (150g)"
  },
  {
    "id": "arroz_basmati_aromatico",
    "name": "Arroz basmati aromático",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 125,
      "protein": 3.0,
      "carbs": 26.5,
      "fats": 0.4,
      "fiber": 0.7
    },
    "portionGrams": 150,
    "portionName": "1 taza cocida (150g)"
  },
  {
    "id": "arroz_integral_cocido",
    "name": "Arroz integral cocido",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 123,
      "protein": 2.7,
      "carbs": 25.6,
      "fats": 1.0,
      "fiber": 1.8
    },
    "portionGrams": 150,
    "portionName": "1 taza cocida (150g)"
  },
  {
    "id": "arroz_sushi_avinagrado",
    "name": "Arroz sushi avinagrado",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 145,
      "protein": 2.8,
      "carbs": 32.0,
      "fats": 0.3,
      "fiber": 0.4
    },
    "portionGrams": 150,
    "portionName": "1 taza preparada (150g)"
  },
  {
    "id": "arroz_salvaje",
    "name": "Arroz salvaje",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 101,
      "protein": 4.0,
      "carbs": 21.0,
      "fats": 0.3,
      "fiber": 1.8
    },
    "portionGrams": 150,
    "portionName": "1 taza cocida (150g)"
  },
  {
    "id": "arroz_arborio_para_risotto",
    "name": "Arroz arborio para risotto",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 140,
      "protein": 3.0,
      "carbs": 30.0,
      "fats": 0.5,
      "fiber": 0.5
    },
    "portionGrams": 160,
    "portionName": "1 plato de risotto (160g)"
  },
  {
    "id": "arroz_con_elote_y_mantequilla",
    "name": "Arroz con elote y mantequilla",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 165,
      "protein": 3.2,
      "carbs": 29.0,
      "fats": 4.5,
      "fiber": 1.2
    },
    "portionGrams": 150,
    "portionName": "1 taza guisada (150g)"
  },
  {
    "id": "arroz_rojo_tradicional",
    "name": "Arroz rojo tradicional",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 140,
      "protein": 2.8,
      "carbs": 27.5,
      "fats": 2.5,
      "fiber": 1.0
    },
    "portionGrams": 150,
    "portionName": "1 taza mexicana (150g)"
  },
  {
    "id": "arroz_negro_con_tinta_de_calamar",
    "name": "Arroz negro con tinta de calamar",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 155,
      "protein": 4.5,
      "carbs": 26.0,
      "fats": 3.8,
      "fiber": 0.8
    },
    "portionGrams": 160,
    "portionName": "1 porción (160g)"
  },
  {
    "id": "arroz_frito_estilo_yakimeshi",
    "name": "Arroz frito estilo yakimeshi",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 185,
      "protein": 5.0,
      "carbs": 27.0,
      "fats": 6.5,
      "fiber": 1.2
    },
    "portionGrams": 180,
    "portionName": "1 plato hondo (180g)"
  },
  {
    "id": "quinoa_cocida",
    "name": "Quinoa cocida",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 120,
      "protein": 4.4,
      "carbs": 21.3,
      "fats": 1.9,
      "fiber": 2.8
    },
    "portionGrams": 150,
    "portionName": "1 taza cocida (150g)"
  },
  {
    "id": "cuscus_al_vapor",
    "name": "Cuscús al vapor",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 112,
      "protein": 3.8,
      "carbs": 23.2,
      "fats": 0.2,
      "fiber": 1.4
    },
    "portionGrams": 140,
    "portionName": "1 taza cocida (140g)"
  },
  {
    "id": "bulgur",
    "name": "Bulgur",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 83,
      "protein": 3.1,
      "carbs": 18.6,
      "fats": 0.2,
      "fiber": 4.5
    },
    "portionGrams": 140,
    "portionName": "1 taza cocida (140g)"
  },
  {
    "id": "mijo_cocido",
    "name": "Mijo cocido",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 119,
      "protein": 3.5,
      "carbs": 23.7,
      "fats": 1.0,
      "fiber": 1.3
    },
    "portionGrams": 140,
    "portionName": "1 taza cocida (140g)"
  },
  {
    "id": "trigo_sarraceno",
    "name": "Trigo sarraceno",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 92,
      "protein": 3.4,
      "carbs": 19.9,
      "fats": 0.6,
      "fiber": 2.7
    },
    "portionGrams": 140,
    "portionName": "1 taza cocida (140g)"
  },
  {
    "id": "avena_en_hojuelas",
    "name": "Avena en hojuelas",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 389,
      "protein": 16.9,
      "carbs": 66.3,
      "fats": 6.9,
      "fiber": 10.6
    },
    "portionGrams": 45,
    "portionName": "1/2 taza cruda (45g)"
  },
  {
    "id": "avena_cortada_en_acero_steel_cut",
    "name": "Avena cortada en acero (steel cut)",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 375,
      "protein": 13.5,
      "carbs": 68.0,
      "fats": 6.5,
      "fiber": 10.0
    },
    "portionGrams": 45,
    "portionName": "1/2 taza cruda (45g)"
  },
  {
    "id": "harina_de_avena",
    "name": "Harina de avena",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 390,
      "protein": 14.0,
      "carbs": 68.0,
      "fats": 7.0,
      "fiber": 9.0
    },
    "portionGrams": 50,
    "portionName": "1/2 taza (50g)"
  },
  {
    "id": "salvado_de_trigo",
    "name": "Salvado de trigo",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 216,
      "protein": 15.5,
      "carbs": 64.5,
      "fats": 4.3,
      "fiber": 42.8
    },
    "portionGrams": 30,
    "portionName": "3 cucharadas (30g)"
  },
  {
    "id": "germen_de_trigo",
    "name": "Germen de trigo",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 360,
      "protein": 23.0,
      "carbs": 52.0,
      "fats": 9.7,
      "fiber": 13.2
    },
    "portionGrams": 25,
    "portionName": "2 cucharadas (25g)"
  },
  {
    "id": "harina_de_maiz_nixtamalizado",
    "name": "Harina de maíz nixtamalizado",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 365,
      "protein": 9.0,
      "carbs": 74.0,
      "fats": 3.8,
      "fiber": 7.5
    },
    "portionGrams": 50,
    "portionName": "1/2 taza (50g)"
  },
  {
    "id": "polenta_cremosa",
    "name": "Polenta cremosa",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 85,
      "protein": 2.0,
      "carbs": 18.0,
      "fats": 0.5,
      "fiber": 1.2
    },
    "portionGrams": 160,
    "portionName": "1 porción cremosa (160g)"
  },
  {
    "id": "semola_de_trigo_cocida",
    "name": "Sémola de trigo cocida",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 95,
      "protein": 3.0,
      "carbs": 20.0,
      "fats": 0.3,
      "fiber": 0.8
    },
    "portionGrams": 150,
    "portionName": "1 taza (150g)"
  },
  {
    "id": "espagueti_al_huevo",
    "name": "Espagueti al huevo",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 160,
      "protein": 6.0,
      "carbs": 31.0,
      "fats": 1.2,
      "fiber": 1.8
    },
    "portionGrams": 140,
    "portionName": "1 plato cocido (140g)"
  },
  {
    "id": "fetuccine_al_dente",
    "name": "Fetuccine al dente",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 158,
      "protein": 5.8,
      "carbs": 30.5,
      "fats": 1.1,
      "fiber": 1.8
    },
    "portionGrams": 140,
    "portionName": "1 plato cocido (140g)"
  },
  {
    "id": "penne_rigate",
    "name": "Penne rigate",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 157,
      "protein": 5.8,
      "carbs": 30.8,
      "fats": 0.9,
      "fiber": 1.8
    },
    "portionGrams": 140,
    "portionName": "1 plato cocido (140g)"
  },
  {
    "id": "fusilli_tricolor",
    "name": "Fusilli tricolor",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 155,
      "protein": 5.5,
      "carbs": 31.0,
      "fats": 0.8,
      "fiber": 2.0
    },
    "portionGrams": 140,
    "portionName": "1 plato cocido (140g)"
  },
  {
    "id": "rigatoni",
    "name": "Rigatoni",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 158,
      "protein": 5.8,
      "carbs": 30.9,
      "fats": 0.9,
      "fiber": 1.8
    },
    "portionGrams": 140,
    "portionName": "1 plato cocido (140g)"
  },
  {
    "id": "lasana_en_laminas",
    "name": "Lasaña en láminas",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 162,
      "protein": 6.2,
      "carbs": 31.5,
      "fats": 1.0,
      "fiber": 1.6
    },
    "portionGrams": 120,
    "portionName": "3 láminas cocidas (120g)"
  },
  {
    "id": "noquis_de_papa",
    "name": "Ñoquis de papa",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 145,
      "protein": 3.5,
      "carbs": 31.0,
      "fats": 0.6,
      "fiber": 1.5
    },
    "portionGrams": 160,
    "portionName": "1 plato (160g)"
  },
  {
    "id": "noquis_de_camote",
    "name": "Ñoquis de camote",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 140,
      "protein": 3.0,
      "carbs": 30.0,
      "fats": 0.8,
      "fiber": 2.2
    },
    "portionGrams": 160,
    "portionName": "1 plato (160g)"
  },
  {
    "id": "ravioles_de_ricotta_y_espinaca",
    "name": "Ravioles de ricotta y espinaca",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 185,
      "protein": 7.5,
      "carbs": 28.0,
      "fats": 4.8,
      "fiber": 2.0
    },
    "portionGrams": 160,
    "portionName": "6 ravioles (160g)"
  },
  {
    "id": "tortellini_de_carne",
    "name": "Tortellini de carne",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 210,
      "protein": 9.5,
      "carbs": 30.0,
      "fats": 5.8,
      "fiber": 1.8
    },
    "portionGrams": 150,
    "portionName": "1 taza cocida (150g)"
  },
  {
    "id": "fideos_udon_japoneses",
    "name": "Fideos udon japoneses",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 130,
      "protein": 3.5,
      "carbs": 27.5,
      "fats": 0.5,
      "fiber": 1.0
    },
    "portionGrams": 180,
    "portionName": "1 plato hondo (180g)"
  },
  {
    "id": "fideos_soba_de_trigo_sarraceno",
    "name": "Fideos soba de trigo sarraceno",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 115,
      "protein": 5.1,
      "carbs": 24.0,
      "fats": 0.2,
      "fiber": 1.5
    },
    "portionGrams": 160,
    "portionName": "1 plato (160g)"
  },
  {
    "id": "fideos_ramen_alcalinos",
    "name": "Fideos ramen alcalinos",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 155,
      "protein": 5.0,
      "carbs": 30.0,
      "fats": 1.5,
      "fiber": 1.2
    },
    "portionGrams": 160,
    "portionName": "1 porción cocida (160g)"
  },
  {
    "id": "fideos_de_arroz_vermicelli",
    "name": "Fideos de arroz vermicelli",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 109,
      "protein": 0.9,
      "carbs": 25.0,
      "fats": 0.2,
      "fiber": 0.8
    },
    "portionGrams": 140,
    "portionName": "1 taza cocida (140g)"
  },
  {
    "id": "fideos_de_cristal_de_frijol_mungo",
    "name": "Fideos de cristal de frijol mungo",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 105,
      "protein": 0.2,
      "carbs": 26.0,
      "fats": 0.1,
      "fiber": 0.5
    },
    "portionGrams": 140,
    "portionName": "1 taza cocida (140g)"
  },
  {
    "id": "fideos_chow_mein",
    "name": "Fideos chow mein",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 170,
      "protein": 4.5,
      "carbs": 28.0,
      "fats": 4.8,
      "fiber": 1.4
    },
    "portionGrams": 160,
    "portionName": "1 porción salteada (160g)"
  },
  {
    "id": "papa_blanca_cocida",
    "name": "Papa blanca cocida",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 87,
      "protein": 1.9,
      "carbs": 20.1,
      "fats": 0.1,
      "fiber": 1.8
    },
    "portionGrams": 150,
    "portionName": "1 papa mediana (150g)"
  },
  {
    "id": "papa_rustica_al_horno_con_piel",
    "name": "Papa rústica al horno con piel",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 95,
      "protein": 2.3,
      "carbs": 21.5,
      "fats": 0.2,
      "fiber": 2.4
    },
    "portionGrams": 160,
    "portionName": "1 papa al horno (160g)"
  },
  {
    "id": "pure_de_papa_con_mantequilla",
    "name": "Puré de papa con mantequilla",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 115,
      "protein": 2.0,
      "carbs": 16.5,
      "fats": 4.8,
      "fiber": 1.5
    },
    "portionGrams": 150,
    "portionName": "1 porción (150g)"
  },
  {
    "id": "papas_a_la_francesa_clasicas",
    "name": "Papas a la francesa clásicas",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 312,
      "protein": 3.4,
      "carbs": 41.5,
      "fats": 15.0,
      "fiber": 3.8
    },
    "portionGrams": 110,
    "portionName": "1 orden mediana (110g)"
  },
  {
    "id": "papas_gajo_sazonadas",
    "name": "Papas gajo sazonadas",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 220,
      "protein": 3.0,
      "carbs": 32.0,
      "fats": 9.0,
      "fiber": 3.0
    },
    "portionGrams": 120,
    "portionName": "1 orden (120g)"
  },
  {
    "id": "papas_hash_brown_doradas",
    "name": "Papas hash brown doradas",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 30.0,
      "fats": 17.0,
      "fiber": 2.5
    },
    "portionGrams": 80,
    "portionName": "1 pieza (80g)"
  },
  {
    "id": "camote_amarillo_asado",
    "name": "Camote amarillo asado",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 90,
      "protein": 2.0,
      "carbs": 20.7,
      "fats": 0.2,
      "fiber": 3.3
    },
    "portionGrams": 140,
    "portionName": "1 camote mediano (140g)"
  },
  {
    "id": "pure_de_camote_dulce",
    "name": "Puré de camote dulce",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 105,
      "protein": 1.8,
      "carbs": 23.0,
      "fats": 0.8,
      "fiber": 3.0
    },
    "portionGrams": 140,
    "portionName": "1 porción (140g)"
  },
  {
    "id": "yuca_cocida_con_mojo",
    "name": "Yuca cocida con mojo",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 160,
      "protein": 1.4,
      "carbs": 38.0,
      "fats": 0.5,
      "fiber": 1.8
    },
    "portionGrams": 150,
    "portionName": "1 trozo mediano (150g)"
  },
  {
    "id": "yuca_frita_crocante",
    "name": "Yuca frita crocante",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 285,
      "protein": 1.8,
      "carbs": 48.0,
      "fats": 10.0,
      "fiber": 2.5
    },
    "portionGrams": 120,
    "portionName": "1 ración (120g)"
  },
  {
    "id": "platano_verde_frito_tostones_o_patacones",
    "name": "Plátano verde frito (tostones o patacones)",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 245,
      "protein": 1.5,
      "carbs": 35.0,
      "fats": 11.5,
      "fiber": 2.8
    },
    "portionGrams": 90,
    "portionName": "3 tostones (90g)"
  },
  {
    "id": "platano_maduro_horneado",
    "name": "Plátano maduro horneado",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 140,
      "protein": 1.5,
      "carbs": 33.0,
      "fats": 0.4,
      "fiber": 2.5
    },
    "portionGrams": 130,
    "portionName": "1 pieza (130g)"
  },
  {
    "id": "platano_macho_hervido",
    "name": "Plátano macho hervido",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 116,
      "protein": 1.2,
      "carbs": 28.0,
      "fats": 0.2,
      "fiber": 2.2
    },
    "portionGrams": 130,
    "portionName": "1 pieza (130g)"
  },
  {
    "id": "malanga_cocida",
    "name": "Malanga cocida",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 142,
      "protein": 1.5,
      "carbs": 34.0,
      "fats": 0.2,
      "fiber": 5.1
    },
    "portionGrams": 140,
    "portionName": "1 porción (140g)"
  },
  {
    "id": "name_hervido",
    "name": "Ñame hervido",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 118,
      "protein": 1.5,
      "carbs": 27.5,
      "fats": 0.2,
      "fiber": 4.0
    },
    "portionGrams": 140,
    "portionName": "1 porción (140g)"
  },
  {
    "id": "tapioca_en_perlas",
    "name": "Tapioca en perlas",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 358,
      "protein": 0.2,
      "carbs": 88.0,
      "fats": 0.0,
      "fiber": 0.9
    },
    "portionGrams": 40,
    "portionName": "1/4 taza seca (40g)"
  },
  {
    "id": "pan_blanco_artesanal",
    "name": "Pan blanco artesanal",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 49.0,
      "fats": 3.2,
      "fiber": 2.7
    },
    "portionGrams": 50,
    "portionName": "1 rebanada gruesa (50g)"
  },
  {
    "id": "pan_baguette_crujiente",
    "name": "Pan baguette crujiente",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 270,
      "protein": 9.0,
      "carbs": 52.0,
      "fats": 2.0,
      "fiber": 2.5
    },
    "portionGrams": 60,
    "portionName": "1 trozo de 15cm (60g)"
  },
  {
    "id": "pan_de_masa_madre",
    "name": "Pan de masa madre",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 235,
      "protein": 9.0,
      "carbs": 46.0,
      "fats": 1.5,
      "fiber": 3.5
    },
    "portionGrams": 60,
    "portionName": "1 rebanada artesanal (60g)"
  },
  {
    "id": "pan_integral_de_centeno",
    "name": "Pan integral de centeno",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 240,
      "protein": 8.5,
      "carbs": 45.0,
      "fats": 1.8,
      "fiber": 6.5
    },
    "portionGrams": 50,
    "portionName": "1 rebanada (50g)"
  },
  {
    "id": "pan_brioche_suave",
    "name": "Pan brioche suave",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 345,
      "protein": 9.5,
      "carbs": 50.0,
      "fats": 12.0,
      "fiber": 2.2
    },
    "portionGrams": 55,
    "portionName": "1 panecillo (55g)"
  },
  {
    "id": "pan_pita_libanes",
    "name": "Pan pita libanés",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 275,
      "protein": 9.0,
      "carbs": 55.0,
      "fats": 1.2,
      "fiber": 2.5
    },
    "portionGrams": 60,
    "portionName": "1 pan pita (60g)"
  },
  {
    "id": "pan_naan_horneado_al_tandoori",
    "name": "Pan naan horneado al tandoori",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 310,
      "protein": 9.0,
      "carbs": 52.0,
      "fats": 7.5,
      "fiber": 2.8
    },
    "portionGrams": 90,
    "portionName": "1 pieza (90g)"
  },
  {
    "id": "pan_focaccia_con_romero",
    "name": "Pan focaccia con romero",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 295,
      "protein": 8.5,
      "carbs": 48.0,
      "fats": 8.0,
      "fiber": 2.6
    },
    "portionGrams": 70,
    "portionName": "1 porción (70g)"
  },
  {
    "id": "pan_ciabatta",
    "name": "Pan ciabatta",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 260,
      "protein": 8.8,
      "carbs": 50.0,
      "fats": 2.4,
      "fiber": 2.6
    },
    "portionGrams": 60,
    "portionName": "1 rebanada (60g)"
  },
  {
    "id": "bagel_clasico",
    "name": "Bagel clásico",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 275,
      "protein": 10.5,
      "carbs": 53.0,
      "fats": 1.8,
      "fiber": 2.4
    },
    "portionGrams": 90,
    "portionName": "1 bagel (90g)"
  },
  {
    "id": "tortilla_de_maiz_blanca",
    "name": "Tortilla de maíz blanca",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 218,
      "protein": 5.7,
      "carbs": 45.0,
      "fats": 2.8,
      "fiber": 6.3
    },
    "portionGrams": 30,
    "portionName": "1 tortilla (30g)"
  },
  {
    "id": "tortilla_de_maiz_azul",
    "name": "Tortilla de maíz azul",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 210,
      "protein": 6.2,
      "carbs": 43.5,
      "fats": 2.5,
      "fiber": 6.8
    },
    "portionGrams": 30,
    "portionName": "1 tortilla (30g)"
  },
  {
    "id": "tortilla_de_harina_de_trigo",
    "name": "Tortilla de harina de trigo",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 310,
      "protein": 8.0,
      "carbs": 52.0,
      "fats": 8.0,
      "fiber": 2.8
    },
    "portionGrams": 40,
    "portionName": "1 tortilla de harina (40g)"
  },
  {
    "id": "arepa_de_maiz_asada",
    "name": "Arepa de maíz asada",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 220,
      "protein": 4.5,
      "carbs": 42.0,
      "fats": 3.8,
      "fiber": 4.0
    },
    "portionGrams": 110,
    "portionName": "1 arepa mediana (110g)"
  },
  {
    "id": "pupusa_de_queso_con_loroco",
    "name": "Pupusa de queso con loroco",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 240,
      "protein": 9.0,
      "carbs": 31.0,
      "fats": 9.0,
      "fiber": 3.0
    },
    "portionGrams": 120,
    "portionName": "1 pupusa (120g)"
  },
  {
    "id": "pupusa_de_chicharron",
    "name": "Pupusa de chicharrón",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 275,
      "protein": 11.5,
      "carbs": 29.0,
      "fats": 13.0,
      "fiber": 3.2
    },
    "portionGrams": 120,
    "portionName": "1 pupusa (120g)"
  },
  {
    "id": "pupusa_revuelta",
    "name": "Pupusa revuelta",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 260,
      "protein": 10.5,
      "carbs": 30.0,
      "fats": 11.0,
      "fiber": 3.5
    },
    "portionGrams": 120,
    "portionName": "1 pupusa (120g)"
  },
  {
    "id": "gordita_de_maiz_rellena",
    "name": "Gordita de maíz rellena",
    "category": "Cereales, Granos y Tubérculos",
    "per100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 32.0,
      "fats": 11.5,
      "fiber": 3.5
    },
    "portionGrams": 130,
    "portionName": "1 gordita (130g)"
  },
  {
    "id": "pizza_margherita_clasica",
    "name": "Pizza margherita clásica",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 240,
      "protein": 10.5,
      "carbs": 30.0,
      "fats": 8.5,
      "fiber": 2.0
    },
    "portionGrams": 120,
    "portionName": "1 rebanada (120g)"
  },
  {
    "id": "pizza_de_pepperoni_crujiente",
    "name": "Pizza de pepperoni crujiente",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 298,
      "protein": 12.5,
      "carbs": 31.0,
      "fats": 13.8,
      "fiber": 2.0
    },
    "portionGrams": 125,
    "portionName": "1 rebanada (125g)"
  },
  {
    "id": "pizza_cuatro_quesos_con_gorgonzola",
    "name": "Pizza cuatro quesos con gorgonzola",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 310,
      "protein": 14.0,
      "carbs": 29.0,
      "fats": 15.5,
      "fiber": 1.8
    },
    "portionGrams": 120,
    "portionName": "1 rebanada (120g)"
  },
  {
    "id": "pizza_hawaiana_con_jamon_y_pina",
    "name": "Pizza hawaiana con jamón y piña",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 235,
      "protein": 10.8,
      "carbs": 32.0,
      "fats": 7.2,
      "fiber": 2.1
    },
    "portionGrams": 125,
    "portionName": "1 rebanada (125g)"
  },
  {
    "id": "pizza_de_carne_asada_barbacoa",
    "name": "Pizza de carne asada barbacoa",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 275,
      "protein": 13.0,
      "carbs": 31.5,
      "fats": 11.0,
      "fiber": 2.2
    },
    "portionGrams": 130,
    "portionName": "1 rebanada (130g)"
  },
  {
    "id": "pizza_vegetariana_de_pimientos_y_champinones",
    "name": "Pizza vegetariana de pimientos y champiñones",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 215,
      "protein": 8.5,
      "carbs": 31.0,
      "fats": 6.5,
      "fiber": 2.8
    },
    "portionGrams": 120,
    "portionName": "1 rebanada (120g)"
  },
  {
    "id": "pizza_bianca_con_trufa_y_prosciutto",
    "name": "Pizza bianca con trufa y prosciutto",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 285,
      "protein": 13.5,
      "carbs": 28.0,
      "fats": 13.5,
      "fiber": 1.8
    },
    "portionGrams": 115,
    "portionName": "1 rebanada (115g)"
  },
  {
    "id": "pizza_estilo_deep_dish_de_chicago",
    "name": "Pizza estilo deep dish de Chicago",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 335,
      "protein": 15.0,
      "carbs": 33.0,
      "fats": 16.0,
      "fiber": 2.5
    },
    "portionGrams": 180,
    "portionName": "1 rebanada gruesa (180g)"
  },
  {
    "id": "pizza_estilo_new_york_doblada",
    "name": "Pizza estilo New York doblada",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 270,
      "protein": 11.5,
      "carbs": 32.0,
      "fats": 10.5,
      "fiber": 2.0
    },
    "portionGrams": 140,
    "portionName": "1 rebanada grande (140g)"
  },
  {
    "id": "pizza_de_salmon_ahumado_con_queso_crema",
    "name": "Pizza de salmón ahumado con queso crema",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 265,
      "protein": 12.0,
      "carbs": 29.0,
      "fats": 11.5,
      "fiber": 1.7
    },
    "portionGrams": 120,
    "portionName": "1 rebanada (120g)"
  },
  {
    "id": "pizza_dulce_de_nutella_y_fresas",
    "name": "Pizza dulce de nutella y fresas",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 330,
      "protein": 6.0,
      "carbs": 48.0,
      "fats": 13.5,
      "fiber": 2.5
    },
    "portionGrams": 100,
    "portionName": "1 rebanada (100g)"
  },
  {
    "id": "pizza_de_higos_con_queso_de_cabra_y_reduccion_balsamica",
    "name": "Pizza de higos con queso de cabra y reducción balsámica",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 255,
      "protein": 9.5,
      "carbs": 33.0,
      "fats": 9.5,
      "fiber": 2.8
    },
    "portionGrams": 115,
    "portionName": "1 rebanada (115g)"
  },
  {
    "id": "pizza_carbonara_con_panceta_y_huevo",
    "name": "Pizza carbonara con panceta y huevo",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 305,
      "protein": 13.0,
      "carbs": 28.0,
      "fats": 15.5,
      "fiber": 1.6
    },
    "portionGrams": 125,
    "portionName": "1 rebanada (125g)"
  },
  {
    "id": "pizza_calzone_sellado_con_ricotta_y_salami",
    "name": "Pizza calzone sellado con ricotta y salami",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 280,
      "protein": 12.0,
      "carbs": 30.0,
      "fats": 12.5,
      "fiber": 2.0
    },
    "portionGrams": 200,
    "portionName": "1/2 calzone (200g)"
  },
  {
    "id": "mini_pizzas_de_pan_pita",
    "name": "Mini pizzas de pan pita",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 220,
      "protein": 9.0,
      "carbs": 28.0,
      "fats": 8.0,
      "fiber": 2.2
    },
    "portionGrams": 110,
    "portionName": "1 mini pizza (110g)"
  },
  {
    "id": "helado_de_pizza_con_infusion_de_albahaca_y_oregano_dulce",
    "name": "Helado de pizza con infusión de albahaca y orégano dulce",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 210,
      "protein": 4.5,
      "carbs": 25.0,
      "fats": 10.5,
      "fiber": 0.5
    },
    "portionGrams": 90,
    "portionName": "1 bola (90g)"
  },
  {
    "id": "hamburguesa_clasica_con_queso_cheddar",
    "name": "Hamburguesa clásica con queso cheddar",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 265,
      "protein": 14.5,
      "carbs": 22.0,
      "fats": 13.5,
      "fiber": 1.5
    },
    "portionGrams": 180,
    "portionName": "1 hamburguesa (180g)"
  },
  {
    "id": "hamburguesa_doble_smash_con_cebolla_caramelizada",
    "name": "Hamburguesa doble smash con cebolla caramelizada",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 310,
      "protein": 18.0,
      "carbs": 20.0,
      "fats": 18.5,
      "fiber": 1.4
    },
    "portionGrams": 220,
    "portionName": "1 hamburguesa doble (220g)"
  },
  {
    "id": "hamburguesa_de_res_wagyu_en_pan_brioche",
    "name": "Hamburguesa de res wagyu en pan brioche",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 330,
      "protein": 17.0,
      "carbs": 21.0,
      "fats": 21.0,
      "fiber": 1.2
    },
    "portionGrams": 230,
    "portionName": "1 hamburguesa gourmet (230g)"
  },
  {
    "id": "hamburguesa_de_pollo_crispy_con_aderezo_spicy",
    "name": "Hamburguesa de pollo crispy con aderezo spicy",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 275,
      "protein": 15.0,
      "carbs": 26.0,
      "fats": 12.0,
      "fiber": 1.8
    },
    "portionGrams": 200,
    "portionName": "1 hamburguesa (200g)"
  },
  {
    "id": "hamburguesa_de_pollo_a_la_parrilla_y_aguacate",
    "name": "Hamburguesa de pollo a la parrilla y aguacate",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 215,
      "protein": 17.5,
      "carbs": 20.0,
      "fats": 7.8,
      "fiber": 2.5
    },
    "portionGrams": 190,
    "portionName": "1 hamburguesa (190g)"
  },
  {
    "id": "hamburguesa_bbq_con_aros_de_cebolla_y_tocino",
    "name": "Hamburguesa BBQ con aros de cebolla y tocino",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 320,
      "protein": 16.0,
      "carbs": 27.0,
      "fats": 16.5,
      "fiber": 1.6
    },
    "portionGrams": 230,
    "portionName": "1 hamburguesa (230g)"
  },
  {
    "id": "hamburguesa_vegetariana_de_lentejas_y_champinones",
    "name": "Hamburguesa vegetariana de lentejas y champiñones",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 195,
      "protein": 10.5,
      "carbs": 26.0,
      "fats": 5.5,
      "fiber": 4.8
    },
    "portionGrams": 180,
    "portionName": "1 hamburguesa (180g)"
  },
  {
    "id": "hamburguesa_de_falafel_con_salsa_tahini",
    "name": "Hamburguesa de falafel con salsa tahini",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 230,
      "protein": 9.0,
      "carbs": 28.0,
      "fats": 9.5,
      "fiber": 5.2
    },
    "portionGrams": 190,
    "portionName": "1 hamburguesa (190g)"
  },
  {
    "id": "hamburguesa_de_pescado_empanizado_con_salsa_tartara",
    "name": "Hamburguesa de pescado empanizado con salsa tártara",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 250,
      "protein": 12.0,
      "carbs": 27.0,
      "fats": 10.5,
      "fiber": 1.5
    },
    "portionGrams": 180,
    "portionName": "1 hamburguesa (180g)"
  },
  {
    "id": "hamburguesa_de_pavo_con_espinacas_y_queso_feta",
    "name": "Hamburguesa de pavo con espinacas y queso feta",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 205,
      "protein": 18.0,
      "carbs": 18.0,
      "fats": 6.8,
      "fiber": 2.0
    },
    "portionGrams": 180,
    "portionName": "1 hamburguesa (180g)"
  },
  {
    "id": "hamburguesa_servida_entre_dos_donas_glaseadas_luther_burger",
    "name": "Hamburguesa servida entre dos donas glaseadas (Luther burger)",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 395,
      "protein": 14.0,
      "carbs": 38.0,
      "fats": 21.5,
      "fiber": 1.0
    },
    "portionGrams": 210,
    "portionName": "1 Luther burger (210g)"
  },
  {
    "id": "slider_de_res_con_pepinillos",
    "name": "Slider de res con pepinillos",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 260,
      "protein": 13.5,
      "carbs": 23.0,
      "fats": 13.0,
      "fiber": 1.2
    },
    "portionGrams": 85,
    "portionName": "1 slider (85g)"
  },
  {
    "id": "hot_dog_clasico_con_mostaza_y_ketchup",
    "name": "Hot dog clásico con mostaza y ketchup",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 270,
      "protein": 10.0,
      "carbs": 24.0,
      "fats": 14.5,
      "fiber": 1.2
    },
    "portionGrams": 120,
    "portionName": "1 hot dog (120g)"
  },
  {
    "id": "chili_dog_con_carne_y_queso_fundido",
    "name": "Chili dog con carne y queso fundido",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 295,
      "protein": 13.0,
      "carbs": 25.0,
      "fats": 16.0,
      "fiber": 2.0
    },
    "portionGrams": 160,
    "portionName": "1 chili dog (160g)"
  },
  {
    "id": "sandwich_club_sandwich_de_tres_pisos",
    "name": "Sándwich club sándwich de tres pisos",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 240,
      "protein": 13.5,
      "carbs": 23.0,
      "fats": 10.5,
      "fiber": 2.0
    },
    "portionGrams": 220,
    "portionName": "1 club sándwich (220g)"
  },
  {
    "id": "sandwich_de_pastrami_en_pan_de_centeno_con_chucrut_reuben",
    "name": "Sándwich de pastrami en pan de centeno con chucrut (Reuben)",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 265,
      "protein": 15.0,
      "carbs": 22.0,
      "fats": 13.0,
      "fiber": 2.5
    },
    "portionGrams": 210,
    "portionName": "1 sándwich Reuben (210g)"
  },
  {
    "id": "sandwich_philly_cheesesteak_con_cebolla_y_provolone",
    "name": "Sándwich Philly cheesesteak con cebolla y provolone",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 280,
      "protein": 16.0,
      "carbs": 23.0,
      "fats": 13.8,
      "fiber": 1.8
    },
    "portionGrams": 220,
    "portionName": "1 sándwich (220g)"
  },
  {
    "id": "sandwich_cubano_con_cerdo_asado_y_pepinillos",
    "name": "Sándwich cubano con cerdo asado y pepinillos",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 255,
      "protein": 15.5,
      "carbs": 24.0,
      "fats": 11.0,
      "fiber": 1.8
    },
    "portionGrams": 200,
    "portionName": "1 sándwich (200g)"
  },
  {
    "id": "sandwich_grilled_cheese_con_queso_derretido",
    "name": "Sándwich grilled cheese con queso derretido",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 310,
      "protein": 11.5,
      "carbs": 29.0,
      "fats": 16.5,
      "fiber": 1.5
    },
    "portionGrams": 140,
    "portionName": "1 grilled cheese (140g)"
  },
  {
    "id": "wrap_de_pollo_cesar_con_lechuga_romana",
    "name": "Wrap de pollo césar con lechuga romana",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 215,
      "protein": 14.0,
      "carbs": 21.0,
      "fats": 8.5,
      "fiber": 2.2
    },
    "portionGrams": 190,
    "portionName": "1 wrap (190g)"
  },
  {
    "id": "burrito_de_carne_asada_con_frijoles_y_arroz",
    "name": "Burrito de carne asada con frijoles y arroz",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 230,
      "protein": 13.0,
      "carbs": 28.0,
      "fats": 7.5,
      "fiber": 3.8
    },
    "portionGrams": 250,
    "portionName": "1 burrito grande (250g)"
  },
  {
    "id": "quesadilla_de_queso_oaxaca_en_comal",
    "name": "Quesadilla de queso Oaxaca en comal",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 285,
      "protein": 12.0,
      "carbs": 26.0,
      "fats": 14.5,
      "fiber": 2.5
    },
    "portionGrams": 120,
    "portionName": "1 quesadilla (120g)"
  },
  {
    "id": "nachos_con_queso_cheddar_liquido_jalapenos_y_guacamole",
    "name": "Nachos con queso cheddar líquido, jalapeños y guacamole",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 315,
      "protein": 7.5,
      "carbs": 36.0,
      "fats": 16.5,
      "fiber": 4.2
    },
    "portionGrams": 180,
    "portionName": "1 plato de nachos (180g)"
  },
  {
    "id": "alitas_buffalo_picantes_con_salsa_blue_cheese",
    "name": "Alitas buffalo picantes con salsa blue cheese",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 260,
      "protein": 18.0,
      "carbs": 2.5,
      "fats": 20.0,
      "fiber": 0.4
    },
    "portionGrams": 150,
    "portionName": "4 piezas (150g)"
  },
  {
    "id": "dedos_de_queso_mozzarella_empanizados",
    "name": "Dedos de queso mozzarella empanizados",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 320,
      "protein": 14.5,
      "carbs": 26.0,
      "fats": 17.5,
      "fiber": 1.8
    },
    "portionGrams": 120,
    "portionName": "4 piezas (120g)"
  },
  {
    "id": "nuggets_de_pollo_fritos",
    "name": "Nuggets de pollo fritos",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 295,
      "protein": 15.0,
      "carbs": 19.0,
      "fats": 17.5,
      "fiber": 1.2
    },
    "portionGrams": 100,
    "portionName": "5 nuggets (100g)"
  },
  {
    "id": "empanada_argentina_de_carne_cortada_a_cuchillo",
    "name": "Empanada argentina de carne cortada a cuchillo",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 270,
      "protein": 11.0,
      "carbs": 26.0,
      "fats": 13.0,
      "fiber": 1.8
    },
    "portionGrams": 110,
    "portionName": "1 empanada (110g)"
  },
  {
    "id": "empanada_de_espinaca_con_queso",
    "name": "Empanada de espinaca con queso",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 235,
      "protein": 8.0,
      "carbs": 27.0,
      "fats": 10.5,
      "fiber": 2.8
    },
    "portionGrams": 110,
    "portionName": "1 empanada (110g)"
  },
  {
    "id": "croquetas_de_jamon_serrano_cremosas",
    "name": "Croquetas de jamón serrano cremosas",
    "category": "Pizzas, Hamburguesas y Comida Rápida",
    "per100g": {
      "calories": 245,
      "protein": 8.5,
      "carbs": 21.0,
      "fats": 14.0,
      "fiber": 1.2
    },
    "portionGrams": 100,
    "portionName": "4 croquetas (100g)"
  },
  {
    "id": "calabaza_de_castilla_cocida",
    "name": "Calabaza de castilla cocida",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 26,
      "protein": 1.0,
      "carbs": 6.5,
      "fats": 0.1,
      "fiber": 1.1
    },
    "portionGrams": 150,
    "portionName": "1 taza en cubos (150g)"
  },
  {
    "id": "calabaza_kabocha_asada",
    "name": "Calabaza kabocha asada",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 35,
      "protein": 1.3,
      "carbs": 8.2,
      "fats": 0.2,
      "fiber": 1.5
    },
    "portionGrams": 140,
    "portionName": "1 taza asada (140g)"
  },
  {
    "id": "calabacin_italiano_a_la_plancha",
    "name": "Calabacín italiano a la plancha",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 17,
      "protein": 1.2,
      "carbs": 3.1,
      "fats": 0.3,
      "fiber": 1.0
    },
    "portionGrams": 130,
    "portionName": "1 taza en rodajas (130g)"
  },
  {
    "id": "calabaza_spaghetti_horneada",
    "name": "Calabaza spaghetti horneada",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 31,
      "protein": 0.6,
      "carbs": 7.0,
      "fats": 0.6,
      "fiber": 1.5
    },
    "portionGrams": 150,
    "portionName": "1 taza de hebras (150g)"
  },
  {
    "id": "pure_de_calabaza_natural",
    "name": "Puré de calabaza natural",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 34,
      "protein": 1.1,
      "carbs": 8.0,
      "fats": 0.3,
      "fiber": 2.9
    },
    "portionGrams": 150,
    "portionName": "1 taza de puré (150g)"
  },
  {
    "id": "espinacas_frescas_baby",
    "name": "Espinacas frescas baby",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 23,
      "protein": 2.9,
      "carbs": 3.6,
      "fats": 0.4,
      "fiber": 2.2
    },
    "portionGrams": 50,
    "portionName": "1 taza colmada (50g)"
  },
  {
    "id": "espinacas_cocidas_a_la_crema",
    "name": "Espinacas cocidas a la crema",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 110,
      "protein": 3.2,
      "carbs": 6.5,
      "fats": 8.5,
      "fiber": 2.5
    },
    "portionGrams": 150,
    "portionName": "1 porción a la crema (150g)"
  },
  {
    "id": "acelgas_al_vapor",
    "name": "Acelgas al vapor",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 19,
      "protein": 1.8,
      "carbs": 3.7,
      "fats": 0.2,
      "fiber": 1.6
    },
    "portionGrams": 130,
    "portionName": "1 taza cocida (130g)"
  },
  {
    "id": "kale_rizado_horneado_chips_de_kale",
    "name": "Kale rizado horneado (chips de kale)",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 120,
      "protein": 4.0,
      "carbs": 11.0,
      "fats": 7.0,
      "fiber": 3.5
    },
    "portionGrams": 40,
    "portionName": "1 ración de chips (40g)"
  },
  {
    "id": "lechuga_romana_crujiente",
    "name": "Lechuga romana crujiente",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 17,
      "protein": 1.2,
      "carbs": 3.3,
      "fats": 0.3,
      "fiber": 2.1
    },
    "portionGrams": 60,
    "portionName": "1 taza picada (60g)"
  },
  {
    "id": "lechuga_iceberg",
    "name": "Lechuga iceberg",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 14,
      "protein": 0.9,
      "carbs": 3.0,
      "fats": 0.1,
      "fiber": 1.2
    },
    "portionGrams": 70,
    "portionName": "1 taza picada (70g)"
  },
  {
    "id": "lechuga_orejona",
    "name": "Lechuga orejona",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 16,
      "protein": 1.3,
      "carbs": 2.9,
      "fats": 0.2,
      "fiber": 1.8
    },
    "portionGrams": 60,
    "portionName": "1 taza picada (60g)"
  },
  {
    "id": "arugula_fresca",
    "name": "Arúgula fresca",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 25,
      "protein": 2.6,
      "carbs": 3.7,
      "fats": 0.7,
      "fiber": 1.6
    },
    "portionGrams": 40,
    "portionName": "1 taza colmada (40g)"
  },
  {
    "id": "berros_limpios",
    "name": "Berros limpios",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 11,
      "protein": 2.3,
      "carbs": 1.3,
      "fats": 0.1,
      "fiber": 0.5
    },
    "portionGrams": 50,
    "portionName": "1 taza fresca (50g)"
  },
  {
    "id": "col_verde_rallada",
    "name": "Col verde rallada",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 25,
      "protein": 1.3,
      "carbs": 5.8,
      "fats": 0.1,
      "fiber": 2.5
    },
    "portionGrams": 80,
    "portionName": "1 taza rallada (80g)"
  },
  {
    "id": "col_morada_encurtida",
    "name": "Col morada encurtida",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 32,
      "protein": 1.2,
      "carbs": 7.2,
      "fats": 0.2,
      "fiber": 2.1
    },
    "portionGrams": 70,
    "portionName": "1 porción de guarnición (70g)"
  },
  {
    "id": "col_rizada",
    "name": "Col rizada",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 28,
      "protein": 1.9,
      "carbs": 6.0,
      "fats": 0.4,
      "fiber": 2.0
    },
    "portionGrams": 70,
    "portionName": "1 taza picada (70g)"
  },
  {
    "id": "coles_de_bruselas_asadas_con_balsamico",
    "name": "Coles de bruselas asadas con balsámico",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 55,
      "protein": 3.4,
      "carbs": 9.8,
      "fats": 0.8,
      "fiber": 3.8
    },
    "portionGrams": 130,
    "portionName": "1 taza asada (130g)"
  },
  {
    "id": "brocoli_al_vapor",
    "name": "Brócoli al vapor",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 35,
      "protein": 2.4,
      "carbs": 7.2,
      "fats": 0.4,
      "fiber": 3.3
    },
    "portionGrams": 120,
    "portionName": "1 taza en ramilletes (120g)"
  },
  {
    "id": "brocoli_salteado_con_ajo",
    "name": "Brócoli salteado con ajo",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 65,
      "protein": 2.8,
      "carbs": 6.5,
      "fats": 3.5,
      "fiber": 3.2
    },
    "portionGrams": 120,
    "portionName": "1 taza salteada (120g)"
  },
  {
    "id": "coliflor_horneada",
    "name": "Coliflor horneada",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 38,
      "protein": 2.0,
      "carbs": 6.0,
      "fats": 1.2,
      "fiber": 2.6
    },
    "portionGrams": 130,
    "portionName": "1 taza horneada (130g)"
  },
  {
    "id": "arroz_de_coliflor_triturado",
    "name": "\"Arroz\" de coliflor triturado",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 25,
      "protein": 1.9,
      "carbs": 5.0,
      "fats": 0.3,
      "fiber": 2.0
    },
    "portionGrams": 120,
    "portionName": "1 taza de arroz vegetal (120g)"
  },
  {
    "id": "zanahoria_cruda_en_bastones",
    "name": "Zanahoria cruda en bastones",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 41,
      "protein": 0.9,
      "carbs": 9.6,
      "fats": 0.2,
      "fiber": 2.8
    },
    "portionGrams": 80,
    "portionName": "1 puñado de bastones (80g)"
  },
  {
    "id": "zanahoria_baby_glaseada",
    "name": "Zanahoria baby glaseada",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 58,
      "protein": 0.8,
      "carbs": 13.5,
      "fats": 0.5,
      "fiber": 2.4
    },
    "portionGrams": 100,
    "portionName": "1 porción glaseada (100g)"
  },
  {
    "id": "betabel_cocido",
    "name": "Betabel cocido",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 44,
      "protein": 1.7,
      "carbs": 10.0,
      "fats": 0.2,
      "fiber": 2.0
    },
    "portionGrams": 120,
    "portionName": "1 betabel en rodajas (120g)"
  },
  {
    "id": "rabanos_rebanados",
    "name": "Rábanos rebanados",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 16,
      "protein": 0.7,
      "carbs": 3.4,
      "fats": 0.1,
      "fiber": 1.6
    },
    "portionGrams": 60,
    "portionName": "1/2 taza en rodajas (60g)"
  },
  {
    "id": "pepino_con_cascara",
    "name": "Pepino con cáscara",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 15,
      "protein": 0.7,
      "carbs": 3.6,
      "fats": 0.1,
      "fiber": 0.5
    },
    "portionGrams": 100,
    "portionName": "1 taza rebanada (100g)"
  },
  {
    "id": "jitomate_bola_maduro",
    "name": "Jitomate bola maduro",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 18,
      "protein": 0.9,
      "carbs": 3.9,
      "fats": 0.2,
      "fiber": 1.2
    },
    "portionGrams": 120,
    "portionName": "1 jitomate mediano (120g)"
  },
  {
    "id": "jitomate_cherry_dulce",
    "name": "Jitomate cherry dulce",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 22,
      "protein": 1.0,
      "carbs": 4.8,
      "fats": 0.2,
      "fiber": 1.3
    },
    "portionGrams": 100,
    "portionName": "1 taza de cherries (100g)"
  },
  {
    "id": "cebolla_blanca_en_juliana",
    "name": "Cebolla blanca en juliana",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 40,
      "protein": 1.1,
      "carbs": 9.3,
      "fats": 0.1,
      "fiber": 1.7
    },
    "portionGrams": 70,
    "portionName": "1/2 cebolla picada (70g)"
  },
  {
    "id": "cebolla_morada_encurtida",
    "name": "Cebolla morada encurtida",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 48,
      "protein": 1.0,
      "carbs": 11.2,
      "fats": 0.2,
      "fiber": 1.5
    },
    "portionGrams": 50,
    "portionName": "2 cucharadas copeteadas (50g)"
  },
  {
    "id": "cebolla_caramelizada",
    "name": "Cebolla caramelizada",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 95,
      "protein": 1.4,
      "carbs": 18.0,
      "fats": 2.5,
      "fiber": 2.2
    },
    "portionGrams": 60,
    "portionName": "1 porción (60g)"
  },
  {
    "id": "echalote_picado",
    "name": "Echalote picado",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 72,
      "protein": 2.5,
      "carbs": 16.8,
      "fats": 0.1,
      "fiber": 3.2
    },
    "portionGrams": 30,
    "portionName": "2 cucharadas (30g)"
  },
  {
    "id": "cebollin_fresco_picado",
    "name": "Cebollín fresco picado",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 30,
      "protein": 3.3,
      "carbs": 4.4,
      "fats": 0.7,
      "fiber": 2.5
    },
    "portionGrams": 20,
    "portionName": "2 cucharadas picadas (20g)"
  },
  {
    "id": "ajo_asado_en_dientes",
    "name": "Ajo asado en dientes",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 149,
      "protein": 6.4,
      "carbs": 33.1,
      "fats": 0.5,
      "fiber": 2.1
    },
    "portionGrams": 15,
    "portionName": "3 dientes asados (15g)"
  },
  {
    "id": "poro_salteado",
    "name": "Poro salteado",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 61,
      "protein": 1.5,
      "carbs": 14.2,
      "fats": 0.3,
      "fiber": 1.8
    },
    "portionGrams": 100,
    "portionName": "1 taza picada (100g)"
  },
  {
    "id": "pimiento_morron_rojo",
    "name": "Pimiento morrón rojo",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 31,
      "protein": 1.0,
      "carbs": 6.0,
      "fats": 0.3,
      "fiber": 2.1
    },
    "portionGrams": 100,
    "portionName": "1 pimiento mediano (100g)"
  },
  {
    "id": "pimiento_verde_asado",
    "name": "Pimiento verde asado",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 20,
      "protein": 0.9,
      "carbs": 4.6,
      "fats": 0.2,
      "fiber": 1.7
    },
    "portionGrams": 100,
    "portionName": "1 pimiento asado (100g)"
  },
  {
    "id": "pimiento_amarillo",
    "name": "Pimiento amarillo",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 27,
      "protein": 1.0,
      "carbs": 6.3,
      "fats": 0.2,
      "fiber": 0.9
    },
    "portionGrams": 100,
    "portionName": "1 pimiento mediano (100g)"
  },
  {
    "id": "chile_jalapeno_fresco",
    "name": "Chile jalapeño fresco",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 29,
      "protein": 0.9,
      "carbs": 6.5,
      "fats": 0.4,
      "fiber": 2.8
    },
    "portionGrams": 25,
    "portionName": "1 pieza (25g)"
  },
  {
    "id": "chile_serrano_picado",
    "name": "Chile serrano picado",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 32,
      "protein": 1.7,
      "carbs": 7.0,
      "fats": 0.4,
      "fiber": 3.7
    },
    "portionGrams": 15,
    "portionName": "1 chile picado (15g)"
  },
  {
    "id": "chile_poblano_tatemado",
    "name": "Chile poblano tatemado",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 35,
      "protein": 1.5,
      "carbs": 7.5,
      "fats": 0.4,
      "fiber": 2.5
    },
    "portionGrams": 90,
    "portionName": "1 chile limpio (90g)"
  },
  {
    "id": "esparragos_verdes_a_la_parrilla",
    "name": "Espárragos verdes a la parrilla",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 24,
      "protein": 2.4,
      "carbs": 4.1,
      "fats": 0.2,
      "fiber": 2.0
    },
    "portionGrams": 100,
    "portionName": "6 espárragos (100g)"
  },
  {
    "id": "alcachofa_cocida_hoja_por_hoja",
    "name": "Alcachofa cocida hoja por hoja",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 47,
      "protein": 3.3,
      "carbs": 10.5,
      "fats": 0.2,
      "fiber": 5.4
    },
    "portionGrams": 120,
    "portionName": "1 alcachofa mediana (120g)"
  },
  {
    "id": "ejotes_salteados_con_almendras",
    "name": "Ejotes salteados con almendras",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 55,
      "protein": 2.1,
      "carbs": 7.8,
      "fats": 2.2,
      "fiber": 3.2
    },
    "portionGrams": 110,
    "portionName": "1 taza salteada (110g)"
  },
  {
    "id": "palmitos_en_rodajas",
    "name": "Palmitos en rodajas",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 28,
      "protein": 2.5,
      "carbs": 4.6,
      "fats": 0.6,
      "fiber": 2.4
    },
    "portionGrams": 100,
    "portionName": "1 taza en rodajas (100g)"
  },
  {
    "id": "chayote_hervido_en_cubos",
    "name": "Chayote hervido en cubos",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 19,
      "protein": 0.8,
      "carbs": 4.5,
      "fats": 0.1,
      "fiber": 1.7
    },
    "portionGrams": 130,
    "portionName": "1 taza en cubos (130g)"
  },
  {
    "id": "berenjena_asada_con_aceite_de_oliva",
    "name": "Berenjena asada con aceite de oliva",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 65,
      "protein": 1.2,
      "carbs": 7.5,
      "fats": 3.8,
      "fiber": 3.0
    },
    "portionGrams": 140,
    "portionName": "1 taza asada (140g)"
  },
  {
    "id": "nopales_cocidos_en_ensalada",
    "name": "Nopales cocidos en ensalada",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 16,
      "protein": 1.4,
      "carbs": 3.3,
      "fats": 0.1,
      "fiber": 2.2
    },
    "portionGrams": 120,
    "portionName": "1 taza de nopales (120g)"
  },
  {
    "id": "champinones_crimini_salteados",
    "name": "Champiñones crimini salteados",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 45,
      "protein": 3.1,
      "carbs": 5.2,
      "fats": 1.8,
      "fiber": 1.5
    },
    "portionGrams": 100,
    "portionName": "1 taza salteada (100g)"
  },
  {
    "id": "hongos_portobello_enteros_a_la_parrilla",
    "name": "Hongos portobello enteros a la parrilla",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 32,
      "protein": 2.5,
      "carbs": 4.8,
      "fats": 0.6,
      "fiber": 1.6
    },
    "portionGrams": 120,
    "portionName": "1 hongo grande (120g)"
  },
  {
    "id": "setas_ostra_al_ajillo",
    "name": "Setas ostra al ajillo",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 50,
      "protein": 3.3,
      "carbs": 6.5,
      "fats": 2.0,
      "fiber": 2.3
    },
    "portionGrams": 110,
    "portionName": "1 ración al ajillo (110g)"
  },
  {
    "id": "hongos_shiitake_deshidratados_y_rehidratados",
    "name": "Hongos shiitake deshidratados y rehidratados",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 56,
      "protein": 2.2,
      "carbs": 14.4,
      "fats": 0.2,
      "fiber": 2.5
    },
    "portionGrams": 80,
    "portionName": "4 piezas hidratadas (80g)"
  },
  {
    "id": "hongos_enoki_crudos",
    "name": "Hongos enoki crudos",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 37,
      "protein": 2.7,
      "carbs": 7.8,
      "fats": 0.3,
      "fiber": 2.7
    },
    "portionGrams": 60,
    "portionName": "1 manojo pequeño (60g)"
  },
  {
    "id": "hongos_porcini_silvestres",
    "name": "Hongos porcini silvestres",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 38,
      "protein": 3.4,
      "carbs": 5.5,
      "fats": 0.5,
      "fiber": 2.0
    },
    "portionGrams": 90,
    "portionName": "1 porción fresca (90g)"
  },
  {
    "id": "huitlacoche_fresco_salteado",
    "name": "Huitlacoche fresco salteado",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 75,
      "protein": 4.0,
      "carbs": 11.0,
      "fats": 2.2,
      "fiber": 3.5
    },
    "portionGrams": 100,
    "portionName": "1/2 taza salteada (100g)"
  },
  {
    "id": "frijoles_negros_refritos",
    "name": "Frijoles negros refritos",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 120,
      "protein": 6.0,
      "carbs": 16.0,
      "fats": 4.0,
      "fiber": 5.5
    },
    "portionGrams": 130,
    "portionName": "1/2 taza refrita (130g)"
  },
  {
    "id": "frijoles_pintos_de_la_olla",
    "name": "Frijoles pintos de la olla",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 95,
      "protein": 6.5,
      "carbs": 17.5,
      "fats": 0.5,
      "fiber": 6.0
    },
    "portionGrams": 150,
    "portionName": "1 taza de la olla (150g)"
  },
  {
    "id": "frijoles_rojos_de_seda_cocidos",
    "name": "Frijoles rojos de seda cocidos",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 110,
      "protein": 7.8,
      "carbs": 19.5,
      "fats": 0.6,
      "fiber": 6.8
    },
    "portionGrams": 150,
    "portionName": "1 taza cocida (150g)"
  },
  {
    "id": "lentejas_pardinas_cocidas",
    "name": "Lentejas pardinas cocidas",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 116,
      "protein": 9.0,
      "carbs": 20.1,
      "fats": 0.4,
      "fiber": 7.9
    },
    "portionGrams": 180,
    "portionName": "1 taza cocida (180g)"
  },
  {
    "id": "lentejas_rojas_en_curry",
    "name": "Lentejas rojas en curry",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 135,
      "protein": 8.5,
      "carbs": 21.0,
      "fats": 2.5,
      "fiber": 6.5
    },
    "portionGrams": 180,
    "portionName": "1 taza de curry (180g)"
  },
  {
    "id": "garbanzos_cocidos_de_bote",
    "name": "Garbanzos cocidos de bote",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 125,
      "protein": 7.0,
      "carbs": 20.0,
      "fats": 2.2,
      "fiber": 6.0
    },
    "portionGrams": 150,
    "portionName": "1 taza escurrida (150g)"
  },
  {
    "id": "garbanzos_tostados_crujientes",
    "name": "Garbanzos tostados crujientes",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 380,
      "protein": 18.0,
      "carbs": 58.0,
      "fats": 8.5,
      "fiber": 14.0
    },
    "portionGrams": 40,
    "portionName": "1 puñado snack (40g)"
  },
  {
    "id": "alubias_blancas_guisadas",
    "name": "Alubias blancas guisadas",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 110,
      "protein": 7.5,
      "carbs": 18.5,
      "fats": 0.8,
      "fiber": 6.5
    },
    "portionGrams": 160,
    "portionName": "1 taza guisada (160g)"
  },
  {
    "id": "habas_verdes_frescas",
    "name": "Habas verdes frescas",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 88,
      "protein": 7.9,
      "carbs": 17.6,
      "fats": 0.7,
      "fiber": 5.4
    },
    "portionGrams": 120,
    "portionName": "1 taza desgranada (120g)"
  },
  {
    "id": "edamames_al_vapor_con_sal_de_mar",
    "name": "Edamames al vapor con sal de mar",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 122,
      "protein": 11.0,
      "carbs": 10.0,
      "fats": 5.2,
      "fiber": 5.2
    },
    "portionGrams": 100,
    "portionName": "1 taza con vaina (100g)"
  },
  {
    "id": "chicharos_dulces_tiernos",
    "name": "Chícharos dulces tiernos",
    "category": "Verduras, Hortalizas y Legumbres",
    "per100g": {
      "calories": 81,
      "protein": 5.4,
      "carbs": 14.5,
      "fats": 0.4,
      "fiber": 5.7
    },
    "portionGrams": 120,
    "portionName": "1 taza tierna (120g)"
  },
  {
    "id": "huevo_de_gallina_entero_revuelto",
    "name": "Huevo de gallina entero revuelto",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 154,
      "protein": 11.0,
      "carbs": 1.5,
      "fats": 11.5,
      "fiber": 0.0
    },
    "portionGrams": 100,
    "portionName": "2 huevos revueltos (100g)"
  },
  {
    "id": "huevo_pochado_con_yema_liquida",
    "name": "Huevo pochado con yema líquida",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 143,
      "protein": 12.6,
      "carbs": 0.7,
      "fats": 9.5,
      "fiber": 0.0
    },
    "portionGrams": 50,
    "portionName": "1 huevo pochado (50g)"
  },
  {
    "id": "huevo_frito_con_borde_crujiente",
    "name": "Huevo frito con borde crujiente",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 196,
      "protein": 13.6,
      "carbs": 0.8,
      "fats": 15.0,
      "fiber": 0.0
    },
    "portionGrams": 55,
    "portionName": "1 huevo frito (55g)"
  },
  {
    "id": "huevo_cocido_duro",
    "name": "Huevo cocido duro",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 143,
      "protein": 12.6,
      "carbs": 0.7,
      "fats": 9.5,
      "fiber": 0.0
    },
    "portionGrams": 50,
    "portionName": "1 huevo duro (50g)"
  },
  {
    "id": "clara_de_huevo_liquida_pasteurizada",
    "name": "Clara de huevo líquida pasteurizada",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 52,
      "protein": 10.9,
      "carbs": 0.7,
      "fats": 0.2,
      "fiber": 0.0
    },
    "portionGrams": 100,
    "portionName": "1/2 taza de claras (100g)"
  },
  {
    "id": "omelette_relleno_de_queso_y_espinacas",
    "name": "Omelette relleno de queso y espinacas",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 185,
      "protein": 14.0,
      "carbs": 2.5,
      "fats": 13.5,
      "fiber": 0.8
    },
    "portionGrams": 140,
    "portionName": "1 omelette mediano (140g)"
  },
  {
    "id": "huevos_al_plato_con_salsa_ranchera",
    "name": "Huevos al plato con salsa ranchera",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 140,
      "protein": 10.5,
      "carbs": 4.5,
      "fats": 9.0,
      "fiber": 0.8
    },
    "portionGrams": 160,
    "portionName": "1 orden ranchera (160g)"
  },
  {
    "id": "huevos_revueltos_con_chorizo",
    "name": "Huevos revueltos con chorizo",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 215,
      "protein": 13.5,
      "carbs": 1.8,
      "fats": 17.0,
      "fiber": 0.2
    },
    "portionGrams": 130,
    "portionName": "1 porción con chorizo (130g)"
  },
  {
    "id": "leche_entera_pasteurizada",
    "name": "Leche entera pasteurizada",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 61,
      "protein": 3.2,
      "carbs": 4.8,
      "fats": 3.3,
      "fiber": 0.0
    },
    "portionGrams": 240,
    "portionName": "1 vaso (240ml)"
  },
  {
    "id": "leche_semidescremada",
    "name": "Leche semidescremada",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 48,
      "protein": 3.3,
      "carbs": 4.9,
      "fats": 1.6,
      "fiber": 0.0
    },
    "portionGrams": 240,
    "portionName": "1 vaso (240ml)"
  },
  {
    "id": "leche_descremada",
    "name": "Leche descremada",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 34,
      "protein": 3.4,
      "carbs": 5.0,
      "fats": 0.1,
      "fiber": 0.0
    },
    "portionGrams": 240,
    "portionName": "1 vaso (240ml)"
  },
  {
    "id": "leche_deslactosada",
    "name": "Leche deslactosada",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 52,
      "protein": 3.2,
      "carbs": 4.8,
      "fats": 2.0,
      "fiber": 0.0
    },
    "portionGrams": 240,
    "portionName": "1 vaso (240ml)"
  },
  {
    "id": "leche_evaporada",
    "name": "Leche evaporada",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 134,
      "protein": 6.8,
      "carbs": 10.0,
      "fats": 7.6,
      "fiber": 0.0
    },
    "portionGrams": 60,
    "portionName": "1/4 taza (60ml)"
  },
  {
    "id": "leche_condensada_azucarada",
    "name": "Leche condensada azucarada",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 321,
      "protein": 7.9,
      "carbs": 54.4,
      "fats": 8.7,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "2 cucharadas (30g)"
  },
  {
    "id": "leche_de_almendras_sin_azucar",
    "name": "Leche de almendras sin azúcar",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 15,
      "protein": 0.6,
      "carbs": 0.3,
      "fats": 1.2,
      "fiber": 0.2
    },
    "portionGrams": 240,
    "portionName": "1 vaso (240ml)"
  },
  {
    "id": "leche_de_avena_barista",
    "name": "Leche de avena barista",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 58,
      "protein": 1.2,
      "carbs": 8.5,
      "fats": 2.2,
      "fiber": 0.8
    },
    "portionGrams": 240,
    "portionName": "1 vaso (240ml)"
  },
  {
    "id": "leche_de_soya_natural",
    "name": "Leche de soya natural",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 43,
      "protein": 3.8,
      "carbs": 3.0,
      "fats": 1.8,
      "fiber": 0.6
    },
    "portionGrams": 240,
    "portionName": "1 vaso (240ml)"
  },
  {
    "id": "leche_de_coco_cremosa_en_lata",
    "name": "Leche de coco cremosa en lata",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 197,
      "protein": 2.0,
      "carbs": 2.8,
      "fats": 21.0,
      "fiber": 0.0
    },
    "portionGrams": 60,
    "portionName": "1/4 taza (60ml)"
  },
  {
    "id": "kefir_natural_bebible",
    "name": "Kéfir natural bebible",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 64,
      "protein": 3.5,
      "carbs": 4.8,
      "fats": 3.5,
      "fiber": 0.0
    },
    "portionGrams": 200,
    "portionName": "1 vaso pequeño (200ml)"
  },
  {
    "id": "yogur_griego_entero_sin_azucar",
    "name": "Yogur griego entero sin azúcar",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 97,
      "protein": 9.0,
      "carbs": 3.8,
      "fats": 5.0,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 pote (150g)"
  },
  {
    "id": "yogur_natural_descremado",
    "name": "Yogur natural descremado",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 56,
      "protein": 5.7,
      "carbs": 7.0,
      "fats": 0.2,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 pote (150g)"
  },
  {
    "id": "yogur_de_vainilla_batido",
    "name": "Yogur de vainilla batido",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 88,
      "protein": 4.2,
      "carbs": 14.5,
      "fats": 1.5,
      "fiber": 0.0
    },
    "portionGrams": 150,
    "portionName": "1 pote (150g)"
  },
  {
    "id": "queso_cottage_bajo_en_grasa",
    "name": "Queso cottage bajo en grasa",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 84,
      "protein": 11.0,
      "carbs": 4.3,
      "fats": 2.3,
      "fiber": 0.0
    },
    "portionGrams": 110,
    "portionName": "1/2 taza (110g)"
  },
  {
    "id": "queso_ricota_fresco",
    "name": "Queso ricota fresco",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 140,
      "protein": 9.5,
      "carbs": 4.0,
      "fats": 10.0,
      "fiber": 0.0
    },
    "portionGrams": 80,
    "portionName": "1/3 taza (80g)"
  },
  {
    "id": "queso_mozzarella_fresco_en_bola",
    "name": "Queso mozzarella fresco en bola",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 280,
      "protein": 18.0,
      "carbs": 2.2,
      "fats": 22.0,
      "fiber": 0.0
    },
    "portionGrams": 60,
    "portionName": "1 bola mediana (60g)"
  },
  {
    "id": "queso_mozzarella_rallado_para_derretir",
    "name": "Queso mozzarella rallado para derretir",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 300,
      "protein": 22.0,
      "carbs": 2.5,
      "fats": 22.5,
      "fiber": 0.0
    },
    "portionGrams": 40,
    "portionName": "1 puñado rallado (40g)"
  },
  {
    "id": "queso_cheddar_anejo_en_bloque",
    "name": "Queso cheddar añejo en bloque",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 403,
      "protein": 25.0,
      "carbs": 1.3,
      "fats": 33.0,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "1 rebanada (30g)"
  },
  {
    "id": "queso_gouda_en_rebanadas",
    "name": "Queso gouda en rebanadas",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 356,
      "protein": 25.0,
      "carbs": 2.2,
      "fats": 27.5,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "1 rebanada (30g)"
  },
  {
    "id": "queso_manchego_curado",
    "name": "Queso manchego curado",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 390,
      "protein": 26.0,
      "carbs": 1.0,
      "fats": 32.0,
      "fiber": 0.0
    },
    "portionGrams": 35,
    "portionName": "1 cuña (35g)"
  },
  {
    "id": "queso_suizo_emmental",
    "name": "Queso suizo emmental",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 380,
      "protein": 27.0,
      "carbs": 1.5,
      "fats": 29.5,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "1 rebanada (30g)"
  },
  {
    "id": "queso_parmesano_reggiano_rallado",
    "name": "Queso parmesano reggiano rallado",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 431,
      "protein": 38.5,
      "carbs": 4.1,
      "fats": 28.6,
      "fiber": 0.0
    },
    "portionGrams": 15,
    "portionName": "1 cucharada sopera (15g)"
  },
  {
    "id": "queso_pecorino_romano",
    "name": "Queso pecorino romano",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 395,
      "protein": 28.0,
      "carbs": 3.6,
      "fats": 30.0,
      "fiber": 0.0
    },
    "portionGrams": 15,
    "portionName": "1 cucharada rallada (15g)"
  },
  {
    "id": "queso_provolone_ahumado",
    "name": "Queso provolone ahumado",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 351,
      "protein": 25.5,
      "carbs": 2.1,
      "fats": 26.6,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "1 rebanada (30g)"
  },
  {
    "id": "queso_brie_cremoso_madurado",
    "name": "Queso brie cremoso madurado",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 334,
      "protein": 21.0,
      "carbs": 0.5,
      "fats": 28.0,
      "fiber": 0.0
    },
    "portionGrams": 35,
    "portionName": "1 rebanada triangular (35g)"
  },
  {
    "id": "queso_camembert_al_horno",
    "name": "Queso camembert al horno",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 300,
      "protein": 20.0,
      "carbs": 0.5,
      "fats": 24.5,
      "fiber": 0.0
    },
    "portionGrams": 40,
    "portionName": "1 porción horneada (40g)"
  },
  {
    "id": "queso_azul_roquefort_intenso",
    "name": "Queso azul roquefort intenso",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 369,
      "protein": 21.5,
      "carbs": 2.0,
      "fats": 30.5,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "1 porción desmoronada (30g)"
  },
  {
    "id": "queso_gorgonzola_dulce",
    "name": "Queso gorgonzola dulce",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 350,
      "protein": 19.5,
      "carbs": 2.5,
      "fats": 29.0,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "1 porción (30g)"
  },
  {
    "id": "queso_feta_desmoronado",
    "name": "Queso feta desmoronado",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 264,
      "protein": 14.2,
      "carbs": 4.1,
      "fats": 21.3,
      "fiber": 0.0
    },
    "portionGrams": 35,
    "portionName": "2 cucharadas (35g)"
  },
  {
    "id": "queso_panela_asado",
    "name": "Queso panela asado",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 174,
      "protein": 14.5,
      "carbs": 2.7,
      "fats": 11.8,
      "fiber": 0.0
    },
    "portionGrams": 50,
    "portionName": "1 rebanada asada (50g)"
  },
  {
    "id": "queso_fresco_salvadoreno",
    "name": "Queso fresco salvadoreño",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 210,
      "protein": 15.0,
      "carbs": 2.5,
      "fats": 15.5,
      "fiber": 0.0
    },
    "portionGrams": 40,
    "portionName": "1 rebanada (40g)"
  },
  {
    "id": "queso_crema_estilo_philadelphia",
    "name": "Queso crema estilo Philadelphia",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 342,
      "protein": 6.0,
      "carbs": 4.1,
      "fats": 34.0,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "2 cucharadas (30g)"
  },
  {
    "id": "queso_mascarpone_dulce",
    "name": "Queso mascarpone dulce",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 429,
      "protein": 4.5,
      "carbs": 3.5,
      "fats": 45.0,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "2 cucharadas (30g)"
  },
  {
    "id": "mantequilla_sin_sal_de_pastoreo",
    "name": "Mantequilla sin sal de pastoreo",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 717,
      "protein": 0.9,
      "carbs": 0.1,
      "fats": 81.0,
      "fiber": 0.0
    },
    "portionGrams": 14,
    "portionName": "1 cucharada (14g)"
  },
  {
    "id": "mantequilla_clarificada_ghee",
    "name": "Mantequilla clarificada (ghee)",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 876,
      "protein": 0.3,
      "carbs": 0.0,
      "fats": 99.5,
      "fiber": 0.0
    },
    "portionGrams": 12,
    "portionName": "1 cucharada (12g)"
  },
  {
    "id": "margarina_vegetal",
    "name": "Margarina vegetal",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 717,
      "protein": 0.2,
      "carbs": 0.5,
      "fats": 80.5,
      "fiber": 0.0
    },
    "portionGrams": 14,
    "portionName": "1 cucharada (14g)"
  },
  {
    "id": "aceite_de_oliva_virgen_extra",
    "name": "Aceite de oliva virgen extra",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 884,
      "protein": 0.0,
      "carbs": 0.0,
      "fats": 100.0,
      "fiber": 0.0
    },
    "portionGrams": 14,
    "portionName": "1 cucharada (14g)"
  },
  {
    "id": "aceite_de_aguacate_prensado_en_frio",
    "name": "Aceite de aguacate prensado en frío",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 884,
      "protein": 0.0,
      "carbs": 0.0,
      "fats": 100.0,
      "fiber": 0.0
    },
    "portionGrams": 14,
    "portionName": "1 cucharada (14g)"
  },
  {
    "id": "aceite_de_coco_virgen",
    "name": "Aceite de coco virgen",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 862,
      "protein": 0.0,
      "carbs": 0.0,
      "fats": 100.0,
      "fiber": 0.0
    },
    "portionGrams": 14,
    "portionName": "1 cucharada (14g)"
  },
  {
    "id": "aceite_de_sesamo_tostado",
    "name": "Aceite de sésamo tostado",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 884,
      "protein": 0.0,
      "carbs": 0.0,
      "fats": 100.0,
      "fiber": 0.0
    },
    "portionGrams": 14,
    "portionName": "1 cucharada (14g)"
  },
  {
    "id": "aceite_de_canola",
    "name": "Aceite de canola",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 884,
      "protein": 0.0,
      "carbs": 0.0,
      "fats": 100.0,
      "fiber": 0.0
    },
    "portionGrams": 14,
    "portionName": "1 cucharada (14g)"
  },
  {
    "id": "manteca_de_cerdo_pura",
    "name": "Manteca de cerdo pura",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 902,
      "protein": 0.0,
      "carbs": 0.0,
      "fats": 100.0,
      "fiber": 0.0
    },
    "portionGrams": 14,
    "portionName": "1 cucharada (14g)"
  },
  {
    "id": "mayonesa_clasica",
    "name": "Mayonesa clásica",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 680,
      "protein": 1.0,
      "carbs": 2.5,
      "fats": 75.0,
      "fiber": 0.0
    },
    "portionGrams": 15,
    "portionName": "1 cucharada (15g)"
  },
  {
    "id": "mayonesa_de_chipotle",
    "name": "Mayonesa de chipotle",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 590,
      "protein": 1.2,
      "carbs": 5.0,
      "fats": 64.0,
      "fiber": 0.4
    },
    "portionGrams": 15,
    "portionName": "1 cucharada (15g)"
  },
  {
    "id": "crema_agria_espesa",
    "name": "Crema agria espesa",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 198,
      "protein": 2.4,
      "carbs": 4.6,
      "fats": 19.3,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "2 cucharadas (30g)"
  },
  {
    "id": "crema_fresca_acida_mexicana",
    "name": "Crema fresca ácida mexicana",
    "category": "Lácteos, Quesos y Grasas",
    "per100g": {
      "calories": 215,
      "protein": 2.2,
      "carbs": 4.0,
      "fats": 21.5,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "2 cucharadas (30g)"
  },
  {
    "id": "cheesecake_clasico_estilo_new_york",
    "name": "Cheesecake clásico estilo New York",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 321,
      "protein": 5.5,
      "carbs": 25.5,
      "fats": 22.5,
      "fiber": 0.5
    },
    "portionGrams": 120,
    "portionName": "1 rebanada (120g)"
  },
  {
    "id": "cheesecake_de_calabaza_especiada_con_canela",
    "name": "Cheesecake de calabaza especiada con canela",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 310,
      "protein": 5.2,
      "carbs": 28.0,
      "fats": 20.0,
      "fiber": 1.2
    },
    "portionGrams": 120,
    "portionName": "1 rebanada (120g)"
  },
  {
    "id": "cheesecake_de_frutos_rojos_y_zarzamora",
    "name": "Cheesecake de frutos rojos y zarzamora",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 295,
      "protein": 5.0,
      "carbs": 30.0,
      "fats": 18.0,
      "fiber": 1.4
    },
    "portionGrams": 125,
    "portionName": "1 rebanada (125g)"
  },
  {
    "id": "cheesecake_japones_esponjoso",
    "name": "Cheesecake japonés esponjoso",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 225,
      "protein": 6.8,
      "carbs": 20.0,
      "fats": 13.5,
      "fiber": 0.4
    },
    "portionGrams": 100,
    "portionName": "1 porción esponjosa (100g)"
  },
  {
    "id": "cheesecake_de_matcha_y_chocolate_blanco",
    "name": "Cheesecake de matcha y chocolate blanco",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 335,
      "protein": 6.0,
      "carbs": 29.0,
      "fats": 22.0,
      "fiber": 0.8
    },
    "portionGrams": 115,
    "portionName": "1 rebanada (115g)"
  },
  {
    "id": "cheesecake_de_galleta_oreo",
    "name": "Cheesecake de galleta oreo",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 355,
      "protein": 5.8,
      "carbs": 34.0,
      "fats": 22.5,
      "fiber": 1.0
    },
    "portionGrams": 120,
    "portionName": "1 rebanada (120g)"
  },
  {
    "id": "pastel_de_tres_leches_tradicional",
    "name": "Pastel de tres leches tradicional",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 250,
      "protein": 4.8,
      "carbs": 38.0,
      "fats": 9.2,
      "fiber": 0.3
    },
    "portionGrams": 140,
    "portionName": "1 rebanada húmeda (140g)"
  },
  {
    "id": "pastel_de_chocolate_amargo_fudge",
    "name": "Pastel de chocolate amargo fudge",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 389,
      "protein": 5.0,
      "carbs": 52.0,
      "fats": 19.0,
      "fiber": 3.2
    },
    "portionGrams": 110,
    "portionName": "1 rebanada (110g)"
  },
  {
    "id": "pastel_red_velvet_con_betun_de_queso_crema",
    "name": "Pastel red velvet con betún de queso crema",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 365,
      "protein": 4.5,
      "carbs": 49.0,
      "fats": 17.5,
      "fiber": 1.1
    },
    "portionGrams": 120,
    "portionName": "1 rebanada (120g)"
  },
  {
    "id": "pastel_de_zanahoria_con_nueces_y_especias",
    "name": "Pastel de zanahoria con nueces y especias",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 375,
      "protein": 4.2,
      "carbs": 46.0,
      "fats": 20.0,
      "fiber": 2.2
    },
    "portionGrams": 120,
    "portionName": "1 rebanada (120g)"
  },
  {
    "id": "tarta_tatin_de_manzana_invertida",
    "name": "Tarta tatin de manzana invertida",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 270,
      "protein": 2.5,
      "carbs": 42.0,
      "fats": 10.5,
      "fiber": 2.0
    },
    "portionGrams": 130,
    "portionName": "1 porción con manzana (130g)"
  },
  {
    "id": "pie_de_limon_con_merengue_suizo",
    "name": "Pie de limón con merengue suizo",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 285,
      "protein": 4.0,
      "carbs": 45.0,
      "fats": 10.2,
      "fiber": 0.8
    },
    "portionGrams": 120,
    "portionName": "1 rebanada (120g)"
  },
  {
    "id": "tarta_de_calabaza_tradicional_pumpkin_pie",
    "name": "Tarta de calabaza tradicional (pumpkin pie)",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 245,
      "protein": 4.5,
      "carbs": 33.0,
      "fats": 11.0,
      "fiber": 1.8
    },
    "portionGrams": 125,
    "portionName": "1 rebanada (125g)"
  },
  {
    "id": "tarta_de_queso_vasca_quemada",
    "name": "Tarta de queso vasca quemada",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 315,
      "protein": 6.5,
      "carbs": 21.0,
      "fats": 23.5,
      "fiber": 0.4
    },
    "portionGrams": 110,
    "portionName": "1 rebanada cremosa (110g)"
  },
  {
    "id": "brownie_de_chocolate_con_nuez_fundido",
    "name": "Brownie de chocolate con nuez fundido",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 466,
      "protein": 6.0,
      "carbs": 53.0,
      "fats": 26.5,
      "fiber": 3.5
    },
    "portionGrams": 65,
    "portionName": "1 cuadro de brownie (65g)"
  },
  {
    "id": "blondie_de_vainilla_y_chispas_de_caramelo",
    "name": "Blondie de vainilla y chispas de caramelo",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 435,
      "protein": 5.0,
      "carbs": 58.0,
      "fats": 21.0,
      "fiber": 1.2
    },
    "portionGrams": 65,
    "portionName": "1 cuadro blondie (65g)"
  },
  {
    "id": "souffle_de_chocolate_caliente",
    "name": "Soufflé de chocolate caliente",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 290,
      "protein": 6.5,
      "carbs": 32.0,
      "fats": 15.5,
      "fiber": 2.4
    },
    "portionGrams": 90,
    "portionName": "1 cazuela soufflé (90g)"
  },
  {
    "id": "tiramisu_con_mascarpone_y_cafe_espresso",
    "name": "Tiramisú con mascarpone y café espresso",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 285,
      "protein": 5.5,
      "carbs": 30.0,
      "fats": 16.0,
      "fiber": 0.8
    },
    "portionGrams": 120,
    "portionName": "1 porción italiana (120g)"
  },
  {
    "id": "panna_cotta_de_vainilla_con_coulis_de_frambuesa",
    "name": "Panna cotta de vainilla con coulis de frambuesa",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 220,
      "protein": 3.8,
      "carbs": 22.0,
      "fats": 13.0,
      "fiber": 0.6
    },
    "portionGrams": 110,
    "portionName": "1 flanera panna cotta (110g)"
  },
  {
    "id": "creme_brulee_con_costra_de_azucar_quemada",
    "name": "Crème brûlée con costra de azúcar quemada",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 295,
      "protein": 4.2,
      "carbs": 23.0,
      "fats": 21.5,
      "fiber": 0.1
    },
    "portionGrams": 110,
    "portionName": "1 cazuela brûlée (110g)"
  },
  {
    "id": "flan_de_caramelo_napolitano",
    "name": "Flan de caramelo napolitano",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 195,
      "protein": 5.8,
      "carbs": 28.0,
      "fats": 7.0,
      "fiber": 0.0
    },
    "portionGrams": 120,
    "portionName": "1 rebanada de flan (120g)"
  },
  {
    "id": "arroz_con_leche_espesado_con_canela",
    "name": "Arroz con leche espesado con canela",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 130,
      "protein": 3.5,
      "carbs": 22.0,
      "fats": 3.0,
      "fiber": 0.5
    },
    "portionGrams": 160,
    "portionName": "1 taza casera (160g)"
  },
  {
    "id": "pudin_de_chia_con_leche_de_almendras",
    "name": "Pudín de chía con leche de almendras",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 145,
      "protein": 4.8,
      "carbs": 14.0,
      "fats": 8.5,
      "fiber": 7.0
    },
    "portionGrams": 140,
    "portionName": "1 vaso pudín (140g)"
  },
  {
    "id": "helado_artesanal_de_vainilla_bourbon",
    "name": "Helado artesanal de vainilla bourbon",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 207,
      "protein": 3.5,
      "carbs": 24.0,
      "fats": 11.0,
      "fiber": 0.0
    },
    "portionGrams": 85,
    "portionName": "1 bola artesanal (85g)"
  },
  {
    "id": "helado_de_chocolate_belga_oscuro",
    "name": "Helado de chocolate belga oscuro",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 235,
      "protein": 4.2,
      "carbs": 26.0,
      "fats": 13.0,
      "fiber": 1.5
    },
    "portionGrams": 85,
    "portionName": "1 bola intensa (85g)"
  },
  {
    "id": "helado_de_fresas_con_crema",
    "name": "Helado de fresas con crema",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 192,
      "protein": 3.2,
      "carbs": 23.5,
      "fats": 9.8,
      "fiber": 0.8
    },
    "portionGrams": 85,
    "portionName": "1 bola (85g)"
  },
  {
    "id": "helado_de_pistacho_siciliano",
    "name": "Helado de pistacho siciliano",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 240,
      "protein": 5.2,
      "carbs": 22.0,
      "fats": 14.8,
      "fiber": 1.4
    },
    "portionGrams": 85,
    "portionName": "1 bola (85g)"
  },
  {
    "id": "helado_de_dulce_de_leche_granizado",
    "name": "Helado de dulce de leche granizado",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 250,
      "protein": 4.5,
      "carbs": 31.0,
      "fats": 12.0,
      "fiber": 0.5
    },
    "portionGrams": 85,
    "portionName": "1 bola (85g)"
  },
  {
    "id": "helado_de_menta_con_chispas_de_chocolate",
    "name": "Helado de menta con chispas de chocolate",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 225,
      "protein": 3.8,
      "carbs": 25.0,
      "fats": 12.5,
      "fiber": 0.8
    },
    "portionGrams": 85,
    "portionName": "1 bola (85g)"
  },
  {
    "id": "helado_de_calabaza_con_jarabe_de_maple",
    "name": "Helado de calabaza con jarabe de maple",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 215,
      "protein": 3.4,
      "carbs": 27.0,
      "fats": 10.5,
      "fiber": 1.0
    },
    "portionGrams": 85,
    "portionName": "1 bola otoñal (85g)"
  },
  {
    "id": "helado_exotico_de_pizza_con_toque_salado_de_queso_y_tomate_confitado",
    "name": "Helado exótico de pizza con toque salado de queso y tomate confitado",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 210,
      "protein": 4.5,
      "carbs": 25.0,
      "fats": 10.5,
      "fiber": 0.5
    },
    "portionGrams": 85,
    "portionName": "1 bola experimental (85g)"
  },
  {
    "id": "helado_de_matcha_verde",
    "name": "Helado de matcha verde",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 200,
      "protein": 4.0,
      "carbs": 24.0,
      "fats": 10.0,
      "fiber": 1.0
    },
    "portionGrams": 85,
    "portionName": "1 bola matcha (85g)"
  },
  {
    "id": "sorbete_de_limon_amarillo_al_agua",
    "name": "Sorbete de limón amarillo al agua",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 130,
      "protein": 0.5,
      "carbs": 32.0,
      "fats": 0.1,
      "fiber": 0.4
    },
    "portionGrams": 90,
    "portionName": "1 bola refrescante (90g)"
  },
  {
    "id": "sorbete_de_mango_y_maracuya",
    "name": "Sorbete de mango y maracuyá",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 135,
      "protein": 0.8,
      "carbs": 33.0,
      "fats": 0.2,
      "fiber": 1.2
    },
    "portionGrams": 90,
    "portionName": "1 bola frutal (90g)"
  },
  {
    "id": "churros_espanoles_espolvoreados_con_azucar_y_canela",
    "name": "Churros españoles espolvoreados con azúcar y canela",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 380,
      "protein": 4.5,
      "carbs": 44.0,
      "fats": 21.0,
      "fiber": 2.0
    },
    "portionGrams": 60,
    "portionName": "2 churros (60g)"
  },
  {
    "id": "donas_glaseadas_de_azucar",
    "name": "Donas glaseadas de azúcar",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 412,
      "protein": 5.0,
      "carbs": 49.0,
      "fats": 22.0,
      "fiber": 1.5
    },
    "portionGrams": 65,
    "portionName": "1 dona glaseada (65g)"
  },
  {
    "id": "berlinesa_rellena_de_crema_pastelera",
    "name": "Berlinesa rellena de crema pastelera",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 345,
      "protein": 6.2,
      "carbs": 45.0,
      "fats": 15.5,
      "fiber": 1.4
    },
    "portionGrams": 85,
    "portionName": "1 berlinesa (85g)"
  },
  {
    "id": "croissant_de_mantequilla_frances",
    "name": "Croissant de mantequilla francés",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 406,
      "protein": 8.2,
      "carbs": 45.0,
      "fats": 21.0,
      "fiber": 2.6
    },
    "portionGrams": 55,
    "portionName": "1 croissant hojaldrado (55g)"
  },
  {
    "id": "croissant_relleno_de_crema_de_almendras",
    "name": "Croissant relleno de crema de almendras",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 445,
      "protein": 9.5,
      "carbs": 44.0,
      "fats": 26.0,
      "fiber": 3.2
    },
    "portionGrams": 85,
    "portionName": "1 croissant almendra (85g)"
  },
  {
    "id": "pain_au_chocolat_hojaldrado",
    "name": "Pain au chocolat hojaldrado",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 414,
      "protein": 7.5,
      "carbs": 46.0,
      "fats": 22.5,
      "fiber": 2.8
    },
    "portionGrams": 65,
    "portionName": "1 pain au chocolat (65g)"
  },
  {
    "id": "rol_de_canela_con_glaseado_de_vainilla",
    "name": "Rol de canela con glaseado de vainilla",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 370,
      "protein": 5.5,
      "carbs": 55.0,
      "fats": 14.5,
      "fiber": 2.0
    },
    "portionGrams": 95,
    "portionName": "1 rol mediano (95g)"
  },
  {
    "id": "muffin_de_mora_azul_blueberry",
    "name": "Muffin de mora azul (blueberry)",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 360,
      "protein": 5.0,
      "carbs": 51.0,
      "fats": 15.0,
      "fiber": 1.8
    },
    "portionGrams": 85,
    "portionName": "1 muffin esponjoso (85g)"
  },
  {
    "id": "galletas_con_chispas_de_chocolate_horneadas",
    "name": "Galletas con chispas de chocolate horneadas",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 488,
      "protein": 5.5,
      "carbs": 64.0,
      "fats": 24.0,
      "fiber": 2.4
    },
    "portionGrams": 35,
    "portionName": "1 galleta grande (35g)"
  },
  {
    "id": "galletas_de_avena_con_pasas",
    "name": "Galletas de avena con pasas",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 430,
      "protein": 6.5,
      "carbs": 68.0,
      "fats": 15.5,
      "fiber": 4.0
    },
    "portionGrams": 35,
    "portionName": "1 galleta clásica (35g)"
  },
  {
    "id": "galletas_macaron_franceses_de_frambuesa",
    "name": "Galletas macaron franceses de frambuesa",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 415,
      "protein": 6.8,
      "carbs": 58.0,
      "fats": 18.0,
      "fiber": 2.5
    },
    "portionGrams": 20,
    "portionName": "1 macaron (20g)"
  },
  {
    "id": "marquesitas_con_queso_de_bola",
    "name": "Marquesitas con queso de bola",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 340,
      "protein": 7.5,
      "carbs": 52.0,
      "fats": 11.5,
      "fiber": 1.5
    },
    "portionGrams": 80,
    "portionName": "1 marquesita yucateca (80g)"
  },
  {
    "id": "paleta_de_hielo_de_sandia_con_chile",
    "name": "Paleta de hielo de sandía con chile",
    "category": "Postres, Helados y Pan Dulce",
    "per100g": {
      "calories": 85,
      "protein": 0.5,
      "carbs": 21.0,
      "fats": 0.1,
      "fiber": 0.5
    },
    "portionGrams": 80,
    "portionName": "1 paleta artesanal (80g)"
  },
  {
    "id": "platano_tabasco_maduro",
    "name": "Plátano tabasco maduro",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 89,
      "protein": 1.1,
      "carbs": 22.8,
      "fats": 0.3,
      "fiber": 2.6
    },
    "portionGrams": 120,
    "portionName": "1 plátano mediano (120g)"
  },
  {
    "id": "manzana_gala_crujiente",
    "name": "Manzana gala crujiente",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 13.8,
      "fats": 0.2,
      "fiber": 2.4
    },
    "portionGrams": 180,
    "portionName": "1 manzana mediana (180g)"
  },
  {
    "id": "manzana_verde_granny_smith",
    "name": "Manzana verde granny smith",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 50,
      "protein": 0.4,
      "carbs": 13.6,
      "fats": 0.2,
      "fiber": 2.8
    },
    "portionGrams": 170,
    "portionName": "1 manzana verde (170g)"
  },
  {
    "id": "pera_bosc_jugosa",
    "name": "Pera bosc jugosa",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 57,
      "protein": 0.4,
      "carbs": 15.2,
      "fats": 0.1,
      "fiber": 3.1
    },
    "portionGrams": 160,
    "portionName": "1 pera mediana (160g)"
  },
  {
    "id": "naranja_valencia_dulce",
    "name": "Naranja valencia dulce",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 47,
      "protein": 0.9,
      "carbs": 11.8,
      "fats": 0.1,
      "fiber": 2.4
    },
    "portionGrams": 130,
    "portionName": "1 naranja entera (130g)"
  },
  {
    "id": "mandarina_en_gajos",
    "name": "Mandarina en gajos",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 53,
      "protein": 0.8,
      "carbs": 13.3,
      "fats": 0.3,
      "fiber": 1.8
    },
    "portionGrams": 100,
    "portionName": "1 mandarina mediana (100g)"
  },
  {
    "id": "toronja_rosada",
    "name": "Toronja rosada",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 42,
      "protein": 0.8,
      "carbs": 10.7,
      "fats": 0.1,
      "fiber": 1.6
    },
    "portionGrams": 140,
    "portionName": "1/2 toronja grande (140g)"
  },
  {
    "id": "uvas_rojas_sin_semilla",
    "name": "Uvas rojas sin semilla",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 69,
      "protein": 0.7,
      "carbs": 18.1,
      "fats": 0.2,
      "fiber": 0.9
    },
    "portionGrams": 100,
    "portionName": "1 racimo pequeño (100g)"
  },
  {
    "id": "uvas_verdes_globo",
    "name": "Uvas verdes globo",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 67,
      "protein": 0.6,
      "carbs": 17.5,
      "fats": 0.2,
      "fiber": 0.8
    },
    "portionGrams": 100,
    "portionName": "1 racimo (100g)"
  },
  {
    "id": "fresas_frescas_enteras",
    "name": "Fresas frescas enteras",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 32,
      "protein": 0.7,
      "carbs": 7.7,
      "fats": 0.3,
      "fiber": 2.0
    },
    "portionGrams": 150,
    "portionName": "1 taza entera (150g)"
  },
  {
    "id": "frambuesas_silvestres",
    "name": "Frambuesas silvestres",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 52,
      "protein": 1.2,
      "carbs": 11.9,
      "fats": 0.7,
      "fiber": 6.5
    },
    "portionGrams": 125,
    "portionName": "1 taza de frambuesas (125g)"
  },
  {
    "id": "moras_azules_blueberries",
    "name": "Moras azules (blueberries)",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 57,
      "protein": 0.7,
      "carbs": 14.5,
      "fats": 0.3,
      "fiber": 2.4
    },
    "portionGrams": 140,
    "portionName": "1 taza azul (140g)"
  },
  {
    "id": "zarzamoras_maduras",
    "name": "Zarzamoras maduras",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 43,
      "protein": 1.4,
      "carbs": 9.6,
      "fats": 0.5,
      "fiber": 5.3
    },
    "portionGrams": 140,
    "portionName": "1 taza fresca (140g)"
  },
  {
    "id": "kiwi_verde_rebanado",
    "name": "Kiwi verde rebanado",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 61,
      "protein": 1.1,
      "carbs": 14.7,
      "fats": 0.5,
      "fiber": 3.0
    },
    "portionGrams": 90,
    "portionName": "1 kiwi pelado (90g)"
  },
  {
    "id": "mango_ataulfo_dulce",
    "name": "Mango ataulfo dulce",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 60,
      "protein": 0.8,
      "carbs": 15.0,
      "fats": 0.4,
      "fiber": 1.6
    },
    "portionGrams": 165,
    "portionName": "1 taza troceada (165g)"
  },
  {
    "id": "pina_miel_en_rebanadas",
    "name": "Piña miel en rebanadas",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 50,
      "protein": 0.5,
      "carbs": 13.1,
      "fats": 0.1,
      "fiber": 1.4
    },
    "portionGrams": 150,
    "portionName": "2 rebanadas gruesas (150g)"
  },
  {
    "id": "papaya_maradol_en_cubos",
    "name": "Papaya maradol en cubos",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 43,
      "protein": 0.5,
      "carbs": 10.8,
      "fats": 0.3,
      "fiber": 1.7
    },
    "portionGrams": 150,
    "portionName": "1 taza en cubos (150g)"
  },
  {
    "id": "sandia_fresca_cortada",
    "name": "Sandía fresca cortada",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 30,
      "protein": 0.6,
      "carbs": 7.6,
      "fats": 0.2,
      "fiber": 0.4
    },
    "portionGrams": 200,
    "portionName": "1 rebanada grande (200g)"
  },
  {
    "id": "melon_cantaloupe",
    "name": "Melón cantaloupe",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 34,
      "protein": 0.8,
      "carbs": 8.2,
      "fats": 0.2,
      "fiber": 0.9
    },
    "portionGrams": 160,
    "portionName": "1 taza en cubos (160g)"
  },
  {
    "id": "higos_frescos_morados",
    "name": "Higos frescos morados",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 74,
      "protein": 0.8,
      "carbs": 19.2,
      "fats": 0.3,
      "fiber": 2.9
    },
    "portionGrams": 80,
    "portionName": "2 higos frescos (80g)"
  },
  {
    "id": "granada_roja_en_granos",
    "name": "Granada roja en granos",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 83,
      "protein": 1.7,
      "carbs": 18.7,
      "fats": 1.2,
      "fiber": 4.0
    },
    "portionGrams": 100,
    "portionName": "1/2 taza en granos (100g)"
  },
  {
    "id": "cerezas_frescas_deshuesadas",
    "name": "Cerezas frescas deshuesadas",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 63,
      "protein": 1.1,
      "carbs": 16.0,
      "fats": 0.2,
      "fiber": 2.1
    },
    "portionGrams": 100,
    "portionName": "1 taza de cerezas (100g)"
  },
  {
    "id": "ciruelas_rojas_maduras",
    "name": "Ciruelas rojas maduras",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 46,
      "protein": 0.7,
      "carbs": 11.4,
      "fats": 0.3,
      "fiber": 1.4
    },
    "portionGrams": 100,
    "portionName": "2 ciruelas medianas (100g)"
  },
  {
    "id": "durazno_amarillo_en_mitades",
    "name": "Durazno amarillo en mitades",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 39,
      "protein": 0.9,
      "carbs": 9.5,
      "fats": 0.3,
      "fiber": 1.5
    },
    "portionGrams": 130,
    "portionName": "1 durazno mediano (130g)"
  },
  {
    "id": "nectarina_fresca",
    "name": "Nectarina fresca",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 44,
      "protein": 1.1,
      "carbs": 10.6,
      "fats": 0.3,
      "fiber": 1.7
    },
    "portionGrams": 130,
    "portionName": "1 nectarina (130g)"
  },
  {
    "id": "chabacano_seco_deshidratado_orejones",
    "name": "Chabacano seco deshidratado (orejones)",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 241,
      "protein": 3.4,
      "carbs": 62.6,
      "fats": 0.5,
      "fiber": 7.3
    },
    "portionGrams": 40,
    "portionName": "4 orejones (40g)"
  },
  {
    "id": "datiles_medjool_dulces",
    "name": "Dátiles medjool dulces",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 277,
      "protein": 1.8,
      "carbs": 75.0,
      "fats": 0.2,
      "fiber": 6.7
    },
    "portionGrams": 48,
    "portionName": "2 dátiles grandes (48g)"
  },
  {
    "id": "uvas_pasas_sin_semilla",
    "name": "Uvas pasas sin semilla",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 299,
      "protein": 3.1,
      "carbs": 79.2,
      "fats": 0.5,
      "fiber": 3.7
    },
    "portionGrams": 40,
    "portionName": "1 puñado pasas (40g)"
  },
  {
    "id": "arandanos_deshidratados_endulzados",
    "name": "Arándanos deshidratados endulzados",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 325,
      "protein": 0.2,
      "carbs": 82.0,
      "fats": 1.4,
      "fiber": 5.7
    },
    "portionGrams": 40,
    "portionName": "1 puñado arándanos (40g)"
  },
  {
    "id": "coco_fresco_rallado",
    "name": "Coco fresco rallado",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 354,
      "protein": 3.3,
      "carbs": 15.2,
      "fats": 33.5,
      "fiber": 9.0
    },
    "portionGrams": 45,
    "portionName": "1/2 taza rallada (45g)"
  },
  {
    "id": "aguacate_hass_maduro",
    "name": "Aguacate hass maduro",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 160,
      "protein": 2.0,
      "carbs": 8.5,
      "fats": 14.7,
      "fiber": 6.7
    },
    "portionGrams": 75,
    "portionName": "1/2 aguacate hass (75g)"
  },
  {
    "id": "maracuya_fresca_con_semillas",
    "name": "Maracuyá fresca con semillas",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 97,
      "protein": 2.2,
      "carbs": 23.4,
      "fats": 0.7,
      "fiber": 10.4
    },
    "portionGrams": 60,
    "portionName": "pulpa de 2 piezas (60g)"
  },
  {
    "id": "guayaba_rosa",
    "name": "Guayaba rosa",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 68,
      "protein": 2.6,
      "carbs": 14.3,
      "fats": 1.0,
      "fiber": 5.4
    },
    "portionGrams": 100,
    "portionName": "1 guayaba mediana (100g)"
  },
  {
    "id": "lichi_fresco_pelado",
    "name": "Lichi fresco pelado",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 66,
      "protein": 0.8,
      "carbs": 16.5,
      "fats": 0.4,
      "fiber": 1.3
    },
    "portionGrams": 80,
    "portionName": "5 lichis pelados (80g)"
  },
  {
    "id": "pitahaya_roja_fruta_del_dragon",
    "name": "Pitahaya roja (fruta del dragón)",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 50,
      "protein": 1.2,
      "carbs": 11.0,
      "fats": 0.6,
      "fiber": 3.0
    },
    "portionGrams": 120,
    "portionName": "1/2 pitahaya (120g)"
  },
  {
    "id": "nueces_de_castilla_peladas",
    "name": "Nueces de castilla peladas",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 654,
      "protein": 15.2,
      "carbs": 13.7,
      "fats": 65.2,
      "fiber": 6.7
    },
    "portionGrams": 30,
    "portionName": "7 mitades de nuez (30g)"
  },
  {
    "id": "almendras_enteras_crudas",
    "name": "Almendras enteras crudas",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 579,
      "protein": 21.2,
      "carbs": 21.6,
      "fats": 49.9,
      "fiber": 12.5
    },
    "portionGrams": 30,
    "portionName": "1 puñado (~22 almendras) (30g)"
  },
  {
    "id": "almendras_tostadas_con_sal",
    "name": "Almendras tostadas con sal",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 595,
      "protein": 21.0,
      "carbs": 21.0,
      "fats": 52.0,
      "fiber": 11.5
    },
    "portionGrams": 30,
    "portionName": "1 puñado tostado (30g)"
  },
  {
    "id": "nuez_de_la_india_maranon_tostada",
    "name": "Nuez de la india (marañón) tostada",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 553,
      "protein": 18.2,
      "carbs": 30.2,
      "fats": 43.8,
      "fiber": 3.3
    },
    "portionGrams": 30,
    "portionName": "1 puñado marañón (30g)"
  },
  {
    "id": "nuez_pecana_en_mitades",
    "name": "Nuez pecana en mitades",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 691,
      "protein": 9.2,
      "carbs": 13.9,
      "fats": 72.0,
      "fiber": 9.6
    },
    "portionGrams": 30,
    "portionName": "10 mitades pecanas (30g)"
  },
  {
    "id": "pistachos_con_cascara_tostados",
    "name": "Pistachos con cáscara tostados",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 562,
      "protein": 20.2,
      "carbs": 27.5,
      "fats": 45.3,
      "fiber": 10.6
    },
    "portionGrams": 30,
    "portionName": "1 puñado pistachos (30g)"
  },
  {
    "id": "avellanas_tostadas_peladas",
    "name": "Avellanas tostadas peladas",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 628,
      "protein": 15.0,
      "carbs": 16.7,
      "fats": 60.8,
      "fiber": 9.7
    },
    "portionGrams": 30,
    "portionName": "1 puñado avellanas (30g)"
  },
  {
    "id": "cacahuates_tostados_sin_sal",
    "name": "Cacahuates tostados sin sal",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 587,
      "protein": 24.4,
      "carbs": 21.3,
      "fats": 49.7,
      "fiber": 8.4
    },
    "portionGrams": 30,
    "portionName": "1 puñado cacahuates (30g)"
  },
  {
    "id": "mantequilla_de_mani_cremosa_natural",
    "name": "Mantequilla de maní cremosa natural",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 588,
      "protein": 25.1,
      "carbs": 20.0,
      "fats": 50.4,
      "fiber": 8.0
    },
    "portionGrams": 20,
    "portionName": "1 cucharada colmada (20g)"
  },
  {
    "id": "mantequilla_de_almendra_pura",
    "name": "Mantequilla de almendra pura",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 614,
      "protein": 21.0,
      "carbs": 18.8,
      "fats": 55.5,
      "fiber": 10.5
    },
    "portionGrams": 20,
    "portionName": "1 cucharada colmada (20g)"
  },
  {
    "id": "crema_de_avellana_con_cacao",
    "name": "Crema de avellana con cacao",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 539,
      "protein": 6.3,
      "carbs": 57.5,
      "fats": 30.9,
      "fiber": 3.5
    },
    "portionGrams": 20,
    "portionName": "1 cucharada untable (20g)"
  },
  {
    "id": "semillas_de_calabaza_tostadas_pepitas",
    "name": "Semillas de calabaza tostadas (pepitas)",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 559,
      "protein": 30.2,
      "carbs": 10.7,
      "fats": 49.1,
      "fiber": 6.0
    },
    "portionGrams": 25,
    "portionName": "2 cucharadas pepitas (25g)"
  },
  {
    "id": "semillas_de_girasol_peladas",
    "name": "Semillas de girasol peladas",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 584,
      "protein": 20.8,
      "carbs": 20.0,
      "fats": 51.5,
      "fiber": 8.6
    },
    "portionGrams": 25,
    "portionName": "2 cucharadas girasol (25g)"
  },
  {
    "id": "semillas_de_chia_negra",
    "name": "Semillas de chía negra",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 486,
      "protein": 16.5,
      "carbs": 42.1,
      "fats": 30.7,
      "fiber": 34.4
    },
    "portionGrams": 15,
    "portionName": "1 cucharada sopera (15g)"
  },
  {
    "id": "semillas_de_linaza_molida",
    "name": "Semillas de linaza molida",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 534,
      "protein": 18.3,
      "carbs": 28.9,
      "fats": 42.2,
      "fiber": 27.3
    },
    "portionGrams": 15,
    "portionName": "1 cucharada linaza (15g)"
  },
  {
    "id": "semillas_de_canamo_peladas_hemp_hearts",
    "name": "Semillas de cáñamo peladas (hemp hearts)",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 553,
      "protein": 31.6,
      "carbs": 8.7,
      "fats": 48.8,
      "fiber": 4.0
    },
    "portionGrams": 20,
    "portionName": "2 cucharadas cáñamo (20g)"
  },
  {
    "id": "semillas_de_ajonjoli_blanco_tostado",
    "name": "Semillas de ajonjolí blanco tostado",
    "category": "Frutas, Semillas y Frutos Secos",
    "per100g": {
      "calories": 573,
      "protein": 17.7,
      "carbs": 23.4,
      "fats": 49.7,
      "fiber": 11.8
    },
    "portionGrams": 15,
    "portionName": "1 cucharada ajonjolí (15g)"
  },
  {
    "id": "sopa_de_fideos_tradicional_con_caldo_de_pollo",
    "name": "Sopa de fideos tradicional con caldo de pollo",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 58,
      "protein": 3.2,
      "carbs": 8.5,
      "fats": 1.2,
      "fiber": 0.6
    },
    "portionGrams": 250,
    "portionName": "1 tazón de sopa (250ml)"
  },
  {
    "id": "crema_de_calabaza_y_zanahoria",
    "name": "Crema de calabaza y zanahoria",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 65,
      "protein": 1.8,
      "carbs": 9.5,
      "fats": 2.4,
      "fiber": 1.8
    },
    "portionGrams": 240,
    "portionName": "1 tazón de crema (240ml)"
  },
  {
    "id": "crema_de_champinones_silvestres",
    "name": "Crema de champiñones silvestres",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 78,
      "protein": 2.5,
      "carbs": 8.0,
      "fats": 4.2,
      "fiber": 1.5
    },
    "portionGrams": 240,
    "portionName": "1 tazón silvestre (240ml)"
  },
  {
    "id": "crema_de_brocoli_con_queso_cheddar",
    "name": "Crema de brócoli con queso cheddar",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 92,
      "protein": 3.8,
      "carbs": 7.5,
      "fats": 5.5,
      "fiber": 2.0
    },
    "portionGrams": 240,
    "portionName": "1 tazón cheddar (240ml)"
  },
  {
    "id": "caldo_de_res_con_verduras_y_elote",
    "name": "Caldo de res con verduras y elote",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 62,
      "protein": 5.2,
      "carbs": 6.0,
      "fats": 2.2,
      "fiber": 1.4
    },
    "portionGrams": 300,
    "portionName": "1 plato hondo (300ml)"
  },
  {
    "id": "pozole_rojo_de_cerdo_con_maiz_pozolero",
    "name": "Pozole rojo de cerdo con maíz pozolero",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 115,
      "protein": 8.5,
      "carbs": 12.0,
      "fats": 4.0,
      "fiber": 2.2
    },
    "portionGrams": 350,
    "portionName": "1 plato pozolero (350ml)"
  },
  {
    "id": "menudo_norteno_con_garbanzo",
    "name": "Menudo norteño con garbanzo",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 98,
      "protein": 9.5,
      "carbs": 6.5,
      "fats": 4.2,
      "fiber": 1.6
    },
    "portionGrams": 350,
    "portionName": "1 plato norteño (350ml)"
  },
  {
    "id": "sopa_de_tortilla_azteca_con_aguacate_y_queso",
    "name": "Sopa de tortilla azteca con aguacate y queso",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 108,
      "protein": 4.5,
      "carbs": 14.0,
      "fats": 4.2,
      "fiber": 2.0
    },
    "portionGrams": 280,
    "portionName": "1 tazón azteca (280ml)"
  },
  {
    "id": "sopa_minestrone_con_alubias_y_verduras",
    "name": "Sopa minestrone con alubias y verduras",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 55,
      "protein": 2.8,
      "carbs": 9.0,
      "fats": 1.0,
      "fiber": 2.2
    },
    "portionGrams": 250,
    "portionName": "1 tazón minestrone (250ml)"
  },
  {
    "id": "sopa_de_cebolla_francesa_gratinada_con_gruyere",
    "name": "Sopa de cebolla francesa gratinada con gruyère",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 95,
      "protein": 4.8,
      "carbs": 9.5,
      "fats": 4.5,
      "fiber": 1.2
    },
    "portionGrams": 250,
    "portionName": "1 cazuela francesa (250ml)"
  },
  {
    "id": "sopa_miso_japonesa_con_algas_wakame_y_tofu",
    "name": "Sopa miso japonesa con algas wakame y tofu",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 35,
      "protein": 2.6,
      "carbs": 3.8,
      "fats": 1.2,
      "fiber": 0.8
    },
    "portionGrams": 200,
    "portionName": "1 tazón miso (200ml)"
  },
  {
    "id": "sopa_tom_yum_tailandesa_con_camarones",
    "name": "Sopa tom yum tailandesa con camarones",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 48,
      "protein": 4.5,
      "carbs": 4.2,
      "fats": 1.5,
      "fiber": 0.6
    },
    "portionGrams": 250,
    "portionName": "1 tazón tom yum (250ml)"
  },
  {
    "id": "ramen_tonkotsu_con_fideos_y_panceta_chashu",
    "name": "Ramen tonkotsu con fideos y panceta chashu",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 145,
      "protein": 7.5,
      "carbs": 16.5,
      "fats": 5.8,
      "fiber": 1.5
    },
    "portionGrams": 400,
    "portionName": "1 tazón de ramen (400g)"
  },
  {
    "id": "ramen_de_shoyu_claro_con_huevo_marinado",
    "name": "Ramen de shoyu claro con huevo marinado",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 98,
      "protein": 6.2,
      "carbs": 14.0,
      "fats": 2.2,
      "fiber": 1.2
    },
    "portionGrams": 380,
    "portionName": "1 tazón shoyu (380g)"
  },
  {
    "id": "ensalada_cesar_con_pollo_y_crutones_de_ajo",
    "name": "Ensalada césar con pollo y crutones de ajo",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 140,
      "protein": 11.0,
      "carbs": 7.5,
      "fats": 7.5,
      "fiber": 1.8
    },
    "portionGrams": 220,
    "portionName": "1 plato césar (220g)"
  },
  {
    "id": "ensalada_griega_con_pepino_jitomate_olivas_kalamata_y_queso_feta",
    "name": "Ensalada griega con pepino, jitomate, olivas kalamata y queso feta",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 115,
      "protein": 4.0,
      "carbs": 5.5,
      "fats": 8.5,
      "fiber": 2.0
    },
    "portionGrams": 200,
    "portionName": "1 plato griego (200g)"
  },
  {
    "id": "ensalada_caprese_con_jitomate_mozzarella_y_albahaca",
    "name": "Ensalada caprese con jitomate, mozzarella y albahaca",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 145,
      "protein": 8.5,
      "carbs": 4.0,
      "fats": 10.5,
      "fiber": 1.2
    },
    "portionGrams": 180,
    "portionName": "1 plato caprese (180g)"
  },
  {
    "id": "ensalada_waldorf_con_manzana_apio_nuez_y_mayonesa",
    "name": "Ensalada waldorf con manzana, apio, nuez y mayonesa",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 165,
      "protein": 2.8,
      "carbs": 14.0,
      "fats": 11.5,
      "fiber": 2.5
    },
    "portionGrams": 180,
    "portionName": "1 plato waldorf (180g)"
  },
  {
    "id": "ensalada_de_atun_con_papa_ejote_y_huevo_cocido_nicoise",
    "name": "Ensalada de atún con papa, ejote y huevo cocido (Niçoise)",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 125,
      "protein": 9.8,
      "carbs": 10.2,
      "fats": 4.8,
      "fiber": 2.2
    },
    "portionGrams": 230,
    "portionName": "1 ensalada Niçoise (230g)"
  },
  {
    "id": "poke_bowl_de_salmon_fresco_con_arroz_sushi_edamames_y_aguacate",
    "name": "Poke bowl de salmón fresco con arroz sushi, edamames y aguacate",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 168,
      "protein": 9.5,
      "carbs": 19.5,
      "fats": 6.0,
      "fiber": 2.8
    },
    "portionGrams": 300,
    "portionName": "1 bowl completo (300g)"
  },
  {
    "id": "ceviche_peruano_de_pescado_blanco_con_camote_y_choclo",
    "name": "Ceviche peruano de pescado blanco con camote y choclo",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 92,
      "protein": 11.5,
      "carbs": 8.0,
      "fats": 1.5,
      "fiber": 1.4
    },
    "portionGrams": 220,
    "portionName": "1 plato de ceviche (220g)"
  },
  {
    "id": "ceviche_de_camaron_con_jitomate_cilantro_y_limon",
    "name": "Ceviche de camarón con jitomate, cilantro y limón",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 85,
      "protein": 12.0,
      "carbs": 6.5,
      "fats": 1.2,
      "fiber": 1.0
    },
    "portionGrams": 200,
    "portionName": "1 copa de ceviche (200g)"
  },
  {
    "id": "aguachile_verde_de_camaron_con_pepino_y_chile_serrano",
    "name": "Aguachile verde de camarón con pepino y chile serrano",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 75,
      "protein": 11.8,
      "carbs": 4.5,
      "fats": 1.1,
      "fiber": 1.2
    },
    "portionGrams": 200,
    "portionName": "1 plato de aguachile (200g)"
  },
  {
    "id": "paella_valenciana_con_conejo_y_verduras",
    "name": "Paella valenciana con conejo y verduras",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 175,
      "protein": 8.5,
      "carbs": 23.0,
      "fats": 5.5,
      "fiber": 2.0
    },
    "portionGrams": 280,
    "portionName": "1 plato de paella (280g)"
  },
  {
    "id": "paella_de_mariscos_mixta_con_azafran",
    "name": "Paella de mariscos mixta con azafrán",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 165,
      "protein": 9.2,
      "carbs": 22.0,
      "fats": 4.5,
      "fiber": 1.5
    },
    "portionGrams": 280,
    "portionName": "1 plato marinero (280g)"
  },
  {
    "id": "pollo_al_curry_amarillo_con_leche_de_coco_y_arroz_basmati",
    "name": "Pollo al curry amarillo con leche de coco y arroz basmati",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 180,
      "protein": 10.5,
      "carbs": 18.0,
      "fats": 7.5,
      "fiber": 1.8
    },
    "portionGrams": 300,
    "portionName": "1 plato de curry (300g)"
  },
  {
    "id": "pollo_tikka_masala_con_especias_y_naan",
    "name": "Pollo tikka masala con especias y naan",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 195,
      "protein": 12.0,
      "carbs": 16.0,
      "fats": 9.0,
      "fiber": 1.8
    },
    "portionGrams": 300,
    "portionName": "1 plato tikka masala (300g)"
  },
  {
    "id": "lasana_bolonesa_horneada_con_bechamel",
    "name": "Lasaña boloñesa horneada con bechamel",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 185,
      "protein": 9.5,
      "carbs": 17.0,
      "fats": 9.0,
      "fiber": 1.8
    },
    "portionGrams": 260,
    "portionName": "1 cuadro de lasaña (260g)"
  },
  {
    "id": "enchiladas_verdes_rellenas_de_pollo_gratinadas",
    "name": "Enchiladas verdes rellenas de pollo gratinadas",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 170,
      "protein": 9.8,
      "carbs": 15.5,
      "fats": 8.0,
      "fiber": 2.4
    },
    "portionGrams": 260,
    "portionName": "3 enchiladas (260g)"
  },
  {
    "id": "tacos_al_pastor_con_pina_y_cilantro",
    "name": "Tacos al pastor con piña y cilantro",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 195,
      "protein": 11.5,
      "carbs": 18.0,
      "fats": 8.5,
      "fiber": 2.0
    },
    "portionGrams": 150,
    "portionName": "2 tacos al pastor (150g)"
  },
  {
    "id": "tacos_de_birria_de_res_con_consome_para_chopear",
    "name": "Tacos de birria de res con consomé para chopear",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 215,
      "protein": 13.5,
      "carbs": 17.0,
      "fats": 10.5,
      "fiber": 2.2
    },
    "portionGrams": 180,
    "portionName": "2 tacos con consomé (180g)"
  },
  {
    "id": "tacos_de_carnitas_surtidas_con_salsa_verde",
    "name": "Tacos de carnitas surtidas con salsa verde",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 220,
      "protein": 14.0,
      "carbs": 16.5,
      "fats": 11.0,
      "fiber": 2.0
    },
    "portionGrams": 160,
    "portionName": "2 tacos de carnitas (160g)"
  },
  {
    "id": "sushi_roll_california_con_surimi_y_pepino",
    "name": "Sushi roll California con surimi y pepino",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 155,
      "protein": 4.5,
      "carbs": 28.0,
      "fats": 3.0,
      "fiber": 1.5
    },
    "portionGrams": 200,
    "portionName": "8 bocados (200g)"
  },
  {
    "id": "sushi_roll_spicy_tuna_con_mayonesa_picante",
    "name": "Sushi roll Spicy Tuna con mayonesa picante",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 185,
      "protein": 7.5,
      "carbs": 26.0,
      "fats": 5.8,
      "fiber": 1.4
    },
    "portionGrams": 200,
    "portionName": "8 bocados (200g)"
  },
  {
    "id": "sushi_roll_salmon_con_queso_crema_philadelphia_roll",
    "name": "Sushi roll salmón con queso crema (Philadelphia roll)",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 195,
      "protein": 6.8,
      "carbs": 27.0,
      "fats": 7.0,
      "fiber": 1.2
    },
    "portionGrams": 200,
    "portionName": "8 bocados (200g)"
  },
  {
    "id": "pad_thai_de_camaron_con_brotes_de_soya_y_cacahuate",
    "name": "Pad thai de camarón con brotes de soya y cacahuate",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 190,
      "protein": 8.2,
      "carbs": 26.0,
      "fats": 6.2,
      "fiber": 2.2
    },
    "portionGrams": 280,
    "portionName": "1 plato de pad thai (280g)"
  },
  {
    "id": "shakshuka_de_huevos_en_salsa_de_tomate_y_pimientos_picante",
    "name": "Shakshuka de huevos en salsa de tomate y pimientos picante",
    "category": "Sopas, Ensaladas y Guisados",
    "per100g": {
      "calories": 110,
      "protein": 6.8,
      "carbs": 8.5,
      "fats": 5.8,
      "fiber": 2.2
    },
    "portionGrams": 240,
    "portionName": "1 cazuela shakshuka (240g)"
  },
  {
    "id": "papas_fritas_en_bolsa_con_sal_marina",
    "name": "Papas fritas en bolsa con sal marina",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 536,
      "protein": 7.0,
      "carbs": 53.0,
      "fats": 34.0,
      "fiber": 4.4
    },
    "portionGrams": 40,
    "portionName": "1 bolsa individual (40g)"
  },
  {
    "id": "totopos_de_maiz_horneados",
    "name": "Totopos de maíz horneados",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 460,
      "protein": 7.5,
      "carbs": 72.0,
      "fats": 16.0,
      "fiber": 6.0
    },
    "portionGrams": 40,
    "portionName": "1 puñado totopos (40g)"
  },
  {
    "id": "palomitas_de_maiz_infladas_con_aire_caliente",
    "name": "Palomitas de maíz infladas con aire caliente",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 387,
      "protein": 12.9,
      "carbs": 78.0,
      "fats": 4.5,
      "fiber": 14.5
    },
    "portionGrams": 30,
    "portionName": "3 tazas infladas (30g)"
  },
  {
    "id": "palomitas_de_maiz_con_mantequilla_de_cine",
    "name": "Palomitas de maíz con mantequilla de cine",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 510,
      "protein": 8.0,
      "carbs": 56.0,
      "fats": 29.0,
      "fiber": 10.0
    },
    "portionGrams": 50,
    "portionName": "1 cubeta chica (50g)"
  },
  {
    "id": "pretzels_crujientes_horneados",
    "name": "Pretzels crujientes horneados",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 380,
      "protein": 10.0,
      "carbs": 80.0,
      "fats": 2.5,
      "fiber": 3.5
    },
    "portionGrams": 40,
    "portionName": "1 puñado pretzels (40g)"
  },
  {
    "id": "barrita_de_proteina_sabor_galleta_con_crema",
    "name": "Barrita de proteína sabor galleta con crema",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 370,
      "protein": 33.0,
      "carbs": 35.0,
      "fats": 11.0,
      "fiber": 10.0
    },
    "portionGrams": 60,
    "portionName": "1 barra (60g)"
  },
  {
    "id": "barrita_de_granola_con_miel_y_avena",
    "name": "Barrita de granola con miel y avena",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 420,
      "protein": 7.5,
      "carbs": 68.0,
      "fats": 14.0,
      "fiber": 5.5
    },
    "portionGrams": 40,
    "portionName": "1 barra granola (40g)"
  },
  {
    "id": "carne_seca_curada_beef_jerky",
    "name": "Carne seca curada (beef jerky)",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 410,
      "protein": 33.0,
      "carbs": 11.0,
      "fats": 26.0,
      "fiber": 1.8
    },
    "portionGrams": 30,
    "portionName": "1 sobre (30g)"
  },
  {
    "id": "aceitunas_verdes_manzanilla_rellenas_de_pimiento",
    "name": "Aceitunas verdes manzanilla rellenas de pimiento",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 145,
      "protein": 1.2,
      "carbs": 3.8,
      "fats": 15.0,
      "fiber": 3.3
    },
    "portionGrams": 30,
    "portionName": "6 aceitunas (30g)"
  },
  {
    "id": "aceitunas_negras_kalamata",
    "name": "Aceitunas negras kalamata",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 240,
      "protein": 1.8,
      "carbs": 6.0,
      "fats": 24.0,
      "fiber": 3.0
    },
    "portionGrams": 30,
    "portionName": "6 aceitunas negras (30g)"
  },
  {
    "id": "pepinillos_agridulces_encurtidos",
    "name": "Pepinillos agridulces encurtidos",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 35,
      "protein": 0.8,
      "carbs": 8.0,
      "fats": 0.2,
      "fiber": 1.2
    },
    "portionGrams": 40,
    "portionName": "2 pepinillos (40g)"
  },
  {
    "id": "salsa_ketchup_de_tomate",
    "name": "Salsa kétchup de tomate",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 101,
      "protein": 1.2,
      "carbs": 25.0,
      "fats": 0.1,
      "fiber": 0.3
    },
    "portionGrams": 20,
    "portionName": "1 cucharada sopera (20g)"
  },
  {
    "id": "mostaza_de_dijon_picante",
    "name": "Mostaza de Dijon picante",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 145,
      "protein": 7.0,
      "carbs": 6.0,
      "fats": 10.0,
      "fiber": 3.5
    },
    "portionGrams": 15,
    "portionName": "1 cucharadita (15g)"
  },
  {
    "id": "mostaza_amarilla_clasica",
    "name": "Mostaza amarilla clásica",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 66,
      "protein": 4.4,
      "carbs": 5.3,
      "fats": 3.3,
      "fiber": 3.3
    },
    "portionGrams": 15,
    "portionName": "1 cucharadita (15g)"
  },
  {
    "id": "salsa_barbacoa_ahumada_dulce",
    "name": "Salsa barbacoa ahumada dulce",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 172,
      "protein": 1.0,
      "carbs": 40.0,
      "fats": 0.8,
      "fiber": 1.0
    },
    "portionGrams": 25,
    "portionName": "1 cucharada colmada (25g)"
  },
  {
    "id": "salsa_sriracha_picante",
    "name": "Salsa sriracha picante",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 120,
      "protein": 2.0,
      "carbs": 28.0,
      "fats": 1.0,
      "fiber": 1.8
    },
    "portionGrams": 15,
    "portionName": "1 cucharada picante (15g)"
  },
  {
    "id": "salsa_tabasco_clasica",
    "name": "Salsa tabasco clásica",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 12,
      "protein": 1.0,
      "carbs": 1.5,
      "fats": 0.5,
      "fiber": 0.5
    },
    "portionGrams": 10,
    "portionName": "1 chorrito (10g)"
  },
  {
    "id": "salsa_de_soya_reducida_en_sodio",
    "name": "Salsa de soya reducida en sodio",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 53,
      "protein": 5.5,
      "carbs": 7.0,
      "fats": 0.0,
      "fiber": 0.8
    },
    "portionGrams": 15,
    "portionName": "1 cucharada sopera (15ml)"
  },
  {
    "id": "salsa_teriyaki_dulce_para_glasear",
    "name": "Salsa teriyaki dulce para glasear",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 140,
      "protein": 2.5,
      "carbs": 32.0,
      "fats": 0.1,
      "fiber": 0.2
    },
    "portionGrams": 20,
    "portionName": "1 cucharada glaseado (20g)"
  },
  {
    "id": "salsa_pesto_genoves_de_albahaca_con_pinones",
    "name": "Salsa pesto genovés de albahaca con piñones",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 460,
      "protein": 5.5,
      "carbs": 6.5,
      "fats": 47.0,
      "fiber": 2.5
    },
    "portionGrams": 20,
    "portionName": "1 cucharada sopera (20g)"
  },
  {
    "id": "salsa_chimichurri_con_perejil_y_oregano",
    "name": "Salsa chimichurri con perejil y orégano",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 380,
      "protein": 2.0,
      "carbs": 5.0,
      "fats": 40.0,
      "fiber": 2.2
    },
    "portionGrams": 20,
    "portionName": "1 cucharada (20g)"
  },
  {
    "id": "salsa_guacamole_fresco_con_pico_de_gallo",
    "name": "Salsa guacamole fresco con pico de gallo",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 155,
      "protein": 2.0,
      "carbs": 8.0,
      "fats": 13.5,
      "fiber": 5.5
    },
    "portionGrams": 45,
    "portionName": "2 cucharadas copeteadas (45g)"
  },
  {
    "id": "salsa_pico_de_gallo_fresca_con_jitomate_y_cebolla",
    "name": "Salsa pico de gallo fresca con jitomate y cebolla",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 25,
      "protein": 1.0,
      "carbs": 5.0,
      "fats": 0.3,
      "fiber": 1.5
    },
    "portionGrams": 40,
    "portionName": "2 cucharadas frescas (40g)"
  },
  {
    "id": "salsa_verde_de_tomatillo_cocido",
    "name": "Salsa verde de tomatillo cocido",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 28,
      "protein": 1.2,
      "carbs": 5.2,
      "fats": 0.4,
      "fiber": 1.8
    },
    "portionGrams": 40,
    "portionName": "2 cucharadas salseras (40g)"
  },
  {
    "id": "salsa_roja_tatemada_de_chiles_secos",
    "name": "Salsa roja tatemada de chiles secos",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 35,
      "protein": 1.4,
      "carbs": 6.5,
      "fats": 0.8,
      "fiber": 2.0
    },
    "portionGrams": 40,
    "portionName": "2 cucharadas tatemadas (40g)"
  },
  {
    "id": "dip_de_hummus_de_garbanzo_con_tahini",
    "name": "Dip de hummus de garbanzo con tahini",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 166,
      "protein": 7.9,
      "carbs": 14.3,
      "fats": 9.6,
      "fiber": 6.0
    },
    "portionGrams": 40,
    "portionName": "2 cucharadas soperas (40g)"
  },
  {
    "id": "dip_de_baba_ganoush_de_berenjena_asada",
    "name": "Dip de baba ganoush de berenjena asada",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 120,
      "protein": 2.5,
      "carbs": 9.0,
      "fats": 8.5,
      "fiber": 3.5
    },
    "portionGrams": 40,
    "portionName": "2 cucharadas dip (40g)"
  },
  {
    "id": "dip_de_espinaca_con_alcachofa_caliente",
    "name": "Dip de espinaca con alcachofa caliente",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 220,
      "protein": 6.0,
      "carbs": 8.5,
      "fats": 18.0,
      "fiber": 2.5
    },
    "portionGrams": 50,
    "portionName": "2 cucharadas calientes (50g)"
  },
  {
    "id": "vinagre_balsamico_de_modena_envejecido",
    "name": "Vinagre balsámico de Módena envejecido",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 88,
      "protein": 0.5,
      "carbs": 17.0,
      "fats": 0.0,
      "fiber": 0.0
    },
    "portionGrams": 15,
    "portionName": "1 cucharada sopera (15ml)"
  },
  {
    "id": "miel_pura_de_abeja_de_flor_de_azahar",
    "name": "Miel pura de abeja de flor de azahar",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 304,
      "protein": 0.3,
      "carbs": 82.4,
      "fats": 0.0,
      "fiber": 0.2
    },
    "portionGrams": 20,
    "portionName": "1 cucharada sopera (20g)"
  },
  {
    "id": "jarabe_de_maple_canadiense_puro",
    "name": "Jarabe de maple canadiense puro",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 260,
      "protein": 0.0,
      "carbs": 67.0,
      "fats": 0.1,
      "fiber": 0.0
    },
    "portionGrams": 20,
    "portionName": "1 cucharada sopera (20g)"
  },
  {
    "id": "cafe_negro_americano_filtrado",
    "name": "Café negro americano filtrado",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fats": 0.0,
      "fiber": 0.0
    },
    "portionGrams": 240,
    "portionName": "1 taza grande (240ml)"
  },
  {
    "id": "cafe_espresso_concentrado",
    "name": "Café espresso concentrado",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 9,
      "protein": 0.1,
      "carbs": 1.7,
      "fats": 0.2,
      "fiber": 0.0
    },
    "portionGrams": 30,
    "portionName": "1 shot espresso (30ml)"
  },
  {
    "id": "cappuccino_con_espuma_de_leche_entera",
    "name": "Cappuccino con espuma de leche entera",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 55,
      "protein": 3.0,
      "carbs": 4.5,
      "fats": 2.8,
      "fiber": 0.0
    },
    "portionGrams": 200,
    "portionName": "1 taza cappuccino (200ml)"
  },
  {
    "id": "cafe_latte_con_leche_de_avena",
    "name": "Café latte con leche de avena",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 52,
      "protein": 1.2,
      "carbs": 8.0,
      "fats": 1.8,
      "fiber": 0.6
    },
    "portionGrams": 240,
    "portionName": "1 vaso latte (240ml)"
  },
  {
    "id": "te_verde_matcha_caliente",
    "name": "Té verde matcha caliente",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 12,
      "protein": 1.0,
      "carbs": 1.8,
      "fats": 0.1,
      "fiber": 0.5
    },
    "portionGrams": 200,
    "portionName": "1 tazón matcha (200ml)"
  },
  {
    "id": "te_negro_earl_grey",
    "name": "Té negro earl grey",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 1,
      "protein": 0.0,
      "carbs": 0.2,
      "fats": 0.0,
      "fiber": 0.0
    },
    "portionGrams": 240,
    "portionName": "1 taza (240ml)"
  },
  {
    "id": "infusion_de_manzanilla_con_menta",
    "name": "Infusión de manzanilla con menta",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 1,
      "protein": 0.0,
      "carbs": 0.2,
      "fats": 0.0,
      "fiber": 0.0
    },
    "portionGrams": 240,
    "portionName": "1 taza (240ml)"
  },
  {
    "id": "agua_mineral_gasificada_natural",
    "name": "Agua mineral gasificada natural",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 0,
      "protein": 0.0,
      "carbs": 0.0,
      "fats": 0.0,
      "fiber": 0.0
    },
    "portionGrams": 350,
    "portionName": "1 botella (350ml)"
  },
  {
    "id": "kombucha_fermentada_de_jengibre_y_limon",
    "name": "Kombucha fermentada de jengibre y limón",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 20,
      "protein": 0.2,
      "carbs": 4.5,
      "fats": 0.1,
      "fiber": 0.2
    },
    "portionGrams": 250,
    "portionName": "1 vaso kombucha (250ml)"
  },
  {
    "id": "agua_de_coco_verde_natural_sin_endulzar",
    "name": "Agua de coco verde natural sin endulzar",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 19,
      "protein": 0.7,
      "carbs": 3.7,
      "fats": 0.2,
      "fiber": 1.1
    },
    "portionGrams": 250,
    "portionName": "1 vaso de agua de coco (250ml)"
  },
  {
    "id": "licuado_de_platano_con_leche_entera_y_canela",
    "name": "Licuado de plátano con leche entera y canela",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 95,
      "protein": 3.2,
      "carbs": 16.0,
      "fats": 2.4,
      "fiber": 1.2
    },
    "portionGrams": 300,
    "portionName": "1 vaso licuado (300ml)"
  },
  {
    "id": "licuado_de_fresa_con_avena_y_semillas_de_chia",
    "name": "Licuado de fresa con avena y semillas de chía",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 78,
      "protein": 2.8,
      "carbs": 13.5,
      "fats": 1.8,
      "fiber": 2.5
    },
    "portionGrams": 300,
    "portionName": "1 vaso licuado (300ml)"
  },
  {
    "id": "batido_de_proteina_en_polvo_aislado_con_agua",
    "name": "Batido de proteína en polvo aislado con agua",
    "category": "Snacks, Salsas y Bebidas",
    "per100g": {
      "calories": 120,
      "protein": 26.0,
      "carbs": 1.5,
      "fats": 0.8,
      "fiber": 0.5
    },
    "portionGrams": 35,
    "portionName": "1 scoop con agua (35g)"
  }
];

const FOOD_CATEGORIES = [
  "Todos",
  "Proteínas, Carnes y Mariscos",
  "Cereales, Granos y Tubérculos",
  "Pizzas, Hamburguesas y Comida Rápida",
  "Verduras, Hortalizas y Legumbres",
  "Lácteos, Quesos y Grasas",
  "Postres, Helados y Pan Dulce",
  "Frutas, Semillas y Frutos Secos",
  "Sopas, Ensaladas y Guisados",
  "Snacks, Salsas y Bebidas"
];

/**
 * Calcula nutrientes para una porción dada en gramos y método de cocción
 */
function calculateFoodNutrients(food, grams, cookingMethod = "raw") {
  const g = Number(grams) || 0;
  const ratio = g / 100;
  const p100 = food.per100g || {};

  let extraFat = 0; // en gramos
  if (cookingMethod === "plancha") {
    extraFat = 3.0; // +3g grasa por spray/gotas de aceite (~27 kcal)
  } else if (cookingMethod === "fried" || cookingMethod === "sauteed") {
    extraFat = 11.0; // +11g grasa por cucharada de aceite/mantequilla (~99 kcal)
  }

  const baseFats = +(p100.fats * ratio).toFixed(1);
  const totalFats = +(baseFats + extraFat).toFixed(1);
  const totalProt = +(p100.protein * ratio).toFixed(1);
  const totalCarbs = +(p100.carbs * ratio).toFixed(1);
  const totalFiber = +(p100.fiber * ratio).toFixed(1);
  const baseCals = Math.round(p100.calories * ratio);
  const totalCals = Math.round(baseCals + (extraFat * 9));

  return {
    grams: g,
    cookingMethod,
    addedFatGrams: extraFat,
    calories: totalCals,
    protein: totalProt,
    carbs: totalCarbs,
    fats: totalFats,
    fiber: totalFiber
  };
}

if (typeof window !== "undefined") {
  window.NutriTrackData = {
    DEFAULT_FOODS: MASTER_FOOD_CATALOG,
    FOOD_CATEGORIES,
    calculateFoodNutrients
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    DEFAULT_FOODS: MASTER_FOOD_CATALOG,
    FOOD_CATEGORIES,
    calculateFoodNutrients
  };
}
