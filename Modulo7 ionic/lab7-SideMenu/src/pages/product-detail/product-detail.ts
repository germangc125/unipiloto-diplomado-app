import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from "../../model/product";

/*
  Generated class for the ProductDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {
 
   public product:Product = {
    id:0,
    name:"",
    description:"",
    type:"",
    quantity:0,
    price:0,
  };


  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProductDetailPage Page');
  }

}
