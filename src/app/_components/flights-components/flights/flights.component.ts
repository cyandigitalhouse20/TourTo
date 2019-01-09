import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FlightSearchOptionRoundOne, FlightSearchOptionMultiCities } from 'src/app/_models';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(public flightService: FlightService, public router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

    if (this.router.url.includes("/flights") && this.router.url != "/flights") {

      this.flightService.isCompleated = false;

      this.route.paramMap.subscribe(params => {
        if (params.get("flightType") == "1") {
          if (this.flightService.roundTripModel == undefined) {
            this.flightService.roundTripModel = new FlightSearchOptionRoundOne();
          }
          this.getRoundTripResult(params.get("flightType"), params.get("class"), params.get("directFlight"), params.get("adult"), params.get("children"), params.get("flexDates"), params.get("originCityId"), params.get("destinationCityId"), params.get("departureDate"), params.get("returnDate"));
        }
        else if (params.get("flightType") == "2") {
          if (this.flightService.oneWayModel == undefined) {
            this.flightService.oneWayModel = new FlightSearchOptionRoundOne();
          }
          this.getOneWayResult(params.get("flightType"), params.get("class"), params.get("directFlight"), params.get("adult"), params.get("children"), params.get("flexDates"), params.get("originCityId"), params.get("destinationCityId"), params.get("departureDate"));
        }
        else if (params.get("flightType") == "3") {
          if (this.flightService.multiCitiesModel == undefined) {
            this.flightService.multiCitiesModel = new FlightSearchOptionMultiCities();
          }
          this.getMultiCityResult(params.get("multiCityFlightsNumber"), params.get("flightType"), params.get("class"), params.get("directFlight"), params.get("adult"), params.get("children"), params.get("flexDates"), params.get("originId1"), params.get("destinationId1"), params.get("departureDate1"), params.get("originId2"), params.get("destinationId2"), params.get("departureDate2"), params.get("originId3"), params.get("destinationId3"), params.get("departureDate3"), params.get("originId4"), params.get("destinationId4"), params.get("departureDate4"), params.get("originId5"), params.get("destinationId5"), params.get("departureDate5"));
        }
        else {
          alert("error");
        }
      })
    }
    else {
      this.flightService.isCompleated = true;
    }

  }

  getRoundTripResult(flightType, classType, directFlight, adult, children, flexDates, originCityId, destinationCityId, departureDate, returnDate) {

    this.flightService.numberOfChilds = children;
    this.flightService.numberOfAdult = adult;
    this.flightService.roundTripModel.Children = children;
    this.flightService.roundTripModel.Adult = adult;
    this.flightService.roundTripModel.DepartureDate = departureDate;
    this.flightService.roundTripModel.ReturnDate = returnDate;
    this.flightService.roundTripModel.LangId = 2;
    this.flightService.roundTripModel.Page = 0;
    this.flightService.roundTripModel.PageItemCount = 0;
    this.flightService.roundTripModel.FlexDates = flexDates;
    this.flightService.roundTripModel.FlightType = flightType;
    this.flightService.roundTripModel.Class = classType;
    this.flightService.roundTripModel.DirectFlight = directFlight;
    if (localStorage.getItem('RequestId') != undefined) {
      this.flightService.roundTripModel.IsNewRequest = false;
      this.flightService.roundTripModel.RequestId = localStorage.getItem('RequestId');
    }
    else {
      this.flightService.roundTripModel.RequestId = "null";
      this.flightService.roundTripModel.IsNewRequest = true;
    }

    this.flightService.roundTripModel.OriginCityId = originCityId;
    this.flightService.roundTripModel.DestinationCityId = destinationCityId;

    this.flightService.airLowFareSearch(this.flightService.roundTripModel).subscribe((data: any) => {
      localStorage.setItem('RequestId', data.RequestId);
      this.flightService.flightsearchresult = data;
      this.flightService.displayedFlightSearchResult = data.AirResultItineraries;
      this.flightService.setFilters();
      this.flightService.isCompleated = true;
      this.flightService.flightTypeSearchResult = "roundTrip";
      this.flightService.showFlightsDetails = true;
    }, (err: HttpErrorResponse) => {
      this.flightService.isCompleated = true;
      console.log(err.error.Message);
    });
  }

  getOneWayResult(flightType, classType, directFlight, adult, children, flexDates, originCityId, destinationCityId, departureDate) {
    this.flightService.numberOfChilds = children;
    this.flightService.numberOfAdult = adult;
    this.flightService.oneWayModel.Children = children;
    this.flightService.oneWayModel.Adult = adult;
    this.flightService.oneWayModel.DepartureDate = departureDate;
    this.flightService.oneWayModel.ReturnDate = departureDate;
    this.flightService.oneWayModel.LangId = 2;
    this.flightService.oneWayModel.Page = 0;
    this.flightService.oneWayModel.PageItemCount = 0;
    this.flightService.oneWayModel.FlexDates = flexDates;
    this.flightService.oneWayModel.FlightType = flightType;
    this.flightService.oneWayModel.Class = classType;
    this.flightService.oneWayModel.DirectFlight = directFlight;
    if (localStorage.getItem('RequestId') != undefined) {
      this.flightService.oneWayModel.IsNewRequest = false;
      this.flightService.oneWayModel.RequestId = localStorage.getItem('RequestId');
    }
    else {
      this.flightService.oneWayModel.RequestId = "null";
      this.flightService.oneWayModel.IsNewRequest = true;
    }

    this.flightService.oneWayModel.OriginCityId = originCityId;
    this.flightService.oneWayModel.DestinationCityId = destinationCityId;

    this.flightService.airLowFareSearch(this.flightService.oneWayModel).subscribe((data: any) => {
      localStorage.setItem('RequestId', data.RequestId);
      this.flightService.flightsearchresult = data;
      this.flightService.displayedFlightSearchResult = data.AirResultItineraries;
      this.flightService.setFilters();
      this.flightService.isCompleated = true;
      this.flightService.flightTypeSearchResult = "oneWay";
      this.flightService.showFlightsDetails = true;
    }, (err: HttpErrorResponse) => {
      this.flightService.isCompleated = true;
      console.log(err.error.Message);
    });
  }

  getMultiCityResult(multiCityFlightsNumber, flightType, classType, directFlight, adult, children, flexDates, originId1, destinationId1, departureDate1, originId2, destinationId2, departureDate2, originId3, destinationId3, departureDate3, originId4, destinationId4, departureDate4, originId5, destinationId5, departureDate5) {

    this.flightService.numberOfChilds = children;
    this.flightService.numberOfAdult = adult;

    this.flightService.multiCitiesModel.Children = children;
    this.flightService.multiCitiesModel.Adult = adult;
    this.flightService.multiCitiesModel.LangId = 2;
    this.flightService.multiCitiesModel.Page = 0;
    this.flightService.multiCitiesModel.PageItemCount = 0;
    this.flightService.multiCitiesModel.FlexDates = flexDates;
    this.flightService.multiCitiesModel.FlightType = flightType;
    this.flightService.multiCitiesModel.Class = classType;
    this.flightService.multiCitiesModel.DirectFlight = directFlight;

    this.flightService.multiCitiesModel.OriginId1 = originId1;
    this.flightService.multiCitiesModel.DestinationId1 = destinationId1;
    this.flightService.multiCitiesModel.DepartureDate1 = departureDate1;

    this.flightService.multiCitiesModel.OriginId2 = originId2;
    this.flightService.multiCitiesModel.DestinationId2 = destinationId2;
    this.flightService.multiCitiesModel.DepartureDate2 = departureDate2;

    if (multiCityFlightsNumber == 2) {
      this.flightService.multiCitiesModel.OriginId3 = null;
      this.flightService.multiCitiesModel.DestinationId3 = null;
      this.flightService.multiCitiesModel.DepartureDate3 = null;
      this.flightService.multiCitiesModel.OriginId4 = null;
      this.flightService.multiCitiesModel.DestinationId4 = null;
      this.flightService.multiCitiesModel.DepartureDate4 = null;
      this.flightService.multiCitiesModel.OriginId5 = null;
      this.flightService.multiCitiesModel.DestinationId5 = null;
      this.flightService.multiCitiesModel.DepartureDate5 = null;
    }

    else if (multiCityFlightsNumber == 3) {
      this.flightService.multiCitiesModel.OriginId3 = originId3;
      this.flightService.multiCitiesModel.DestinationId3 = destinationId3;
      this.flightService.multiCitiesModel.DepartureDate3 = departureDate3;
      this.flightService.multiCitiesModel.OriginId4 = null;
      this.flightService.multiCitiesModel.DestinationId4 = null;
      this.flightService.multiCitiesModel.DepartureDate4 = null;
      this.flightService.multiCitiesModel.OriginId5 = null;
      this.flightService.multiCitiesModel.DestinationId5 = null;
      this.flightService.multiCitiesModel.DepartureDate5 = null;
    }

    else if (multiCityFlightsNumber == 4) {
      this.flightService.multiCitiesModel.OriginId3 = originId3;
      this.flightService.multiCitiesModel.DestinationId3 = destinationId3;
      this.flightService.multiCitiesModel.DepartureDate3 = departureDate3;
      this.flightService.multiCitiesModel.OriginId4 = originId4;
      this.flightService.multiCitiesModel.DestinationId4 = destinationId4;
      this.flightService.multiCitiesModel.DepartureDate4 = departureDate4;
      this.flightService.multiCitiesModel.OriginId5 = null;
      this.flightService.multiCitiesModel.DestinationId5 = null;
      this.flightService.multiCitiesModel.DepartureDate5 = null;
    }
    else if (multiCityFlightsNumber == 4) {
      this.flightService.multiCitiesModel.OriginId3 = originId3;
      this.flightService.multiCitiesModel.DestinationId3 = destinationId3;
      this.flightService.multiCitiesModel.DepartureDate3 = departureDate3;
      this.flightService.multiCitiesModel.OriginId4 = originId4;
      this.flightService.multiCitiesModel.DestinationId4 = destinationId4;
      this.flightService.multiCitiesModel.DepartureDate4 = departureDate4;
      this.flightService.multiCitiesModel.OriginId5 = originId5;
      this.flightService.multiCitiesModel.DestinationId5 = destinationId5;
      this.flightService.multiCitiesModel.DepartureDate5 = departureDate5;
    }

    if (localStorage.getItem('RequestId') != undefined) {
      this.flightService.multiCitiesModel.IsNewRequest = false;
      this.flightService.multiCitiesModel.RequestId = localStorage.getItem('RequestId');
    }
    else {
      this.flightService.multiCitiesModel.RequestId = "null";
      this.flightService.multiCitiesModel.IsNewRequest = true;
    }

    this.flightService.airLowFareSearchMultiCity(this.flightService.multiCitiesModel).subscribe((data: any) => {
      localStorage.setItem('RequestId', data.RequestId);
      this.flightService.flightsearchresult = data;
      this.flightService.displayedFlightSearchResult = data.AirResultItineraries;
      this.flightService.setFilters();
      this.flightService.isCompleated = true;
      this.flightService.flightTypeSearchResult = "multiCity";
      this.flightService.showFlightsDetails = true;
    }, (err: HttpErrorResponse) => {
      this.flightService.isCompleated = true;
      console.log(err.error.Message);
    });
  }


  


}
