import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {productListComponent} from "../components/product-list.component";
import {userListComponent} from "../components/user-list.component";

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'product-list',  component:  productListComponent},
    { path: 'user-list',  component:  userListComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}