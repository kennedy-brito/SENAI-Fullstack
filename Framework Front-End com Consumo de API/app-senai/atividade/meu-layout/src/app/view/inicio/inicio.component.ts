import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  scroll(x:number):void{
      const scrollContainer = document.getElementById("scroll-cards");


      if(scrollContainer) {
        scrollContainer.scrollLeft += + x
      }
  }
}
