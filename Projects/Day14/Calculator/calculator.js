var tital = document.querySelector("title")
var display =document.querySelector("input")
var btn = document.querySelectorAll("button")
var storage =[]
var result =0
var temp=0
function toggle(){
    if(tital.innerHTML=="calculator"){
        tital.innerHTML="CloudVadana"
    }
    else{
        tital.innerHTML="calculator"
    }
}

setInterval(toggle ,3000)


btn.forEach((number)=>{
    number.addEventListener("click",()=>{
        // console.log(number.innerHTML);
        calculation(number.innerHTML)
    })
})

function calculation(num){
    if(num == "AC"){
        storage = []
        result = 0
        display.value=result
    }else if(num == "="){
        result = eval(temp)
        display.value=result;
    }
    else{
        storage.push(num)
         temp=storage.join("")
        display.value=temp
    }
    // storage.push(num)
    // var temp=storage.join("")
    // result = eval(temp)
}


// var storage =["1","2","3","4","5"]

// var dummy=storage.map((e)=>{
//  return e
// })
// console.log(dummy)

// var mix = storage.join("")
// console.log(mix)

// var ma