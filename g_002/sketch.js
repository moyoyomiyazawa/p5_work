let diam = 10;
let centX = 0;
let centY = 0;

function setup() {
	createCanvas(500, 500);
	frameRate(24);
	smooth();
	background(0);
	centX = width/2;
	centY = height/2;
	stroke(255);
	strokeWeight(6);
	noFill();
}

function draw() {
	if (diam <= 800) {
		ellipse(centX, centY, diam, diam);
		diam += random(8, 32);
		if (diam > 800) {
			diam = 10;
			stroke(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
			// strokeWeight(random(1, 8));
		}
	}
}
