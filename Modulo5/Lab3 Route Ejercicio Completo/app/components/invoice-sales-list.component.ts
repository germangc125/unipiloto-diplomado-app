import {Component,OnInit} from '@angular/core';
import {SalesInvoice} from '../model/salesInvoice'
import {invoiceSalesService} from '../service/invoice-sales.service';
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";

@Component({
    selector: 'invoice-sales-list',
    templateUrl: 'app/templates/invoice-sales-list.html',
    providers: [invoiceSalesService]
})

export class invoiceSalesListComponent  implements OnInit {
	title: string = "Facturas pendientes";
    salesInvoice: SalesInvoice[];

    constructor(
        private invoicesalesservice: invoiceSalesService,
        private router: Router
    ) {}
      ngOnInit(){
		this.invoicesalesservice.getInvoiceSales()
		.then(productos => this.salesInvoice = productos)
		.catch(error => console.log(error));
	}

        gotoDetailCustomer(Id:number){
            this.router.navigate(['customer/detail/', Id]);
        }
}