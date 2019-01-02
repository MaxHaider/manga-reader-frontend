import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../data/dto/user';
import { Manga } from '../data/dto/manga';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { UserService } from '../data/dao/user.service';
import { MangaService } from '../data/dao/manga.service';
import { StringResult } from '../data/dto/string-result'; 
import { Paths } from '../data/dto/paths'; 
import { Router } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {routeAnimation} from "../animations/routeAnimation";

@Component({
    moduleId: module.id,
    selector: 'selection',
    templateUrl: './templates/selection.component.html',
    styles:['../styles/selection.component.scss'],
    animations:[routeAnimation]
})
export class SelectionComponent implements OnInit{ 
    mangas:Manga[];
    prevMangaClicked:string;
    currentUser:string;

    constructor(
        private userService: UserService,
        private mangaService: MangaService,
        private route: ActivatedRoute,
        private location: Location,
        private activatedRoute: ActivatedRoute,
        private router: Router
        ) {}
        
        

    ngOnInit():void{
        this.mangaService.getAll().then(result => this.mangas = result);
        this.prevMangaClicked = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }


    changeMenuStateItem(mangaName:string){
        if(this.prevMangaClicked != ""){
            document.getElementById(this.prevMangaClicked).style.width = "0px";
        }
        this.prevMangaClicked = mangaName;
        document.getElementById(mangaName).style.width = "200px";
    }

    Logout():void{
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    }

    read(mangaName:string){
        localStorage.setItem('currentManga',mangaName);
        this.router.navigate(['/main']);
    }

}

