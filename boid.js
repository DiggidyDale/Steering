function Boid(x, y){
	//the boid needs a position, velocity and acceleration
	this.pos = createVector(x, y);
	this.vel = createVector(0, -1);
	this.acc = createVector(0, 0);

	// the size of the boid
	this.r = 4;
	this.health = 1;

	// limits for speed and acc
	this.maxForce = 0.5;
	this.maxSpeed = 5;
//display function
this.display = function(){
	// create boid as a triagle facing the direction of moevement
	var angle = this.vel.heading()+PI/2;
	push();
	translate(this.pos.x, this.pos.y);
	rotate(angle);
	stroke(120);
	strokeWeight(1);
	noFill();
	beginShape();
	vertex(0, -this.r * 2);
	vertex(-this.r, this.r * 2);
	vertex(this.r, this.r * 2);
	endShape(CLOSE);
	pop();
}
this.update = function(){
	//increase vel by acc
	this.applyForce();
	this.vel.add(this.acc);
	// limit vel
	this.vel.limit(this.maxSpeed);
	//move the boid
	this.pos.add(this.vel);
	// reset acc
	this.acc.mult(0);
	this.boundries();
}
this.applyForce = function(){
	this.acc.add(random(-1,1), random(-1,1));
	this.acc.limit(this.maxForce);
}

this.boundries = function(){
	if(this.pos.x < 0 || this.pos.x > width){
		this.pos.x = width/2;
		this.pos.y = height/2;

	}
	if(this.pos.y < 0 || this.pos.y > height){
		this.pos.y = height/2;
		this.pos.x = width/2;

	}
}

}