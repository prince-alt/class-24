class bird {

    constructor(x,y){
    
    var birdp = {
    
    'restitution' : 0.8,
    'density' : 1.5,
    'friction' : 1
    
    }
    
    this.body = bodies.rectangle(x,y,50,50,birdp);
    this.width = 50;
    this.height = 50;
    worldc.add(world,this.body);
    
    }
    
    display(){
    
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate (angle);
    rectMode (CENTER);
    fill ("blue");
    strokeWeight(4);
    stroke("green");
    rect(0,0,this.width,this.height);
    pop ();
    
    }
    
    }