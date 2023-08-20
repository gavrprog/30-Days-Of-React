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