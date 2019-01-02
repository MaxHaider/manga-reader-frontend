import { Component, OnInit } from '@angular/core';
import { UserService } from '../data/dao/user.service';
import { User } from '../data/dto/user';
import { Router } from '@angular/router';
import { Result } from '../data/dto/result';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {routeAnimation} from "../animations/routeAnimation";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './templates/login.component.html',
    styles:['../styles/login.component.scss'],
    animations:[routeAnimation]
})
export class LoginComponent implements OnInit{ 

    constructor(
        private userService: UserService,
        private router: Router
    ) {
    } 

    ngOnInit():void{
                
    }

 
    login(username:string,password:string) {
        this.userService.login(username,password)
            .then(result => {
                if (result) {
                    this.router.navigate(['/selection']);
                }
            })
            .catch(error => this.showWrongPassword(true));
    }

    async showWrongPassword(set:boolean){
        if(set){
            document.getElementById("unsuccessful-login").style.height = "30px";
            setTimeout(() => 
            {
                this.showWrongPassword(false);
            },
            3000)


        } else{
            document.getElementById("unsuccessful-login").style.height = "0px";

        }
    }
}
