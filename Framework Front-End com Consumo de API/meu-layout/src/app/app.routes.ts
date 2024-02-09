import { Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { LoginComponent } from './view/login/login.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: InicioComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
