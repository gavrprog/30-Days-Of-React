const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]
//1
const arrayEmpty = [];
//2
const arrayWithElements = [1, 2, 3, 4, 5, 6];
//3
let length1 = arrayWithElements.length;
//4
console.log("First element is", arrayWithElements[0], 
            ", Middle element is", arrayWithElements[Math.trunc(arrayWithElements.length / 2)], 
            ", Last element is", arrayWithElements[arrayWithElements.length - 1]);
//5
const mixedDataTypes = [
1, 
5.25, 
"Orange", 
arrayWithElements,
[45, "Andrey", 3.14],
{
    "key1": 45,
    "key2": 46,
    "key3": 47
}]
let length2 = mixedDataTypes.length;
//6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
//7
console.log(itCompanies);
//8
console.log("Number of companies", itCompanies.length);
//9
console.log("First element is", itCompanies[0], 
            ", Middle element is", itCompanies[Math.trunc(itCompanies.length / 2)], 
            ", Last element is", itCompanies[itCompanies.length - 1]);
//10
itCompanies.forEach(element => console.log(element));
//11
itCompanies.forEach(element => console.log(element.toUpperCase()));
//12
console.log(itCompanies.slice(0, itCompanies.length - 1).join(', '), "and", itCompanies[itCompanies.length  - 1], "are big IT companies.");
//13
let findCompany = "Facebook";
(itCompanies.indexOf(findCompany) != -1) ? console.log("Facebook") : console.log("company is not found");
//14
const filteredArray = [];
itCompanies.forEach(element => {
    let count = 0;
    element.split('').forEach(char => {
        if (char === "o" ) {
            count += 1;
        }
    })
    if (count === 2) {
        filteredArray.push(element);
    }
})
console.log(filteredArray);
//15
itCompanies.sort();
//16
itCompanies.reverse();
console.log(itCompanies)
//17
let slice1 = itCompanies.slice(0, 3);
//18
let slice2 = itCompanies.slice(itCompanies.length - 3, itCompanies.length);
//19
let startPosition = Math.trunc(itCompanies.length / 2);
let slice3 = itCompanies.slice(startPosition, startPosition + 1);
itCompanies.shift();