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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var app_config_1 = require("../../app.config");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    UserService.prototype.login = function (username, password) {
        var _this = this;
        var url = this.config.BASE_API_URL + 'api/login';
        return this.http.post(url, JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var success = false;
            var token = response.json() && response.json().token;
            if (token) {
                _this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                success = true;
            }
            return success;
        });
    };
    UserService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    UserService.prototype.handleError = function (errorResponse) {
        console.log(errorResponse.statusText);
        return rxjs_1.Observable.throw(errorResponse.json().error || "Server error");
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        app_config_1.AppConfig])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map