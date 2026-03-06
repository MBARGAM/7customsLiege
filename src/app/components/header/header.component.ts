import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

   constructor(
    private translate : TranslateService
  ){}
    translateText(lang : string ){
      console.log(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Sauvegarde la langue sélectionnée
  }

   /* fonction de traduction 
   translateText(lang : string ){
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Sauvegarde la langue sélectionnée
  }*/
}
