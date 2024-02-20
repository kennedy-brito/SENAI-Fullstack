import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuProdutoComponent } from './menu-produto/menu-produto.component';

@Component({
  selector: 'app-restrito',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuProdutoComponent
  ],
  templateUrl: './restrito.component.html',
  styleUrl: './restrito.component.css'
})
export class RestritoComponent {

}
