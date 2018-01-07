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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var user_service_1 = require("../data/dao/user.service");
var manga_service_1 = require("../data/dao/manga.service");
var router_2 = require("@angular/router");
var SelectionComponent = (function () {
    function SelectionComponent(userService, mangaService, route, location, activatedRoute, router) {
        this.userService = userService;
        this.mangaService = mangaService;
        this.route = route;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    SelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mangaService.getAll().then(function (result) { return _this.mangas = result; });
        this.prevMangaClicked = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    SelectionComponent.prototype.changeMenuStateItem = function (mangaName) {
        if (this.prevMangaClicked != "") {
            document.getElementById(this.prevMangaClicked).style.width = "0px";
        }
        this.prevMangaClicked = mangaName;
        document.getElementById(mangaName).style.width = "200px";
    };
    SelectionComponent.prototype.Logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    };
    SelectionComponent.prototype.read = function (mangaName) {
        localStorage.setItem('currentManga', mangaName);
        this.router.navigate(['/main']);
    };
    return SelectionComponent;
}());
SelectionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'selection',
        templateUrl: './templates/selection.component.html',
        styleUrls: ['../stylesheets-css/styles.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        manga_service_1.MangaService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.ActivatedRoute,
        router_2.Router])
], SelectionComponent);
exports.SelectionComponent = SelectionComponent;
//# sourceMappingURL=selection.component.js.map