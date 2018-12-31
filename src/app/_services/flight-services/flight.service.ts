import { Injectable } from '@angular/core';
import { Flightsearchresult, AirResultItineraries, FlightSearchOptionTwoWay, SliderFilter } from 'src/app/_models';
import { RepositoryService } from '..';
import { strictEqual } from 'assert';


@Injectable()
export class FlightService {
  flightType:string;
  flightsearchresult : Flightsearchresult;
  displayedFlightSearchResult: AirResultItineraries[];
  sliderFilters:SliderFilter;
  showFilter: boolean=false;
  constructor(private repositoryService: RepositoryService) {
   
    this.flightType="roundTrip";
    this.sliderFilters=new SliderFilter();
   }
  GetAirLowFareSearch(model:FlightSearchOptionTwoWay) {
    let test:string= model.flightType +'/'+
     model.requestId +'/' +
     model.isNewRequest + '/'+ 
     model.langId + '/' +
      model.page + '/'+
      model.pageItemCount+'/'+
      model.class+'/'+
      model.directFlight+'/'+
      model.adult+'/'+
      model.children+'/'+
      model.flexDates+'/'+
      model.CityFromId+'/'+
      model.CityToId+'/'+
      model.departureDate+'/'+
      model.returnDate;
      debugger;
    return this.repositoryService.get('FlightService/AirLowFareSearch/'+test);
  }
  GetFlightDetails() {
    

    let data={ ResultCode: "AIR:WS:ATTAR:7e6b7fed0669ff45b8f3b307b4cf7d28",ItineraryCode: "bd86694b8189c3f47887d0b53fd2bea09b8e5af4:0",PTC: "ADT" };
 
    return this.repositoryService.post('FlightService/AirFareRules', data);
   

  }

}
