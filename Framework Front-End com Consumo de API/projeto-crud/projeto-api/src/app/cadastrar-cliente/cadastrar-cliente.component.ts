import { Component } from '@angular/core';
import { Cliente } from '../models/Cliente.models';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './cadastrar-cliente.component.html',
  styleUrl: './cadastrar-cliente.component.css'
})
export class CadastrarClienteComponent {

  public cliente:Cliente = new Cliente(0, "", "");

  constructor(private _clienteService:ClienteService, private _router:Router){}

  cadastrar():void{
    this._clienteService.cadastrarCliente(this.cliente).subscribe(
      {next: (resultado) => this.sucesso(resultado), error: erro => this.falha(erro)}
    )

    this._router.navigate(['/listar'])
  }

  sucesso = (resultado:Cliente[]) =>{
    this.cliente = new Cliente(0,"","")
    alert("Cadastro Efetuado com sucesso")
  }
  falha(erro:any):void{
    alert("Erro ao Cadastrar");
  }
}

