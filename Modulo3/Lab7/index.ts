class vehicle{
	whell:number;
	fuel:string;
	private color:string;
	constructor(whell:number,fuel:string,color:string = 'white'){
		this.color=color;
		this.fuel=fuel;
		this.whell = whell;
	}
}


class Car extends vehicle {
	constructor() {
		super(4,'gas','red');
	}
}

class Motorcycle extends vehicle {
	constructor() {
		super(2,'gasolina');
	}
}


var car = new Car();
var motorcycle = new Motorcycle();

console.log(car);
console.log(motorcycle);