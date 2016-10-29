import {Injectable} from "@angular/core";
import {CUSTOMERS} from "../mock/customer-mock";
import {Customer} from "../model/customer"

import {SALESINVOICES} from "../mock/salesInvoice-mock";
import {SalesInvoice} from "../model/salesInvoice"



@Injectable()
export class customerService{

    getCustomers():Promise <Customer[]>{
        return Promise.resolve(CUSTOMERS)
    }
    getCustomer(id: number): Promise<Customer> {
        return this.getCustomers()
            .then(customers => customers.find(customer => customer.Id === id));
    }
    getCustomerInvoice(id:number):Promise <SalesInvoice[]>{
        return Promise.resolve(SALESINVOICES)
    }

    //getInvoiceCustomer(id: number): Promise<SalesInvoice> {
    //return this.getInvoices()
      //  .then(sales => customers.find(customer => customer.Id === id));
//}
}