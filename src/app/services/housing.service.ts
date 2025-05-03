import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map }from 'rxjs/operators';
import { Iproperty } from '../property/iproperty';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  http = inject(HttpClient);
  constructor() { }

  getAllProperties() : Observable<Iproperty[]> {
    return this.http.get('assets/data/properties.json').pipe(
      map((data: { [key: string]: any }) =>{
        const propertiesArray: Array<Iproperty> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      }
      )
    );
  }
}
