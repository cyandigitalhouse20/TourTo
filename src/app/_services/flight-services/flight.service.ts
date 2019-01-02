import { Injectable } from '@angular/core';
import { Flightsearchresult, AirResultItineraries, FlightSearchOptionRoundOne, SliderFilter } from 'src/app/_models';
import { RepositoryService } from '..';


@Injectable()
export class FlightService {

  roundTripModel: FlightSearchOptionRoundOne;
  oneWayModel: FlightSearchOptionRoundOne;

  flightType: string;
  flightsearchresult: Flightsearchresult;
  displayedFlightSearchResult: AirResultItineraries[];
  sliderFilters: SliderFilter;
  showFlightsDetails: boolean;

  constructor(private repositoryService: RepositoryService) {

    this.flightType = "roundTrip";
    this.sliderFilters = new SliderFilter();
  }
  GetAirLowFareSearch(model: FlightSearchOptionRoundOne) {
    let param: string = model.FlightType + '/' +
      model.RequestId + '/' +
      model.IsNewRequest + '/' +
      model.LangId + '/' +
      model.Page + '/' +
      model.PageItemCount + '/' +
      model.Class + '/' +
      model.DirectFlight + '/' +
      model.Adult + '/' +
      model.Children + '/' +
      model.FlexDates + '/' +
      model.CityFromId + '/' +
      model.CityToId + '/' +
      model.DepartureDate + '/' +
      model.ReturnDate;
    return this.repositoryService.get('FlightService/AirLowFareSearch/' + param);
  }
  GetFlightDetails() {
    let data = { ResultCode: "AIR:WS:ATTAR:7e6b7fed0669ff45b8f3b307b4cf7d28", ItineraryCode: "bd86694b8189c3f47887d0b53fd2bea09b8e5af4:0", PTC: "ADT" };
    return this.repositoryService.post('FlightService/AirFareRules', data);

  }

}
