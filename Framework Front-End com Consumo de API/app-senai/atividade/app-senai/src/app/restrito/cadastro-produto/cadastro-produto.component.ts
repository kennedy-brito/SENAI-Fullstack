import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {

  produto: Produto = new Produto(0, "", "", "", 0)

  constructor(private _produtoService:ProdutoService, private _router:Router ){}

  cadastrar(){
    this._produtoService.cadastrarProduto(this.produto).subscribe
    (
      {
        next: response => {
          this.produto = new Produto(0, "", "", "", 0)

          alert("Cadastro Efetuado com Sucesso")
        },
        error: err => alert("erro ao cadastrar")
      }
    )

    this._router.navigate(['/restrito/lista'])

  }
}
