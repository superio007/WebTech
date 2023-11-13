var form  = document.querySelector("form")
var user = document.querySelector("#email")
var password = document.querySelector("#pass")
var btn = document.querySelector("#btn")
var wronguser = document.querySelectorAll("span")[0]
var wrongpass = document.querySelectorAll("span")[1]
var wrongsum = document.querySelectorAll("span")[2]
var flag 
var lstorage = JSON.parse(localStorage.getItem("data"))

// btn.addEventListener("click",()=>{
//    if (user.value == "" && password.value == ""){
//     alert("Arre User name is empty")
//     alert("Arre passwordis empty")
//    }
//    else if(user.value == ""){
//     alert("arree user is empty")
//    }
//    else if (password.value == ""){
//     alert("areee password is empty")
//    }
//     else if(user.value === "Albert" && password.value === "1234" ){
//         alert("Dev Welcome To the Page")
//     }
//     else{
//         alert("Get Lost")
//     }
// })

form.addEventListener("submit",(e)=>{
    var matching = lstorage.find((e)=>{
        if((e.mail==user.value || e.number==user.value) && e.password==password.value){
            return e
        }
    })
    wrongpass.innerHTML=""
    wronguser.innerHTML=""
    wrongsum.innerHTML=""
    if(user.value == "" && password.value == ""){
        wronguser.innerHTML="Enter The User Name"
        wrongpass.innerHTML="Enter The Password"
        e.preventDefault()
    }
    else if (user.value==""){
        wronguser.innerHTML="Enter The User Name"
        e.preventDefault()
    }
    else if(password.value == "")
    {
        wrongpass.innerHTML = "Enter The Password"
        e.preventDefault()
    }
    else if (matching){
        alert("Dev Welcome to Page")
    }
    else{
        wrongsum.innerHTML="Username or Password is not matching"
        e.preventDefault()
    }
    if(matching){
        localStorage.setItem("login",JSON.stringify(matching))
    }
    else{
        e.preventDefault()
    }
    })
