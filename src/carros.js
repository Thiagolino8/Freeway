//Variáveis dos Carros
let carro = [document.createElement("img"), document.createElement("img"), document.createElement("img"), document.createElement("img"), document.createElement("img"), document.createElement("img")];
let xCarro = [600, 600, 600, 600, 600, 600];
let yCarro = [40, 96, 150, 210, 270, 318];
let velocidadeCarro = [2, 2.5, 3.2, 5, 3.3, 2.3];
let alturaCarro = 50;
let larguraCarro = 40;

function desenhaCarro(){
    for(let i = 0; i < 6; i++){
        ctx.drawImage(carro[i], xCarro[i], yCarro[i], alturaCarro, larguraCarro);
    }
    
}

function moveCarro(){
    for(let i = 0; i < 6; i++){
        if(xCarro[i] + 50 < 0){
            xCarro[i] = largura;
        }else{
            xCarro[i] -= velocidadeCarro[i];
        }

    }
}