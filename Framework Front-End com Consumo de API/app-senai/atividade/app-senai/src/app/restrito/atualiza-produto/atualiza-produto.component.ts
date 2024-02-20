import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualiza-produto',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './atualiza-produto.component.html',
  styleUrl: './atualiza-produto.component.css'
})
export class AtualizaProdutoComponent {

  produtoId: number = 0;
  produto:Produto = new Produto(0, "", "", "", 0)

  constructor(private _produtoService:ProdutoService, private _activatedRoute:ActivatedRoute, private _router:Router){
    this._activatedRoute.params.subscribe(params => this.produtoId = params['id'])
  }

  ngOnInit():void {
    this.listarProduto()
  }

  listarProduto():void{
    this._produtoService.getProduto(this.produtoId).subscribe(
      {
        next: (produto:any) => {
          this.produto = produto[0]
          console.log(produto)
        },
        error(err) {
          console.log(err)
        },
      }
    )

  }

  atualizar():void{
    this._produtoService.atualizarProduto(this.produtoId, this.produto).subscribe(
      {
        next(value) {
          alert("alteração concluida: " + value)
        },
        error(value) {
          alert("Erro ao alterar: " + value)
        }
      }
    )

    this._router.navigate(["/restrito/lista"]); 
  }
}
