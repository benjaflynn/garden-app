// prompt user for season and desired type of plant. immediately change the user input to a lowercase string to compare against the database
let season = prompt("What season would you like advice for?").toLowerCase(); 
let plantType = prompt("Would you like to plant a flower or a vegetable?").toLowerCase();

// this variable holds gardening advice. as the advice changes based on season and plant type, it starts off as an empty string
let advice = "";

// compare season input against the database of advice for summer or winter; if a match is found, change the advice variable to the correct advice; if no match is found, display that there is no advice available
if (season === "summer") {
    advice += "Water your plants regularly and provide some shade.\n";
} else if (season === "winter") {
    advice += "Protect your plants from frost with covers.\n";
} else {
    advice += "No advice for this season.\n";
}

// compare plant type input against the database of advice for flowers or vegetables; if a match is found, add the corresponding advice to the variable; else display that there is no advice available
if (plantType === "flower") {
    advice += "Use fertiliser to encourage blooms.";
} else if (plantType === "vegetable") {
    advice += "Keep an eye out for pests!";
} else {
    advice += "No advice for this type of plant.";
}

// display the generated advice to the console for the user to see
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.