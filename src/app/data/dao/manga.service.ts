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
export class MangaService {
    private headers = new Headers({'Content-Type': 'application/json'});
    public token: string;
 
    constructor(
        private http: Http,
        private config:AppConfig
    ) {

    }
 


    getAll(): Promise<Manga[]> {
        let url = this.config.BASE_API_URL + 'api/manga/all';
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Manga[])
        .catch(this.handleError);
    }
 
    getDir(dir:String):Promise<string[]>{
        let url = this.config.BASE_API_URL + 'api/manga/dir';
        return this.http.post(url,{path: dir})
        .toPromise()
        .then(response => response.json() as string[])
        .catch(this.handleError);
    }


    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return (errorResponse.json().error || "Server error").toPromise();
    }  
}