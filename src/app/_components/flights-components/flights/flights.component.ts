import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FlightSearchOptionRoundOne } from 'src/app/_models';

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
        else if (params.get("flightType") == "multiCity") {
          alert("multiCity");
        }
        else {
          alert("error");
        }
      })
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
    this.flightService.roundTripModel.Class = directFlight;
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
      this.flightService.isCompleated = true;
      this.flightService.sliderFilters.setCoastFilter(this.flightService.displayedFlightSearchResult[0].Amount, this.flightService.displayedFlightSearchResult[this.flightService.displayedFlightSearchResult.length - 1].Amount);
      this.flightService.sliderFilters.setDurationfiltervaliues(this.flightService.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Duration)));

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
    this.flightService.oneWayModel.Class = directFlight;
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
      this.flightService.isCompleated = true;
      this.flightService.sliderFilters.setCoastFilter(this.flightService.displayedFlightSearchResult[0].Amount, this.flightService.displayedFlightSearchResult[this.flightService.displayedFlightSearchResult.length - 1].Amount);
      this.flightService.sliderFilters.setDurationfiltervaliues(this.flightService.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Duration)));
      this.flightService.flightTypeSearchResult = "oneWay";
      this.flightService.showFlightsDetails = true;
    }, (err: HttpErrorResponse) => {
      this.flightService.isCompleated = true;
      console.log(err.error.Message);
    });
  }


}
