import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>{{hello}}</h1>'
})
export class AppComponent { 
  hello:string = "Hola mundo complicado muy complicado";
}
