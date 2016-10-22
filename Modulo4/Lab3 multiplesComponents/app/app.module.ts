import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { productComponent }   from './components/product.component';
import { productDetailComponent }   from './components/product-detail.component';


import { FormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule , 
  			        FormsModule
  			    ],
  declarations: [ AppComponent,
                  productComponent,
                  productDetailComponent ],
  bootstrap:    [ productComponent ]
})
export class AppModule { }
