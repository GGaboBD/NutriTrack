/**
 * NutriTrack Editorial — Módulo "Mi Refrigerador" (Stock Doméstico)
 * Gestión de inventario de cocina para alimentar las recomendaciones culinarias.
 */

(function () {
  "use strict";

  const REFRIGERATOR_CATEGORIES = [
    "Todos",
    "Proteínas",
    "Granos y Pastas",
    "Vegetales",
    "Lácteos y Grasas",
    "Frutas",
    "Condimentos y Salsas"
  ];

  /**
   * Mapea categorías internas del catálogo hacia categorías de cocina
   */
  function mapToKitchenCategory(catName) {
    if (catName.includes("Proteínas")) return "Proteínas";
    if (catName.includes("Cereales") || catName.includes("Granos") || catName.includes("Pastas")) return "Granos y Pastas";
    if (catName.includes("Verduras") || catName.includes("Hortalizas") || catName.includes("Legumbres")) return "Vegetales";
    if (catName.includes("Lácteos") || catName.includes("Quesos") || catName.includes("Grasas")) return "Lácteos y Grasas";
    if (catName.includes("Frutas") || catName.includes("Semillas")) return "Frutas";
    return "Condimentos y Salsas";
  }

  /**
   * Alterna la presencia de un alimento en el refrigerador
   */
  function toggleStockItem(currentStock, foodId) {
    const stockSet = new Set(Array.isArray(currentStock) ? currentStock : []);
    if (stockSet.has(foodId)) {
      stockSet.delete(foodId);
    } else {
      stockSet.add(foodId);
    }
    return Array.from(stockSet);
  }

  /**
   * Verifica si un alimento está presente en el refrigerador
   */
  function isItemInStock(currentStock, foodId) {
    return Array.isArray(currentStock) && currentStock.includes(foodId);
  }

  const NutriTrackRefrigerator = {
    REFRIGERATOR_CATEGORIES,
    mapToKitchenCategory,
    toggleStockItem,
    isItemInStock
  };

  if (typeof window !== "undefined") {
    window.NutriTrackRefrigerator = NutriTrackRefrigerator;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = NutriTrackRefrigerator;
  }
})();
