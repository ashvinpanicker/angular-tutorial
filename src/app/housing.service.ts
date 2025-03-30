import { Injectable } from '@angular/core';
import { HousingLocation } from './housingLocation';
import locationsJson from '../assets/housing-locations.json';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = locationsJson.locations;
  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(location => location.id === id);
  }
}
