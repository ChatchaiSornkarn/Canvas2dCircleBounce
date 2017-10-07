var canvas = document.getElementById('myCanvas'); 
var ctx = canvas.getContext('2d');

function BackgroundColor(color){
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/*
 * dx and dy is velocity
 */
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

/*
 * circleArray contain 10 circles
 */
var circleArray = [];
for(var i = 0; i < 10; i++){
	var x = canvas.width / 2;
	var y = canvas.height / 2;
	var radius = Math.random() * (71 - 30) + 30;
	var dx = (Math.random() - 0.5) * 10;
	var dy = (Math.random() - 0.5) * 10;
	circleArray.push(new Circle(x, y, radius, dx, dy));
}

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0, canvas.width, canvas.height);
	// update background with gray color first
	new BackgroundColor('#E9EDEF');
	// update all circles
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();
