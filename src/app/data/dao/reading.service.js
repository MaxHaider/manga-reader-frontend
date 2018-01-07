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
require("rxjs/Rx"); //get everything from Rx    
require("rxjs/add/operator/toPromise");
var app_config_1 = require("../../app.config");
require("rxjs/add/operator/map");
var ReadingService = (function () {
    function ReadingService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ReadingService.prototype.getSpecificPage = function (userName, mangaName, path) {
        var url = this.config.BASE_API_URL + 'api/reading/specific';
        return this.http.post(url, JSON.stringify({ username: userName, manganame: mangaName, path: path }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    ReadingService.prototype.getNextPage = function (userName, mangaName) {
        var url = this.config.BASE_API_URL + 'api/reading/next';
        return this.http.post(url, JSON.stringify({ username: userName, manganame: mangaName }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    ReadingService.prototype.getPreviousPage = function (userName, mangaName) {
        var url = this.config.BASE_API_URL + 'api/reading/previous';
        return this.http.post(url, JSON.stringify({ username: userName, manganame: mangaName }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    ReadingService.prototype.getCurrentPage = function (userName, mangaName) {
        var url = this.config.BASE_API_URL + 'api/reading/current';
        return this.http.post(url, JSON.stringify({ username: userName, manganame: mangaName }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    ReadingService.prototype.handleError = function (errorResponse) {
        console.log(errorResponse.statusText);
        return (errorResponse.json().error || "Server error");
    };
    return ReadingService;
}());
ReadingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        app_config_1.AppConfig])
], ReadingService);
exports.ReadingService = ReadingService;
//# sourceMappingURL=reading.service.js.map