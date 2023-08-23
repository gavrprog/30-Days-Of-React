class Animal {
    constructor (name, gender, age){
        this.name = name
        this.gender = gender
        this.age = age
    }
    legs =  4
    tie = true
    eat(){
        return 'mniam-mniam'
    }
    get getLegs(){
        return this.legs
    }
    get haveTie(){
        return this.tie
    }
}

class Cat extends Animal {
    meow(){
        return 'Meow meow'
    }
}
class Dog extends Animal {
    bark(){
        return 'woof woof'
    }
}

class MyAnimal extends Animal {
    eat(){
        return 'I trink water and eat special food for animals'
    }
    bark(){
        return 'woof woof'
    }
}
let myDog = new MyAnimal ('Rex', 'boy', 5)
console.log(myDog.eat())
console.log(myDog.bark())
console.log(myDog.getLegs)
console.log(myDog.haveTie)