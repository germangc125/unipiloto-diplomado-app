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
var product_service_1 = require("../service/product.service");
var productComponent = (function () {
    function productComponent(productService) {
        this.productService = productService;
        this.titulo = "Modulo Productos";
        this.product = {
            id: 0,
            name: "",
            type: "",
            quantity: 0,
            price: 0,
            url: "",
        };
    }
    productComponent.prototype.onSelect = function (product) {
        this.selected = product;
    };
    productComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
        }, function (error) {
            console.log(error);
        });
    };
    productComponent.prototype.add = function (product) {
        var _this = this;
        if (!product.name) {
            return;
        }
        this.productService.create(product)
            .subscribe(function (product) {
            _this.products.push(product);
            _this.selected = null;
        });
    };
    productComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    productComponent = __decorate([
        core_1.Component({
            selector: 'product-app',
            templateUrl: 'app/templates/product.html',
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], productComponent);
    return productComponent;
}());
exports.productComponent = productComponent;
//# sourceMappingURL=product.component.js.map