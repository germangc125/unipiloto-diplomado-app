import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Usuarios page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html'
})
export class UsuariosPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello UsuariosPage Page');
  }

}
