import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class productComponent {

  constructor(public navCtrl: NavController) {
  }
title:string = "Mis productos";



}
