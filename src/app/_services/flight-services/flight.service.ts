import { Injectable } from '@angular/core';
import { Flightsearchresult, AirResultItineraries } from 'src/app/_models';
import { RepositoryService } from '..';


@Injectable()
export class FlightService {
  flightsearchresult : Flightsearchresult;
  displayedFlightSearchResult: AirResultItineraries[];

  constructor(private repositoryService: RepositoryService) { }
  GetAirLowFareSearch() {
    return this.repositoryService.get('FlightService/AirLowFareSearch/1/null/true/2/0/0/Economy/false/2/3/false/3/6/12-27-2018/01-05-2019');
  }
}
