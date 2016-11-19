import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListProductPage } from '../pages/list-product/list-product';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewUserPage } from '../pages/new-user/new-user';


@NgModule({
  declarations: [
    MyApp,
    ListProductPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewUserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListProductPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewUserPage
  ],
  providers: []
})
export class AppModule {}
