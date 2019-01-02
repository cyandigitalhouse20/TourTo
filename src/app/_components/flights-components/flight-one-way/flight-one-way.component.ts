import { Component, OnInit } from '@angular/core';
import { StaticDataService, FlightService } from 'src/app/_services';
import { HttpErrorResponse } from '@angular/common/http';
import { City, FlightSearchOptionRoundOne } from 'src/app/_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-one-way',
  templateUrl: './flight-one-way.component.html',
  styleUrls: ['./flight-one-way.component.css']
})
export class FlightOneWayComponent implements OnInit {

  citiesFrom: City[] = [];
  citiesTo: City[] = [];

  constructor(private staticDataService: StaticDataService, private flightService: FlightService, private router: Router) {
    if (this.flightService.oneWayModel == undefined) {
      this.flightService.oneWayModel = new FlightSearchOptionRoundOne();
    }
  }

  ngOnInit() {
  }

  updateCitiesFrom(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.oneWayModel.CityFrom.length == 1) {
        this.staticDataService.searchCity(this.flightService.oneWayModel.CityFrom).subscribe((data: any) => {
          this.citiesFrom = data;
        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  updateCitiesTo(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.oneWayModel.CityTo.length == 1) {
        this.staticDataService.searchCity(this.flightService.oneWayModel.CityTo).subscribe((data: any) => {
          this.citiesTo = data;

        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  selectCity(event, city) {
    if (city == "from") {
      this.flightService.oneWayModel.CityFromId = event.item.Id;
    }
    else {
      this.flightService.oneWayModel.CityToId = event.item.Id;
    }
  }

  search() {
    this.flightService.oneWayModel.DepartureDate = new Date(this.flightService.oneWayModel.Date).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    this.flightService.oneWayModel.ReturnDate = new Date(this.flightService.oneWayModel.Date).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    this.flightService.oneWayModel.LangId = 2;
    this.flightService.oneWayModel.Page = 0;
    this.flightService.oneWayModel.PageItemCount = 0;
    this.flightService.oneWayModel.FlexDates = true;
    this.flightService.oneWayModel.FlightType = "2";
    this.flightService.oneWayModel.IsNewRequest = true;
    this.flightService.oneWayModel.Class = "Economy";
    this.flightService.oneWayModel.RequestId = "null";

    this.flightService.GetAirLowFareSearch(this.flightService.oneWayModel).subscribe((data: any) => {
      this.flightService.flightsearchresult = data;
      this.flightService.displayedFlightSearchResult = data.AirResultItineraries;
      this.flightService.sliderFilters.setCoastFilter(this.flightService.displayedFlightSearchResult[0].Amount, this.flightService.displayedFlightSearchResult[this.flightService.displayedFlightSearchResult.length - 1].Amount);
      this.flightService.sliderFilters.setDurationfiltervaliues(this.flightService.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Duration)));
      if (this.router.url != "/flights") {
        this.router.navigate(['/flights']);
      }
      this.flightService.showFlightsDetails = true;
    }, (err: HttpErrorResponse) => {
      console.log(err.error.Message);
    });
  }

}
