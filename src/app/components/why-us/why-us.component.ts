import { Component } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [TranslatePipe,],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss',
})
export class WhyUsComponent {
   constructor(private translate : TranslateService){}
   
   // fonction de traduction 
  translateText(lang : string ){
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Sauvegarde la langue sélectionnée
  }
}
