import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from '../components/app.component';
import { LoginComponent }  from '../components/login.component';
import { MainComponent }  from '../components/main.component';
import { SelectionComponent } from '../components/selection.component';

import { AuthenticationGuard } from '../guards/authentication.guard';
import { LoginGuard } from '../guards/login.guard';

import { UserService } from '../data/dao/user.service';
import { MangaService } from '../data/dao/manga.service';
import { ReadingService } from '../data/dao/reading.service';
import { AppConfig } from '../app.config';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSidenavModule, MatToolbarModule, MatListModule} from '@angular/material';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  declarations: [ 
    
    AppComponent,
    LoginComponent,
    MainComponent,
    SelectionComponent
    ],
  providers:[
    AuthenticationGuard,
    LoginGuard,
    UserService,
    MangaService,
    ReadingService,
    AppConfig
  ],  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
