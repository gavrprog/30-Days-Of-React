//1
import {webTechs} from './web_techs.js';
import {countries} from './countries.js';

//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.split('.').join('').split(',').join('').split(' ');
console.log(words);
console.log(words.length);
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let allergic = true;
if (shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
if (shoppingCart.includes('Sugar')) {
     shoppingCart.push('Sugar');
}
if (allergic) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, "Green Tea");
console.log(shoppingCart);
//4
let absentCountry = 'Ethiopia';
let index = countries.indexOf(absentCountry);
(index != -1) ? console.log(countries[index].toUpperCase()) : countries.push(absentCountry);
//5
let absentTech = 'Sass';
if (webTechs.includes(absentTech)) {
    console.log(`${absentTech} is a CSS preprocess`);
 } else {
    webTechs.push(absentTech);
    console.log(webTechs);
 }
 //6
 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node', 'Express', 'MongoDB']
 const fullStack = frontEnd.concat(backEnd);
 console.log(fullStack);