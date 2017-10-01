
function setup(){
    createCanvas(500, 500);
    background(51);
    
    //createSliders
    sSlider = createSlider(1,50,20); //spacing slider
    sSlider.position(10, 520);
}
function draw(){
    ten_print();
    ten_print_reverse();
}

let x = 0;
let y = 0;
let space = sSlider.value();

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