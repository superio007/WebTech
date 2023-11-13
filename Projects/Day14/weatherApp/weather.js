var input=document.querySelector("#in")
var button=document.querySelector("button")
var temp=document.querySelector("#s1")
var city=document.querySelector("#s2")
var wind=document.querySelector("#s3")
var humid=document.querySelector("#s4")
var ApiKey = "7d05976977b8f2ba70b29df9ab83ced2"

button.addEventListener("click",async()=>{
    var Api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${ApiKey}`)
    console.log(Api)
// Api.then((res)=>{
//     console.log(res)
//     var apijson = res.json()
//     apijson
//     .then((data)=>{
//         console.log(data)
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })

    try{
        var apijson = await Api.json()
        temp.innerHTML = `${Math.floor(apijson.main.temp - 273)}ºC`
        city.innerHTML = `${apijson.name}`
        wind.innerHTML = `${apijson.wind.speed} Kmph`
        humidity.innerHTML = `${apijson.main.humidity}`
    }catch(err){
        console.log(err)
    }
})