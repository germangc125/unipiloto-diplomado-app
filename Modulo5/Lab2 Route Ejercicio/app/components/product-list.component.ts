import {Component} from '@angular/core';
import {Product} from '../model/product'
import {ProductService} from '../service/product.service';
import {Router} from "@angular/router";

@Component({
    selector: 'product-list',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class productListComponent {
  constructor(private router: Router,private productService: ProductService){}


  title: string = "Productos";
  products:Product[];
  productSelected: Product;

  ngOnInit(){
		this.productService.getProducts()
		.then(productos => this.products = productos)
		.catch(error => console.log(error));
	}
  onSelectProduct(product:Product){
    this.productSelected = product; 
  }

  goToDetail(){
    this.router.navigate(['product/detail/', this.productSelected.id]);
  }



}
