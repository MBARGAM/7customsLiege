import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyUsComponent } from './components/why-us/why-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    WhyUsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected readonly title = signal('7customs');
}
