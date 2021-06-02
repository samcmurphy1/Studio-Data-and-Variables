// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const input = require('readline-sync');

let astronautCount = Number(input.question("How many astronauts? "));

let date = "Monday 2019-3-18";
let time = "10:05:04 am";
// let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMasskg = 74842.31;
let totalMasskg = crewMassKg + fuelMassKg + shuttleMasskg;
let fuelTempCelcius = -225;
let fuelLevel = 100;
let weatherStatus = "clear";
let lineBreak = "-------------------------------------";




// Write code to generate the LC04 report here:
console.log(lineBreak)
console.log("> LC04 - LAUNCH CHECKLIST")
console.log(lineBreak)

console.log("Date: " + date)
console.log("Time: " + time)

console.log(lineBreak)
console.log("> ASTRONAUT INFO")
console.log(lineBreak)

console.log("* count: " + astronautCount)
console.log("* status: " + astronautStatus)

console.log(lineBreak)
console.log("> FUEL DATA")
console.log(lineBreak)

console.log("* Fuel temp celcius: " + fuelTempCelcius)
console.log("* Fuel level: " + fuelLevel + "%")

console.log(lineBreak)
console.log("> MASS DATA")
console.log(lineBreak)

console.log("* Crew mass: " + crewMassKg + " kg")
console.log("* Fuel mass: " + fuelMassKg + " kg")
console.log("* Shuttle mass: " + shuttleMasskg + " kg")
console.log("* Total mass: " + totalMasskg + " kg")

console.log(lineBreak)
console.log("> FLIGHT PLAN")
console.log(lineBreak)

console.log("* weather: " + weatherStatus)

console.log(lineBreak)
console.log("> OVERALL STATUS")
console.log(lineBreak)

console.log("* Clear for takeoff: YES")






// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.