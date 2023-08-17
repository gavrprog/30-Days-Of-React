import {countriesNew} from './countries.js';

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 29, 30];
//Sort the array and find the min and max age
let arrSorted = ages.sort((a, b) => a -b);
let min = ages[0];
let max = ages[ages.length - 1];
//Find the median age(one middle item or two middle items divided by two)
let median, middlIndex = (array) => Math.floor(array.length / 2);
(arrSorted.length % 2) ? median = arrSorted[middlIndex(arrSorted)] : median = (arrSorted[middlIndex(arrSorted) - 1] + arrSorted[middlIndex(arrSorted)]) / 2;
//Find the average age(all items divided by number of items)
let average, sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
average = sum / ages.length;
//arrSorted.reduce((acc, number) => acc + number, 0) / arrSorted.length;
//Find the range of the ages(max minus min)
let range = max - min;
//Compare the value of (min - average) and (max - average), use abs() method
let compare = Math.abs(min - average) >= (max - average);
//Slice the first ten countries from the
let firstSlice = countriesNew.slice(0, 9);
//Find the middle country(ies) in the countries array
let middlCountry = [];
if (countriesNew.length % 2) {
    middlCountry.push(countriesNew[middlIndex(countriesNew)])
} else {
    middlCountry.push(countriesNew[middlIndex(countriesNew) - 1]);
    middlCountry.push(countriesNew[middlIndex(countriesNew)]);
};
//Divide the countries array into two equal arrays
let arrayFirst = [];
let arraySecond = [];
if (countriesNew.length % 2) {
    arrayFirst = countriesNew.slice(0, middlIndex(countriesNew) + 1);
    arraySecond = countriesNew.slice(middlIndex(countriesNew) + 1, countriesNew.length);
} else {
    arrayFirst = countriesNew.slice(0, middlIndex(countriesNew));
    arraySecond = countriesNew.slice(middlIndex(countriesNew), countriesNew.length);
}