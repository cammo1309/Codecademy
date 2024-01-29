// This script will generate a random mythical creature using 4 different randomaly generated data points.

// Declare arrays for message variables
const animals = ["Horse", "Lion", "Eagle", "Wolf", "Tiger", "Bear", "Chicken"];
const bodyParts = ["head", "legs", "tail", "teeth", "soul"];
const actions = ["fly", "breathe fire", "turn invisible", "teleport", "swim up waterfalls"];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomAnimal() {
    return getRandomElement(animals);
}

function getRandomBodyPart() {
    return getRandomElement(bodyParts);
}

function getRandomAction() {
    return getRandomElement(actions);
}

function generateMythicalCreature() {
    let animal1 = getRandomAnimal();
    let animal2 = animal1;
    while (animal2 === animal1) {
        animal2 = getRandomAnimal();
    }

    const bodyPart = getRandomBodyPart();
    const action = getRandomAction();

    // Check if the first animal starts with a vowel
    const vowelRegex = /^[aeiou]/i; // Regex to match vowels (case insensitive)
    const article = vowelRegex.test(animal1) ? 'an' : 'a';

    return `A ${animal1} with the ${bodyPart} of ${article} ${animal2} that can ${action}.`;
}

console.log(generateMythicalCreature());