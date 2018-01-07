import { Component } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {routeAnimation} from "../animations/animation";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  styleUrls:['../stylesheets-css/styles.css'],
  animations:[routeAnimation]
})
export class AppComponent  { 
  name = 'Angular'; 
  prepRouteState(outlet: any) {
    //console.log(outlet.activatedRouteData['animation'] || 'firstPage');
    return outlet.activatedRouteData['animation'] || 'firstPage'; 
  }
}
