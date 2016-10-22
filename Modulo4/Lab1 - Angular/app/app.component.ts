import { Component } from '@angular/core';

 export class Product {
 	id: number;
 	name: string;
 	description: string;
 	type: string;
 	price: number;
 	quantity: number;
 }
 export class User {
 	name: string;
 	id: number;
 	adress:string;
 	phone: number;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html'
})
export class AppComponent {
	title:string ="Mis productos"
	products: Product[] = PRODUCTS;
	selected: Product;
	onSelect(product: Product) {
		this.selected = product;
	}

	// product: Product = {
	// 	id: 1,
	// 	name: "Galax7 7",
	// 	description: "Granada de mano",
	// 	type: "smartphone",
	// 	price: 500000,
	// 	quantity: 10
	// }
	// 	user: User = {
	// 	name: "German Gracia",
	// 	id: 80764564,
	// 	adress: "Carra 58 8# 2",
	// 	phone: 31231021,
	// }
}

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 5
    },
    {
        id: 3,
        name: "Motorola",
        description: "telefono que explota",
        type: "smartphone",
        price: 50000,
        quantity: 2
    }
];

//@Component({
  //selector: 'my-app',
  //template: '<h1>{{hello}}</h1>'
//})
//export class AppComponent { 
  //hello:string = "Hola mundo complicado muy complicado";
//}
