var res1 = document.getElementById("res1");
var res2 = document.getElementById("res2");

var res = document.getElementById("Res");

var player = document.getElementById("player");

var player2 = document.getElementById("player2");

var Player = prompt();
var Player2 = prompt();

player.innerHTML = Player;
player2.innerHTML = Player2;

var pTotal = 0;
var cTotal = 0;

var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")
var c4 = document.getElementById("c4")

function rand(){
    var random = (Math.floor(Math.random()*6)+1);

    return random
}

function start(){
    var C1 = rand();
    var C2 = rand();
    var C3 = rand();
    var C4 = rand();

    c1.innerHTML=C1;

    c2.innerHTML=C2;

    c3.innerHTML=C3;
    
    c4.innerHTML=C4;

    pTotal = C1 + C2;

    cTotal = C3 + C4;
    
    

    res1.innerHTML=pTotal;

    res2.innerHTML=cTotal;   
    
    main();
}
function main(){
    if(pTotal == cTotal){
        res.innerHTML=`Match Drawn`;
    }else if(pTotal > cTotal){
        res.innerHTML = `${Player} won the match`;
    }else if(pTotal < cTotal){
        res.innerHTML=`${Player} looses the match`;
    }
}

