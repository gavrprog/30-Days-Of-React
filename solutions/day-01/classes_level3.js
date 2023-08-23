class Statistics {
    constructor (array){
        this.array = array
    }
    count(){
        return this.array.length
    }
    sum(){
        let sum = 0
        return this.array.reduce((sum, element) => sum += element)
    }
    min(){
        //return Math.min.apply(null, this.array)
        return Math.min(...this.array)
    }
    max(){
        return Math.max(...this.array)
    }
    range(){
        return this.max() - this.min()
    }
    mean(){
        return Math.round(this.sum() / this.array.length)
    }
    median(){
        let sortedArray = this.array.sort((a, b) => a - b)
        let ln = sortedArray.length
        return (ln % 2) 
            ? sortedArray[Math.trunc(ln / 2)]
            : (sortedArray[ln / 2] + sortedArray[ln / 2 + 1]) / 2
    }
    mode(){
        let sortedArray = this.array.sort((a, b) => a - b)
        let first = sortedArray[0]
        let mode, count = 0        
        let sum = 0

        sortedArray.forEach((item) => {
            if (first === item){       
                sum++
            } else {
                if(sum > count){
                    mode = first
                    count = sum
                }
                first = item
                sum = 1
            }
        })
        return [mode, count]
    }
    //дисперсия (variance)
    var(){
        const meanArray = this.mean()
        let sum = 0
        this.array.forEach(element => {
            sum += Math.pow(element - meanArray, 2)
        });
        return sum / (this.count() - 1)
    }
        //среднеквадратичное отклонение (stadart devation)
    std(){
        return parseFloat(Math.sqrt(this.var()).toFixed(2))
    }
    freqDist(){
        let sortedArray = this.array.sort((a, b) => a - b)
        let length = this.array.length
        let first = sortedArray[0]
        let result = []
        let sum = 0

        sortedArray.forEach((item) => {
            if (first === item){       
                sum++
            } else {
                result[first] = ((sum / length) * 100).toFixed(1)
                sum = 1
                first = item
            }
        })
        return result
    }
}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let statistic = new Statistics(ages)
console.log(statistic.count())
console.log(statistic.sum())
console.log(statistic.min())
console.log(statistic.max())
console.log(statistic.range())
console.log(statistic.mean())
console.log(statistic.median())
console.log(statistic.mode())
console.log(statistic.var())
console.log(statistic.std())
console.log(statistic.freqDist())


// mode(){
//     let sortedArray = this.array.sort((a, b) => a - b)
//     let index = 0
//     let first = sortedArray[index]

//     const final = sortedArray.reduce((newArray, item) => {
//         if (first === item){       
//             newArray[index].push(item)
//         } else {
//             newArray.push([item])
//             index++
//             first = item
//         }
//         return newArray 
//     }, [[]])
//     return final //in final will new Array with fraquency of numbers
// }