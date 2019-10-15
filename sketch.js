//variables for the first song
var myImage = [];
var playButton1;
var bg1;
var amp1;
var chill;
//variables for the second song
var myImage2 = [];
var playButton2;
var bg2;
var amp2;
var rap;
//variables for the third song
var myImage3 = [];
var playButton3;
var bg3;
var amp3;
var rock;

function preload() {
  font = loadFont("./assets/gt-walsheim-bold.ttf");
  //preload the file for the first song
  myImage = loadImage("./assets/MattiaCupelli/image1.jpg");
  chill = loadSound("./assets/MattiaCupelli/song1.mp3");
  //preload the file for the second song
  myImage2 = loadImage("./assets/Bazanji/image2.jpg");
  rap = loadSound("./assets/Bazanji/song2.mp3");
  //preload the file for the third song
  myImage3 = loadImage("./assets/DoubleAgent/image3.jpg");
  rock = loadSound("./assets/DoubleAgent/song3.mp3");

  frameRate(24);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  amp1 = new p5.Amplitude();
  amp1.setInput(chill);
  amp2 = new p5.Amplitude();
  amp2.setInput(rap);
  amp3 = new p5.Amplitude();
  amp3.setInput(rock);

  //setup the backgrounds
  bg1 = new background1();
  bg2 = new background2();
  bg3 = new background3();
  //setup the playButtons
  playButton1 = new pB1();
  playButton2 = new pB2();
  playButton3 = new pB3();
}

function draw() {
  //display the backgrounds
  bg1.display();
  bg2.display();
  bg3.display();

  //circle animation
  //circle1
  push();
  volume = amp1.getLevel();
  volume = map(volume, 0, 1, 0, height);
  stroke(color(249, 239, 225));
  noFill();
  ellipse(width / 6, height / 2, volume * random(), volume * random());
  pop();
  //circle2
  push();
  volume1 = amp2.getLevel();
  volume1 = map(volume1, 0, 1, 0, height);
  stroke(color("#DE7C5A"));
  noFill();
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(frameCount);
  rect(0, 0, volume1, volume1);
  pop();
  //circle3
  push();
  volume2 = amp3.getLevel();
  volume2 = map(volume2, 0, 1, 0, height);
  stroke(color("#A69888"));
  noFill();
  ellipse(5 * width / 6, height / 2, volume2 * 2);
  rectMode(CENTER);
  translate(5 * width / 6, height / 2);
  rotate(-frameCount);
  rect(0, 0, volume2 * 1.5, volume2 * 1.5);
  pop();


  //display the cover images
  //first image
  push();
  imageMode(CENTER);
  image(myImage, width / 6, height / 2 - 15, 150, 150);
  pop();
  //second image
  push();
  imageMode(CENTER);
  image(myImage2, width / 2, height / 2 - 15, 150, 150);
  pop();
  //third image
  push();
  imageMode(CENTER);
  image(myImage3, 5 * width / 6, height / 2 - 15, 150, 150);
  pop();

  //display the playButtons
  //pb1
  push();
  playButton1.display();
  pop();
  //pb2
  push();
  playButton2.display();
  pop();
  //pb3
  push();
  playButton3.display();
  pop();

  //draw the texts
  //text1
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(color(249, 239, 225));
  textFont(font);
  text("chill", windowWidth / 6, windowHeight / 2 - 200);
  text("artist: mattia cupelli", windowWidth / 6, windowHeight / 2 + 200);
  //text2
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(color("#DE7C5A"));
  textFont(font);
  text("rap", windowWidth / 2, windowHeight / 2 - 200);
  text("artist: bazanji", windowWidth / 2, windowHeight / 2 + 200);
  //text3
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(color("#A69888"));
  textFont(font);
  text("rock", 5 * windowWidth / 6, windowHeight / 2 - 200);
  text("artist: double agent", 5 * windowWidth / 6, windowHeight / 2 + 200);
}

