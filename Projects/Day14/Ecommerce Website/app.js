var input=document.querySelectorAll(".dnum")
console.log(input);

input.forEach((number)=>{
    number.addEventListener("input",()=>{
        if(number.value<=0){
            number.value=1
        }
    })
})