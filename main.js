function preload() {
	
}

function setup() {
	canvas=createCanvas(500, 500);
	canvas.position(150, 150);
	video=createCapture(VIDEO);video.hide();
}

function photo() {
	save('mySelfie.png');
}

function draw() {
	image(video, 100, 150, 300, 250);
	
	fill(0, 0, 100);
	stroke(0, 0, 100);
	rect(20, 25, 450, 50);
	rect(425, 25, 50, 450);
	rect(25, 425, 450, 50);
	rect(20, 25, 50, 450);
	
	fill(164,219,232);
	stroke(164,219,232);
	circle(50, 50, 100);
	circle(450, 50, 100);
	circle(50, 450, 100);
	circle(450, 450, 100);
}