import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalstorageService } from '../LocalStorage/LocalStorage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  mostraMenu = new Subject<boolean>()
  
  constructor(private _localStorageService: LocalstorageService) { }
  
  login(usuario:string, senha:string){
    
    if(usuario=="aluno" && senha=="1234"){
      this._localStorageService.setItem('token','qwer1234');
      this.mostraMenu.next(false)
      return true;
    }else{
      this.mostraMenu.next(true);
      window.location.reload();
      return false;
    }
  }
  setMostraMenu(valor: boolean) {
    this.mostraMenu.next(valor)
  }
  getMostraMenu() {
    return this.mostraMenu.asObservable();
  }
}
