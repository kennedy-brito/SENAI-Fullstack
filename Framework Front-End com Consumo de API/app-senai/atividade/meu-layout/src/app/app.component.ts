import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import  MenuComponent from './view/menu/menu.component';
import { FooterComponent } from './view/footer/footer.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { LoginComponent } from './view/login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MenuComponent,
    InicioComponent,
    LoginComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-layout';
}
