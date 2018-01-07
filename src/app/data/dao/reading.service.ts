import {  
    Injectable  
} from '@angular/core';  
import {  
    Http,  
    Headers,  
    RequestOptions,  
    Response  
} from '@angular/http';  
import {  
    Observable,  
    Subject  
} from 'rxjs/Rx';  
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise'; 

import { AppConfig } from '../../app.config';
import { Manga } from '../dto/manga';
import 'rxjs/add/operator/map'
 
@Injectable()
export class ReadingService {
    private headers = new Headers({'Content-Type': 'application/json'});
    public token: string;
 
    constructor(
        private http: Http,
        private config:AppConfig
    ) {

    }
 
    getSpecificPage(userName:string,mangaName:string, path:string): Promise<string> {
        let url = this.config.BASE_API_URL + 'api/reading/specific';
        return this.http.post(url,JSON.stringify({username: userName, manganame: mangaName, path: path}),{headers:this.headers})
        .toPromise()
        .then(response => response.text() as string)
        .catch(this.handleError);
    }

    getNextPage(userName:string,mangaName:string): Promise<string> {
        let url = this.config.BASE_API_URL + 'api/reading/next';
        return this.http.post(url,JSON.stringify({username: userName, manganame: mangaName}),{headers:this.headers})
        .toPromise()
        .then(response => response.text() as string)
        .catch(this.handleError);
    }
 
    getPreviousPage(userName:string,mangaName:string): Promise<string> {
        let url = this.config.BASE_API_URL + 'api/reading/previous';
        return this.http.post(url,JSON.stringify({username: userName, manganame: mangaName}),{headers:this.headers})
        .toPromise()
        .then(response => response.text() as string)
        .catch(this.handleError);
    }

    getCurrentPage(userName:string,mangaName:string): Promise<string> {
        let url = this.config.BASE_API_URL + 'api/reading/current';
        return this.http.post(url,JSON.stringify({username: userName, manganame: mangaName}),{headers:this.headers})
        .toPromise()
        .then(response => response.text() as string)
        .catch(this.handleError);
    }


    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return (errorResponse.json().error || "Server error");
    }  
}