import { Component } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterLink,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export default class MenuComponent {

}
