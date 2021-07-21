function venceu(){
    let audio = document.querySelector('audio');
    audio.src = "venci.mp3"
    audio.play();
    setTimeout(function(){
        alert("PARABÉNS!!!\nVOCÊ VENCEU");
        document.location.reload(true);
    }, 100);
    clearInterval(execução);
}

function perdeu(){
    let audio = document.querySelector('audio');
    audio.src = "morri.mp3"
    audio.play();
    setTimeout(function(){
        alert("QUE PENA :(\nVOCÊ PERDEU");
        document.location.reload(true);
    }, 100);
    clearInterval(execução);
}