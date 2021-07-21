//Variáveis de Comando
let tecla;

document.addEventListener("keydown",function(ev){
    // keyCode 38 = up, keycode 40 = down, keycode 37 = left, keycode 39 = right
    if(ev.keyCode == 38 || ev.keyCode == 40 || ev.keyCode == 37 || ev.keyCode == 39){
        tecla = ev.keyCode
    }
})

document.addEventListener("keyup",function(ev){
    // keyCode 38 = up, keycode 40 = down, keycode 37 = left, keycode 39 = right
    if(ev.keyCode == 38 || ev.keyCode == 40 || ev.keyCode == 37 || ev.keyCode == 39){
        tecla = 0;
    }
})