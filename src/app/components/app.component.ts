import { Component } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {routeAnimation} from "../animations/routeAnimation";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  //styles:['../styles/styles.scss'],
  animations:[routeAnimation]
})
export class AppComponent  { 
  name = 'Angular'; 
  prepRouteState(outlet: any) {
    //console.log(outlet.activatedRouteData['animation'] || 'firstPage');
    return outlet.activatedRouteData['animation'] || 'firstPage'; 
  }
}
