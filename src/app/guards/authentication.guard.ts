import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable()
export class AuthenticationGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate() {
        let status = false;
        if (localStorage.getItem('currentUser')) {
            status = true;
        } else{
            this.router.navigate(['/login']);
        }
        return status;
    }
}