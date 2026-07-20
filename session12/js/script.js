

// var / let / const

var fullName // undefined
///  Redeclare // Reassign
/// Scope
// var ==> global / function scope
// let - const ==> block scope


var x = "dfgh"
var x = 20
x = true

// console.log(x)

let age = 20
// let age = "ghjkl"
age = true

// console.log(age)

const address = "Nasr city"
// const address = "October"
// address = "fghjk"
// console.log(address)



///// function statment
function testFunc(startNum, endNum) {
    var firstName = prompt('enter your first name')
    var lastName = prompt('enter Your Last Name')
    fullName = `${firstName} ${lastName}`
    let str = "ghjkl;"
    if (true) {
        var num = 20
        let test = "lorem"
        // console.log(str)
    }
    //  console.log(test)
    //  console.log(num)
    for (let i = startNum; i <= endNum; i++) {
        console.log(i)
    }

    return firstName == "zein"
}

// let n = prompt()
// let isValidUser = testFunc(7 , 15)

// console.log(isValidUser)

// console.log(lastName)


///// function expression

let getFullName = function () {
    return "Zein Tamer"

}

// console.log(getFullName())


//// arrow function 
// let userName = (num)=> num > 30


// console.log(userName(20))



let userName = "Zein"
let userAge = 20
let userAddress = "October"
let isGraduated = false


let userInfo = ["Zein", 20, 40, "October", false]

console.log(userInfo[1]) /// get item
userInfo[4] = "Egyptian" // set item
userInfo[userInfo.length] = "Maadi" // set item
userInfo[1] = 22 // update item

// console.log(userInfo.length)

///////// Methods of Array

userInfo.push("developer", 30, true)
userInfo.unshift("Tamer")

userInfo.pop()
// userInfo.pop()

userInfo.shift()

// splice(index , deletedCount , item/s) // add/ remove

userInfo.splice(3, 2) // remove item/s
userInfo.splice(4, 0, "Js", "ts")

userInfo.splice(2, 0, ["frontend", 'backend'])

// console.log(userInfo[2].length)

let isFound = userInfo.includes(30) // return boolean

// console.log(userInfo.indexOf("developer"))

// console.log(userInfo.toString())
// console.log(userInfo.reverse())

// console.log(userInfo)

for (let i = 0; i < userInfo.length; i++) {
    // console.log(userInfo[i])
}

let element
let index
// item , index , array
userInfo.forEach((value, i, arr) => {
    // console.log(`${i} = ${value} `)
    if (value > 22) {
        // console.log(`number ${value} greater 22`)
        // console.log(`index = ${i}`)
        element = value
        index = i
    }
})


// console.log(element)

//  ()=>{

// }

// let findElement = userInfo.find((item)=>{
//     return item > 22
// })
// let findElement = userInfo.find((item)=> item > 22)
let findElement = userInfo.find((item) => item > 50) // undefined
// let findIndex = userInfo.findIndex((item)=> item > 22)
let findIndex = userInfo.findIndex((item) => item > 50) // -1

// console.log(findElement)
// console.log(findIndex)




// let ids = [ 10 , 5, 2, 20]
// 100 - 5
// let courses = [ "html" , 'css' , 'js']
// Bootstrap - html







// let userName = "Zein"
// let userAge = 20
// let userAddress = "October"
// let isGraduated = false


// let userInfo = ["Zein" , 20 , 40 ,"October" ,  false]


///////////// Object

// let userFirstName = "vbnjk"
// let userLastName = "cvghjkl"
let user = {
    userFirstName: "Zein",
    userLastName: "ahmed",
    userAge: 20,
    userAddress: "October",
    userFullName: function () {
        return `${this.userFirstName} ${this.userLastName}`
    },
    getAddress: () => "Maadi",
    addressList: () => {
        return ["Nasr city", "October", "Maadi"]
    },
    phoneList: () => {
        return {
            homeNumber: "0100000000",
            officeNumber: "012222222"
        }
    }

}

// console.log(user.userAddress)
// console.log(user['userAddress'])

// user.userMiddleName = "Fayez"
// user.userAge = 40

// console.log(user.userFullName())
// console.log(user.getAddress())
// console.log(user.addressList()[0])
// console.log(user.phoneList().officeNumber)



// let user1 = {
//     name: "Sara",
//     age: 40,
//     address: "Maadi"
// }
// let user2 = {
//     name: "Nouran",
//     age: 32,
//     address: "Nasr city"
// }
// let user3 = {
//     name: "Tamer",
//     age: 45,
//     address: "Maadi"
// }
// Array of Objects
let users = [
    {
        name: "Sara",
        age: 40,
        address: "Maadi"
    },
    {
        name: "Nouran",
        age: 32,
        address: "Nasr city"
    },
    {
        name: "Tamer",
        age: 45,
        address: prompt('enter user address')
    }
]
console.log(users)

let i = users.findIndex((item)=> item.age == 45)
console.log(i)

users[i].age = 20


users.push({
    name : "Marwa" , age : 10 , address: "October"
})

console.log(users)




