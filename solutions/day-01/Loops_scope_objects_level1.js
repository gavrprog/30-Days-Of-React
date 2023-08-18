// Conclusions
// Regular for loop can be used anywhere when the number of iteration is known.
// While loop when the number of iteration is not know
// Do while loop and while loop are almost the same but do while loop run at least once even when the condition is false
// for of is used only for array
// forEach is used for array
// for in is used for object

const dog = {
    name: 'rex',
    legs: 4,
    age: 5,
    bark: function() {
        return 'woof woof'
    }
}
console.log(dog)
console.log(Object.values(dog))
dog.breed = 'Schäferhund'
dog.getDoginfo = function() {
    let say = this.bark()
    console.log(`I am ${this.name} and I am ${this.age} year old. I have ${this.legs} legs. I can say "${say}".`)
}
dog.getDoginfo()