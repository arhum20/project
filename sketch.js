
let S;
let t = 0
let dt = 0.01685;
function setup() {
createCanvas(1500, 1000);
S=0;
buildButton('reset','100','100','resetTimer()')
}
function buildButton(text,x,y,funct){
button = createButton(text)
button.position(100,100)
button.mousePressed(resetTime)
displayRandomNumber()
}
function draw() {
timerDisplay()
if(S===1){
  t=t+dt;
}
//text(mouse.x,100,100)
textSize(60)
fill(0)
text(round(t,3),150,220)
}
function touchStarted(){
 if(S===0)
 S=1;
 else
 S=0
}

function timerDisplay(){
  fill(180)
  rect(100,150,200,100)
}
function resetTime(){
  t=0
}
function displayRandomNumber(){
    let r = round(random(0,10),2)
    textSize(50)
    text('Get this Number: ' + r,100,100)
  }
