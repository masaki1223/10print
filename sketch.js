let sSlider,rSlider,gSlider,bSlider;
let space=0;
let r = 0;
let g = 0;
let b = 0;

function setup(){
    createCanvas(500, 500);
    background(51);
    
    //createSliders
    sSlider = createSlider(1,50,10); //spacing slider
    sSlider.position(10, 520);
    rSlider = createSlider(0,255,255); //red slider
    rSlider.position(10, 540);    
    gSlider = createSlider(0,255,255); //green slider
    gSlider.position(10, 560);    
    bSlider = createSlider(0,255,255); //blue slider
    bSlider.position(10, 580);

    document.getElementById('r').textContent= ("red")
}
function draw(){
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
    fill(0);
}
var ten_print = function(){
    
    stroke(255);
    if(random(1) < 0.5){
    line( x, y, x+space, y+space);
    } else{
    line( x, y+space, x+space, y);
    }
    x += space;
    if(x>width){
        x = 0;
        y += space;
    }
}

let x_reverse = 0;
let y_reverse = 0;

var ten_print_reverse = function(){
    translate(width,height);
    stroke(255);
    if(random(1) < 0.5){
    line( x_reverse, y_reverse, x_reverse-space, y_reverse-space);
    } else{
    line( x_reverse, y_reverse-space, x_reverse-space, y_reverse);
    }
    x_reverse -= space;
    if(x_reverse<-width){
        x_reverse = 0;
        y_reverse -= space;
    }
}