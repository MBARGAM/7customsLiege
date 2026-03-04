import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
   RouterModule, CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']   // ✔️ correction ici
})
export class NavComponent {

  menuOpen = false;
  bars = faBars;
  times = faTimes;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
