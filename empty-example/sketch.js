var contador = 0;
var x = 250;
var y = 250;
var d = 75;
var miss = 0;

var mode = 2;

var frame;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    circle(250, 250, d);
    mode = parseInt(prompt('1 - Fácil\n2 - Médio\n3 - Difícil\nInforme a dificuldade:'));
    if (mode == 1) {
        frame = 0.3;
        d = 100;
    } else if (mode == 2) {
        frame = 0.4;
        d = 75;
    }
    else {
        frame = 0.5;
        d = 50;
    }
}

function mousePressed() {
    var distance = dist(mouseX, mouseY, x, y);
    if (distance < d/2) {
        contador++;
        background("green");
        textSize(150);
        textAlign(CENTER);
        fill(255, 255, 255, 50);
        text(contador, width/2, height/2);
        fill("white");
    } else {
        background("red");
        miss++;
        contador--;
        if (miss <= 3) {
            // console.log("You made a mistake " + miss + " time");
        }
        textSize(150);
        textAlign(CENTER);
        fill(255, 255, 255, 100);
        text(contador, width/2, height/2);
        fill("white");
    }
    // if (miss >= 3) {
    //     console.log("You lost!");
    // } else {
    //     console.log(contador);
    // }
}

function draw() {
    background("black");
    frame *= 1.01;
    frameRate(frame);
    x = random(0 + d/2, windowWidth - d/2);
    y = random(0 + d/2, windowHeight - d/2);
    circle(x, y, d);
    textSize(150);
    textAlign(CENTER);
    fill(255, 255, 255, 50);
    text(contador, width/2, height/2);
    fill("white");
}