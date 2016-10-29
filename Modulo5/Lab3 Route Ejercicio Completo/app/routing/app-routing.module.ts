import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {invoiceSalesListComponent} from "../components/invoice-sales-list.component";
import {customerDetailComponent} from "../components/customer-detail"

const routes: Routes = [
    { path: '', redirectTo: '/invoice-sales-list', pathMatch: 'full' },
    { path: 'invoice-sales-list',  component:  invoiceSalesListComponent},
    { path: 'customer/detail/:Id',  component:  customerDetailComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}