
function placar(){
    if(pontuação < 10 && pontuação > -1){
        ctx.fillStyle = "brown";
        ctx.fillRect(40, 4, 35, 28);
        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.fillText(pontuação, 48, 28);
    }else{
        if(pontuação < 0){
            pontuação++;
            ctx.fillStyle = "brown";
            ctx.fillRect(40, 4, 35, 28);
            ctx.font = "35px monospace";
            ctx.fillStyle = "white";
            ctx.fillText(pontuação, 48, 28);
        }else{
            ctx.fillStyle = "brown";
            ctx.fillRect(40, 4, 53, 28);
            ctx.font = "35px monospace";
            ctx.fillStyle = "white";
            ctx.fillText(pontuação, 48, 28);
        }
    }
}