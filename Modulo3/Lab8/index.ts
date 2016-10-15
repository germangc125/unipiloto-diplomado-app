class person {
	nid:number;
	name:string;
	age:number;
	constructor(nid:number,name:string,age:number) {
		this.nid = nid;
		this.name = name;
		this.age = age;
	};
}


class student extends person{
	id:number;
	classes: Array <string>;
	constructor(nid:number,name:string,age:number,id:number,classes:Array<string>){
		super(nid,name,age);
	}
	setId(id:number):void{
		this.id = id;
	}
	getId():number{
		return this.id;
	}
	setClasses(classes:Array <string>;):void{
		this.classes = classes;
	}
	getClasses():Array <string>;{
		return this.classes;
	}
}

class teacher extends person{
	idt:number;
	grade:Array<string>;
	classes_con:Array<number>;
	constructor(nid:number,name:string,age:number,idt:number,grade:Array<string>,,classes_con:Array<number>) {
		super(nid,name,age);
	}
}









//class foo {
  //  _bar:Boolean = false;
   // get bar():Boolean {
   //     return this._bar;
    //}
    //set bar(theBar:Boolean) {
   //     this._bar = theBar;
   // }
//}