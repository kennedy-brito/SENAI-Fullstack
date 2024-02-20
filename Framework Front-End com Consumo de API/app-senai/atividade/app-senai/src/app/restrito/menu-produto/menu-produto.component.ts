import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-menu-produto',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './menu-produto.component.html',
  styleUrl: './menu-produto.component.css'
})
export class MenuProdutoComponent {

  constructor(private router: Router, private _loginService: LoginService){}
    
  logout(){
    sessionStorage.clear();
    this._loginService.setMostraMenu(true);
    this.router.navigate(['/login']);
  }
}
