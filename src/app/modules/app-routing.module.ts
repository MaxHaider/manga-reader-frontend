import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login.component';
import { MainComponent } from '../components/main.component';
import { SelectionComponent } from '../components/selection.component';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { LoginGuard } from '../guards/login.guard';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full',},
    { path: 'login',  component: LoginComponent, canActivate:[LoginGuard], data:{animation:'loginPage'}},
    { path: 'main', component: MainComponent, canActivate: [AuthenticationGuard], data:{animation:'mainPage'} },
    { path: 'selection', component: SelectionComponent, canActivate: [AuthenticationGuard], data:{animation:'selectionPage'} },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
