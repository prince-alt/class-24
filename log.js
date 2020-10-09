class log {

constructor(x,y,width,height,angle){

var logp = {

'restitution' : 1,
'friction' : 0.3,
'density' : 1

}

this.body = bodies.rectangle(x,y,width,height,logp);
this.width = width;
this.height = height;
worldc.add(world,this.body);

}

display(){

    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate (angle);
    rectMode (CENTER);
    strokeWeight(4);
    stroke("green")
    fill ("yellow");
    rect(0,0,this.width,this.height);
    pop ();
    
    }


}