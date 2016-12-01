import { Component } from '@angular/core';
import { Network } from 'ionic-native';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  constructor(public navCtrl: NavController, public storage: Storage) {
  }

  public network: string;
  estado:string = "";

  ngOnInit() {
  
        
    // watch network for a connection
   Network.onConnect().subscribe(() => {
      console.log('network connected!'); 
      // We just got a connection but we need to wait briefly
      // before we determine the connection type.  Might need to wait 
      // prior to doing any api requests as well.
      setTimeout(() => {
           this.estado = Network.connection;
          console.log('Estado = '+this.estado+'!');
      }, 3000);
    });
  }
}
