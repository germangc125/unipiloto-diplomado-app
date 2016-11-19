import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductService } from "../../providers/product.service";
import { Product } from "../../model/product";
/*
  Generated class for the ListProduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
  providers: [ProductService]
})
export class ListProductPage {
  products: Product[];
  constructor(public navCtrl: NavController,private productService: ProductService) {}

  ionViewDidLoad() {
    console.log('Hello ListProductPage Page');
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
