// Read the JSON data from the food.json file
// const foodChart = require('./food.json'); 

const foodChart =[
  {
    "id": 1,
    "foodname": "Apple",
    "calorie": 95,
    "category": "Fruit",
    "protiens": 0.3,
    "cab": 25
  },
  {
    "id": 2,
    "foodname": "Banana",
    "calorie": 105,
    "category": "Fruit",
    "protiens": 1.3,
    "cab": 27
  },
  {
    "id": 3,
    "foodname": "Orange",
    "calorie": 62,
    "category": "Fruit",
    "protiens": 1.2,
    "cab": 15
  },
  {
    "id": 4,
    "foodname": "Pear",
    "calorie": 95,
    "category": "Fruit",
    "protiens": 0.5,
    "cab": 25
  },
  {
    "id": 5,
    "foodname": "Grapefruit",
    "calorie": 42,
    "category": "Fruit",
    "protiens": 1.1,
    "cab": 11
  },
  {
    "id": 6,
    "foodname": "Strawberry",
    "calorie": 46,
    "category": "Fruit",
    "protiens": 1.5,
    "cab": 10
  },
  {
    "id": 7,
    "foodname": "Blueberry",
    "calorie": 52,
    "category": "Fruit",
    "protiens": 1.1,
    "cab": 14
  },
  {
    "id": 8,
    "foodname": "Raspberry",
    "calorie": 52,
    "category": "Fruit",
    "protiens": 1.4,
    "cab": 15
  },
  {
    "id": 9,
    "foodname": "Broccoli",
    "calorie": 34,
    "category": "Vegetable",
    "protiens": 3.3,
    "cab": 5
  },
  {
    "id": 10,
    "foodname": "Cauliflower",
    "calorie": 25,
    "category": "Vegetable",
    "protiens": 2.6,
    "cab": 5
  },
  {
    "id": 11,
    "foodname": "Green Beans",
    "calorie": 31,
    "category": "Vegetable",
    "protiens": 2.4,
    "cab": 4
  },
  {
    "id": 12,
    "foodname": "Asparagus",
    "calorie": 20,
    "category": "Vegetable",
    "protiens": 2.2,
    "cab": 2
  },
  {
    "id": 13,
    "foodname": "Spinach",
    "calorie": 23,
    "category": "Vegetable",
    "protiens": 3.5,
    "cab": 4
  },
  {
    "id": 14,
    "foodname": "Kale",
    "calorie": 33,
    "category": "Vegetable",
    "protiens": 4.3,
    "cab": 7
  },
  {
    "id": 15,
    "foodname": "Sweet Potato",
    "calorie": 103,
    "category": "Vegetable",
    "protiens": 2,
    "cab": 27
  },
  {
    "id": 16,
    "foodname": "Potato",
    "calorie": 161,
    "category": "Vegetable",
    "protiens": 4.3,
    "cab": 37
  },
  {"id": 17,
    "foodname": "Carrot",
    "calorie": 41,
    "category": "Vegetable",
    "protiens": 0.9,
    "cab": 9
  },
  {
    "id": 18,
    "foodname": "Onion",
    "calorie": 40,
    "category": "Vegetable",
    "protiens": 1.4,
    "cab": 9
  },
  {
    "id": 19,
    "foodname": "Egg",
    "calorie": 77,
    "category": "Protein",
    "protiens": 6.3,
    "cab": 0.5
  },
  {
    "id": 20,
    "foodname": "Chicken Breast",
    "calorie": 165,
    "category": "Protein",
    "protiens": 31,
    "cab": 0
  },
  {
    "id": 21,
    "foodname": "Salmon",
    "calorie": 206,
    "category": "Protein",
    "protiens": 22,
    "cab": 0
  },
  {
    "id": 22,
    "foodname": "Tuna",
    "calorie": 179,
    "category": "Protein",
    "protiens": 39,
    "cab": 0
  },
  {
    "id": 23,
    "foodname": "Beef",
    "calorie": 250,
    "category": "Protein",
    "protiens": 26,
    "cab": 0
  },
  {
    "id": 24,
    "foodname": "Pork",
    "calorie": 242,
    "category": "Protein",
    "protiens": 26,
    "cab": 0
  },
  {
    "id": 25,
    "foodname": "Lamb",
    "calorie": 294,
    "category": "Protein",
    "protiens": 25,
    "cab": 0
  },
  {
    "id": 26,
    "foodname": "Shrimp",
    "calorie": 85,
    "category": "Protein",
    "protiens": 20,
    "cab": 0.2
  },
  {
    "id": 27,
    "foodname": "Quinoa",
    "calorie": 120,
    "category": "Grain",
    "protiens": 4.4,
    "cab": 21
  },
  {
    "id": 28,
    "foodname": "Brown Rice",
    "calorie": 216,
    "category": "Grain",
    "protiens": 4.5,
    "cab": 45
  },
  {
    "id": 29,
    "foodname": "Oats",
    "calorie": 389,
    "category": "Grain",
    "protiens": 16.9,
    "cab": 66
  },
  {
    "id": 30,
    "foodname": "Quinoa",
    "calorie": 120,
    "category": "Grain",
    "protiens": 4.4,
    "cab": 21
  },
  {
    "id": 31,
    "foodname": "Bread",
    "calorie": 265,
    "category": "Grain",
    "protiens": 9.4,
    "cab": 49
  },
  {
    "id": 32,
    "foodname": "Pasta",
    "calorie": 131,
    "category": "Grain",
    "protiens": 5.5,
    "cab": 26
  },
  {
    "id": 33,
    "foodname": "Milk",
    "calorie": 60,
    "category": "Dairy",
    "protiens": 3.2,
    "cab": 5.1
  },
  {
    "id": 34,
    "foodname": "Cheese",
    "calorie": 402,
    "category": "Dairy",
    "protiens": 25,
    "cab": 2.4
  },
  {
    "id": 35,
    "foodname": "Yogurt",
    "calorie": 59,
    "category": "Dairy",
    "protiens": 3.5,
    "cab": 5
  },
  {
    "id": 36,
    "foodname": "Butter",
    "calorie": 717,
    "category": "Dairy",
    "protiens": 0.9,
    "cab": 0.1
  },
  {
    "id": 37,
    "foodname": "Almonds",
    "calorie": 579,
    "category": "Nuts",
    "protiens": 21,
    "cab": 22
  },
  {
    "id": 38,
    "foodname": "Walnuts",
    "calorie": 654,
    "category": "Nuts",
    "protiens": 15,
    "cab": 14
  },
  {
    "id": 39,
    "foodname": "Peanuts",
    "calorie": 567,
    "category": "Nuts",
    "protiens": 26,
    "cab": 16
  },
  {
    "id": 40,
    "foodname": "Cashews",
    "calorie": 553,
    "category": "Nuts",
    "protiens": 18,
    "cab": 30
  }
]

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
  const dairyFoodItems = [];
  for (const food of foodChart) {
    if (food.category === 'Dairy') {
      dairyFoodItems.push(food);
    }
  }
  return dairyFoodItems;
}

