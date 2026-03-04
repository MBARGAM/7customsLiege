import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AfterViewInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements AfterViewInit {
  ngAfterViewInit() {
    const carouselElement = document.getElementById('logisticsCarousel');
    new bootstrap.Carousel(carouselElement, {
      interval: 3000,  // 3 secondes
      ride: 'carousel',
      pause: false     // pas de pause au survol
    });
  }
}
