import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TranslatePipe,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']   // ✔️ correction ici
})
export class NavComponent {

  menuOpen = false;
  
  constructor(private translate : TranslateService){}

   // fonction de traduction 
  translateText(lang : string ){
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Sauvegarde la langue sélectionnée
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
