function calculateCoffeeSupply(age, cupsPerDay, max_age = 80){
    years_left = max_age - age;
    required_cups = years_left * cupsPerDay * 365;
    required_cups  = Math.round(required_cups);
    console.log(`"You will need ${required_cups} cups of coffee to keep
you awake until the age of ${age}.`);
}
calculateCoffeeSupply(56, 3.5);
calculateCoffeeSupply(68, 1.5);
calculateCoffeeSupply(78, 2.5);