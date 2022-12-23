let circle = document.querySelector('.circle')
let square = document.querySelector('.square')
let rectangle = document.querySelector('.rectangle')
let triangle = document.querySelector('.triangle')
let line= document.querySelector('.line')
let transformButton = document.querySelector('.transformButton')
let rotatingButton = document.querySelector('.rotatingButton')
let up = document.querySelector('.up')
let left = document.querySelector('.left')
let rotate = document.querySelector('.rotate')
let scalingButton = document.querySelector('.scalingButton')
let scaleX = document.querySelector('.scaleX')
let scaleY= document.querySelector('.scaleY')

let circleTop = parseInt(getComputedStyle(circle).getPropertyValue('top'));
let circleLeft = parseInt(getComputedStyle(circle).getPropertyValue('left'));

let rotation =0;
function rotated(){
    rotation= (rotation + +rotate.value) % 360 
    circle.style.transform =`rotate(${rotation}deg)`
}

function scaling(){
circle.style.transform=`scale(${+scaleX.value},${+scaleY.value})`
}
  
function upCircle(){
    circleTop -= +up.value
}

function leftCircle(){
    circleLeft -= +left.value
}
rotatingButton.onclick = function(){
    rotated()
}

scalingButton.onclick = function(){
    scaling()
}
transformButton.onclick = function(){
    upCircle()
    leftCircle()
    circle.style.top=circleTop+'px'
    circle.style.left=circleLeft+'px'
}
