
class Element{
	x;
	y;
	name;
	width;
	height;
	constructor(x, y, name, width, height){
		this.x = x;
		this.y = y;
		this.name = name;
		this.width = width;
		this.height = height;
	}

	hello(){
		console.log(`Hello, i'm ${this.name}!`)
	}
}

class DynamicElement extends Element{
	velX;
	velY;
	constructor(x, y, name, width, height, velX, velY){
		super(x, y, name, width, height);
		this.velX = velX;
		this.velY = velY;
	}
}

class Player extends DynamicElement{
	constructor(x, y, name, width, height, velX, velY){
		super(x, y, name, width, height, velX, velY);
	}
};

class PnJ extends DynamicElement{
	constructor(x, y, name, width, height, velX, velY){
		super(x, y, name, width, height, velX, velY);
	}
};

class Friend extends PnJ{
	constructor(x, y, name, width, height, velX, velY){
		super(x, y, name, width, height, velX, velY);
	}
};

class Ennemy extends PnJ{
	constructor(x, y, name, width, height, velX, velY){
		super(x, y, name, width, height, velX, velY);
	}
};

class Decor extends Element{
	constructor(x, y, name, width, height){
		super(x, y, name, width, height);
	}
}

class EventTrigger extends Element{
	constructor(x, y, name, width, height){
		super(x, y, name, width, height);
	}
}

export {Player, Decor};