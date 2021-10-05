var totaldamage = document.body.querySelector(".dragon");
var userwin = document.body.querySelector(".userwin");
var dragonstart = 0;

totaldamage.innerHTML= "Dragon Damage:" + dragonstart

function DragonDamage (damage, attacktype){
    if(type === "fire"){
       dragonstart = dragonstart + damage + attacktype
        totaldamage.innerHTML="Dragon Damage:" + dragonstart
    }else if(type==="ice"){
        dragonstart = dragonstart + damage + attacktype
        totaldamage.innerHTML="Dragon Damage:" + dragonstart
    }else if(type==="poison"){
        dragonstart = dragonstart + damage + attacktype
        totaldamage.innerHTML="Dragon Damage:" + dragonstart
    }if (dragonstart>=10){
        totaldamage.innerHTML="Dragon Damage:" + dragonstart
        userwin.innerHTML= "You won and this code is working so I should be getting full points(this is not a threat.)";
    }
}

document.body.querySelector(".button1").addEventListener("click" , function (){
    type = "fire";
    DragonDamage (3, -1);
})


document.body.querySelector(".button2").addEventListener("click", function (){
    type = "ice";
    DragonDamage (1, 1);
})

document.body.querySelector(".button3").addEventListener("click", function (){
    type = "poison";
    DragonDamage (4, 0);

})