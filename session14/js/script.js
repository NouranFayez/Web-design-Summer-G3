

let customInput = document.getElementById('userName')
// console.log(customInput)


customInput.addEventListener("input", (e) => {
    // console.log(e)
    // console.log('typing...')
    // console.log(customInput.value)
    // console.log(customInput.nextElementSibling)
    // console.log(e.target.value)
    let p = customInput.nextElementSibling
    p.innerText = customInput.value

})

let form = document.querySelector('#loginForm')

let divsContainer = document.getElementById('divsContainer')

let users = []

let showUser = () => {

    divsContainer.textContent = ""
    users.forEach((item , i )=>{

        let newDiv = document.createElement("div")
        newDiv.classList.add('alert', "alert-primary", "mt-3")
        let newH2 = document.createElement('h2')
        newH2.innerText = `Name : ${item.name}`
        let newH3 = document.createElement('h3')
        newH3.innerText = `Email :  ${item.email}`
        let button = document.createElement('button')
        button.classList.add('btn' , 'btn-danger')
        button.textContent = "Remove User"
        button.addEventListener('click' , ()=>{
            console.log('click')
            console.log(i)

        })

         let editButton = document.createElement('button')
        editButton.classList.add('btn' , 'btn-success' )
        editButton.textContent = "Edit User"
    
        newDiv.appendChild(newH2)
        newDiv.appendChild(newH3)
        newDiv.append(button)
        newDiv.append(editButton)
    
    
        console.log(newDiv)
        console.log(newH2)
        console.log(newH3)
    
        divsContainer.append(newDiv)
    })

}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e)
    // console.log('form is submitting')
    // console.log(e.target[0].value)
    // console.log(e.target[1].value)

    let user = {
        name: e.target[0].value,
        email: e.target[1].value
    }
    // console.log(user)
    users.push(user)
    console.table(users)
    showUser()


})

// https://www.w3schools.com/jsref/dom_obj_event.asp



//   <div class="alert alert-primary">
//                 <h2> Name : Zein</h2>
//                 <h3>Email : zein@email.com</h3>
//             </div>



let scrollDiv = document.getElementById('scroll-div')
scrollDiv.addEventListener('scroll' , (e)=>{
    // console.log("scrolling")
    // console.log(e)
    console.log(e.target.scrollTop)
    if(e.target.scrollTop > 300){
        console.log('greater than 300')
        scrollDiv.classList.remove('alert-success')
        scrollDiv.classList.add('alert-danger')
    }
})
/// BOM ==> browser object model ==> window
/// DOM ==> document object model ==> document


// window.alert("Javascript")
// alert("Javascript")

window.addEventListener('scroll' , ()=>{
    // console.log(`window scroll = ${window.scrollY}`)
    // console.log(`document element scroll = ${document.documentElement.scrollTop}`)
})


let setTime = setTimeout(()=>{
    // alert('please login first')
    console.log('please login first')
} , 3000 )

console.log('javascript')
console.log(setTime)

let h1 = document.querySelector('.text-primary')
let i = 0
let setInt = setInterval(()=>{
    // console.log('js')
    h1.innerText = i
    if(i == 100) clearInterval(setInt)
    i++
} , 30)

console.log(setInt)





