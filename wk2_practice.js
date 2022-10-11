//testing if statements 
let firstName = 'Kris';

if (firstName == 'Kristina') {
    console.log('Hello Kristina');
} else {
    console.log('Hey ' + firstName);
}

let lastName = 'Roi';

if (lastName == 'Roe') {
    console.log('Welcome back');
} else {
    console.log('Who are you');
}

/*hi this is a longer comment to test out 
if this multi comment block works*/

console.log('Hello world');

let ageRequiredDrive = 16;
let currentAge = 14;
if (currentAge >= ageRequiredDrive) {
    console.log('This person can drive');
} else {
    console.log('This person cannot drive');
}

//testing if statements 
let costOfEggs = 1.20;
let numberOfDozensToPurchase = 0;
if (costOfEggs > 3) {
    numberOfDozensToPurchase = 1;
} else if (costOfEggs > 2) {
    numberOfDozensToPurchase = 2;
} else if (costOfEggs > 1) {
    numberOfDozensToPurchase = 3;
} else {
    numberOfDozensToPurchase = 4;
}
console.log('I will buy ' + numberOfDozensToPurchase + ' dozen eggs.');

//testing more conditionls 
let costOfMilk = 2;

if (costOfMilk < 3) {
    console.log('I will buy one gallon');
} else if (costOfMilk < 2) {
    console.log('I will buy two gallons');
} else if (costOfMilk < 1) {
    console.log('I will buy 3 gallons');
} else {
    console.log('I will not buy any gallong of milk today');
}

//another one 
let costOfDog = 600;

if (costOfDog < 100) {
    console.log('I will purchase a dog');
} else if (costOfDog < 200) {
    console.log('I will buy a dog but be hesitant');
} else if (costOfDog < 300) {
    console.log('I am starting to break the bank');
} else if (costOfDog < 400) {
    console.log('Unthinkable');
} else {
    console.log('I will hold off owning a dog');
}


//alternative if statement
let tofuCost = .79;

if (tofuCost > 3) {
    console.log('I will not buy any');
} else if (tofuCost > 2) {
    console.log('I will get one tofu box');
} else if (tofuCost > 1) {
    console.log('I will buy 4 tofu boxes');
} else {
    console.log('I can only afford two boxes');
}

//the practice never ends! 
let wigCost = 450;

if (wigCost < 400) {
    console.log('I will buy it now');
} else if (wigCost < 600) {
    console.log('I will buy it with some hesitations');
} else if (wigCost < 1000) {
    console.log('I will wait until it is gifted to me');
} else {
    console.log('I will probably never own this one');
}

//testing switch statements

let grade = 'default';

switch (grade) {
    case 'A':
        console.log('90-100');
        break;
    case 'B':
        console.log('80-89');
        break;
    case 'C':
        console.log('70-79');
        break;
    case 'D':
        console.log('60-69');
        break;
    default:
        console.log('0-59');
}

//testing for while loops 

let cupsOfFlour = 0;
while (cupsOfFlour < 2) {
    console.log('Scooping a cup of  flour into the bowl');
    cupsOfFlour += 1;
    console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');
}

let tbsOfVinegar = 0;
while (tbsOfVinegar < 2) {
    console.log('Adding one tablespoon of vinegar into the bowl');
    tbsOfVinegar += 1;
    console.log('There are ' + tbsOfVinegar + ' tablesppons of vinegar in this bowl');
}

let numberOfEggs = 0;
while (numberOfEggs < 3) {
    console.log('Cracking an egg into the bowl');
    numberOfEggs += 1;
    console.log('There are ' + numberOfEggs + ' eggs in the bowl');
}

let poundsOfPork = 0;
while (poundsOfPork < 1.5) {
    console.log('Addding half a pound of pork');
    poundsOfPork += .5;
    console.log('There are ' + poundsOfPork + ' pounds of pork in the bowl');
}

//testing for loop
for (let cupsOfSoySauce = 0; cupsOfSoySauce < 2; cupsOfSoySauce++) {
    console.log('Pouring a cup of soy sauce into the bowl');
    console.log('There are ' + cupsOfSoySauce + ' cups of soy sauce in the bowl');
}

for (let tspOfSugar = 0; tspOfSugar < 2; tspOfSugar++) {
    console.log('Adding another teaspoon of sugar');
    console.log('There are ' + tspOfSugar + ' many teaspooons of sugar');
}


for (let chocolateSquares = 0; chocolateSquares < 5; chocolateSquares++) {
    console.log('Adding a chocolate square into the recipe');
    console.log('There are ' + chocolateSquares + ' many chocolate squares in this recipe');
}

//for loop with i variable and testing numbers 
for (let i = 0; i < 9; i++) {
    console.log(i);
}

//another numbers for loop practice 
for (let i = 0; i < 20; i++) {
    if (i % 10 == 0) {
        console.log(i);
    }
}

//from 0-99, only display dnumbers ddivisible by 3 
for (let i = 0; i < 100; i++) {
    if (i % 20 == 0) {
        console.log(i);
    }
}


//for loop between 0-200, only displays divisible by 12 
for (let i = 0; i < 201; i++) {
    if (i % 12 == 0) {
        console.log(i);
    }
}

//do while loop test. Found two do while loops cannot be in the same file without brackets containing them. 
{
    let i = 10;
    do {
        i++;
        console.log(i);
    } while (i < 11);
}

{
    let i = 30;
    do {
        i--;
        console.log(i);
    } while (i < 3);
}