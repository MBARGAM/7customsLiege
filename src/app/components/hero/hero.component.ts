import { Component } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ TranslatePipe,
],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(private translate : TranslateService){}
   
   // fonction de traduction 
  translateText(lang : string ){
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Sauvegarde la langue sélectionnée
  }
}
