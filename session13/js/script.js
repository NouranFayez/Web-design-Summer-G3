

// let obj = {
//     name : "Sara",
//     age:10
// }

// for(let item in obj){
//     console.log(obj[item])
// }
///////////////////////////

// let obj = (name )=>{
//     let age = 30
//     return {
//         name  ,
//         age
//     }
// }

// console.log(obj('Zein'))
////////////////////////////////////

let obj = {
    name : "Tamer",
    age : 10 , 
    address: "Maadi",
    isGraduated : false
}

////////// destructuring
// let userName = obj.name
// let userAge = obj.age
// let userAddress = obj.address
// let userIsGraduated = obj.isGraduated

// let {name , age , address , isGraduated } = obj

// console.log(isGraduated)

///// spread operator
// let userData = {
//     phone : "010000000",
//     ...obj

// }
// console.log(userData)


///// string methods

let str = "         Lorem ipsum dolor sit amet consectetur, consectetur elit. Porro, ipsa.              "

console.log(str.length)
console.log(str[0])

for(let i = 0 ; i < str.length ; i++){
    // console.log(str[i])
}

console.log(str.includes('amet'))
console.log(str.includes('jbnjbj'))
console.log(str.indexOf("ipsum"))
console.log(str.replace("consectetur" , "Javascript"))
console.log(str.replaceAll("consectetur" , "Javascript"))
console.log(str)
console.log(str.trim())
console.log(str.slice(20 , 30))

// let courses = "Html,Css,Js"
// console.log(courses.split(","))

let courses = "Html Css Js"
console.log(courses.split(" "))
console.log(courses.startsWith("Html"))
console.log(courses.startsWith("gggg"))
console.log(courses.endsWith("gggg"))
console.log(courses.endsWith("Js"))

//////////////////////////////////////////////////

/// Number Methods

// let p = prompt('enter number')

// // console.log(typeof p)

// console.log(p)
// console.log(Number(p))
// console.log(parseInt(p))
// console.log(parseFloat(p))

console.log("------------------------")
// let test = "ghhhh"
// let test = 20
// let test = true
// console.log(isNaN(test))

// console.log(Math.random()*1000)
// console.log(Math.trunc(2.9))
// console.log(Math.trunc(Math.random()*1000))

// let n = 2.9
// console.log(Math.round(n))
// console.log(Math.ceil(3.2))
// console.log(Math.floor(3.9))
// console.log(Math.abs(-10))
// console.log(Math.max(3 , 10 , 5, 7))
// console.log(Math.min(3 , 10 , 5, 7))


/////////////////////////////////////////////////

// localStorage.setItem("Name" , "Zein")

let users = [
    {
        name : "Tamer",
        id:1,
        balance:1000
    },
        {
        name : "Sara",
        id:2,
        balance:1000
    },
        {
        name : "Omar",
        id:3,
        balance:1000
    },
]

localStorage.setItem('users' , JSON.stringify(users))
console.log(JSON.stringify(users))

console.log("---------------------------------")

let newList = JSON.parse(localStorage.getItem('users')) 

console.log(newList)

newList.push({name : 'vghj' , id:3 , balance:777})


localStorage.removeItem('Name')

localStorage.setItem("users" , JSON.stringify(newList))

console.log(localStorage.getItem('address'))








