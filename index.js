const mission = [
    "While crossing the Crimson Nebula, your ship alarms start screaming.",
    "You land on a frozen moon and discover your fuel cells are missing.",
    "A space station hails you with a message that is definitely a trap."
];

const randomIndex = Math.floor(Math.random() * mission.length)
const data = require("./src/data");

console.log("🚀 Data loaded!");
console.log("🚀 Mission initialising...");
console.log(mission[randomIndex])