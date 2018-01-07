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
var user_service_1 = require("../data/dao/user.service");
var router_1 = require("@angular/router");
var reading_service_1 = require("../data/dao/reading.service");
var manga_service_1 = require("../data/dao/manga.service");
var MainComponent = (function () {
    function MainComponent(userService, readingService, router, mangaService) {
        this.userService = userService;
        this.readingService = readingService;
        this.router = router;
        this.mangaService = mangaService;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setLoading(true);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentManga = localStorage.getItem('currentManga');
        this.currPath = "mangas\\" + this.currentManga;
        this.readingService.getCurrentPage(this.currentUser, this.currentManga)
            .then(function (url) { return _this.generateUrl(url); });
        document.getElementById("sidenav").style.width = "0px";
        this.mangaService.getDir(this.currPath)
            .then(function (dirs) { return _this.dirs = dirs; });
    };
    MainComponent.prototype.nextPage = function () {
        var _this = this;
        this.setLoading(true);
        this.readingService.getNextPage(this.currentUser, this.currentManga)
            .then(function (url) { return _this.generateUrl(url); });
    };
    MainComponent.prototype.prevPage = function () {
        var _this = this;
        this.readingService.getPreviousPage(this.currentUser, this.currentManga)
            .then(function (url) { return _this.generateUrl(url); });
    };
    MainComponent.prototype.generateUrl = function (url) {
        this.url = url.split("\"")[1];
        this.setLoading(false);
    };
    MainComponent.prototype.setLoading = function (set) {
        if (set) {
            this.url = "";
            document.getElementById("loadingCircle").style.visibility = "visible";
        }
        else {
            document.getElementById("loadingCircle").style.visibility = "hidden";
        }
    };
    MainComponent.prototype.nextDir = function (dir) {
        var _this = this;
        this.currPath = this.currPath + "\\" + dir;
        if (dir.includes(".jpg")) {
            this.readingService.getSpecificPage(this.currentUser, this.currentManga, this.currPath)
                .then(function (url) { return _this.generateUrl(url); });
            this.resetDir();
        }
        else {
            this.mangaService.getDir(this.currPath)
                .then(function (dirs) { return _this.dirs = dirs; });
        }
    };
    MainComponent.prototype.resetDir = function () {
        var _this = this;
        this.currPath = "mangas\\" + this.currentManga;
        this.mangaService.getDir(this.currPath)
            .then(function (dirs) { return _this.dirs = dirs; });
    };
    MainComponent.prototype.BackToSelection = function () {
        this.router.navigate(['/selection']);
    };
    MainComponent.prototype.changeMenuState = function () {
        if (document.getElementById("sidenav").style.width != "0px") {
            document.getElementById("sidenav").style.width = "0px";
        }
        else {
            document.getElementById("sidenav").style.width = "330px";
        }
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'main',
        templateUrl: './templates/main.component.html',
        styleUrls: ['../stylesheets-css/styles.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        reading_service_1.ReadingService,
        router_1.Router,
        manga_service_1.MangaService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map