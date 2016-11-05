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

    ngOnInit(): void {
        this.getProducts();
    }

}
