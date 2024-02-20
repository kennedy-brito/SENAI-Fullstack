import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default  class LoginComponent {
  usuario!: string;
  senha!:string;
  constructor(private _loginService:LoginService, private _router:Router) { }
  
  ngOnInit():void{  }

  fazerLogin(){
    this._loginService.login(this.usuario,this.senha);
    this._router.navigate(['/restrito/lista']);
    this._loginService.setMostraMenu(false)
  }
  
}
