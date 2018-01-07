import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../../app.config';
import 'rxjs/add/operator/map'
 
@Injectable()
export class UserService {
    private headers = new Headers({'Content-Type': 'application/json'});
    public token: String;
 
    constructor(
        private http: Http,
        private config:AppConfig
    ) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
 


    login(username: string, password: string): Promise<boolean> {
        let url = this.config.BASE_API_URL + 'api/login';
        return this.http.post(url, JSON.stringify({ username: username, password: password }), {headers: this.headers})
            .toPromise()
            .then((response: Response) => {
                let success = false;
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    success = true;
                } 
                return success;
            });
    }
 
    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    }  
}