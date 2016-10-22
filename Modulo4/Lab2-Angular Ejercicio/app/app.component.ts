import { Component } from '@angular/core';

 export class Ride {
 	airport: number;
 	app: number;
 	units: number;
 	festive: number;
 	default: number;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/ride.html'
})
export class AppComponent {
    total:number = 0;
    valorUnidad:number = 82;
    ride: Ride = {
        airport:3900,
        app:700,
        units:50,
        festive:1900,
        default:4100
    }

 //   total=5 = 5 + 5;

}

