/*
function timerGame(){
let S;
let t = 0
let dt = 0.01685;
function setup() {
  touchedTimer()
  createCanvas(1500, 1000);
  S = 0;
  buildButton('reset', '100', '100', 'resetTimer()')

}
function buildButton(text, x, y, funct) {
  button = createButton(text)
  button.position(100, 100)
  button.mousePressed(resetTime)
  displayRandomNumber()
}
function draw() {
  timerDisplay()
  if (S === 1) {
    t = t + dt;
  }
  //text(mouse.x,100,100)
  textSize(60)
  fill(0)
  text(round(t, 3), 150, 220)
}
function touchStarted() {
  if (S === 0)
    S = 1;
  else
    S = 0
}

function touchedTimer() {
  if (mouseX < 400 && mouseX > 200 && mouseY ){
    touchStarted()
  }
}

function timerDisplay() {
  fill(180)
  rect(100, 150, 200, 100)
}
function resetTime() {
  t = 0
}
function displayRandomNumber() {
  let r = round(random(0, 10), 2)
  textSize(50)
  text('Get this Number: ' + r, 100, 100)
}
}

*/


/*
function drawSquares(){
  for(let r = 0; r<4; r++){
    for(let c = 0; c<4; c++){
      fill('white')
      rect(100+100*c,100+100*r,100,100)
    }
  }
}
function checkClicked() {
  if (mouseIsPressed && checkHover()) {

    return true;
  }
  return false;
}

function pickRandomCoordinates(){
  return a = round(random(1,16))
}

function fillSquares(){
  if(a<= 3){
    fill(100,100,100)
    rect(100+100*a,100,100,100)
  }
  if(4<a<7){
      fill(100,100,100)
      rect(100+100*(a-3),200,100,100)
      console.log(a)
    }
  if(7<=a<10){
    fill(100,100,100)
    rect(100+100*(a-6),200,100,100)
    console.log(a)
  }

}
*/
let lastChecked = 0;
let squaresLocations = [];

function setup(){
  createCanvas(1500,1000)
  randomNumbers()
  puzzle[a][b] = 1
}

function draw(){
  if (millis() - lastChecked > 4000) {
    displayBoard()
    randomNumbers()
    lastChecked = millis();
  }
 

}

function randomNumbers(){
  a = random(0,3)
  b = random(0,3)
  a = round(a)
  b = round(b)
  
  squaresLocations.push([a, b]);

}
let puzzle = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

function displayBoard() {
  for (let r = 0; r < puzzle.length; r++) {
    for (let c = 0; c < puzzle[r].length; c++) {
      fill('white')
      rect(100+100*c, 100+100* r, 100)
      puzzle[a][b] = 1
      fill(100,100,100)
      rect(100+100*b, 100+100*a,100)
    }
  }
}