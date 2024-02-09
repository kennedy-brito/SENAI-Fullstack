import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    CdkMenu,
    CdkMenuItem,
    CdkMenuTrigger,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export default class MenuComponent {


  faBars = faBars;

  value = 'Clear me';

  show():void{
    const dropdown = document.getElementsByClassName("dropdown-menu");

    for(let i = 0; i < dropdown.length; i++){

      dropdown[i].classList.toggle("show");
    }
      
  }
}
