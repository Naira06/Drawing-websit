// let width = document.querySelector('width')
// let Height = document.querySelector('Height')
// let yaxis= document.querySelector('yaxis')
// let xaxis= document.querySelector('xaxis')
// let DrawRec = document.querySelector('.DrawRec')
function getInputValue(){
    var width = document.getElementById("width").value.indexOf("@");
    var Height = document.getElementById("Height").value;
    var yaxis= document.getElementById("yaxis").value;
    var xaxis= document.getElementById("xaxis").value;

return width, Height,yaxis,xaxis}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// function DrawRectan(){
//     ctx.beginPath();
//     ctx.rect(xaxis, yaxis, width, Height);
//     ctx.stroke();
// }
ctx.beginPath();
ctx.rect(xaxis, yaxis, width, Height);
ctx.stroke();


// DrawRec.onclick = function(){
//     DrawRectan()
// }