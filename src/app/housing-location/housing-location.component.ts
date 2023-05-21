import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocationchild.photo" alt="Exterior photo of {{housingLocationchild.name}}">
      <h2 class="listing-heading">{{ housingLocationchild.name }}</h2>
      <p class="listing-location">{{ housingLocationchild.city}}, {{housingLocationchild.state }}</p>
      <a [routerLink]="['/details', housingLocationchild.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocationchild !: HousingLocation;

}
