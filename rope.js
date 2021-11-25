class rope{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		let options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		let pointA=this.rope.bodyA.position;
		let pointB=this.rope.bodyB.position;

		strokeWeight(2);

		let Anchor1X=pointA.x
		let Anchor1Y=pointA.y

		let Anchor2X=pointB.x+this.offsetX
		let Anchor2Y=pointB.y+this.offsetY

		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
	}

}