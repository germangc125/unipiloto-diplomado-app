import {Component} from '@angular/core';
import {Product} from '../model/product'
import {ProductService} from '../service/product.service';

@Component({
    selector: 'product-list',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class productListComponent {
  constructor(private productService: ProductService){}


  title: string = "Productos";
  products:Product[];
  product: Product;

  ngOnInit(){
		this.productService.getProducts()
		.then(productos => this.products = productos)
		.catch(error => console.log(error));
	}
  onSelectProduct(product:Product){
    this.product = product; 
  }
}
