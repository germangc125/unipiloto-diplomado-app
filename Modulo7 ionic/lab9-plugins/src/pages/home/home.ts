import { Component } from '@angular/core';
import { Network } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public network: string;
  estado:string = "Estado";
  constructor(public navCtrl: NavController) {
    
  }

  ngOnInit() {
    Network.onConnect().subscribe(() => {
      this.network = Network.connection;
      setTimeout(() => {
        if (Network.connection === 'wifi') {
           alert("Wifi");
           this.estado = "Wifi";
           console.log(Network.connection);
        }
        if (Network.connection === 'ETHERNET') {
            alert("ETHERNET");
           this.estado = "ETHERNET";
          console.log(Network.connection);
        }
            if (Network.connection === 'UNKNOWN') {
                alert("UNKNOWN");
         this.estado = "UNKNOWN";
          console.log(Network.connection);
        }
      }, 3000);
    });
  }
}
