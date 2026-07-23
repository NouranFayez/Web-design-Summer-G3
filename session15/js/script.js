let registerForm = document.getElementById('registerForm')

let nameValidation = (input) => {
    let inputValue = input.value.trim()
    if (inputValue.length < 3) handleError(input, "enter at least 3 character")
    else handleError(input)

}

let handleError = (ele, msg = "") => {
    ele.nextElementSibling.innerText = msg
}
// https://mailtrap.io/blog/javascript-email-validation/
let emailValidation = (input) => {
    let inputValue =  input.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    (emailRegex.test(inputValue)) ? handleError(input) : handleError(input , "invalid email")
    
}
// https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-password-using-regular-expressions/
let passwordValidation = (input) => {
    let inputValue = input.value
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    (regex.test(inputValue)) ? handleError(input)  : handleError(input , "please enter at leaset 1 uppercase , 1 lowercase , 1 number , 1 special character")


}

registerForm.addEventListener('input', (e) => {
    // console.log(e)

    switch (e.target.id) {
        case "userName":
            nameValidation(e.target)

            break;
        case "userEmail":
            emailValidation(e.target)
            break
        case "userPassword":
            passwordValidation(e.target)
            break
    }


})


// name ==> 3 character
// email ==> username@domain.subdomain
// password ==> 1 uppercase , 1 lowercase , number , special Character (!@#$%^&*)


// let date = new Date()
// console.log(date)
// console.log(date.getFullYear())
// console.log(date.getDate()) 
// console.log(date.getDay()) // 0-6 // sunday
// console.log(date.getMonth()) // 0 - 11
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

// let weekDays = ["Sun","Mon","Tues","Wed","thurs","Fri","Sat"]
// console.log(weekDays[date.getDay()])


// console.log(date.toLocaleDateString("en-US" , {
//     weekday :"long" , month :"2-digit" , year : "2-digit"
// }))

// console.log(date.toLocaleDateString("ar-EG" , {
//     weekday :"long" , month :"long" , year : "2-digit"
// }))

// console.log(date.toLocaleDateString("ar-EG" , {
//     weekday :"long"
// }))

// console.log(date.setFullYear(2030))
// console.log(date.setMonth(4))
// console.log(date.setHours(date.getHours()+4))
// console.log(date)



// CurrentDate - endDate
// - setInterval



// let filteredBtn = document.getElementsByClassName('filtered-btn')


/// -owl carousel - slick ==> js slider
