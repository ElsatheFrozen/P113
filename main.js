function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 150, 100, 300, 280);

    fill(0, 20, 128);
  stroke(0, 20, 128);
    circle(590, 50, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(75, 35, 480, 30);

    fill(0, 20, 128);
  stroke(0, 20, 128);
    circle(50, 45, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(35, 75, 30, 350);

    fill(0, 20, 128);
    stroke(0, 20, 128);
      circle(50, 430, 70);

      fill(0, 128, 0);
      stroke(0, 128, 0);
      rect(85, 420, 480, 30);

      fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(575, 80, 30, 350);

      fill(0, 20, 128);
  stroke(0, 20, 128);
    circle(590, 430, 70);
}

function take_snapshot(){
    save('student_name.png');
}