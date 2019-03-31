let radius = 1;
let centx = 500/2;
let centy = 500/2;

function setup() {
	createCanvas(500, 500);
	background(255);
	strokeWeight(5);
	smooth();

	stroke(20, 50, 70);
	let x, y;
	let lastx = -999;
	let lasty = -999;
	for (let ang = 0; ang <= 360*90; ang += 5) {
		radius += 0.1;
		let rad = radians(ang);
		x = centx + (radius * cos(rad));
		y = centy + (radius * sin(rad));
		if (lastx > -999) {
			line(x, y, lastx, lasty);
		}
		lastx = x;
		lasty = y;
	}
}

function draw() {

}
