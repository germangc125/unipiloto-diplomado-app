import { Component } from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'product-app',
  templateUrl: 'app/templates/product.html',
  providers: [ProductService]
})
export class productComponent {
titulo:string = "Modulo Productos";

    products: Product[];
    selected:Product;
    
    product:Product= {
                id:0,
                name:"",
                type:"",
                quantity:0,
                price:0,
                url:"",
            };

    constructor(private productService: ProductService) {
    }

    onSelect(product: Product){
        this.selected = product;
    }

    getProducts() {
        this.productService.getProducts()
            .subscribe(
            products => {
                this.products = products;
            },

            error => {
                console.log(error);
            }
        );
    }
    add(product: Product): void {
        if (!product.name) { return; }
        this.productService.create(product)
            .subscribe(product => {
                this.products.push(product);
                this.selected = null;
            });
    }

    ngOnInit(): void {
        this.getProducts();
    }

}
