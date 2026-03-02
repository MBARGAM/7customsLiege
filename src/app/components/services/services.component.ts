import { Component } from '@angular/core';
import {CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
 // Liste des services
  services: any[] = [
    {
      title: 'Développement Web',
      description: 'Création de sites web modernes et réactifs.'
    },
    {
      title: 'Design UI/UX',
      description: 'Conception d’interfaces attractives et intuitives.'
    },
    {
      title: 'Marketing Digital',
      description: 'Campagnes publicitaires et stratégie digitale complète.'
    }
  ];

  // Slider
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.services.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.services.length) % this.services.length;
  }
}