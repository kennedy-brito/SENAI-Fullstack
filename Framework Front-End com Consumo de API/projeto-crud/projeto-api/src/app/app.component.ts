import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AppMenu from './menu/menu.component'
import { AtualizarClienteComponent } from './atualizar-cliente/atualizar-cliente.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { listenerCount } from 'process';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppMenu,
    AtualizarClienteComponent,
    CadastrarClienteComponent,
    ListarClienteComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-api';
}
