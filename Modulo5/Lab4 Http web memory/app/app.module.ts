import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { FormsModule } from '@angular/forms';

import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryProductService} from "./mock/in-memory-product.service";
import {ProductService} from "./services/product.service";

@NgModule({
  imports:      [ BrowserModule , 
  			          FormsModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryProductService, {delay: 500})
  			    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
