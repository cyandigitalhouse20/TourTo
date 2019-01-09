import { AllFilters } from './../../_models/flights-models/flight-filter-models/all-filters';
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
  allFilters:AllFilters;
  flightDetails: FlightDetails;
  sliderFilters: SliderFilter;

  displayedFlightSearchResult: AirResultItineraries[];
  acceptTerms: boolean;

  constructor(private repositoryService: RepositoryService) {
    this.sliderFilters = new SliderFilter();
    this.allFilters=new AllFilters();
    
    this.Classes = ["First class", "Business", "Economy","Premium Economy"];
  }

  setFilters() {
    const distinct = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    this.allFilters.airLinesFilter=[];
    this.allFilters.airCraftsFilter=[];
    this.allFilters.AirportsFilter=[];
    this.allFilters.capinTypesFilter=[];
    
    this.allFilters.sliderFilter.setCoastFilter(this.displayedFlightSearchResult[0].Amount, this.displayedFlightSearchResult[this.displayedFlightSearchResult.length - 1].Amount);
    this.allFilters.sliderFilter.setDurationfiltervaliues(this.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Duration)));

    // set  AirLine Filters
    let AirLineInthreeDArry = this.displayedFlightSearchResult.map(o => o.Routes.map(s => s.Segment.map(i => i.Carrier.Marketing.Value)));
    let AirLineIntWoDArry = AirLineInthreeDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });
    let AirLineInOneDArry = AirLineIntWoDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });

    let distinctAirLineInOneDArry = AirLineInOneDArry.filter(distinct);

    distinctAirLineInOneDArry.forEach(element => {
      this.allFilters.airLinesFilter.push({ name: element, isChecked: true });
    });

    // set AirCraft Filters
    let AirCraftInthreeDArry = this.displayedFlightSearchResult.map(o => o.Routes.map(s => s.Segment.map(i => i.Aircraft.Value)));
    let AirCraftIntWoDArry = AirCraftInthreeDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });
    let AirCraftInOneDArry = AirCraftIntWoDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });

    let distinctAirCraftInOneDArry = AirCraftInOneDArry.filter(distinct);

    distinctAirCraftInOneDArry.forEach(element => {
      this.allFilters.airCraftsFilter.push({ name: element, isChecked: true });
    });


    // set capinType Filters

    let capinTypeInthreeDArry = this.displayedFlightSearchResult.map(o => o.Routes.map(s => s.Segment.map(i => i.Flight.CabinType)));

    let capinTypeIntWoDArry = capinTypeInthreeDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });
    let capinTypeInOneDArry = capinTypeIntWoDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });

    let distinctcapinTypeInOneDArry = capinTypeInOneDArry.filter(distinct);

    distinctcapinTypeInOneDArry.forEach(element => {
      this.allFilters.capinTypesFilter.push({ name: element, isChecked: true });
    });

    // set Airport Filters

    let AirportInthreeDArry = this.displayedFlightSearchResult.map(o => o.Routes.map(s => s.Segment.map(i => i.Origin.Airport.Value || i.Destination.Airport.Value)));
  

    let AirportIntWoDArry = AirportInthreeDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });
    let AirportInOneDArry = AirportIntWoDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });

    let distinctAirportInOneDArry = AirportInOneDArry.filter(distinct);

    distinctAirportInOneDArry.forEach(element => {
      this.allFilters.AirportsFilter.push({ name: element, isChecked: true });
    });

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
