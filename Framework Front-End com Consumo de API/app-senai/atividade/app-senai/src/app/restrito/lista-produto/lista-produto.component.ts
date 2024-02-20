import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-lista-produto',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    CurrencyPipe,
    RouterLink,//importante para usar links
    RouterLinkActive
  ],
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.css'
})
export class ListaProdutoComponent {
  
  public produtos: Produto[] = [ ];
  
  constructor(private _produtoService: ProdutoService, private router:Router, private _loginService:LoginService){}
  
  ngOnInit():void{
    this.listarProdutos();
    this._loginService.setMostraMenu(false)
  }

  listarProdutos():void{
    this._produtoService.getProdutos()
      .subscribe(
        retornaProduto => this.produtos = retornaProduto
      )
  }
  excluir(id: number){
    this._produtoService.removerProduto(id).subscribe(
      {
        next: produto => { this.listarProdutos(); },
        error: err => {alert("erro ao Excluir")}
      }
      );
      // window.location.href = "/restrito/lista";
    this.router.navigate(["/restrito/lista"]);
  }
}
