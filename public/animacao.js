var canvas = document.getElementById('meucanvas');
var ctx = canvas.getContext('2d');

var quadrado1 = {
    x: 150,
    y: 150,
    largura: 30,
    altura: 30,
    cor: 'red'
};

function desenha_quadrado(objeto){
    ctx.fillStyle = objeto.cor
    ctx.fillRect(objeto.x, objeto.y, objeto.largura, objeto.altura)
}

desenha_quadrado(quadrado1)

addEventListener("mousemove", function(evento){
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);
    //quadrado1.x=x_mouse;
    //quadrado1.y=y_mouse;

    ctx.clearRect(0,0,canvas.width, canvas.height)


    desenha_quadrado(quadrado1)

    if (x_mouse <= 280 && y_mouse <= 280 && x_mouse >= 0 && y_mouse >= 0) {
        quadrado1.x = x_mouse;
        quadrado1.y = y_mouse;
    }
})