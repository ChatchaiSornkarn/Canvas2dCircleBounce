var canvas = document.getElementById('myCanvas'); 
var ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = Math.random() * (71 - 30) + 30;
// dx = x velocity 
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;

function BackgroundColor(color){
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function Circle(x, y, radius, dx, dy){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.dx = dx;
	this.dy = dy;

	this.draw = function(){
		ctx.beginPath();
		//ctx.arc parameters --> (x, y, radius, startAngle, endAngle, anticlockwise)
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'blue';
		ctx.fill();
	}
	this.update = function(){
		if(this.x + radius > canvas.width || this.x - radius < 0){
			this.dx = -this.dx;
		}

		if(this.y + radius > canvas.height || this.y - radius < 0){
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	}
}

var circle = new Circle(x, y, radius, dx, dy);

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0, canvas.width, canvas.height);
	new BackgroundColor('#E9EDEF');
	circle.update();
}

animate();
