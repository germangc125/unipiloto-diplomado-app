import { Component } from '@angular/core';
import { NavController,NavParams  } from 'ionic-angular';
import { ProductService } from "../../providers/product.service";
import { Product } from "../../Model/product"
import { ProductDetailPage } from "../product-detail/product-detail"
/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [ProductService]
})
export class ListPage {

  constructor(public navCtrl: NavController,public params:NavParams,private productService: ProductService) {


  }

 products: Product[];
 

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

  productSelecionado(product:Product){
    this.navCtrl.push(ProductDetailPage,{id: product.id});
  }


  ionViewDidLoad() {
    console.log('Hello ListPage Page');
  }

    ngOnInit(): void {
        this.getProducts();
    }
}
