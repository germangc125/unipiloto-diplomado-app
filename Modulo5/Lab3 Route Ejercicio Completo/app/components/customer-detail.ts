import {Component, OnInit} from '@angular/core';
import { Customer } from '../model/customer';
import {SalesInvoice} from '../model/salesInvoice'
import {customerService} from "../service/customer.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'customer-detail-app',
    templateUrl: 'app/templates/customer-detail.html',
    providers: [customerService]
})

export class customerDetailComponent implements OnInit {
title:string = "Detalles del cliente"
    customer: Customer;
    salesInvoices:SalesInvoice[];

    constructor(
        private customerservice: customerService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id =+params['Id'];
            this.customerservice.getCustomer(id)
                .then(cliente => this.customer = cliente); 
        });

        this.route.params.forEach((params: Params) => {
            let id =+params['Id'];
            this.invoiceCustomer(id);
        });
    }

    invoiceCustomer(id:number){
        this.customerservice.getCustomerInvoice(id)
                .then(cliente => this.salesInvoices = cliente); 

    }
}
