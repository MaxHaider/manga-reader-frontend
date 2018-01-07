import { Component, OnInit } from '@angular/core';
import { User } from '../data/dto/user';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { UserService } from '../data/dao/user.service';
import { StringResult } from '../data/dto/string-result'; 
import { Router } from '@angular/router';
import { ReadingService } from '../data/dao/reading.service';
import { MangaService } from '../data/dao/manga.service';

@Component({
    moduleId: module.id,
    selector: 'main',
    templateUrl: './templates/main.component.html',
    styleUrls:['../stylesheets-css/styles.css']
})
export class MainComponent implements OnInit{ 
    currentUser:string;
    currentManga:string;
    url:string;
    dirs:string[];
    currPath:string;


    constructor(
        private userService: UserService,
        private readingService: ReadingService,
        private router: Router,
        private mangaService: MangaService
        ) {}

    ngOnInit():void{
        this.setLoading(true);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentManga = localStorage.getItem('currentManga');
        this.currPath = "mangas\\" + this.currentManga;
        this.readingService.getCurrentPage(this.currentUser,this.currentManga)
            .then(url => this.generateUrl(url));

        document.getElementById("sidenav").style.width = "0px";

        this.mangaService.getDir(this.currPath)
            .then(dirs => this.dirs = dirs);
        
        }


    nextPage(){
        this.setLoading(true);
        this.readingService.getNextPage(this.currentUser,this.currentManga)
            .then(url => this.generateUrl(url));

    }

    prevPage(){
        this.readingService.getPreviousPage(this.currentUser,this.currentManga)
            .then(url => this.generateUrl(url));

    }

    generateUrl(url:String){
        this.url = url.split("\"")[1];
        this.setLoading(false);
    }

    setLoading(set:boolean){
        if(set){
            this.url = "";
            document.getElementById("loadingCircle").style.visibility = "visible";

        } else{
            document.getElementById("loadingCircle").style.visibility = "hidden";

        }
    }

    nextDir(dir:String){
        this.currPath = this.currPath + "\\" + dir;
        if(dir.includes(".jpg")){
            this.readingService.getSpecificPage(this.currentUser, this.currentManga,this.currPath)
                .then(url => this.generateUrl(url));
            this.resetDir();
        } else{
            this.mangaService.getDir(this.currPath)
                .then(dirs => this.dirs = dirs);

        }
    }
    
    resetDir(){
        this.currPath = "mangas\\" + this.currentManga;
        this.mangaService.getDir(this.currPath)
            .then(dirs => this.dirs = dirs);
    }
    
    BackToSelection(){
        this.router.navigate(['/selection']);
    }


    changeMenuState(){
        if(document.getElementById("sidenav").style.width != "0px"){
            document.getElementById("sidenav").style.width = "0px";
        }else{
            document.getElementById("sidenav").style.width = "330px";
        }

    }
}

