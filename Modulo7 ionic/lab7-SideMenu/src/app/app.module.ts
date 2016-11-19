import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductosPage } from '../pages/productos/productos';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { ProductDetailPage } from '../pages/product-detail/product-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductosPage,
    UsuariosPage,
    ProductDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductosPage,
    UsuariosPage,
    ProductDetailPage
  ],
  providers: []
})
export class AppModule {}
