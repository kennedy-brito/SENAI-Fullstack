import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import InicioComponent from './inicio/inicio.component';
import MenuComponent from './menu/menu.component';
import LoginComponent from './login/login.component';
import RodapeComponent from './rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InicioComponent,
    MenuComponent,
    LoginComponent,
    RodapeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LH Games';
  
}
