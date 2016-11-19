import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductDetailPage } from '../pages/product-detail/product-detail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ListPage,
  ProductDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      ListPage,
      ProductDetailPage
   
  ],
  providers: []
})
export class AppModule {}
