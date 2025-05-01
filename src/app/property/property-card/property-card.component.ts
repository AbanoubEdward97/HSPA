import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
  property: any = {
    Id: 1,
    Name: 'Birla House',
    Type: 'House',
    Price: 250000,
  };
}
