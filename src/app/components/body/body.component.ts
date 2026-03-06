import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ServicesComponent } from '../services/services.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-body',
  standalone:true,
  imports: [ContactComponent,
    ServicesComponent,
    WhyUsComponent,
    MapComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
