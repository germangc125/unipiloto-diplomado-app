import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Product} from '../../Model/product';
/*
  Generated class for the NuevoProducto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nuevo-producto',
  templateUrl: 'nuevo-producto.html'
})
export class NuevoProductoPage {
 
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
    console.log('Hello NuevoProductoPage Page');
  }

}
