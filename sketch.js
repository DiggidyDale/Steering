var boids= [];
var food = [];
var poison = [];
var p;
var q;

function setup() {
    createCanvas(600, 400);
    for(var i = 0; i < 10; i++){
    var boid = new Boid(width/2, height/2);
    boids.push(boid);
    }
    //create food
    this.createDot(100, food, 1);
    //create poison
    this.createDot(100, poison, -1);
    p = createP("Boid : Health : Food : Poison");
    q = createP("");
}

function draw(){
    background(51);
    for(var i = boids.length - 1; i >= 0; i--){
        boids[i].behavoir(food, poison);
        boids[i].update();
        boids[i].display();
        var newBoid = boids[i].clone();
        if(newBoid != null){
            boids.push(newBoid);
        }
        this.boidDies(i);
    }
    this.showBest();
    this.showDot(food, 1);
    this.showDot(poison, -1);
    var rand = random(1);
    if(rand < 0.05){
        this.createDot(5, food, 1);
    }
    if(rand < 0.01){
        this.createDot(2, poison, -1);
    }

}

this.createDot = function(amount, list, alignment){
    for(var i = 0; i < amount; i++){
        var x = random(width);
        var y = random(height);
        list.push(createVector(x,y));
    }
}

this.showDot = function(list, alignment){
    var col = color(0,0,0);
    if(alignment == 1){
        //food is green
        col = color(0,255,0);
    }else if(alignment == -1){
        //poison is red
        col = color(255,0,0);
    }
    for(var i = 0; i< list.length; i++){
    noStroke();
    fill(col);
    ellipse(list[i].x, list[i].y, 5,5)
    }
}
this.boidDies = function(i){
    var boid = boids[i];
    if(boids[i].dead()){
        var x = boid.pos.x;
        var y = boid.pos.y;
        food.push(createVector(x, y));
        boids.splice(i,1);
    }
}
this.showBest = function(){
    var bestHealth = 0
    var best;
    for(var i = 0; i < boids.length; i++){
        if(boids[i].health > bestHealth){
            best = i;
        }
    }
    if(best != undefined){
        q.html(best + " : " + round(boids[best].health*100)/100 + " : " + round(boids[best].attraction[0] * 100)/100 + " : " + round(boids[best].attraction[1] * 100) / 100);
    }
}