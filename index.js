// Read the JSON data from the food.json file
const foodChart = require('./food.json'); 

// Task 1: List all the food items
function listAllFoodItems() {
  const foodItems = [];
  for (const food of foodChart) {
    foodItems.push(food);
  }
  return foodItems;
}

// Task 2: List all the food items with category vegetables
function listVegetableFoodItems() {
  const vegetableFoodItems = [];
  for (const food of foodChart) {
    if (food.category === 'Vegetable') {
      vegetableFoodItems.push(food);
    }
  }
  return vegetableFoodItems;
}

// Task 3: List all the food items with category fruit
function listFruitFoodItems() {
  const fruitFoodItems = [];
  for (const food of foodChart) {
    if (food.category === 'Fruit') {
      fruitFoodItems.push(food);
    }
  }
  return fruitFoodItems;
}

// Task 4: List all the food items with category protein
function listProteinFoodItems() {
  const proteinFoodItems = [];
  for (const food of foodChart) {
    if (food.category === 'Protein') {
      proteinFoodItems.push(food);
    }
  }
  return proteinFoodItems;
}

// Task 5: List all the food items with category nuts
function listNutsFoodItems() {
  const nutsFoodItems = [];
  for (const food of foodChart) {
    if (food.category === 'Nuts') {
      nutsFoodItems.push(food);
    }
  }
  return nutsFoodItems;
}

// Task 6: List all the food items with category grains
function listGrainsFoodItems() {
  const grainsFoodItems = [];
  for (const food of foodChart) {
    if (food.category === 'Grain') {
      grainsFoodItems.push(food);
    }
  }
  return grainsFoodItems;
}



// Task 7: List all the food items with category dairy
function listDairyFoodItems() {
  return foodChart.filter(food => food.category === 'Dairy');
}

// Task 8: List all the food items with calorie above 100
function listFoodItemsAboveCalorie(calorie) {
  return foodChart.filter(food => food.calorie > calorie);
}

// Task 9: List all the food items with calorie below 100
function listFoodItemsBelowCalorie(calorie) {
  return foodChart.filter(food => food.calorie < calorie);
}

// Task 10: List all the food items with highest protein content to lowest
function listFoodItemsByProteinContent() {
  return foodChart.sort((a, b) => b.protiens - a.protiens);
}

// Task 11: List all the food items with lowest cab content to highest
function listFoodItemsByCarbContent() {
  return foodChart.sort((a, b) => a.cab - b.cab);
}


// Task 1: List all the food items
console.log("Task 1: List all the food items");
console.log(listAllFoodItems());

// Task 2: List all the food items with category vegetables
console.log("Task 2: List all the food items with category vegetables");
console.log(listVegetableFoodItems());

// Task 3: List all the food items with category fruit
console.log("Task 3: List all the food items with category fruit");
console.log(listFruitFoodItems());

// Task 4: List all the food items with category protein
console.log("Task 4: List all the food items with category protein");
console.log(listProteinFoodItems());

// Task 5: List all the food items with category nuts
console.log("Task 5: List all the food items with category nuts");
console.log(listNutsFoodItems());

// Task 6: List all the food items with category grains
console.log("Task 6: List all the food items with category grains");
console.log(listGrainsFoodItems());

// Task 7: List all the food items with category dairy
console.log("Task 7: List all the food items with category dairy");
console.log(listDairyFoodItems());

// Task 8: List all the food items with calorie above 100
console.log("Task 8: List all the food items with calorie above 100");
console.log(listFoodItemsAboveCalorie(100));

// Task 9: List all the food items with calorie below 100
console.log("Task 9: List all the food items with calorie below 100");
console.log(listFoodItemsBelowCalorie(100));

// Task 10: List all the food items with highest protein content to lowest
console.log("Task 10: List all the food items with highest protein content to lowest");
console.log(listFoodItemsByProteinContent());

// Task 11: List all the food items with lowest carb content to highest
console.log("Task 11: List all the food items with lowest carb content to highest");
console.log(listFoodItemsByCarbContent());