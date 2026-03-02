const data = require("./src/data");
console.log("🚀 Data loaded!");
const { generateMission } = require("./src/generator");
console.log(generateMission(data));