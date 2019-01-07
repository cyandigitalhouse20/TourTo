import { PassangerViewModel } from './../../_models/flights-models/flight-air-make-reservation-models/passanger-view-model';
import { Injectable } from '@angular/core';
import { Flightsearchresult, AirResultItineraries, FlightSearchOptionRoundOne, SliderFilter, FlightSearchOptionMultiCities, FlightDetails, AirMakeReservation, AirSeatMap } from 'src/app/_models';
import { RepositoryService } from '..';

@Injectable()
export class FlightService {
 
  Classes: string[];
  isCompleated: boolean = true;
  showFlightsDetails: boolean;
  multiCityFlightsNumber: number;
  numberOfAdult: number;
  numberOfChilds: number;
  selectedItenartyData: AirResultItineraries[];
  flightType: string;
  PassengerViewModel:PassangerViewModel[];
  flightTypeSearchResult: string;
  selectedItenartyId: string
  roundTripModel: FlightSearchOptionRoundOne;
  oneWayModel: FlightSearchOptionRoundOne;
  multiCitiesModel: FlightSearchOptionMultiCities;
  flightsearchresult: Flightsearchresult;
  flightDetails: FlightDetails;
  sliderFilters: SliderFilter;
  displayedFlightSearchResult: AirResultItineraries[];
  acceptTerms: boolean;

  constructor(private repositoryService: RepositoryService) {
    this.sliderFilters = new SliderFilter();
    this.Classes = ["First class", "Business", "Economy","Premium Economy"];
  }

  airLowFareSearch(model: FlightSearchOptionRoundOne) {
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
      model.OriginCityId + '/' +
      model.DestinationCityId + '/' +
      model.DepartureDate + '/' +
      model.ReturnDate;
    return this.repositoryService.get('FlightService/AirLowFareSearch/' + param);
  }

  airLowFareSearchMultiCity(model: FlightSearchOptionMultiCities) {
    let param: string = model.RequestId + '/' +
      model.IsNewRequest + '/' +
      model.LangId + '/' +
      model.Page + '/' +
      model.PageItemCount + '/' +
      model.Class + '/' +
      model.DirectFlight + '/' +
      model.Adult + '/' +
      model.Children + '/' +
      model.FlexDates + '/' +
      model.OriginId1 + '/' +
      model.DestinationId1 + '/' +
      model.DepartureDate1 + '/' +
      model.OriginId2 + '/' +
      model.DestinationId2 + '/' +
      model.DepartureDate2 + '/' +
      model.OriginId3 + '/' +
      model.DestinationId3 + '/' +
      model.DepartureDate3 + '/' +
      model.OriginId4 + '/' +
      model.DestinationId4 + '/' +
      model.DepartureDate4 + '/' +
      model.OriginId5 + '/' +
      model.DestinationId5 + '/' +
      model.DepartureDate5;
    return this.repositoryService.get('FlightService/AirLowFareSearchMultiCity/' + param);
  }

  airFareValidation() {
    let data = { ResultCode: this.flightsearchresult.ResultCod, ItineraryCode: this.selectedItenartyId, PTC: "ADT" };
    return this.repositoryService.post('FlightService/AirFareValidation', data);
  }

  airMakeReservation(airMakeReservationModel: AirMakeReservation) {
    return this.repositoryService.post('FlightService/AirMakeReservation', airMakeReservationModel);
  }

  airIssueReservationTickets(reservationID: string) {
    return this.repositoryService.post('FlightService/AirIssueReservationTickets', reservationID);
  }

  airSeatMap(airSeatMapModel: AirSeatMap) {
    return this.repositoryService.post('FlightService/AirSeatMap', airSeatMapModel);
  }

}
