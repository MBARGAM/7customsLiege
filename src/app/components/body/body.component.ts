import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ServicesComponent } from '../services/services.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { MapComponent } from '../map/map.component';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-body',
  standalone:true,
  imports: [ContactComponent,
    ServicesComponent,
    WhyUsComponent,
    MapComponent,
    TranslatePipe,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
   constructor(private translate : TranslateService){}
   
   // fonction de traduction 
  translateText(lang : string ){
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Sauvegarde la langue sélectionnée
  }
}
