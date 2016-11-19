import { Component } from '@angular/core';
import {Product} from "../../Model/product"
import {NavController} from 'ionic-angular';
import {ListPage} from "../list/list";
import {NuevoProductoPage} from "../nuevo-producto/nuevo-producto";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

   selected:any = false;

   product:Product = {
    id:1,
    name:"Samsumb",
    description:"",
    type:"",
    quantity:52,
    price:85,
  };

  loadInfo() {
  	this.selected = true;
  }

  iraList(){
    this.navCtrl.push(ListPage);
  }

  iraNuevoProducto(){
    this.navCtrl.push(NuevoProductoPage);
  }
}
