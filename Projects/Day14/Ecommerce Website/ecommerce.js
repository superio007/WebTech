var login = JSON.parse(localStorage.getItem("login"))
var right = document.querySelector(".nav-right")
var image = document.querySelector("#img")
var pre = document.querySelectorAll("i")[0]
var next = document.querySelectorAll("i")[1]
var storage = ["/project/images/pic1.jpg","/project/images/pic2.jpg","/project/images/pic3.jpg","/project/images/pic4.jpg"]
var index = 0
var cartTotal = document.querySelector("#total");
var close=document.querySelector("#cart")


function openClose(){
var btnOpen=document.querySelectorAll(".button-secondary")
btnOpen.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       close.style.right="0"
    })
})

var x=document.querySelector("#x")
x.addEventListener("click",()=>{
    close.style.right="-100%"
})


}

if(login){
    
    right.innerHTML=`<span>${login.fname}</span> <button class ="button-primary logout"><a href = "/project/login.html">Logout</button>`
    var logout=document.querySelector(".logout")
    logout.addEventListener("click",()=>{
        localStorage.removeItem("login")
        right.innerHTML = ` <button class="button-primary"><a href="/project/login.html" >Login</a></button>
        <button class="button-primary"><a href="/js/signup.html" >Sign-In</a></button>`
    })

}

function main (){
    image.src = storage[index]
 }
 
 next.addEventListener("click",auto)
 
 pre.addEventListener("click",()=>{
     if(index == 0){
        index = storage.length-1
        main()
     }
     else{
         index = (index-1)%storage.length
         main()
     }
 })
 function auto(){
     index = (index+1)%storage.length
     main()
 }
 setInterval(auto,2000)

//  Mens Section

var shirtRow = document.querySelector(".shirtrow")
var shirtStorage=[
{ id: "ms1", src:"./images/shirt1.webp", name:"shirt1", price:"800" , size: "L,M,XL",rating:"4.5"},
{ id: "ms2", src:"./images/shirt2.webp", name:"shirt2", price:"600" , size: "L,M,XL",rating:"4.4"},
{ id: "ms3", src:"./images/shirt3.webp", name:"shirt3", price:"1200" , size: "L,M,XL",rating:"4.1"},
{ id: "ms4", src:"./images/shirt4.webp", name:"shirt4", price:"3400" , size: "L,M,XL",rating:"4.9"},
{ id: "ms5", src:"./images/shirt5.webp", name:"shirt5", price:"2000" , size: "L,M,XL",rating:"4.5"},
{ id: "ms6", src:"./images/shirt6.webp", name:"shirt6", price:"300" , size: "L,M,XL",rating:"4.0"}
]

var tshirtRow = document.querySelector(".tshirtrow")
var tShirtStorage=[
{ id: "mts1", src:"./images/tshirt1.jpg", name:"T-Shirt 1", price:"800" , size: "L,M,XL",rating:"4.5"},
{ id: "mts2", src:"./images/tshirt2.jpg", name:"T-Shirt 2", price:"600" , size: "L,M,XL",rating:"4.4"},
{ id: "mts3", src:"./images/tshirt3.jpg", name:"T-Shirt 3", price:"1200" , size: "L,M,XL",rating:"4.1"},
{ id: "mts4", src:"./images/tshirt4.jpg", name:"T-Shirt 4", price:"3400" , size: "L,M,XL",rating:"4.9"},
{ id: "mts5", src:"./images/tshirt5.jpg", name:"T-Shirt 5", price:"2000" , size: "L,M,XL",rating:"4.5"},
{ id: "mts6", src:"./images/tshirt6.jpg", name:"T-Shirt 6", price:"300" , size: "L,M,XL",rating:"4.0"}
]

var menPantRow = document.querySelector(".pantrow")
var pantsStorage=[
    { id: "mp1", src:"./images/pants1.jpg", name:"Pants 1", price:"800" , size: "L,M,XL",rating:"4.5"},
    { id: "mp2", src:"./images/pants2.jpg", name:"Pants 2", price:"600" , size: "L,M,XL",rating:"4.4"},
    { id: "mp3", src:"./images/pants3.jpg", name:"Pants 3", price:"1200" , size: "L,M,XL",rating:"4.1"},
    { id: "mp4", src:"./images/pants4.jpg", name:"Pants 4", price:"3400" , size: "L,M,XL",rating:"4.9"},
    { id: "mp5", src:"./images/pants5.jpg", name:"Pants 5", price:"2000" , size: "L,M,XL",rating:"4.5"},
    { id: "mp6", src:"./images/pants6.jpg", name:"Pants 6", price:"300" , size: "L,M,XL",rating:"4.0"}
    ]
    

