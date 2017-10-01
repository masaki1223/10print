let sSlider,rSlider,gSlider,bSlider;
let space=0;
let r = 0;
let g = 0;
let b = 0;
let sw = 0; //strokeWeight();
let randomSwitch = false;
let button;
let text;

function setup(){
    createCanvas(800, 500);
    background(51);
    button = createButton('Random').position(150,520);
    button.mousePressed(randomMode);
    text = createP(': inactive').position(220,505);
    //createSliders
    sSlider = createSlider(1,50,10); //spacing slider
    sSlider.position(10, 520);
    rSlider = createSlider(0,255,255); //red slider
    rSlider.position(10, 540);    
    gSlider = createSlider(0,255,255); //green slider
    gSlider.position(10, 560);    
    bSlider = createSlider(0,255,255); //blue slider
    bSlider.position(10, 580);
    wSlider = createSlider(1,20,4); //strokeweight slider
    wSlider.position(10, 600);
}

function draw(){
    if(randomSwitch)
    randomColor();
    else if(!randomSwitch)
    sliders();
    ten_print();
    ten_print_reverse();
}

let x = 0;
let y = 0;

var sliders = function(){
    space = sSlider.value();
    r = rSlider.value();
    g = gSlider.value();
    b = bSlider.value();
    sw = wSlider.value();
}
var ten_print = function(){
    
    stroke(r,g,b);
    strokeWeight(sw);
    if(random(1) < 0.5){
    line( x, y, x+space, y+space);
    } else{
    line( x, y+space, x+space, y);
    }
    x += space;
    if(x>width){
        x = 0;
        y += space;
    } else if(y>height){
        y = 0;
    }
}

let x_reverse = 0;
let y_reverse = 0;

var ten_print_reverse = function(){
    translate(width,height);
    stroke(r,g,b);
    strokeWeight(sw);
    if(random(1) < 0.5){
    line( x_reverse, y_reverse, x_reverse-space, y_reverse-space);
    } else{
    line( x_reverse, y_reverse-space, x_reverse-space, y_reverse);
    }
    x_reverse -= space;
    if(x_reverse<-width){
        x_reverse = 0;
        y_reverse -= space;
    } else if(y_reverse<-height){
        y_reverse = 0;
    }
}

function keyPressed(){
    if(key ==' '){
        background(51);
    }
}

function randomColor(){
    r = random(255);
    b = random(255);
    g = random(255);
    space = random(15,30);

}

function randomMode(){
    if(randomSwitch == false){
    randomSwitch = true;
    text.elt.innerText = ": active!";
    }
    else if(randomSwitch == true){
    randomSwitch = false;
    text.elt.innerText = ": inactive";
    }
}
