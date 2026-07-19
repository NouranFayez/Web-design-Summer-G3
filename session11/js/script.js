console.log('Javascript')


// var let const 

var userName =  'omar'
var lastName = "Ahmed"
var fullName = userName + " " + lastName
// template string
var fullName = `user full name =
 ${userName} ${lastName}`
var fullName = "user full name = " + userName + " " + lastName

var age = 10
var num = 50

var sum = age + num

// console.log(lastName)

// console.log(userName)

// console.log(sum)

// var isGraduated = true
var isGraduated = false

var firstName

// console.log(firstName)


var p = null

// console.log(p)

// console.log(num - age)

// console.log(2*2)
// console.log(8/2)

// console.log(userName / 2)

// increment ++

var h = 30

// console.log(h++) // 30
// console.log(h) //31
// console.log(++h) // 32
// console.log("----------------------")
// // decrement -- h = 32
// console.log(h--) // 32
// console.log(h) //31
// console.log(--h) // 30


var num = 5
// num = num + 5
num+=5

// console.log(num)



// comparison operations ==>  > >= < <= == === != !==

var num1 = 40
var num2 = 50
var num3 = 40
// console.log(num1 > num2)
// console.log(num1 <= num3)

// var test = 20
// var test2 = "20"

// console.log(test == test2) // value 
// console.log(test === test2) // value - type

// console.log('-------------------------')

// console.log(test != test2) // value ==> false
// console.log(test !== test2) // value - type ==> true



var t = "html"
var c = "css"

// console.log(t == c)

var res = typeof(t)
var res = typeof test

// console.log(res)

// var string = "string"

// console.log(typeof test == "string")
// console.log(typeof t == "String")



// var p = prompt("enter your name")
// var p = "" // empty string


// prompt() ==> return string , empty string , null



// console.log(p)
// console.log(typeof p)


//  logical operator ==> && || !

var num = 30 ;
var str = "lorem" ;


// console.log(num == 30) // true 
// console.log(str == "lorem") // true
// console.log(typeof num == "string") //false


// console.log(num == 30 && str == "lorem" && typeof num == "string" ) // false
// console.log(num == 30 && str == "lorem" && typeof num == "number" ) // true

// console.log(num == 40 || str == "html" || num > 20)
// console.log(num == 40 || str == "html" || num > 40)


//  ternary operator ==> (condition/s) ? true  : false

// var firstName = "Omar"
// console.log(firstName == "Omar")


// var firstName = prompt('enter your name');

// (firstName == "omar" && typeof firstName == "string") ? alert('welcome omar') : alert('invalid user') ; 



// truthy values | falsy values
var result = "lorem"; // true
var result = 20;  // true
var result = 0; // false
var result = -1; // true
var result = ""; // false
var result = null; // false 
var result ; // undefined - false

(!result) ? console.log('correct') : console.log('wrong');




