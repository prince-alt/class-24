class pig {

constructor(x,y){

var pigp = {

'restitution' : 1,
'density' : 1,
'friction' : 0.3

}

this.body = bodies.rectangle(x,y,50,50,pigp);
this.width = 50;
this.height = 50;
worldc.add(world,this.body);

}

display(){

var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotate (angle);
rectMode (CENTER);
fill ("red");
rect(0,0,this.width,this.height);
pop ();

}

}