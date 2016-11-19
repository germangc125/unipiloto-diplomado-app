import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import {NuevoProductoPage} from "../pages//nuevo-producto/nuevo-producto";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ListPage,
  ProductDetailPage,
  NuevoProductoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      ListPage,
      ProductDetailPage,
      NuevoProductoPage
   
  ],
  providers: []
})
export class AppModule {}
