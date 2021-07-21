//Variáveis da Tela
let tela = document.querySelector("canvas");
let ctx = tela.getContext("2d");
let largura = 500;
let altura = 400;
let estrada = document.createElement("img");


preload();

function desenhaEstrada(){
  ctx.drawImage(estrada, 0, 0, largura, altura);
}

function draw() {
  desenhaEstrada();
  desenhaCarro();
  desenhaAtor();
  inicio();
  moveCarro();
  if(wait == 0){
    moveAtor();
  }else{
    wait --;
  }
  colisão();
  placar();
}

let execução = setInterval(draw, 1000/60);