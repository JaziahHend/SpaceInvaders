//[Jaziah Henderson]
//[Rachon Edwards]
function setup() {
    createCanvas(800, 800);
    background("black");


}
let i = 800;
let p = 500;
let x = 450;
let y = 600;
let s = 580;
let l = 480;
let j = 125;
let k = 225;
let u = 325;
let t = 425;
let e = 525;
let g = 625;

let moveRight = true;
let moving = false;
let moveLeft = true;
let saved_x = 0;
let set_x = false;
let set_x_checker = true;
function draw() {
    background("black");

var v = 'Score';
    textSize(32)
    fill("green");
    text(v, 10, 10, 300, 300);
    var v = 'lives'
    textSize(32);
    fill("green");
    text(v, 450, 10, 300, 300);
    fill('green');
    rect(525,10,50,50);
    fill('green');
    rect(600,10,50,50);

    fill("white");
    ellipse(j, 200, 50, 50);
    fill("white");
    ellipse(k, 200, 50, 50);
    fill("white");
    ellipse(u, 200, 50, 50);
    fill("white");
    ellipse(t, 200, 50, 50);
    fill("white");
    ellipse(e, 200, 50, 50);
    fill("white");
    ellipse(g, 200, 50, 50);

    if (keyIsDown(LEFT_ARROW)) {
        x -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 10;
    }

    fill("green");
    rect(x, y, 75, 75);


    if (keyIsDown(LEFT_ARROW)) {
        l -= 10
    }
    if (keyIsDown(RIGHT_ARROW)) {
        l += 10
    }
    
    if (set_x == true) {
        saved_x = l;
        set_x = false;
        set_x_checker = false;
    }

    if (moving == true) {
        s -= 10;
        fill("green");
        rect(saved_x, s, 15, 20)
    } else {
        fill("green");
        rect(l, s, 15, 20)
    }
    if (s <= 0) {
        s = 580;
        set_x_checker = true;
        moving = false;
    }
    
  }

  function keyPressed() {
    if (keyCode === SHIFT) {
        moving = true;
        if (set_x_checker == true) {
            set_x = true;
        }
    }
  }
  