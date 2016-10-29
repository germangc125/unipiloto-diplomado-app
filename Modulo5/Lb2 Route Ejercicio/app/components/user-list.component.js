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
var user_service_1 = require('../service/user.service');
var router_1 = require("@angular/router");
var userListComponent = (function () {
    function userListComponent(router, userservice) {
        this.router = router;
        this.userservice = userservice;
        this.title = "Usuarios";
    }
    userListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUsers()
            .then(function (usuarios) { return _this.users = usuarios; })
            .catch(function (error) { return console.log(error); });
    };
    userListComponent.prototype.onSelectUser = function (user) {
        this.userSelected = user;
    };
    userListComponent.prototype.goToDetail = function () {
        this.router.navigate(['user/detail/', this.userSelected.id]);
    };
    userListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: 'app/templates/user-list.html',
            providers: [user_service_1.userService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.userService])
    ], userListComponent);
    return userListComponent;
}());
exports.userListComponent = userListComponent;
//# sourceMappingURL=user-list.component.js.map