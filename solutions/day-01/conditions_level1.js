//1
let age = prompt('Enter your age:');
(age >= 18) ? console.log('You are old enough to drive.') : console.log(`You are left with ${18 - age} years to drive.`);
//2
let myAge = 46;
let yourAge = prompt('Enter your age:');

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge == myAge) {
    console.log('We have the same age');
} else {
    console.log(`You are ${myAge - yourAge} years yanger than me.`)
}
//3.1
let a = 5;
let b = 8;

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}
//3.2
(a > b) ? console.log('a is greater than b') : console.log('a is less than b');
//4
let number = prompt('Enter a number:');
(number % 2) ? console.log(`${number} is an odd numbe`) :  console.log(`${number} is an even numbe`);