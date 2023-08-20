const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//1
let maxUser, numberSkill, max = 0;

for (let user in users) {
    numberSkill = users[user].skills.length
    if (numberSkill > max) {
        maxUser = user
        max = numberSkill
    }
}
console.log(maxUser)

//2
let lCount = 0
let pCount = 0

for (let user in users) {
    if (users[user].isLoggedIn == true) {
        lCount++
    } else if (users[user].points >= 50) {
        pCount++
    }
}
console.log(pCount, lCount)

//3
function search(skill){
    for (let element of ['MongoDB', 'Express', 'React', 'Node']) {
        if (element === skill) {
            return true
        }
    }
}
for (let user in users) {
    let mern = 0;

    for (let skill of users[user].skills) {
        if (search(skill)) {
            mern++
        }
    }
    if (mern === 4) {
        console.log(user)
    }
}

//4
let copyUser = Object.assign({}, users)
copyUser.Michael = {}

//5
let keys = Object.keys(users)

//6
let properties = Object.values(users)

//7
//do not understand what have I do