//function for the backgrounds
function background1() {
  this.x = windowWidth / 6;
  this.y = windowHeight / 2;
  this.w = windowWidth / 3;
  this.h = windowHeight;
  this.color = color(119, 151, 123);

  this.display = function() {
    rectMode(CENTER);
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }
}

function background2() {
  this.x = windowWidth / 2;
  this.y = windowHeight / 2;
  this.w = windowWidth / 3;
  this.h = windowHeight;
  this.color = color("#570000");

  this.display = function() {
    rectMode(CENTER);
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }
}

function background3() {
  this.x = 5 * windowWidth / 6;
  this.y = windowHeight / 2;
  this.w = windowWidth / 3;
  this.h = windowHeight;
  this.color = color("#334E58");

  this.display = function() {
    rectMode(CENTER);
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }
}

//function for the playButtons
function pB1() {
  //rectangle parameters
  this.xr = width / 6;
  this.yr = height / 2 + 75;
  this.dw = 150;
  this.dh = 30;
  this.colorr = color(249, 239, 225);

  //triangle parameters
  this.x1 = 0
  this.y1 = -10;
  this.x2 = -10;
  this.y2 = 10;
  this.x3 = 10;
  this.y3 = 10;
  this.color = color(107, 105, 124);

  this.display = function() {
    rectMode(CENTER);
    noStroke();
    fill(this.colorr);
    rect(this.xr, this.yr, this.dw, this.dh);

    translate(width / 6, height / 2 + 75);
    rotate(90);
    noStroke();
    fill(this.color);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }

  this.start = function() {
    var d = dist(mouseX, mouseY, this.xr, this.yr);
    if (d < this.dw && d < this.dh) {
      if (!chill.isPlaying()) {
        chill.play();
      } else {
        chill.pause();
      }
    }
  }
}

function pB2() {
  //rectangle parameters
  this.xr = width / 2;
  this.yr = height / 2 + 75;
  this.dw = 150;
  this.dh = 30;
  this.colorr = color("#DE7C5A");

  //triangle parameters
  this.x1 = 0
  this.y1 = -10;
  this.x2 = -10;
  this.y2 = 10;
  this.x3 = 10;
  this.y3 = 10;
  this.color = color("#570000");

  this.display = function() {
    rectMode(CENTER);
    noStroke();
    fill(this.colorr);
    rect(this.xr, this.yr, this.dw, this.dh);

    translate(width / 2, height / 2 + 75);
    rotate(90);
    noStroke();
    fill(this.color);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }

  this.start = function() {
    var d = dist(mouseX, mouseY, this.xr, this.yr);
    if (d < this.dw && d < this.dh) {
      if (!rap.isPlaying()) {
        rap.play();
      } else {
        rap.pause();
      }
    }
  }
}

function pB3() {
  //rectangle parameters
  this.xr = 5 * width / 6;
  this.yr = height / 2 + 75;
  this.dw = 150;
  this.dh = 30;
  this.colorr = color("#A69888");

  //triangle parameters
  this.x1 = 0
  this.y1 = -10;
  this.x2 = -10;
  this.y2 = 10;
  this.x3 = 10;
  this.y3 = 10;
  this.color = color("#334E58");

  this.display = function() {
    rectMode(CENTER);
    noStroke();
    fill(this.colorr);
    rect(this.xr, this.yr, this.dw, this.dh);

    translate(5 * width / 6, height / 2 + 75);
    rotate(90);
    noStroke();
    fill(this.color);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }

  this.start = function() {
    var d = dist(mouseX, mouseY, this.xr, this.yr);
    if (d < this.dw && d < this.dh) {
      if (!rock.isPlaying()) {
        rock.play();
      } else {
        rock.pause();
      }
    }
  }
}


function mousePressed() {
  playButton1.start();
  playButton2.start();
  playButton3.start();
}
