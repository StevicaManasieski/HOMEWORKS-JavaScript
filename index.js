var year = parseInt(prompt("Enter a year:"));
var zodiac = (year - 4) % 12;

if (zodiac === 0) {
    console.log("Rat");
} else if (zodiac === 1) {
    console.log("Ox");
} else if (zodiac === 2) {
    console.log("Tiger");
} else if (zodiac === 3) {
    console.log("Rabbit");
} else if (zodiac === 4) {
    console.log("Dragon");
} else if (zodiac === 5) {
    console.log("Snake");
} else if (zodiac === 6) {
    console.log("Horse");
} else if (zodiac === 7) {
    console.log("Goat");
} else if (zodiac === 8) {
    console.log("Monkey");
} else if (zodiac === 9) {
    console.log("Rooster");
} else if (zodiac === 10) {
    console.log("Dog");
} else if (zodiac === 11) {
    console.log("Pig");
} else {
    console.log("Invalid year entered.");
}


var year = parseInt(prompt("Enter a year:"));
var zodiac = (year - 4) % 12;

var zodiacSign =
zodiac === 0 ? "Rat" :
zodiac === 1 ? "Ox" :
zodiac === 2 ? "Tiger" :
zodiac === 3 ? "Rabbit" :
zodiac === 4 ? "Dragon" :
zodiac === 5 ? "Snake" :
zodiac === 6 ? "Horse" :
zodiac === 7 ? "Goat" :
zodiac === 8 ? "Monkey" :
zodiac === 9 ? "Rooster" :
zodiac === 10 ? "Dog" :
zodiac === 11 ? "Pig" :
"Invalid year entered." ;
console.log(zodiacSign) ;


var year = parseInt(prompt("Enter a year:"));
var zodiac = (year - 4) % 12;

let zodiacSign;
 
switch (zodiac) {
    case 0:
    zodiacSign = "Rat";
    break;
    case 1:
    zodiacSign = "Ox";
    break;
    case 2:
    zodiacSign = "Tiger";
    break;
    case 3:
    zodiacSign = "Rabbit";
    break;
    case 4:
    zodiacSign = "Dragon";
    break;
    case 5:
    zodiacSign = "Snake";
    break;
    case 6:
    zodiacSign = "Horse";
    break;
    case 7:
    zodiacSign + "Goat"
    break;
    case 8:
    zodiacSign = "Monkey";
    break;
    case 9:
    zodiacSign = "Rooster";
    break;
    case 10:
    zodiacSign = "Dog";
    break;
    case 11:
    zodiacSign = "Pig";
    break;
    default:
        zodiacSign = "Invalid year entered.";

}

console.log(zodiacSign);
