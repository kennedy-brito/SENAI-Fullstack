import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../services/produto.service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    CurrencyPipe
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent {
  
  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService){}
  
  ngOnInit():void{
    this.listarProdutos();
  }

  listarProdutos():void{
    this._produtoService.getProdutos()
      .subscribe(
        retornaProduto => this.produtos = retornaProduto
    )
  }
}
