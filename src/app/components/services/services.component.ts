import { Component ,ChangeDetectorRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,TranslatePipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
 isFrench = true ;
 constructor(private translate: TranslateService, private cdr: ChangeDetectorRef) {}
   // fonction de traduction 
translateText(lang: string) {
  this.translate.use(lang);
  localStorage.setItem('lang', lang);
  // La bonne logique :
  this.isFrench = lang === 'fr';
  this.cdr.detectChanges();
}


}