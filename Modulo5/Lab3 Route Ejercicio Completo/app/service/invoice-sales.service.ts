import {Injectable} from "@angular/core";
import {SALESINVOICES} from "../mock/salesInvoice-mock";

@Injectable()
export class invoiceSalesService{
    getInvoiceSales(){
        return Promise.resolve(SALESINVOICES);
    }
}