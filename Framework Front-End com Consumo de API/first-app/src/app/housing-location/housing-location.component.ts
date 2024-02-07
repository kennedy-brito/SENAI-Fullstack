import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  
  //digo que esse componente deve receber um input
  @Input() housingLocation!:HousingLocation;// o ! é o operador de asserção não-nulo(non-null assertion operator) e indica para o compilador que essa variável deve ter um valor
}
