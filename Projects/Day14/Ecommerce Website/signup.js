var form = document.querySelector("form");
var first = document.querySelectorAll("input")[0];
var last = document.querySelectorAll("input")[1];
var email = document.querySelectorAll("input")[2];
var mobile = document.querySelectorAll("input")[3];
var pass = document.querySelectorAll("input")[4];
var cpass = document.querySelectorAll("input")[5];
var efirst = document.querySelector("#fname");
var elast = document.querySelector("#lname");
var emobile = document.querySelector("#mobile");
var eemail = document.querySelector("#email");
var epass = document.querySelector("#cpass");
var ecpass = document.querySelector("#ccpass");

var flag = true;
var storage = [] 
var local = JSON.parse(localStorage.getItem("data"))
if(local){
  storage=local
}

form.addEventListener("submit", (e) => {
  
  var regx = /^[a-z,A-Z]{2,15}$/;
  var regx1 = /^[6-9][0-9]{9}$/;
  var regx2 = /^[0-9,a-z,A-Z,@]{6,15}$/;

  //   First name
  if (first.value == "") {
    efirst.innerHTML = "First name required <br>";
    flag = false;
  } else if (regx.test(first.value)) {
    efirst.innerHTML = "";
  } else {
    efirst.innerHTML = "Invalid First Name";
    flag = false;
  }

  //  last Name
  if (last.value == "") {
    elast.innerHTML = "Last name required <br>";
    flag = false;
  } else if (regx.test(last.value)) {
    elast.innerHTML = "";
  } else {
    elast.innerHTML = "Invalid Last Name";
    flag = false;
  }

  // mobile
  if (mobile.value == "") {
    emobile.innerHTML = "Mobile Number Required <br>";
    flag = false;
  } else if (regx1.test(mobile.value)) {
    emobile.innerHTML = "";
  } else {
    emobile.innerHTML = "Invalid Mobile Number <br>";
    flag = false;
  }

  // email
  if (email.value == "") {
    eemail.innerHTML = "Email Required";
  }

  // password
  if (pass.value == "") {
    epass.innerHTML = "Password Required";
    flag = false;
  } else if (regx2.test(pass.value)) {
    epass.innerHTML = "";
  } else {
    epass.innerHTML = "Invalid Password";
    flag = false;
  }
  // conform password

  if (pass.value == cpass.value) {
    ecpass.innerHTML = "";
  }
  else if(cpass.value ==""){
    ecpass.innerHTML="Password Required"
  }
   else {
    ecpass.innerHTML = "Pass word Does not Match";
    flag = false;
  }


  if(flag){
    var obj={
      fname:first.value,
      lname:last.value,
      number:mobile.value,
      mail:email.value,
      password:pass.value,
    }
    storage.push(obj)
    localStorage.setItem("data",JSON.stringify(storage))
  }
  else{
    e.preventDefault()
  }

})


