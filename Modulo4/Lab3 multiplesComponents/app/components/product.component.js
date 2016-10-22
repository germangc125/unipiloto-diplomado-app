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
var productComponent = (function () {
    function productComponent() {
        this.title = "Mis productos";
        this.products = PRODUCTS;
    }
    productComponent.prototype.onSelect = function (product) {
        this.selected = product;
    };
    productComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/product.html'
        }), 
        __metadata('design:paramtypes', [])
    ], productComponent);
    return productComponent;
}());
exports.productComponent = productComponent;
var PRODUCTS = [
    {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 5
    },
    {
        id: 3,
        name: "Motorola",
        description: "telefono que explota",
        type: "smartphone",
        price: 50000,
        quantity: 2
    }
];
//# sourceMappingURL=product.component.js.map