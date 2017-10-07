var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = Math.random() * (71 - 30) + 30;

function Circle(x, y, radius){
	this.x = x;
	this.y = y;
	this.radius = radius;

	this.draw = function(){
		ctx.beginPath();
		//ctx.arc parameters --> (x, y, radius, startAngle, endAngle, anticlockwise)
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'blue';
		ctx.fill();
	}
}
var circle = new Circle(x, y, radius);
circle.draw();
