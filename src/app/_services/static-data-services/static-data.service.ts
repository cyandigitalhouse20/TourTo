import { Injectable } from '@angular/core';
import { City, FlightSearchOptionTwoWay } from 'src/app/_models';
import { RepositoryService } from '..';


@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  cities: City[] = [];
  flightSearchOptionTwoWay: FlightSearchOptionTwoWay;

  constructor(private repositoryService: RepositoryService) {
    this.flightSearchOptionTwoWay=new FlightSearchOptionTwoWay();
   }

  searchCity(term: string) {
    return this.repositoryService.get("StaticData/Cities/2/null/0/0/" + term + "/null/true?searchableOn=air");

  }
}
