import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductService } from "../../providers/product.service";
import { Product } from "../../model/product";
import { ProductDetailPage } from "../product-detail/product-detail"

/*
  Generated class for the Productos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
  providers: [ProductService]
})
export class ProductosPage {
 products: Product[];

 constructor(public navCtrl: NavController,private productService: ProductService) {}

  ionViewDidLoad() {
    console.log('Hello ProductosPage Page');
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

  productSelecionado(product:Product){
    this.navCtrl.push(ProductDetailPage,{id: product.id});
  }


  nuevoProducto(){


  }

    ngOnInit(): void {
        this.getProducts();
    }

}
