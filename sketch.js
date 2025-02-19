var slider;

function setup() {
  createCanvas(500, 500);
  slider=createSlider(0,TWO_PI,PI/4,0.01);
}

function draw() {
  background(220);
  angle=slider.value();
  stroke(255);
  translate(200,height);
  branch(150);

}

function branch(len){
  line(0,0,0,0-len);
  translate(0,-len);
  if(len>4){
      push();
      rotate(angle);
      branch(len*0.67);
      pop();
      push();
      rotate(-angle);
      branch(len*0.67);
      pop();
  }
  

}