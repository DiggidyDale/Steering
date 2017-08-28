var boids= [];
var food = [];
var poison = [];

function setup() {
    createCanvas(600, 400);
    for(var i = 0; i < 10; i++){
    var boid = new Boid(width/2, height/2);
    boids.push(boid);
    }
    this.createFood(10);
    this.createPoison(10);
}

function draw(){
    background(51);
    for(var i = 0; i < boids.length; i++){
        boids[i].display();
        boids[i].update();
    }
    for(var i = 0; i< food.length; i++){
        fill(0,255,0);
        ellipse(food[i].x, food[i].y, 5,5)
    }
        for(var i = 0; i< poison.length; i++){
        fill(255,0,0);
        ellipse(poison[i].x, poison[i].y, 5,5)
    }
}
this.createFood = function(amount){
    for(var i = 0; i < amount; i++){
        var x = random(width);
        var y = random(height);
        food.push(createVector(x,y));
    }
}

this.createPoison = function(amount){
    for(var i = 0; i < amount; i++){
        var x = random(width);
        var y = random(height);
        poison.push(createVector(x,y));
    }
}
