import { Component, OnInit } from '@angular/core';
import { StaticDataService, FlightService } from 'src/app/_services';
import { HttpErrorResponse } from '@angular/common/http';
import { FlightSearchOptionRoundOne, City } from 'src/app/_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-round-trip',
  templateUrl: './flight-round-trip.component.html',
  styleUrls: ['./flight-round-trip.component.css']
})
export class FlightRoundTripComponent implements OnInit {

  citiesFrom: City[] = [];
  citiesTo: City[] = [];

  constructor(private staticDataService: StaticDataService, private flightService: FlightService, private router: Router) {
    if (this.flightService.roundTripModel == undefined) {
      this.flightService.roundTripModel = new FlightSearchOptionRoundOne();
    }
  }

  ngOnInit() {
  }

  updateCitiesFrom(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.roundTripModel.CityFrom.length == 1) {
        this.staticDataService.searchCity(this.flightService.roundTripModel.CityFrom).subscribe((data: any) => {
          this.citiesFrom = data;
        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  updateCitiesTo(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.roundTripModel.CityTo.length == 1) {
        this.staticDataService.searchCity(this.flightService.roundTripModel.CityTo).subscribe((data: any) => {
          this.citiesTo = data;

        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  selectCity(event, city) {
    if (city == "from") {
      this.flightService.roundTripModel.CityFromId = event.item.Id;
    }
    else {
      this.flightService.roundTripModel.CityToId = event.item.Id;
    }
  }

  search() {
    this.flightService.roundTripModel.DepartureDate = new Date(this.flightService.roundTripModel.Dates[0]).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    this.flightService.roundTripModel.ReturnDate = new Date(this.flightService.roundTripModel.Dates[1]).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    this.flightService.roundTripModel.LangId = 2;
    this.flightService.roundTripModel.Page = 0;
    this.flightService.roundTripModel.PageItemCount = 0;
    this.flightService.roundTripModel.FlexDates = true;
    this.flightService.roundTripModel.FlightType = "1";
    this.flightService.roundTripModel.IsNewRequest = true;
    this.flightService.roundTripModel.Class = "Economy";
    this.flightService.roundTripModel.RequestId = "null";

    this.flightService.GetAirLowFareSearch(this.flightService.roundTripModel).subscribe((data: any) => {
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
