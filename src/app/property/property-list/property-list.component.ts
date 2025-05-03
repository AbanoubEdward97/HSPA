import { Component, inject, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { Iproperty } from '../iproperty';
@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule,PropertyCardComponent],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent  implements OnInit {
  properties: Array<Iproperty> = [];
  
  constructor(private housingService: HousingService) {

  }
  ngOnInit(): void{
    this.housingService.getAllProperties().subscribe({
      next: (response) => {
        this.properties = response;
        console.log(response);
      },
      error:(err)=>{
        console.error("Error",err);
      }
    });
  }
}
