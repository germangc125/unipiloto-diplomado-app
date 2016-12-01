import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Dialogs } from 'ionic-native';
import {Geolocation} from 'ionic-native';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }
  latitud:number=0;
  longitud:Number=0;

  loadAlert() {
    Geolocation.getCurrentPosition().then(resp => {
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
      Dialogs.alert('La latitud es:'+ this.latitud +' y la longitud es: '+ this.longitud+'', 'Alert!', 'Estoy de acuerdo');
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    
  }
}
