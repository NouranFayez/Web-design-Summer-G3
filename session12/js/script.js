

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
function testFunc(startNum , endNum){
    var firstName = prompt('enter your first name')
    var lastName = prompt('enter Your Last Name')
     fullName = `${firstName} ${lastName}`
     let str = "ghjkl;"
     if(true){
        var num = 20
        let test = "lorem"
        // console.log(str)
     }
    //  console.log(test)
    //  console.log(num)
    for(let i = startNum ; i <= endNum ; i++){
        console.log(i)
    }

    return firstName == "zein"
}

// let n = prompt()
// let isValidUser = testFunc(7 , 15)

// console.log(isValidUser)

// console.log(lastName)


///// function expression

let getFullName = function (){
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


let userInfo = ["Zein" , 20 , 40 ,"October" ,  false]

console.log(userInfo[1]) /// get item
userInfo[4] = "Egyptian" // set item
userInfo[userInfo.length] = "Maadi" // set item
userInfo[1] = 22 // update item

// console.log(userInfo.length)

///////// Methods of Array

userInfo.push("developer" , 30 , true)
userInfo.unshift("Tamer")

userInfo.pop()
// userInfo.pop()

userInfo.shift()

// splice(index , deletedCount , item/s) // add/ remove

userInfo.splice(3 , 2) // remove item/s
userInfo.splice(4 , 0 , "Js" , "ts")

userInfo.splice(2 , 0 , ["frontend" , 'backend'])

console.log(userInfo[2].length)

let isFound = userInfo.includes(30) // return boolean

console.log(userInfo.indexOf("developer"))

console.log(userInfo.toString())
// console.log(userInfo.reverse())

console.log(userInfo)

for(let i = 0 ; i < userInfo.length ; i++ ){
    // console.log(userInfo[i])
}

let element
let index
// item , index , array
userInfo.forEach((value , i , arr)=>{
    // console.log(`${i} = ${value} `)
    if(value > 22 ) {
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
let findElement = userInfo.find((item)=> item > 50) // undefined
// let findIndex = userInfo.findIndex((item)=> item > 22)
let findIndex = userInfo.findIndex((item)=> item > 50) // -1

console.log(findElement)
console.log(findIndex)




let ids = [ 10 , 5, 2, 20]
// 100



