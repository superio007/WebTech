var input = document.querySelector("input");
var btn = document.querySelectorAll("button")
var del = document.querySelectorAll("button")
var storage = [];
var ul = document.querySelector("ul")
var lstorage=JSON.parse(localStorage.getItem("lstorage"))
var button = document.querySelectorAll("button")


if(lstorage){
    storage = lstorage;
    main()
}

btn.addEventListener("click", () => {
    if (input.value) {
        storage.push(input.value)
        localStorage.setItem("lstorage",JSON.stringify(storage))
        main();
        input.value = ""
    }
})

del.addEventListener("click", () => {
    lstorage.clear();
})

function main() {
    ul.innerHTML = "";
    for (var i = 0; i < storage.length; i++) {
        // var li = document.createElement("li");
        // var a = document.createElement("a");
        // a.innerHTML = storage[i];
        // ul.appendChild(li);
        // li.appendChild(a);

        ul.innerHTML += `<li> <a href="${storage[i]}" target="_blank">${storage[i]} </a> </li>`
    }
}

// whenever empty content -> falsy value
var a = 5;
// var b = false;  //falsy
// var b = "a"; // truthy
var b = true;
if(!b) {
     console.log("I am truthy  value");
}
else {
    console.log("I am falsy value");
}




// var number = [1,2,3,4,5,6];

// console.log(number[0])
// number.map((e)=>{
//     console.log(e)
// })

// number.map((e)=>{
//     console.log(e*2)
// })
// console.log(number);

// var alpha=["a","b","c","d"]
// alpha.forEach((e))

var dummy = [1,2,3,4,5]

var doubled =  dummy.map((e)=>{
    return e*2;
})

console.log(doubled)
console.log(dummy)

var dou = dummy.forEach((e)=>{
    return e*2;
})
console.log(dou);

