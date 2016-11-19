import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {productComponent} from "../components/product.component";
import {userComponent} from "../components/user.component";

const routes: Routes = [
    { path: '', redirectTo: '/product', pathMatch: 'full' },
    { path: 'product',  component:  productComponent},
    { path: 'user',  component:  userComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}