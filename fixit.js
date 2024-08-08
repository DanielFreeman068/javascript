const drinks = [
  "Soda",
  "Coffee",
  "Lemonade",
  "Iced tea",
  "Juice",
  "Milkshake",
  "Water",
  "Milk",
  "Beer",
  "Martini",
  "Margarita",
  "Wine",
  "Daiquari",
];

//did not filter correctly with startsWith as well as a few syntax errors or make a function properly
// let mDrinks = drinks.filter(drinks = return drinks == "M...")
let mDrinks = drinks.filter((drinks) => {
  return drinks.startsWith("M")
})
console.log(mDrinks)
// Expected Outcome
// mDrinks = ['Milkshake', 'Milk', 'Martini', 'Margarita']

/////////////////////////////////////////////////////////////////////
const colors = [
  "red",
  "black",
  "white",
  "blue",
  "purple",
  "orange",
  "green",
  "yellow",
];

// let newArray = colors.map((index) => {
//   {color, index;}
// });
//added color to the parameter, moved the semi colon after index on line 39 to the end of the function, and lastly returned color and index
let newArray = colors.map((color, index) => {
  return {color, index};
});
console.log(newArray)

// Expected Outcome
// [
//   { color: "red", index: 0 },
//   { color: "black", index: 1 },
//   { color: "white", index: 2 },
//   { color: "blue", index: 3 },
//   { color: "purple", index: 4 },
//   { color: "orange", index: 5 }
// ];

///////////////////////////////////////////////////////////

//changed const to let in line 60 since we are changing the array, added the capitalize function which finds the first letter of the word and capitalizes it then adds it back, then returned pets after running it through the function
let pets = ["snake", "dog", "cat", "fish", "lizard", "bird", "rabbit"];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
pets = pets.map((pet) => {
  return capitalize(pet);
})
console.log(pets)
// pets = pets.map((pet) => {
//   pets = pet.capitalize();
// });


// Expected Outcome
// pets = ["Snake", "Dog", "Cat", "Fish", "Lizard", "Bird", "Rabbit"];
///////////////////////////////////////////////////////////////

