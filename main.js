import {Player, Decor} from "./elements.js";

const client = {
	get width(){return window.innerWidth},
	get height(){return window.innerHeight}
};

const game = {
	name : "Useless",
	session : null,
	levels : {},
	views : {}
};

class Controls{

};

class Level{
	name;
	width;
	height;
	pnj = {};
	decors = {};
	constructor(name, width, height){
		this.name = name;
		this.width = width;
		this.height = height;
		this.addLvlinGame();
	}

	addLvlinGame(){
		game.levels[this.name] = this;
	};

	addPnJ(newPnJ){
		this.pnj[newPnJ.name] = newPnJ;
	};

	addDecor(x, y, name, width, height){
		let newDecor = new Decor(x, y, name, width, height);
		this.decors[newDecor.name] = newDecor;
	};


};

class View{
	name;
	x;
	y;
	width;
	height;
	constructor(name, x, y, width, height){
		this.name = name;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
};

class Session{
	player;
	level;
	constructor(level){
		this.player = new Player();
		this.level = level;
	};
}

function initLvl(){
	new Level("outside", 100, 50);
	new Level("house", 10, 10)
}

function initDecor(){
	let levels = game.levels
	levels.house.addDecor(0,0,"bed",2,1);
	levels.outside.addDecor(10,10,"house",10,10,);
}




initLvl();
initDecor();

console.log(game.levels.house.decors.bed);
console.log(game.levels.outside.decors.house);