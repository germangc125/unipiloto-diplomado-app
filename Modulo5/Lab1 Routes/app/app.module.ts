import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './components/app.component';
import { PageOneComponent } from './components/page-one.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {AboutComponent} from "./components/about.component";
import {PageTwoComponent} from "./components/page-two.component";
import {HomeComponent} from "./components/home.component";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      PageOneComponent,
      PageTwoComponent,
      HomeComponent,
      AboutComponent
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
