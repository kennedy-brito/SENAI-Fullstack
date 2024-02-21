import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import InicioComponent from './inicio/inicio.component';
import MenuComponent from './menu/menu.component';
import LoginComponent from './login/login.component';
import RodapeComponent from './rodape/rodape.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LoginService } from './services/login.service';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from './LocalStorage/LocalStorage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InicioComponent,
    MenuComponent,
    LoginComponent,
    RodapeComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'LH Games';
  mostrarMenu:boolean = true;

  //verificando se a aplicação está no lado do servidor
  static isBrowser = new BehaviorSubject<boolean>(false);

  constructor(
    private _loginService: LoginService
    , @Inject(PLATFORM_ID) private platformId:any //tipo da plataforma
    , private _localStorageService: LocalstorageService
    ){
      AppComponent.isBrowser.next(isPlatformBrowser(this.platformId))
    }
  ngOnInit(){
    this._loginService.getMostraMenu().subscribe(res => {
      this.mostrarMenu = res;
    })
  }
  ngOnDestroy() {
    this._localStorageService.clear();
  } 
  
}
