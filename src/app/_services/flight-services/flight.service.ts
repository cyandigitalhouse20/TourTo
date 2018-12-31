import { Injectable } from '@angular/core';
import { Flightsearchresult, AirResultItineraries, SliderFilter } from 'src/app/_models';
import { RepositoryService } from '..';


@Injectable()
export class FlightService {
  flightsearchresult : Flightsearchresult;
  displayedFlightSearchResult: AirResultItineraries[];
  sliderFilters:SliderFilter;
  showFilter: boolean=false;



  constructor(private repositoryService: RepositoryService) {
    this.sliderFilters=new SliderFilter();
   }
  GetAirLowFareSearch() {
    return this.repositoryService.get('FlightService/AirLowFareSearch/2/null/true/2/0/0/Economy/true/1/0/true/2/3/01-01-2019/01-01-2019');
  }
  GetFlightDetails() {
    

    let data={ ResultCode: "AIR:WS:ATTAR:7e6b7fed0669ff45b8f3b307b4cf7d28",ItineraryCode: "bd86694b8189c3f47887d0b53fd2bea09b8e5af4:0",PTC: "ADT" };
 
    return this.repositoryService.post('FlightService/AirFareRules', data);
   

  }

}
