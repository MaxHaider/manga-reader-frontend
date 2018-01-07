"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("../components/login.component");
var main_component_1 = require("../components/main.component");
var selection_component_1 = require("../components/selection.component");
var authentication_guard_1 = require("../guards/authentication.guard");
var login_guard_1 = require("../guards/login.guard");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full', },
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [login_guard_1.LoginGuard], data: { animation: 'loginPage' } },
    { path: 'main', component: main_component_1.MainComponent, canActivate: [authentication_guard_1.AuthenticationGuard], data: { animation: 'mainPage' } },
    { path: 'selection', component: selection_component_1.SelectionComponent, canActivate: [authentication_guard_1.AuthenticationGuard], data: { animation: 'selectionPage' } },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map