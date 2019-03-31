// 変数の初期値を設定
let xstep = 2;
let lastx = -999;
let lasty = -999;
let angle = 0;
let y = 50;

function customRandom() {
	let retValue = 1 - noise(random(10)) ** 5;
	return retValue;
}

// 一回だけ実行される 画面の設定値などを描く
function setup() {
	createCanvas(500, 300);  // 画面サイズ
	background(255);  // 背景色 0が黒で255が白
	strokeWeight(2);  // 線の太さ
	smooth();  // 描画のスムーズさ
	frameRate(18);  // フレームレートを指定
}

// フレーム毎に繰り返し実行される
function draw() {
	let ynoise = random(10);
	background(255);
	for (let x = 20; x <= 480; x += xstep) {
		// y = 100 + noise(ynoise) * 200;
		let rad = radians(angle);
		// y = 50 + (pow(sin(rad), 3) * noise(rad * 2) * 30);
		y = 20 + (customRandom() * 10);
		if (lastx > -999) {
			line(x, y, lastx, lasty);
		}
		lastx = x;
		lasty = y;
		// ynoise += 0.02;
		angle++;
  }
}
