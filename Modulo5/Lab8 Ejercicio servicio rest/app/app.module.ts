import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from "./routing/app-routing";
import {productComponent} from "./components/product.component";
import {userComponent} from "./components/user.component";
import {APP_BASE_HREF} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ProductDetailComponent} from "./components/product-detail.component"
import {usertDetailComponent} from "./components/user-detail.component"


@NgModule({
  imports:      [ BrowserModule , 
  			          FormsModule,
                  AppRoutingModule,
                       HttpModule
  			    ],
  declarations: [ AppComponent,
                  productComponent,
                  userComponent,
                  ProductDetailComponent,
                  usertDetailComponent
              ],
                providers: [
      {
         
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
