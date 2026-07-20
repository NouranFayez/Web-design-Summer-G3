

// var / let / const

var fullName // undefined
///  Redeclare // Reassign
/// Scope
// var ==> global / function scope
// let - const ==> block scope


var x = "dfgh"
var x = 20
x = true

console.log(x)

let age = 20
// let age = "ghjkl"
age = true

console.log(age)

const address = "Nasr city"
// const address = "October"
// address = "fghjk"
console.log(address)



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

console.log(getFullName())


//// arrow function 
let userName = (num)=> num > 30


console.log(userName(20))


