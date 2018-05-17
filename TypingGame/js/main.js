var canvas = document.createElement('canvas');
var b = document.body;
var d = document.documentElement;

fullw = Math.max(b.clientWidth , b.scrollWidth, d.scrollWidth, d.clientWidth);
fullh = Math.max(b.clientHeight , b.scrollHeight, d.scrollHeight, d.clientHeight);
canvas.height=fullh;
canvas.width =fullw;
b.appendChild(canvas);
var ctx=canvas.getContext("2d");

var img=new Image();
img.src='kasoku.jpg';
img.onload=function(){
    ctx.drawImage(img,0,0);
    ctx.font = "120px 宋体";
//设置字体填充颜色
    ctx.fillStyle = "blue";
    ctx.fillText("你好",100,100);
}
