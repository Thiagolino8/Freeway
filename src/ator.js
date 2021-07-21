//Variáveis do Ator
let ator = document.createElement("img");
let xAtor = 100;
let yAtor = 366;
let velocidadeAtor = 4;
let alturaAtor = 30;
let larguraAtor = 30;
let pontuação = 0;
let wait = 50;


function desenhaAtor(){
    ctx.drawImage(ator, xAtor, yAtor, alturaAtor, larguraAtor);
}

function moveAtor(){
    // keyCode 38 = up, keycode 40 = down, keycode 37 = left, keycode 39 = right
    if(tecla == 38){
        yAtor -= velocidadeAtor;
        if(yAtor < 0){
            let audio = document.querySelector('audio');
            audio.src = "ponto.mp3"
            audio.play();
            pontuação ++;
            wait = 50;
            if(pontuação == 10){
                venceu();
            }
            yAtor = 366;
            xAtor = 100;
            for(let i = 0; i < 6; i++){
                velocidadeCarro[i] += 0.5;
            }
        }
    }else if(tecla == 40 && yAtor + alturaAtor < altura){
        yAtor += velocidadeAtor;
    }else if(tecla == 37 && xAtor > 0){
        xAtor -= velocidadeAtor;
    }else if(tecla == 39 && xAtor + larguraAtor < largura){
        xAtor += velocidadeAtor;
    }
}

function colisão(){
    for(var i = 0; i < 6; i++){
        if(xAtor + larguraAtor  - 5 > xCarro[i] && xAtor + 5 < xCarro[i] + larguraCarro){
            if(yAtor + alturaAtor - 5 > yCarro[i] && yAtor + 15 < yCarro[i] + alturaCarro){
                for(let i = 0; i < 6; i++){
                    velocidadeCarro[i] -= 0.5;
                }
                yAtor = 366;
                xAtor = 100;
                pontuação --;
                wait = 50;
                if(pontuação < 0){
                    perdeu();
                }
            }
        }
    }
}