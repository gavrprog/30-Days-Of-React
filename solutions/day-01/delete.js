// let arrayIndex = -1;

// const newArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((final, curr, i) => {
//   if (i % 5 === 0 || i % 5 === 2) {
//     final.push([curr])
//     arrayIndex++;
//   } else {
//     final[arrayIndex].push(curr);
//   }
//   return final;
// }, []);

// console.log(newArr);

// let index = 0
// let sortedArray = [1,1,1,1,5,5,5,6,6,7,8,10,10,10,11]
// let first = sortedArray[0]



// const fin = sortedArray.reduce((newArray, item) => {
//     if (first === item){       
//         newArray[index].push(item)
//     } else {
//         newArray.push([item])
//         index++
//         first = item
//     }
//     return newArray
// }, [[]])
// console.log(fin)
let newArrray = {}
let a = 100
let str = a.toString()
newArrray[a] = 'familie'
//let array = [1,2,3,4,5,6,7,8]
// array.forEach((element, i) => {
//     newArrray[element * 2] = i *8
// })
console.log(newArrray)


let items = [
    {a: "test1", b: 200},
    {a: "test2", b: 50},
    {a: "test3", b: 700}
  ];
  
  // если нужен элемент массива
  let max = items.reduce((acc, curr) => acc.b > curr.b ? acc : curr);
  console.log(max)
  // если нужен индекс элемента массива
let maxIndex = items.reduce((acc, curr, i) => items[acc].b > curr.b ? acc : i, 0);