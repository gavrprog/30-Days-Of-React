//1
const personAccount = {
    firstName: 'Edgar',
    lastName: 'Stern',
    incomes: {
        salary: 100000,
        rentOutProfit: 120000,
        royalties: 200000
    },
    expenses: {
        food: 15000,
        vacation: 20000,
        clothes: 5000,
        connections: 500,
        others: 1000
    },
    totalIncome: function (){
        return this.sumValues(this.incomes)
    },
    totalExpense: function (){
        return this.sumValues(this.expenses)
    },
    accountInfo: function (){
        return `I am ${this.firstName} ${this.lastName} and I earn ${this.totalIncome()} per year... Yahhhhhh. :) But spend ${this.totalExpense()} :(`
    },
    addIncome: function (item, income){
        this.incomes[item] = income
    },
    addExpense: function (item, expence){
        this.expenses[item] = expence
    },
    accountBalance: function (){
        return this.totalIncome() - this.totalExpense()
    },
    sumValues: function (object) {
        let sum = 0
        for (let element of Object.values(object))
            sum += +element
        return sum
    }
}

//2
const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

  //Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(){
    let login = prompt('Insert your login:')
    let presence = false
    let i = 0;
    let newUserObj = {}

    while (!presence && (i < users.length)) {
        if (users[i].email === login) {
            console.log('You has already an account')
            presence = true
        }
        i++
    }
    if (!presence) {
        newUserObj._id = Math.random()
        newUserObj.username = prompt('Insert your Name:')
        newUserObj.password = prompt('Insert your password:')
        // and etc.
        users.push(newUserObj)
    }
}

//Create a function called signIn which allows user to sign in to the application
function signIn() {
    let email = 't@thomas.com'//prompt('Insert your email like login:')
    let password = '123hnk.l'//prompt('Insert your password:')
    let username = 'fg12cy'//prompt('Insert your Username:')
    let date = new Date()
    let newUserObj = {}
    
    newUserObj._id = 'fg12cy'
    newUserObj.username = username
    newUserObj.email = email
    newUserObj.password = password
    newUserObj.createdAt = date
    newUserObj.isLoggedIn = true
    users.push(newUserObj)
    return newUserObj._id
}

//Create a function called rateProduct which rates the product b
function rateProduct(){
    let userId = signIn()
    let userProduct = prompt('What product do you want to rate?')
    let rate = prompt('Rate product:')
    let newUserRetingObj = {}

    for (let i = 0; i < products.length; i++) {
        if (products[i].name === userProduct) {
            newUserRetingObj.userId = userId
            newUserRetingObj.rate = rate
            products[i].ratings.push(newUserRetingObj)
            break
        }
    }    
}

//Create a function called averageRating which calculate the average rating of a product
function averageRating() {
    let count = 0;

    for (let i = 0; i < products.length; i++){
        for (let j = 0; j < products[i].ratings.length; j++){
            count += products[i].ratings[j].rate
        }
    }
return count
}

//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(){
    let userId = signIn()
    let userProduct = prompt('What product do you want to like or remove like?')

    for (let i = 0; i < products.length; i++) {
        if (products[i].name === userProduct){
            if (!products[i].likes.length || (products[i].likes.indexOf(userId) === -1)) {
                products[i].likes.push(userId)
            } else {
                products[i].likes.splice(products[i].likes.indexOf(userId), 1)
            } 
        }       
     }
}