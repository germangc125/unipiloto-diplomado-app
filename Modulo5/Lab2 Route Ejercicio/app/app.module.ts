import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './components/app.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {productListComponent} from "./components/product-list.component";
import {userListComponent} from "./components/user-list.component";
import {productDetailComponent} from  "./components/product-detail.component";
import {userDetailComponent} from  "./components/user-detail.component";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      productListComponent,
      userListComponent,
      productDetailComponent,
      userDetailComponent
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
