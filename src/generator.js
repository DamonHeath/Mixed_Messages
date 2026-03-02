/* A file that calls and generates the arrays from data.js, and then chooses randomly
This section can be found: Mixed_Messages/src/generator.js */
const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Builds a full mission string using the data object
const generateMission = (data) => {
  const location = pickRandom(data.locations);
  const alien = pickRandom(data.aliens);
  const threat = pickRandom(data.threats);
  const objective = pickRandom(data.objectives);
  const solution = pickRandom(data.solutions);
  const signOff = pickRandom(data.signOffs);

  return `🚀 GALACTIC MISSION BRIEFING
Location: ${location}

Alert: ${alien} ${threat}.
Objective: You must ${objective}.
Resolution: ${solution}.

${signOff}`;
};

module.exports = { pickRandom, generateMission };