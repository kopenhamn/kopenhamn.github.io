/*var canvas;
var canvasContext;
window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(70, 110, 50, 20);
    console.log(canvas, canvasContext);
}

var canvas;
var canvasContext;
window.onload = function(){
    canvas = document.getElementById('gameCanvas');

    canvasContext = canvas.getContext('2d');

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(40, 60, 20, 20);

    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(100, 60, 80, 20);

    console.log(canvas, canvasContext,canvasContext.fillStyle);
}


//ver. 3

var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 10;

window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var FramesPerSecond = 30;

    setInterval(function(){moveEverything(); drawEverything()},
    1000/FramesPerSecond);
}

function moveEverything(){
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = -ballSpeedX;
    }
}

function drawEverything(){
    //next line blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    //this is left player paddle
    colorRect(ballX, 60, 20, 20, 'red');
    //next line draws the ball
    colorRect(0, 180, 10, 80, 'white');

}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}


//ver. 4 (my ver!)

var canvas;
var canvasContext;
ballX = 50;
ballSpeedX = 10;
var framesPerSecond = 30;

window.onload = function (){
    canvas = document.getElementById('gameCanvas');
    setInterval(function(){moveEverything(); drawEverything()}, 1000/framesPerSecond)
}

function moveEverything() {
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = -ballSpeedX;
    }
    console.log(ballX);
}
function drawEverything() {

    canvasContext = canvas.getContext('2d');

    colorRect(0, 0, canvas.width, canvas.height, 'black');

    colorRect(ballX, 100, 20, 20, 'green');

    colorRect(0, 150, 10, 80, 'white');
}
function colorRect(x, y, w, h, c) {
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}


//ver. 5 (myver!)
var canvas;
var canvasContext;
var ballX = 5;
var ballSpeedX = 10;
var FramesPerSecond = 30;

window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    setInterval(function(){moveEverything (); drawEverything ()}, 1000/FramesPerSecond);
}

function moveEverything (){
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = -ballSpeedX;
    }
}

function drawEverything () {
    canvasContext = canvas.getContext('2d');
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorRect(ballX, 60, 20, 20, 'green');
    colorRect(0, 80, 10, 80, 'white');
}


function colorRect(x, y, w, h, c){
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}



//ver. 6 (next state Circle!)

var canvas = document.getElementById('gameCanvas');
var canvasContext = canvas.getContext('2d');
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 10;
var FramesPerSecond = 30;

window.onload = function(){
    setInterval(function(){moveEverything(); drawEverything()}, 1000/FramesPerSecond);
}
function moveEverything(){
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = -ballSpeedX;
    }
    ballY = ballY + ballSpeedY;
    if(ballY > canvas.height){
        ballSpeedY = -ballSpeedY;
    }
    if(ballY < 0){
        ballSpeedY = -ballSpeedY;
    }
}
function drawEverything(){
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorRect(0, 160, 10, 80, 'white');
    colorCircle(ballX, ballY, 10, 'white');
}
/*
function colorCircle(x, y, r, c){
    canvasContext.fillStyle = c;
    canvasContext.beginPath();
    canvasContext.arc(x, y, r, 0,Math.PI*2,true);
    canvasContext.fill();
}
//my try

function colorCircle(x, y, r, c){
    canvasContext.fillStyle = c;
    canvasContext.beginPath();
    canvasContext.arc(x, y, r, 0,Math.PI*2,true);
    canvasContext.fill();
}


function colorRect(x, y, w, h, c){
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}

//next is going to be hard one (mouse position and rect movment)

var canvas = document.getElementById('gameCanvas');
var canvasContext = canvas.getContext('2d');
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 10;
var FramesPerSecond = 1000;

window.onload = function(){
    setInterval(function(){moveEverything(); drawEverything()}, 1000/FramesPerSecond);

}

function moveEverything(){
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width){
        ballSpeedX = - ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = - ballSpeedX;
    }
    ballY = ballY + ballSpeedY;
    if(ballY > canvas.height){
        ballSpeedY = - ballSpeedY;
    }
    if(ballY < 0){
        ballSpeedY = - ballSpeedY;
    }
}

function drawEverything(){
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorCircle(ballX, ballY, 10, 'white');
    colorRect(0, 100, 10, 80, 'white');
}

function colorRect(x, y, w, h, c) {
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}

function colorCircle(x, y, r, c) {
    canvasContext.fillStyle = c;
    canvasContext.beginPath();
    canvasContext.arc(x, y, r, 0,Math.PI*2,true);
    canvasContext.fill();
}
*/
//once again repeat the script

var canvas = document.getElementById('gameCanvas');
var canvasContext = canvas.getContext('2d');
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 10;
var FPS = 30;

window.onload = function () {
    setInterval(function () {moveEverything(); drawEverything()}, 1000/FPS);
}

function drawEverything(){
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    colorCircle(ballX, ballY, 10, 'white');

    colorRect(0, 100, 10, 100, 'white');
}

function moveEverything() {
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width){
        ballSpeedX = - ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = - ballSpeedX;
    }
    ballY = ballY + ballSpeedY;
    if(ballY > canvas.height){
        ballSpeedY = - ballSpeedY;
    }
    if(ballY < 0){
        ballSpeedY = - ballSpeedY;
    }
}

function colorRect(x, y, w, h, c) {
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}

function colorCircle(x, y, r, c) {
    canvasContext.fillStyle = c;
    canvasContext.beginPath();
    canvasContext.arc(x, y, r, 0,Math.PI*2, true);
    canvasContext.fill();
}
// next script is hard to logic understand, lets try - mouse following