function menShirt(){
    shirtStorage.forEach((e)=>{
        var {id,src,name,price,size,rating}=e
        shirtRow.innerHTML+=`<div class="cards" id=${id}>
        <img src="${src}" alt="">
        <h3>${name}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, beatae. </p>
        <div><span>Rs.${price}</span><span>Size: ${size}</span></div>
        <h4>Rating:${rating}</h4>
        <button class="button-secondary">Add to Cart</button>
    </div>`
    })
}

function mentShirt(){
    tShirtStorage.forEach((e)=>{
        var {id,src,name,price,size,rating}=e
       
        tshirtRow.innerHTML+=`<div class="cards" id=${id}>
        <img src="${src}" alt="">
        <h3>${name}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, beatae. </p>
        <div><span>Rs.${price}</span><span>Size: ${size}</span></div>
        <h4>Rating:${rating}</h4>
        <button class="button-secondary">Add to Cart</button>
    </div>`
    })
}


function menPants(){
    pantsStorage.forEach((e)=>{
        var {id,src,name,price,size,rating}=e
        menPantRow.innerHTML+=`<div class="cards" id=${id}>
        <img src="${src}" alt="">
        <h3>${name}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, beatae. </p>
        <div><span>Rs.${price}</span><span>Size: ${size}</span></div>
        <h4>Rating:${rating}</h4>
        <button class="button-secondary">Add to Cart</button>
    </div>`
    })
}

function mainCart(){
    var allItems=[shirtStorage,tShirtStorage,pantsStorage]
    var btn=document.querySelectorAll(".button-secondary")
    btn.forEach((button)=>{
        button.addEventListener("click",()=>{
            var parent=button.parentElement.id
            var cartMenu=document.querySelector("#cart-menu")

            allItems.forEach((items)=>{
                items.forEach((check)=>{
                    if(check.id==parent){
                        cartMenu.innerHTML +=` <div class="cart-item">
                        <div><img src="${check.src}" alt=""></div>
                        <div><h3>${check.name}</h3>
                        <h5>Rs.${check.price}</h5>
                        <select name="" id="">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                        <input type="number" value="1" class="number"></div>
                        <div>
                            <span class="subTotal">Rs.${check.price}</span>
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>`
                    }
                })
            })
            cal()
            del()
            total();
        })
    })


}
function del(){
    var trash=document.querySelectorAll(".fa-trash-can")
    trash.forEach((del)=>{
        del.addEventListener("click",()=>{
            del.parentElement.parentElement.remove()
            total();
        })
    })
}


function cal(){
    var input=document.querySelectorAll(".number")

    input.forEach((num)=>{
    num.addEventListener("input",()=>{
            if(num.value<1){
                num.value=1
            }
        var parent=num.parentElement.parentElement
        var price=parent.querySelector("h5").innerHTML.replace("Rs.","")
        var subTotal=parent.querySelector(".subTotal")
        subTotal.innerHTML=`Rs.${price*num.value}`


        total();
        })
    })

}


function total(){
    var addSub  = document.querySelectorAll(".subTotal")
    var sum  =0
    addSub.forEach((sub)=>{
        var subNumber = parseInt(sub.innerHTML.replace("Rs.",""))
        sum = sum + subNumber;
        cartTotal.innerHTML=`Total : Rs.${sum}`
    })
    if(addSub.length<1){
        cartTotal.innerHTML = `Total : `
    }
}
function mains(){
    
    menShirt()
    mentShirt()
    menPants()
    openClose()
    mainCart() 
    
}
mains()

// var pantsStorage=[
//     { id: "mp1", src:"./images/pants1.jpg", name:"Pants 1", price:"800" , size: "L,M,XL",rating:"4.5"},
//     { id: "mp2", src:"./images/pants2.jpg", name:"Pants 2", price:"600" , size: "L,M,XL",rating:"4.4"},
//     { id: "mp3", src:"./images/pants3.jpg", name:"Pants 3", price:"1200" , size: "L,M,XL",rating:"4.1"},
//     { id: "mp4", src:"./images/pants4.jpg", name:"Pants 4", price:"3400" , size: "L,M,XL",rating:"4.9"},
//     { id: "mp5", src:"./images/pants5.jpg", name:"Pants 5", price:"2000" , size: "L,M,XL",rating:"4.5"},
//     { id: "mp6", src:"./images/pants6.jpg", name:"Pants 6", price:"300" , size: "L,M,XL",rating:"4.0"}
//     ]
    
// pantsStorage.map((e)=>{
//     var {id,src,name,price,size,rating}=e

//     console.log(id,src);
// })