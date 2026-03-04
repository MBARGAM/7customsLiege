import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

   constructor(

  ){}

   /* fonction de traduction 
   translateText(lang : string ){
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Sauvegarde la langue sélectionnée
  }*/
}
