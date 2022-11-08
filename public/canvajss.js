var canvas = document.getElementById("meuCanvas");
var ctx = canvas.getContext("2d");

function desenhaQuadrado(x,y,w,h,cor){
    ctx.fillStyle = cor;
    ctx.fillRect(x,y,w,h);
}

desenhaQuadrado(0,0,30,30, "blue")
desenhaQuadrado(270,0,30, 30, "red")
desenhaQuadrado(0,270,30, 30, "yellow")
desenhaQuadrado(0,240,30, 30, "yellow")
desenhaQuadrado(30,270,30, 30, "yellow")
desenhaQuadrado(270,270,30, 30, "black")
desenhaQuadrado(270,240,30, 30, "black")
desenhaQuadrado(240,270,30, 30, "black")

desenhaQuadrado(120,150,30, 30, "red")
desenhaQuadrado(270,135,30, 30, "#00FFFF")

desenhaQuadrado(0,150,30,30, "#00FFFF")
desenhaQuadrado(0,120,30,30, "#00FFFF")


function desenhaCirculo(x, y, radius, start, end, cor, cor2){
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.arc(x, y, radius,start, end);
    ctx.stroke();
    ctx.fillStyle = cor2;
    ctx.fill();
}

desenhaCirculo(150,150,65,1*Math.PI,2*Math.PI, "#3CB371", "gainsboro")
desenhaCirculo(150, 150, 85, 1.*Math.PI, 1.25*Math.PI, "#3CB371" , "gainsboro" )
desenhaCirculo(150, 150, 85, 1.75*Math.PI, 2*Math.PI, "#3CB371", "gainsboro")
desenhaCirculo(150, 300, 80, 1*Math.PI, 1.50*Math.PI, "#3CB371", "gainsboro")
desenhaCirculo(150, 300, 40, 1*Math.PI, 2*Math.PI, "#3CB371", "#3CB371" )
desenhaCirculo(150, 300, 60, 1.50*Math.PI, 2*Math.PI, "#3CB371", "gainsboro")
desenhaCirculo(150, 115,15, 0, 2*Math.PI, "#3CB371", "#00FFFF")
desenhaCirculo(225,225,15,0, 2*Math.PI, "#3CB371", "yellow")
desenhaCirculo(75, 225,15,0, 2*Math.PI, "#3CB371", "yelow")



function desenhaLinha(x,y,w,h,cor){
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.moveTo(x, y);
    ctx.lineTo(w, h);
    ctx.stroke();
}

desenhaLinha(0,150,300,150, "#3CB371")
desenhaLinha(0,0,150,150, "blue")
desenhaLinha(300, 0, 150, 150, "red")
desenhaLinha(150,400,150,150, "#696969")

ctx.font = "30px Arial";
ctx.fillText("Canvas", 100, 50);
ctx.strokeStyle = black
