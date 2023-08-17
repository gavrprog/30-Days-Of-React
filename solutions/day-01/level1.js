
//1
const arrayEmpty = [];
//2
const arrayWithElements = [1, 2, 3, 4, 5, 6];
//3
let length1 = arrayWithElements.length;
//4
function middlElement(array) {
    if (array.length % 2) {
        return array[array.length / 2]
    } else {
        return 'absent';
    } 
};
console.log('First element is', arrayWithElements[0], 
            ', Middle element is', middlElement(arrayWithElements), 
            ', Last element is', arrayWithElements[arrayWithElements.length - 1]);
//5
const mixedDataTypes = [
1, 
5.25, 
'Orange', 
arrayWithElements,
[45, 'Andrey', 3.14],
{
    'key1': 45,
    'key2': 46,
    'key3': 47
}]
let length2 = mixedDataTypes.length;
//6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//7
console.log(itCompanies);
//8
console.log('Number of companies', itCompanies.length);
//9
console.log('First element is', itCompanies[0], 
            ', Middle element is', itCompanies[Math.trunc(itCompanies.length / 2)], 
            ', Last element is', itCompanies[itCompanies.length - 1]);
//10
itCompanies.forEach(element => console.log(element));
//11
itCompanies.forEach(element => console.log(element.toUpperCase()));
//12
console.log(itCompanies.slice(0, itCompanies.length - 1).join(', '), 'and', itCompanies[itCompanies.length  - 1], 'are big IT companies.');
//13
let findCompany = 'Facebook';
(itCompanies.includes(findCompany)) ? console.log(findCompany) : console.log('company is not found');
//14
const filteredArray = [];
itCompanies.forEach(element => {
    let str = element.split('');
    let first = str.indexOf('o');
    let second = str.lastIndexOf('o')
    if ((first && second != -1) && (first != second)) {
        filteredArray.push(element);
    }
});
console.log(filteredArray);
//15
itCompanies.sort();
//16
itCompanies.reverse();
//17
let slice1 = itCompanies.slice(0, 3);
//18
let slice2 = itCompanies.slice(-3);
//19
//Did not understad the exersices
let startPosition = Math.trunc(itCompanies.length / 2);
let slice3 = itCompanies.slice(startPosition, startPosition + 1);
//20
itCompanies.shift();
//21
//Did not understad the exersices
let start = Math.trunc(itCompanies.length / 2);
itCompanies.splice(start, 1);
//22
itCompanies.pop();
//23
itCompanies.splice(0, itCompanies.length);