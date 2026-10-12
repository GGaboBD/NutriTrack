/**
 * NutriTrack Editorial — Controlador Principal (Amrit Palace Edition)
 * Coordinación reactiva de multiperfil, balance neto, comidas con cocción,
 * edición in-situ, hidratación inteligente, refrigerador y recomendaciones culinarias.
 */

(function () {
  "use strict";

  // Módulos
  const { DEFAULT_FOODS, FOOD_CATEGORIES, calculateFoodNutrients } = window.NutriTrackData;
  const {
    initDB,
    getAllProfiles,
    getActiveProfile,
    setActiveProfileId,
    saveProfile,
    getDayLog,
    saveDayLog,
    getRefrigeratorStock,
    saveRefrigeratorStock,
    getReminderSettings,
    saveReminderSettings
  } = window.NutriTrackDB;
  const {
    calculateTargets,
    calculateExerciseBurn,
    evaluateNetBalance,
    EXERCISE_CATALOG
  } = window.NutriTrackCalculator;
  const {
    WATER_PORTIONS,
    calculateWaterTarget,
    addWaterEntry,
    undoLastWaterEntry,
    initWaterReminders,
    requestNotificationPermission
  } = window.NutriTrackHydration;
  const {
    REFRIGERATOR_CATEGORIES,
    mapToKitchenCategory,
    toggleStockItem,
    isItemInStock
  } = window.NutriTrackRefrigerator;
  const {
    getRecommendations
  } = window.NutriTrackRecommender;

  // Estado Central de la Aplicación
  let state = {
    currentDate: getLocalDateString(),
    currentProfile: null,
    dayLog: null,
    fridgeStock: [],
    activeMobileTab: "journal",
    activeMealForAdd: "almuerzo",
    selectedFoodForAdd: null,
    editingMealItem: null, // { mealKey, itemIndex, item }
    pickerCategory: "Todos",
    pickerSearch: "",
    fridgeCategory: "Todos",
    fridgeSearch: "",
    cookTimePref: "any",
    cookEnergyPref: "any"
  };

  const MEAL_SECTIONS = [
    { key: "desayuno", label: "Desayuno", icon: "🌅" },
    { key: "almuerzo", label: "Almuerzo", icon: "☀️" },
    { key: "cena", label: "Cena", icon: "🌙" },
    { key: "snacks", label: "Snacks / Colaciones", icon: "🍎" }
  ];

  function getLocalDateString(d = new Date()) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  /* ============================================================
     Inicialización
     ============================================================ */
  async function init() {
    await initDB();
    state.currentProfile = await getActiveProfile();
    await loadCurrentDayData();

    setupEventListeners();
    renderAll();

    // Iniciar motor de recordatorios hídricos
    initWaterReminders((msg) => {
      showInAppBanner(msg);
    });

    // PWA Service Worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").catch(e => console.log("SW:", e));
    }
  }

  async function loadCurrentDayData() {
    if (!state.currentProfile) return;
    state.dayLog = await getDayLog(state.currentProfile.id, state.currentDate);
    state.fridgeStock = await getRefrigeratorStock(state.currentProfile.id);
  }

  /* ============================================================
     Renderizado General de la Interfaz
     ============================================================ */
  function renderAll() {
    renderHeaderProfile();
    renderDateBar();
    renderLeftSidebar();
    renderNetCaloricBalance();
    renderExerciseSection();
    renderMealsTimeline();
    renderRecommendations();
  }

  /* ============================================================
     Cabecera & Multiperfil
     ============================================================ */
  function renderHeaderProfile() {
    const prof = state.currentProfile;
    if (!prof) return;

    const avatarEl = document.getElementById("header-profile-avatar");
    const nameEl = document.getElementById("header-profile-name");

    if (avatarEl) avatarEl.textContent = prof.initials || "AV";
    if (nameEl) nameEl.textContent = prof.name;
  }

  function renderDateBar() {
    const labelEl = document.getElementById("date-label-display");
    const inputEl = document.getElementById("date-picker-input");
    const todayStr = getLocalDateString();

    let display = state.currentDate;
    if (state.currentDate === todayStr) {
      display = "Hoy";
    } else {
      const p = state.currentDate.split("-");
      display = `${p[2]}/${p[1]}/${p[0]}`;
    }

    if (labelEl) labelEl.textContent = display;
    if (inputEl) inputEl.value = state.currentDate;
  }

  /* ============================================================
     Columna 1: Biometría, Hidratación & Refrigerador
     ============================================================ */
  function renderLeftSidebar() {
    const prof = state.currentProfile;
    if (!prof) return;

    const targets = calculateTargets(prof);

    // Biometría
    const nameEl = document.getElementById("profile-display-name");
    const metaEl = document.getElementById("profile-meta-summary");
    const goalBadge = document.getElementById("profile-goal-badge");
    const bmrEl = document.getElementById("profile-bmr-display");
    const tdeeEl = document.getElementById("profile-tdee-display");

    if (nameEl) nameEl.textContent = prof.name;
    if (metaEl) metaEl.textContent = `${prof.age}a • ${prof.weight}kg • ${prof.height}cm`;
    if (goalBadge) goalBadge.textContent = targets.goalLabel;
    if (bmrEl) bmrEl.textContent = `${targets.bmr.toLocaleString()} kcal`;
    if (tdeeEl) tdeeEl.textContent = `${targets.tdee.toLocaleString()} kcal`;

    // Hidratación
    renderHydrationWidget();

    // Refrigerador Badge
    const fridgeBadge = document.getElementById("fridge-count-badge");
    if (fridgeBadge) fridgeBadge.textContent = `${state.fridgeStock.length} insumos en cocina`;
  }

  function renderHydrationWidget() {
    const prof = state.currentProfile;
    const log = state.dayLog;
    if (!prof || !log) return;

    // Calcular minutos totales de ejercicio del día
    const exerciseMins = (log.exercises || []).reduce((sum, e) => sum + (e.durationMin || 0), 0);
    const targetWater = calculateWaterTarget(prof.weight, exerciseMins, prof.manualWaterMl);
    const consumed = (log.water && log.water.consumedMl) || 0;

    const bonusEl = document.getElementById("water-exercise-bonus");
    const numEl = document.getElementById("water-consumed-num");
    const tarEl = document.getElementById("water-target-num");
    const fillEl = document.getElementById("water-progress-fill");
    const percentEl = document.getElementById("water-percent-label");
    const remEl = document.getElementById("water-remaining-label");

    const bonusMl = Math.round(exerciseMins * (400 / 45));
    if (bonusEl) bonusEl.textContent = `+${bonusMl} ml ejercicio`;
    if (numEl) numEl.textContent = consumed.toLocaleString();
    if (tarEl) tarEl.textContent = `/ ${targetWater.toLocaleString()} ml`;

    const pct = Math.min(100, Math.round((consumed / targetWater) * 100));
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (percentEl) percentEl.textContent = `${pct}% alcanzado`;

    const remaining = Math.max(0, targetWater - consumed);
    if (remEl) {
      remEl.textContent = remaining === 0 ? "¡Meta hídrica lograda!" : `Faltan ${remaining.toLocaleString()} ml`;
    }
  }

  /* ============================================================
     Columna 2: Balance Calórico Neto
     ============================================================ */
  function renderNetCaloricBalance() {
    const prof = state.currentProfile;
    const log = state.dayLog;
    if (!prof || !log) return;

    const targets = calculateTargets(prof);

    // Sumar calorías y macros consumidas
    let totalConsumed = 0;
    let protSum = 0;
    let carbSum = 0;
    let fatSum = 0;
    let fiberSum = 0;

    Object.keys(log.meals || {}).forEach(k => {
      (log.meals[k] || []).forEach(item => {
        totalConsumed += (item.nutrients?.calories || 0);
        protSum += (item.nutrients?.protein || 0);
        carbSum += (item.nutrients?.carbs || 0);
        fatSum += (item.nutrients?.fats || 0);
        fiberSum += (item.nutrients?.fiber || 0);
      });
    });

    // Sumar calorías quemadas por ejercicio
    const totalBurned = (log.exercises || []).reduce((sum, e) => sum + (e.burnedKcal || 0), 0);

    const balance = evaluateNetBalance(totalConsumed, totalBurned, targets.targetKcal);

    // Actualizar UI
    const targetHdr = document.getElementById("balance-target-header");
    const netNumEl = document.getElementById("net-calories-display");
    const formulaEl = document.getElementById("math-net-formula");
    const fillEl = document.getElementById("net-progress-fill");
    const statusBox = document.getElementById("net-status-box");

    if (targetHdr) targetHdr.textContent = `Meta Neta: ${targets.targetKcal.toLocaleString()} kcal`;
    if (netNumEl) netNumEl.textContent = balance.netKcal.toLocaleString();
    if (formulaEl) formulaEl.textContent = `Consumo: ${totalConsumed.toLocaleString()} • Quema: ${totalBurned.toLocaleString()} kcal`;

    if (fillEl) {
      fillEl.style.width = `${balance.progressPercent}%`;
      fillEl.className = "editorial-progress-fill";
      if (balance.isExceeded) fillEl.classList.add("status-exceeded");
    }

    if (statusBox) {
      statusBox.textContent = balance.statusMessage;
      statusBox.style.color = balance.isExceeded ? "#A63A2B" : "var(--color-espresso)";
    }

    // Cuadrícula de Macros
    document.getElementById("macro-prot-sum").textContent = `${Math.round(protSum)}g`;
    document.getElementById("macro-prot-tar").textContent = `/ ${targets.macros.proteinGrams}g`;

    document.getElementById("macro-carb-sum").textContent = `${Math.round(carbSum)}g`;
    document.getElementById("macro-carb-tar").textContent = `/ ${targets.macros.carbsGrams}g`;

    document.getElementById("macro-fat-sum").textContent = `${Math.round(fatSum)}g`;
    document.getElementById("macro-fat-tar").textContent = `/ ${targets.macros.fatGrams}g`;

    document.getElementById("macro-fiber-sum").textContent = `${Math.round(fiberSum)}g`;
  }

  /* ============================================================
     Ejercicio Físico
     ============================================================ */
  function renderExerciseSection() {
    const log = state.dayLog;
    if (!log) return;

    const listEl = document.getElementById("exercise-entries-list");
    const sumEl = document.getElementById("exercise-burned-sum");
    const items = log.exercises || [];

    const totalBurned = items.reduce((sum, e) => sum + (e.burnedKcal || 0), 0);
    if (sumEl) sumEl.textContent = `${totalBurned.toLocaleString()} kcal quemadas hoy`;

    if (!listEl) return;
    if (items.length === 0) {
      listEl.innerHTML = `<div class="sans-meta" style="padding: 6px 0;">Sin actividad física registrada en la fecha.</div>`;
      return;
    }

    listEl.innerHTML = items.map((ex, idx) => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px solid var(--color-warm-stone);">
        <div>
          <div style="font-size: 13px; font-weight: 600;">${escapeHTML(ex.name)}</div>
          <div class="sans-meta">${ex.durationMin} min • Intensidad ${ex.intensity}</div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <strong style="color: var(--color-saffron-glow); font-size: 14px;">-${ex.burnedKcal} kcal</strong>
          <button type="button" class="btn-micro btn-editorial-ghost" data-delete-exercise="${idx}" style="border:none; color: var(--color-walnut);" title="Eliminar">&times;</button>
        </div>
      </div>
    `).join("");

    listEl.querySelectorAll("[data-delete-exercise]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const idx = Number(btn.dataset.deleteExercise);
        log.exercises.splice(idx, 1);
        await saveDayLog(log);
        renderAll();
      });
    });
  }

  /* ============================================================
     Comidas Diarias & Edición In-Situ
     ============================================================ */
  function renderMealsTimeline() {
    const container = document.getElementById("meals-timeline-container");
    const log = state.dayLog;
    if (!container || !log) return;

    container.innerHTML = "";

    MEAL_SECTIONS.forEach(meal => {
      const items = (log.meals && log.meals[meal.key]) || [];
      const mealCals = items.reduce((s, i) => s + (i.nutrients?.calories || 0), 0);
      const mealProt = items.reduce((s, i) => s + (i.nutrients?.protein || 0), 0);

      const card = document.createElement("section");
      card.className = "editorial-card";
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid var(--color-warm-stone); padding-bottom: 10px; margin-bottom: 12px;">
          <div style="display: flex; align-items: baseline; gap: 8px;">
            <span style="font-size: 18px;">${meal.icon}</span>
            <h3 class="editorial-display heading-sm">${meal.label}</h3>
          </div>
          <div style="text-align: right;">
            <strong class="editorial-display heading-sm" style="font-size: 18px;">${mealCals} kcal</strong>
            <div class="sans-meta">P: ${Math.round(mealProt)}g</div>
          </div>
        </div>

        <div class="meal-items-list" style="margin-bottom: 12px;">
          ${items.length === 0 ? `
            <div class="sans-meta" style="padding: 12px 0;">Sin alimentos registrados.</div>
          ` : items.map((it, idx) => `
            <div class="interactive-meal-item" data-meal="${meal.key}" data-index="${idx}" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 8px; border-bottom: 1px solid rgba(182, 171, 156, 0.4); cursor: pointer; transition: background 0.15s ease;" title="Toca para editar cantidad o cocción">
              <div>
                <div style="font-size: 14px; font-weight: 600; color: var(--color-onyx-warm);">
                  ${escapeHTML(it.name)}
                </div>
                <div class="sans-meta">
                  ${it.portions ? `${it.portions} porc. (${it.grams}g)` : `${it.grams}g`}
                  ${it.cookingMethod && it.cookingMethod !== 'raw' ? ` • ${it.cookingMethod === 'plancha' ? 'a la plancha (+3g grasa)' : 'frito (+11g grasa)'}` : ''}
                </div>
              </div>
              <div style="text-align: right;">
                <span style="font-size: 14px; font-weight: 700;">${it.nutrients?.calories || 0} kcal</span>
                <div class="sans-meta" style="font-size: 10px;">P:${it.nutrients?.protein || 0} C:${it.nutrients?.carbs || 0} G:${it.nutrients?.fats || 0}</div>
              </div>
            </div>
          `).join("")}
        </div>

        <button type="button" class="btn-editorial-ghost btn-micro" data-add-to-meal="${meal.key}" style="width: 100%;">
          + Agregar Alimento a ${meal.label}
        </button>
      `;

      container.appendChild(card);
    });

    // Eventos de Agregar Alimento
    container.querySelectorAll("[data-add-to-meal]").forEach(btn => {
      btn.addEventListener("click", () => {
        openFoodPickerModal(btn.dataset.addToMeal);
      });
    });

    // Eventos de Edición In-Situ
    container.querySelectorAll(".interactive-meal-item").forEach(itemEl => {
      itemEl.addEventListener("click", () => {
        const mealKey = itemEl.dataset.meal;
        const idx = Number(itemEl.dataset.index);
        const item = log.meals[mealKey][idx];
        if (item) openInsituEditModal(mealKey, idx, item);
      });
    });
  }

  /* ============================================================
     Modal 1: Selector de Alimentos
     ============================================================ */
  function openFoodPickerModal(mealKey) {
    state.activeMealForAdd = mealKey;
    const mealMeta = MEAL_SECTIONS.find(m => m.key === mealKey) || MEAL_SECTIONS[1];

    document.getElementById("picker-modal-subtitle").textContent = `Registrando en ${mealMeta.label}`;
    document.getElementById("picker-modal-title").textContent = "Agregar Alimento";

    state.pickerCategory = "Todos";
    state.pickerSearch = "";
    document.getElementById("picker-search-input").value = "";

    renderPickerCategoryPills();
    renderPickerResultsList();

    // Seleccionar primer alimento por defecto
    selectFoodInPicker(DEFAULT_FOODS[0]);

    document.getElementById("modal-food-picker-overlay").classList.add("active");
  }

  function closeFoodPickerModal() {
    document.getElementById("modal-food-picker-overlay").classList.remove("active");
  }

  function renderPickerCategoryPills() {
    const container = document.getElementById("picker-categories-scroll");
    if (!container) return;
    container.innerHTML = FOOD_CATEGORIES.map(cat => `
      <button type="button" class="btn-editorial-ghost btn-micro ${cat === state.pickerCategory ? 'btn-editorial-dark' : ''}" data-cat="${cat}">
        ${cat}
      </button>
    `).join("");

    container.querySelectorAll("[data-cat]").forEach(b => {
      b.addEventListener("click", () => {
        state.pickerCategory = b.dataset.cat;
        renderPickerCategoryPills();
        renderPickerResultsList();
      });
    });
  }

  function renderPickerResultsList() {
    const container = document.getElementById("picker-results-list");
    if (!container) return;

    const q = state.pickerSearch.toLowerCase().trim();
    const filtered = DEFAULT_FOODS.filter(f => {
      const matchCat = state.pickerCategory === "Todos" || f.category === state.pickerCategory;
      const matchQ = !q || f.name.toLowerCase().includes(q) || f.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    }).slice(0, 30); // Limitar a 30 para fluidez inmediata

    if (filtered.length === 0) {
      container.innerHTML = `<div class="sans-meta" style="padding: 12px; text-align: center;">No se encontraron alimentos.</div>`;
      return;
    }

    container.innerHTML = filtered.map(f => `
      <div class="picker-row-item" data-id="${f.id}" style="padding: 8px 12px; border-bottom: 1px solid var(--color-warm-stone); cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-size: 13.5px; font-weight: 600;">${escapeHTML(f.name)}</div>
          <div class="sans-meta">${f.portionName} • ${f.category}</div>
        </div>
        <span style="font-size: 13px; font-weight: 700;">${f.per100g.calories} kcal/100g</span>
      </div>
    `).join("");

    container.querySelectorAll(".picker-row-item").forEach(row => {
      row.addEventListener("click", () => {
        const food = DEFAULT_FOODS.find(f => f.id === row.dataset.id);
        if (food) selectFoodInPicker(food);
      });
    });
  }

  function selectFoodInPicker(food) {
    state.selectedFoodForAdd = food;
    const box = document.getElementById("picker-selected-item-box");
    box.style.display = "block";

    document.getElementById("picker-selected-name").textContent = food.name;
    document.getElementById("picker-selected-def-portion").textContent = `Porción habitual: ${food.portionName} (${food.portionGrams}g)`;

    const gramsInput = document.getElementById("picker-grams-input");
    const portionsInput = document.getElementById("picker-portions-input");
    const methodSelect = document.getElementById("picker-cooking-method");

    gramsInput.value = food.portionGrams;
    portionsInput.value = 1.0;
    methodSelect.value = "raw";

    updatePickerCalculatedValues();
  }

  function updatePickerCalculatedValues() {
    const food = state.selectedFoodForAdd;
    if (!food) return;

    const grams = Number(document.getElementById("picker-grams-input").value) || 0;
    const method = document.getElementById("picker-cooking-method").value;
    const nut = calculateFoodNutrients(food, grams, method);

    document.getElementById("picker-preview-cals").textContent = `${nut.calories} kcal`;
    document.getElementById("picker-preview-prot").textContent = `P: ${nut.protein}g`;
    document.getElementById("picker-preview-carb").textContent = `C: ${nut.carbs}g`;
    document.getElementById("picker-preview-fat").textContent = `G: ${nut.fats}g`;
  }

  async function confirmAddFoodToMeal() {
    const food = state.selectedFoodForAdd;
    const log = state.dayLog;
    if (!food || !log || !state.activeMealForAdd) return;

    const grams = Number(document.getElementById("picker-grams-input").value) || food.portionGrams;
    const portions = Number(document.getElementById("picker-portions-input").value) || 1.0;
    const method = document.getElementById("picker-cooking-method").value;
    const nut = calculateFoodNutrients(food, grams, method);

    const entry = {
      foodId: food.id,
      name: food.name,
      category: food.category,
      grams,
      portions,
      cookingMethod: method,
      nutrients: nut,
      addedAt: Date.now()
    };

    if (!log.meals[state.activeMealForAdd]) {
      log.meals[state.activeMealForAdd] = [];
    }
    log.meals[state.activeMealForAdd].push(entry);

    await saveDayLog(log);
    closeFoodPickerModal();
    renderAll();
    showInAppBanner(`"${food.name}" agregado a ${state.activeMealForAdd}.`);
  }

  /* ============================================================
     Modal 2: Edición In-Situ Obligatoria (Módulo 5)
     ============================================================ */
  function openInsituEditModal(mealKey, itemIndex, item) {
    state.editingMealItem = { mealKey, itemIndex, item };

    document.getElementById("insitu-item-title").textContent = item.name;
    document.getElementById("insitu-grams-input").value = item.grams;
    document.getElementById("insitu-portions-input").value = item.portions || 1;
    document.getElementById("insitu-cooking-method").value = item.cookingMethod || "raw";

    updateInsituCalculations();
    document.getElementById("modal-insitu-overlay").classList.add("active");
  }

  function closeInsituModal() {
    document.getElementById("modal-insitu-overlay").classList.remove("active");
    state.editingMealItem = null;
  }

  function updateInsituCalculations() {
    const edit = state.editingMealItem;
    if (!edit) return;

    const food = DEFAULT_FOODS.find(f => f.id === edit.item.foodId) || {
      per100g: edit.item.nutrients,
      portionGrams: edit.item.grams
    };

    const grams = Number(document.getElementById("insitu-grams-input").value) || 0;
    const method = document.getElementById("insitu-cooking-method").value;
    const nut = calculateFoodNutrients(food, grams, method);

    document.getElementById("insitu-calc-cals").textContent = `${nut.calories} kcal`;
    document.getElementById("insitu-calc-prot").textContent = `P: ${nut.protein}g`;
    document.getElementById("insitu-calc-carb").textContent = `C: ${nut.carbs}g`;
    document.getElementById("insitu-calc-fat").textContent = `G: ${nut.fats}g`;
  }

  async function saveInsituEdit() {
    const edit = state.editingMealItem;
    const log = state.dayLog;
    if (!edit || !log) return;

    const food = DEFAULT_FOODS.find(f => f.id === edit.item.foodId) || {
      per100g: edit.item.nutrients,
      portionGrams: edit.item.grams
    };

    const grams = Number(document.getElementById("insitu-grams-input").value) || edit.item.grams;
    const portions = Number(document.getElementById("insitu-portions-input").value) || 1;
    const method = document.getElementById("insitu-cooking-method").value;
    const nut = calculateFoodNutrients(food, grams, method);

    log.meals[edit.mealKey][edit.itemIndex] = {
      ...edit.item,
      grams,
      portions,
      cookingMethod: method,
      nutrients: nut,
      updatedAt: Date.now()
    };

    await saveDayLog(log);
    closeInsituModal();
    renderAll();
    showInAppBanner(`"${edit.item.name}" actualizado.`);
  }

  async function deleteInsituItem() {
    const edit = state.editingMealItem;
    const log = state.dayLog;
    if (!edit || !log) return;

    log.meals[edit.mealKey].splice(edit.itemIndex, 1);
    await saveDayLog(log);
    closeInsituModal();
    renderAll();
    showInAppBanner(`Alimento eliminado de ${edit.mealKey}.`);
  }

  /* ============================================================
     Modal 3: "Mi Refrigerador" (Inventario Doméstico)
     ============================================================ */
  function openFridgeModal() {
    state.fridgeCategory = "Todos";
    state.fridgeSearch = "";
    document.getElementById("fridge-search-input").value = "";

    renderFridgeCategoryPills();
    renderFridgeItemsGrid();

    document.getElementById("modal-fridge-overlay").classList.add("active");
  }

  function closeFridgeModal() {
    document.getElementById("modal-fridge-overlay").classList.remove("active");
  }

  function renderFridgeCategoryPills() {
    const container = document.getElementById("fridge-categories-pills");
    if (!container) return;
    container.innerHTML = REFRIGERATOR_CATEGORIES.map(cat => `
      <button type="button" class="btn-editorial-ghost btn-micro ${cat === state.fridgeCategory ? 'btn-editorial-dark' : ''}" data-fcat="${cat}">
        ${cat}
      </button>
    `).join("");

    container.querySelectorAll("[data-fcat]").forEach(b => {
      b.addEventListener("click", () => {
        state.fridgeCategory = b.dataset.fcat;
        renderFridgeCategoryPills();
        renderFridgeItemsGrid();
      });
    });
  }

  function renderFridgeItemsGrid() {
    const container = document.getElementById("fridge-items-grid");
    if (!container) return;

    const q = state.fridgeSearch.toLowerCase().trim();
    const stockSet = new Set(state.fridgeStock);

    const filtered = DEFAULT_FOODS.filter(f => {
      const kitchenCat = mapToKitchenCategory(f.category);
      const matchCat = state.fridgeCategory === "Todos" || kitchenCat === state.fridgeCategory;
      const matchQ = !q || f.name.toLowerCase().includes(q);
      return matchCat && matchQ;
    });

    container.innerHTML = filtered.map(f => {
      const inStock = stockSet.has(f.id);
      return `
        <div class="fridge-toggle-item" data-id="${f.id}" style="padding: 8px 10px; border: 1px solid var(--color-warm-stone); background: ${inStock ? 'var(--color-linen)' : 'var(--color-parchment)'}; cursor: pointer; display: flex; justify-content: space-between; align-items: center; border-radius: 3px;">
          <div style="font-size: 12.5px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            ${escapeHTML(f.name)}
          </div>
          <span style="font-size: 14px; font-weight: 700; color: ${inStock ? 'var(--color-saffron-glow)' : 'var(--color-walnut)'};">
            ${inStock ? '✓' : '+'}
          </span>
        </div>
      `;
    }).join("");

    container.querySelectorAll(".fridge-toggle-item").forEach(itemEl => {
      itemEl.addEventListener("click", async () => {
        const id = itemEl.dataset.id;
        state.fridgeStock = toggleStockItem(state.fridgeStock, id);
        await saveRefrigeratorStock(state.currentProfile.id, state.fridgeStock);
        renderFridgeItemsGrid();
        renderLeftSidebar();
        renderRecommendations();
      });
    });
  }

  /* ============================================================
     Columna 3: Recomendador Culinario Heurístico (Módulo 7)
     ============================================================ */
  function renderRecommendations() {
    const container = document.getElementById("recommendations-list-container");
    const prof = state.currentProfile;
    const log = state.dayLog;
    if (!container || !prof || !log) return;

    const targets = calculateTargets(prof);
    let totalConsumed = 0;
    Object.keys(log.meals || {}).forEach(k => {
      (log.meals[k] || []).forEach(i => { totalConsumed += (i.nutrients?.calories || 0); });
    });
    const totalBurned = (log.exercises || []).reduce((s, e) => s + (e.burnedKcal || 0), 0);
    const netCals = totalConsumed - totalBurned;
    const remainingKcal = Math.max(200, targets.targetKcal - netCals);

    const recs = getRecommendations({
      refrigeratorStock: state.fridgeStock,
      remainingKcal,
      timePreference: state.cookTimePref,
      energyLevel: state.cookEnergyPref,
      allergies: prof.allergies,
      allFoods: DEFAULT_FOODS
    });

    container.innerHTML = recs.slice(0, 4).map(rec => {
      const stockBadge = `${rec.matchesStockCount}/${rec.ingredients.length} en casa`;
      return `
        <div class="editorial-card" style="padding: 18px; margin-bottom: 0;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span class="sans-label" style="font-size: 10.5px;">${escapeHTML(rec.category)}</span>
            <span class="sans-meta" style="color: var(--color-saffron-glow); font-weight: 600;">${stockBadge}</span>
          </div>

          <h3 class="editorial-display heading-sm" style="margin: 6px 0 2px 0;">${escapeHTML(rec.name)}</h3>
          <div style="font-size: 15px; font-weight: 700; color: var(--color-onyx-warm);">
            ${rec.nutrients.calories} kcal • P:${rec.nutrients.protein}g C:${rec.nutrients.carbs}g G:${rec.nutrients.fats}g
          </div>

          <p class="sans-meta" style="margin: 6px 0 10px 0; font-size: 12px; line-height: 1.4;">
            💡 <em>${escapeHTML(rec.cognitiveBenefit)}</em>
          </p>

          <div class="sans-meta" style="font-size: 11px; margin-bottom: 8px;">
            ⏱️ ${rec.timeMin} min • 🍳 ${rec.complexity}
          </div>

          <!-- Insumos -->
          <div style="background: var(--color-linen); padding: 8px 10px; margin-bottom: 10px; font-size: 12px;">
            <strong class="sans-label" style="font-size: 10px; display: block; margin-bottom: 4px;">Ingredientes:</strong>
            ${rec.ingredients.map(ing => `
              <div style="display: flex; justify-content: space-between; color: ${ing.inStock ? 'var(--color-onyx-warm)' : 'var(--color-walnut)'};">
                <span>${ing.inStock ? '✓' : '○'} ${escapeHTML(ing.name)} (${ing.label})</span>
                <span>${ing.inStock ? 'Disponible' : 'Comprar'}</span>
              </div>
            `).join("")}
          </div>

          <!-- Acciones -->
          <div style="display: flex; gap: 8px;">
            <a href="${rec.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-editorial-ghost btn-micro" style="flex: 1; text-decoration: none; text-align: center;">
              Ver Receta YouTube &rarr;
            </a>
            <button type="button" class="btn-editorial-dark btn-micro" data-consume-recipe="${rec.id}" style="flex: 1;">
              + Consumir Platillo
            </button>
          </div>
        </div>
      `;
    }).join("");

    container.querySelectorAll("[data-consume-recipe]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const recId = btn.dataset.consumeRecipe;
        const rec = recs.find(r => r.id === recId);
        if (rec) await consumeRecommendedRecipe(rec);
      });
    });
  }

  async function consumeRecommendedRecipe(recipe) {
    const log = state.dayLog;
    if (!log) return;

    // Determinar a qué comida agregar según la hora o almuerzo por defecto
    const currentHour = new Date().getHours();
    let targetMeal = "almuerzo";
    if (currentHour < 11) targetMeal = "desayuno";
    else if (currentHour >= 18) targetMeal = "cena";

    if (!log.meals[targetMeal]) log.meals[targetMeal] = [];

    // Inyectar cada ingrediente calculado a la comida
    recipe.ingredients.forEach(ing => {
      const food = DEFAULT_FOODS.find(f => f.id === ing.foodId) || {
        id: ing.foodId,
        name: ing.name,
        category: "Ingrediente receta",
        per100g: ing.nutrients
      };
      const nut = calculateFoodNutrients(food, ing.grams, "raw");

      log.meals[targetMeal].push({
        foodId: ing.foodId,
        name: `${ing.name} (en ${recipe.name})`,
        category: "Receta curada",
        grams: ing.grams,
        portions: 1,
        cookingMethod: "raw",
        nutrients: nut,
        addedAt: Date.now()
      });
    });

    await saveDayLog(log);
    renderAll();
    showInAppBanner(`¡Platillo "${recipe.name}" registrado en ${targetMeal}!`);
  }

  /* ============================================================
     Modal 4: Gestor Multiperfil & Biometría
     ============================================================ */
  async function openProfileModal() {
    renderProfilesSwitcherList();
    loadActiveProfileIntoForm();
    document.getElementById("modal-profile-overlay").classList.add("active");
  }

  function closeProfileModal() {
    document.getElementById("modal-profile-overlay").classList.remove("active");
  }

  async function renderProfilesSwitcherList() {
    const container = document.getElementById("profiles-switcher-list");
    if (!container) return;

    const all = await getAllProfiles();
    container.innerHTML = all.map(p => {
      const isActive = p.id === state.currentProfile.id;
      return `
        <div class="profile-switch-item" data-id="${p.id}" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; border: 1px solid var(--color-warm-stone); background: ${isActive ? 'var(--color-linen)' : 'var(--color-parchment)'}; cursor: pointer; border-radius: 3px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="profile-avatar-circle" style="width: 24px; height: 24px; font-size: 10px;">${p.initials || 'P'}</div>
            <strong style="font-size: 13px;">${escapeHTML(p.name)}</strong>
          </div>
          <span class="sans-meta">${isActive ? 'Activo ✓' : 'Cambiar'}</span>
        </div>
      `;
    }).join("");

    container.querySelectorAll(".profile-switch-item").forEach(el => {
      el.addEventListener("click", async () => {
        const id = el.dataset.id;
        if (id !== state.currentProfile.id) {
          await setActiveProfileId(id);
          state.currentProfile = await getActiveProfile();
          await loadCurrentDayData();
          renderProfilesSwitcherList();
          loadActiveProfileIntoForm();
          renderAll();
          showInAppBanner(`Cambiado a perfil "${state.currentProfile.name}".`);
        }
      });
    });
  }

  function loadActiveProfileIntoForm() {
    const p = state.currentProfile;
    if (!p) return;

    document.getElementById("prof-name-input").value = p.name;
    document.getElementById("prof-sex-input").value = p.sex;
    document.getElementById("prof-age-input").value = p.age;
    document.getElementById("prof-height-input").value = p.height;
    document.getElementById("prof-weight-input").value = p.weight;
    document.getElementById("prof-activity-input").value = p.activity;
    document.getElementById("prof-goal-input").value = p.goal;
    document.getElementById("prof-manual-kcal-input").value = p.manualKcal || "";
    document.getElementById("prof-allergies-input").value = p.allergies || "Ninguna";

    const wrap = document.getElementById("manual-kcal-wrap");
    wrap.style.display = p.goal === "manual" ? "block" : "none";
  }

  async function handleProfileFormSubmit(e) {
    e.preventDefault();
    const p = state.currentProfile;
    if (!p) return;

    const name = document.getElementById("prof-name-input").value.trim();
    const parts = name.split(/\s+/);
    const initials = (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();

    const updated = {
      ...p,
      name,
      initials,
      sex: document.getElementById("prof-sex-input").value,
      age: Number(document.getElementById("prof-age-input").value),
      height: Number(document.getElementById("prof-height-input").value),
      weight: Number(document.getElementById("prof-weight-input").value),
      activity: document.getElementById("prof-activity-input").value,
      goal: document.getElementById("prof-goal-input").value,
      manualKcal: Number(document.getElementById("prof-manual-kcal-input").value) || null,
      allergies: document.getElementById("prof-allergies-input").value.trim() || "Ninguna"
    };

    await saveProfile(updated);
    state.currentProfile = updated;
    closeProfileModal();
    renderAll();
    showInAppBanner("Biometría y metas guardadas.");
  }

  async function handleCreateNewProfile() {
    const newName = prompt("Nombre para el nuevo perfil:", "Nuevo Comensal");
    if (!newName || !newName.trim()) return;

    const parts = newName.trim().split(/\s+/);
    const initials = (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();

    const newProfile = {
      id: "profile_" + Date.now(),
      name: newName.trim(),
      initials,
      sex: "female",
      age: 26,
      height: 165,
      weight: 60,
      activity: "moderate",
      goal: "deficit_moderate",
      manualKcal: null,
      manualWaterMl: null,
      allergies: "Ninguna",
      createdAt: Date.now()
    };

    await saveProfile(newProfile);
    await setActiveProfileId(newProfile.id);
    state.currentProfile = newProfile;
    await loadCurrentDayData();
    renderProfilesSwitcherList();
    loadActiveProfileIntoForm();
    renderAll();
    showInAppBanner(`¡Perfil "${newName}" creado y activado!`);
  }

  /* ============================================================
     Modal 5: Registrar Ejercicio Físico
     ============================================================ */
  function openExerciseModal() {
    updateExercisePreviewBurn();
    document.getElementById("modal-exercise-overlay").classList.add("active");
  }

  function closeExerciseModal() {
    document.getElementById("modal-exercise-overlay").classList.remove("active");
  }

  function updateExercisePreviewBurn() {
    const prof = state.currentProfile;
    if (!prof) return;

    const type = document.getElementById("exercise-type-select").value;
    const dur = Number(document.getElementById("exercise-duration-input").value) || 0;
    const intensity = document.getElementById("exercise-intensity-select").value;

    const calc = calculateExerciseBurn(type, dur, prof.weight, intensity);
    document.getElementById("exercise-preview-burned").textContent = `-${calc.burnedKcal} kcal`;
  }

  async function confirmAddExercise() {
    const prof = state.currentProfile;
    const log = state.dayLog;
    if (!prof || !log) return;

    const type = document.getElementById("exercise-type-select").value;
    const dur = Number(document.getElementById("exercise-duration-input").value) || 0;
    const intensity = document.getElementById("exercise-intensity-select").value;

    const calc = calculateExerciseBurn(type, dur, prof.weight, intensity);

    if (!log.exercises) log.exercises = [];
    log.exercises.push({
      id: "ex_" + Date.now(),
      exerciseKey: type,
      name: calc.name,
      durationMin: dur,
      intensity,
      burnedKcal: calc.burnedKcal,
      createdAt: Date.now()
    });

    await saveDayLog(log);
    closeExerciseModal();
    renderAll();
    showInAppBanner(`Ejercicio "${calc.name}" (-${calc.burnedKcal} kcal) añadido al balance.`);
  }

  /* ============================================================
     Banner y Mensajes de Acompañamiento
     ============================================================ */
  let bannerTimer = null;
  function showInAppBanner(msg) {
    const banner = document.getElementById("in-app-reminder-banner");
    const textEl = document.getElementById("in-app-reminder-text");
    if (!banner || !textEl) return;

    textEl.textContent = msg;
    banner.style.display = "flex";
    clearTimeout(bannerTimer);
    bannerTimer = setTimeout(() => {
      banner.style.display = "none";
    }, 4500);
  }

  function escapeHTML(str) {
    return (str || "").replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  /* ============================================================
     Event Listeners Globales
     ============================================================ */
  function setupEventListeners() {
    // 1. Selector de Perfil desde Header
    document.getElementById("header-profile-trigger")?.addEventListener("click", openProfileModal);
    document.getElementById("btn-open-profile-modal")?.addEventListener("click", openProfileModal);
    document.getElementById("btn-close-profile-modal")?.addEventListener("click", closeProfileModal);
    document.getElementById("profile-editor-form")?.addEventListener("submit", handleProfileFormSubmit);
    document.getElementById("btn-create-new-profile-trigger")?.addEventListener("click", handleCreateNewProfile);
    document.getElementById("prof-goal-input")?.addEventListener("change", (e) => {
      document.getElementById("manual-kcal-wrap").style.display = e.target.value === "manual" ? "block" : "none";
    });

    // 2. Navegación de Fecha
    document.getElementById("btn-prev-day")?.addEventListener("click", () => changeDateOffset(-1));
    document.getElementById("btn-next-day")?.addEventListener("click", () => changeDateOffset(1));
    document.getElementById("btn-calendar-trigger")?.addEventListener("click", () => {
      document.getElementById("date-picker-input")?.showPicker();
    });
    document.getElementById("date-picker-input")?.addEventListener("change", async (e) => {
      if (e.target.value) {
        state.currentDate = e.target.value;
        await loadCurrentDayData();
        renderAll();
      }
    });

    // 3. Hidratación
    document.querySelectorAll("[data-water]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const ml = Number(btn.dataset.water);
        addWaterEntry(state.dayLog, ml, `+${ml} ml`);
        await saveDayLog(state.dayLog);
        renderLeftSidebar();
        showInAppBanner(`+${ml} ml de agua agregados.`);
      });
    });

    document.getElementById("btn-add-custom-water")?.addEventListener("click", async () => {
      const input = document.getElementById("input-custom-water");
      const ml = Number(input?.value);
      if (ml > 0) {
        addWaterEntry(state.dayLog, ml, `+${ml} ml`);
        await saveDayLog(state.dayLog);
        if (input) input.value = "";
        renderLeftSidebar();
        showInAppBanner(`+${ml} ml de agua agregados.`);
      }
    });

    document.getElementById("btn-undo-water")?.addEventListener("click", async () => {
      undoLastWaterEntry(state.dayLog);
      await saveDayLog(state.dayLog);
      renderLeftSidebar();
      showInAppBanner("Último ingreso de agua deshecho.");
    });

    document.getElementById("toggle-water-notifications")?.addEventListener("change", async (e) => {
      if (e.target.checked) {
        const granted = await requestNotificationPermission();
        if (granted) {
          await saveReminderSettings({ enabled: true, intervalMin: 90, startHour: 8, endHour: 22 });
          showInAppBanner("Recordatorios de agua activos cada 90 minutos.");
        } else {
          e.target.checked = false;
          showInAppBanner("Permiso de notificaciones no concedido. Usaremos avisos en pantalla.");
        }
      } else {
        await saveReminderSettings({ enabled: false, intervalMin: 90, startHour: 8, endHour: 22 });
        showInAppBanner("Recordatorios de agua desactivados.");
      }
    });

    // 4. Modal de Alimentos (Agregar)
    document.getElementById("btn-close-food-picker")?.addEventListener("click", closeFoodPickerModal);
    document.getElementById("picker-search-input")?.addEventListener("input", (e) => {
      state.pickerSearch = e.target.value;
      renderPickerResultsList();
    });
    document.getElementById("picker-grams-input")?.addEventListener("input", (e) => {
      const g = Number(e.target.value) || 0;
      const def = state.selectedFoodForAdd?.portionGrams || 100;
      document.getElementById("picker-portions-input").value = +(g / def).toFixed(2);
      updatePickerCalculatedValues();
    });
    document.getElementById("picker-portions-input")?.addEventListener("input", (e) => {
      const p = Number(e.target.value) || 0;
      const def = state.selectedFoodForAdd?.portionGrams || 100;
      document.getElementById("picker-grams-input").value = Math.round(p * def);
      updatePickerCalculatedValues();
    });
    document.getElementById("picker-cooking-method")?.addEventListener("change", updatePickerCalculatedValues);
    document.getElementById("btn-confirm-add-food")?.addEventListener("click", confirmAddFoodToMeal);

    // 5. Modal de Edición In-Situ
    document.getElementById("btn-close-insitu")?.addEventListener("click", closeInsituModal);
    document.getElementById("insitu-grams-input")?.addEventListener("input", (e) => {
      const g = Number(e.target.value) || 0;
      const def = state.editingMealItem?.item.nutrients?.grams || 100;
      document.getElementById("insitu-portions-input").value = +(g / def).toFixed(2);
      updateInsituCalculations();
    });
    document.getElementById("insitu-portions-input")?.addEventListener("input", (e) => {
      const p = Number(e.target.value) || 0;
      const def = state.editingMealItem?.item.nutrients?.grams || 100;
      document.getElementById("insitu-grams-input").value = Math.round(p * def);
      updateInsituCalculations();
    });
    document.getElementById("insitu-cooking-method")?.addEventListener("change", updateInsituCalculations);
    document.getElementById("btn-save-insitu")?.addEventListener("click", saveInsituEdit);
    document.getElementById("btn-delete-insitu")?.addEventListener("click", deleteInsituItem);

    // 6. Modal Refrigerador
    document.getElementById("btn-open-fridge-modal")?.addEventListener("click", openFridgeModal);
    document.getElementById("btn-close-fridge")?.addEventListener("click", closeFridgeModal);
    document.getElementById("btn-close-fridge-done")?.addEventListener("click", closeFridgeModal);
    document.getElementById("fridge-search-input")?.addEventListener("input", (e) => {
      state.fridgeSearch = e.target.value;
      renderFridgeItemsGrid();
    });

    // 7. Modal Ejercicio
    document.getElementById("btn-open-exercise-modal")?.addEventListener("click", openExerciseModal);
    document.getElementById("btn-close-exercise")?.addEventListener("click", closeExerciseModal);
    document.getElementById("exercise-type-select")?.addEventListener("change", updateExercisePreviewBurn);
    document.getElementById("exercise-duration-input")?.addEventListener("input", updateExercisePreviewBurn);
    document.getElementById("exercise-intensity-select")?.addEventListener("change", updateExercisePreviewBurn);
    document.getElementById("btn-confirm-add-exercise")?.addEventListener("click", confirmAddExercise);

    // 8. Check-in Contextual Culinario
    document.getElementById("select-cook-time")?.addEventListener("change", (e) => {
      state.cookTimePref = e.target.value;
      renderRecommendations();
    });
    document.getElementById("select-cook-energy")?.addEventListener("change", (e) => {
      state.cookEnergyPref = e.target.value;
      renderRecommendations();
    });

    // 9. Banner Dismiss
    document.getElementById("btn-dismiss-reminder")?.addEventListener("click", () => {
      document.getElementById("in-app-reminder-banner").style.display = "none";
    });

    // 10. Mobile Bottom Tabs
    document.querySelectorAll(".nav-tab-btn").forEach(tabBtn => {
      tabBtn.addEventListener("click", () => {
        const tab = tabBtn.dataset.tab;
        switchMobileTab(tab);
      });
    });
  }

  function switchMobileTab(tabKey) {
    state.activeMobileTab = tabKey;
    document.querySelectorAll(".nav-tab-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.tab === tabKey);
    });

    document.querySelectorAll(".tab-view-content").forEach(el => {
      el.classList.remove("active");
    });

    const target = document.getElementById(`tab-view-${tabKey}`);
    if (target) {
      target.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  async function changeDateOffset(offset) {
    const d = new Date(state.currentDate + "T12:00:00");
    d.setDate(d.getDate() + offset);
    state.currentDate = getLocalDateString(d);
    await loadCurrentDayData();
    renderAll();
  }

  // Ejecución
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