// Task 8: List all the food items with calorie above 100
function listFoodItemsAboveCalorie(calorie) {
  const foodItemsAboveCalorie = [];
  for (const food of foodChart) {
    if (food.calorie > calorie) {
      foodItemsAboveCalorie.push(food);
    }
  }
  return foodItemsAboveCalorie;
}

// Task 9: List all the food items with calorie below 100
function listFoodItemsBelowCalorie(calorie) {
  const foodItemsBelowCalorie = [];
  for (const food of foodChart) {
    if (food.calorie < calorie) {
      foodItemsBelowCalorie.push(food);
    }
  }
  return foodItemsBelowCalorie;
}

// Task 10: List all the food items with highest protein content to lowest
function listFoodItemsByProteinContent() {
  const sortedFoodItems = foodChart.slice().sort((a, b) => b.protiens - a.protiens);
  return sortedFoodItems;
}

// Task 11: List all the food items with lowest carb content to highest
function listFoodItemsByCarbContent() {
  const sortedFoodItems = foodChart.slice().sort((a, b) => a.cab - b.cab);
  return sortedFoodItems;
}

// Get references to the pre elements
const task1Pre = document.getElementById('task1');
const task2Pre = document.getElementById('task2');
const task3Pre = document.getElementById('task3');
const task4Pre = document.getElementById('task4');
const task5Pre = document.getElementById('task5');
const task6Pre = document.getElementById('task6');
const task7Pre = document.getElementById('task7');
const task8Pre = document.getElementById('task8');
const task9Pre = document.getElementById('task9');
const task10Pre = document.getElementById('task10');
const task11Pre = document.getElementById('task11');

// Execute the tasks and display the results
task1Pre.textContent = JSON.stringify(listAllFoodItems(), null, 2);
task2Pre.textContent = JSON.stringify(listVegetableFoodItems(), null, 2);
task3Pre.textContent = JSON.stringify(listFruitFoodItems(), null, 2);
task4Pre.textContent = JSON.stringify(listProteinFoodItems(), null, 2);
task5Pre.textContent = JSON.stringify(listNutsFoodItems(), null, 2);
task6Pre.textContent = JSON.stringify(listGrainsFoodItems(), null, 2);
task7Pre.textContent = JSON.stringify(listDairyFoodItems(), null, 2);
task8Pre.textContent = JSON.stringify(listFoodItemsAboveCalorie(100), null, 2);
task9Pre.textContent = JSON.stringify(listFoodItemsBelowCalorie(100), null, 2);
task10Pre.textContent = JSON.stringify(listFoodItemsByProteinContent(), null, 2);
task11Pre.textContent = JSON.stringify(listFoodItemsByCarbContent(), null, 2);
