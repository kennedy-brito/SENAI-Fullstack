import { Injectable } from '@angular/core';
import { Cliente } from './models/Cliente.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// HttpCliente: Responsável por buscar dados de uma fonte externa, que no caso será o db.json
// Injectable: Responsável pelo funcionamento do Service.
// Observable: Trabalha junto com HttpCliente, ele recebe e lida com os dados de forma assíncrona.
// Cliente: O Modelo criado para guardar e enviar os dados daAPI

export class ClienteService {

  url: string = "http://localhost:3000/clientes";

  constructor(private _httpClient:HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this._httpClient.get<Cliente[]>(this.url);
  }

  cadastrarCliente(cliente:Cliente): Observable<Cliente[]>{
    return this._httpClient.post<Cliente[]>(this.url, cliente);
  }

  getCliente(id:any):Observable<Cliente[]>{
    const urlListarUm = `${this.url}?id=${id}`;
    return this._httpClient.get<Cliente[]>(urlListarUm);
  }

  atualizarCliente(id: any, cliente:Cliente):Observable<Cliente[]>{
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Cliente[]>(urlAtualizar, cliente)
  }

  excluirCliente(id:any):Observable<Cliente[]>{
    const urlExcluir = `${this.url}/${id}`
    return this._httpClient.delete<Cliente[]>(urlExcluir);
  }
}
