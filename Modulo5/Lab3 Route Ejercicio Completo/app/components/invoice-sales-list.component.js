"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var invoice_sales_service_1 = require('../service/invoice-sales.service');
var router_1 = require("@angular/router");
var invoiceSalesListComponent = (function () {
    function invoiceSalesListComponent(invoicesalesservice, router) {
        this.invoicesalesservice = invoicesalesservice;
        this.router = router;
        this.title = "Facturas pendientes";
    }
    invoiceSalesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.invoicesalesservice.getInvoiceSales()
            .then(function (productos) { return _this.salesInvoice = productos; })
            .catch(function (error) { return console.log(error); });
    };
    invoiceSalesListComponent.prototype.gotoDetailCustomer = function (Id) {
        this.router.navigate(['customer/detail/', Id]);
    };
    invoiceSalesListComponent = __decorate([
        core_1.Component({
            selector: 'invoice-sales-list',
            templateUrl: 'app/templates/invoice-sales-list.html',
            providers: [invoice_sales_service_1.invoiceSalesService]
        }), 
        __metadata('design:paramtypes', [invoice_sales_service_1.invoiceSalesService, router_1.Router])
    ], invoiceSalesListComponent);
    return invoiceSalesListComponent;
}());
exports.invoiceSalesListComponent = invoiceSalesListComponent;
//# sourceMappingURL=invoice-sales-list.component.js.map