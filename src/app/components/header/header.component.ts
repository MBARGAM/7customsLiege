import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
