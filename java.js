function drawrec(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); 
    var width = document.getElementById("width").value;
    var Height = document.getElementById("Height").value;
    var yaxis= document.getElementById("yaxis").value;
    var xaxis= document.getElementById("xaxis").value;
    this.ctx.beginPath();
    this.ctx.rect(xaxis, yaxis, width, Height);
    this.ctx.stroke();
    
}