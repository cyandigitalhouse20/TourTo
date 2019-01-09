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

  constructor(public staticDataService: StaticDataService, public flightService: FlightService, public router: Router) {
    if (this.flightService.roundTripModel == undefined) {
      this.flightService.roundTripModel = new FlightSearchOptionRoundOne();
    }
  }

  ngOnInit() {

  }

  checkE(key, type) {
    if (key == '' && type == 'adult')
      this.flightService.roundTripModel.Adult = 1;
    else if (key == '' && type == 'child')
      this.flightService.roundTripModel.Children = 0;
  }

  updateCitiesFrom(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.roundTripModel.OriginCity.length == 1) {
        this.staticDataService.searchCity(this.flightService.roundTripModel.OriginCity).subscribe((data: any) => {
          this.citiesFrom = data;
        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  updateCitiesTo(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.roundTripModel.DestinationCity.length == 1) {
        this.staticDataService.searchCity(this.flightService.roundTripModel.DestinationCity).subscribe((data: any) => {
          this.citiesTo = data;

        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  selectCity(event, city) {
    if (city == "from") {
      this.flightService.roundTripModel.OriginCityId = event.item.Id;
    }
    else {
      this.flightService.roundTripModel.DestinationCityId = event.item.Id;
    }
  }

  changeOption() {
    if (this.flightService.roundTripModel.Children == 0) {
      this.flightService.roundTripModel.searchOption = this.flightService.roundTripModel.Adult + " Adult / " + this.flightService.roundTripModel.Class;
    }
    else {
      this.flightService.roundTripModel.searchOption = this.flightService.roundTripModel.Adult + " Adult / " + this.flightService.roundTripModel.Children
        + " child / " + this.flightService.roundTripModel.Class;
    }

  }

  search() {
    localStorage.removeItem('RequestId');
    this.flightService.isCompleated = false;
    this.flightService.roundTripModel.DepartureDate = new Date(this.flightService.roundTripModel.Dates[0]).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    this.flightService.roundTripModel.ReturnDate = new Date(this.flightService.roundTripModel.Dates[1]).toLocaleDateString().toString().replace('/', '-').replace('/', '-');

    if (this.router.url.includes("/flights") && this.router.url != "/flights") {

      this.flightService.numberOfChilds = this.flightService.roundTripModel.Children;
      this.flightService.numberOfAdult = this.flightService.roundTripModel.Adult;
      this.flightService.roundTripModel.LangId = 2;
      this.flightService.roundTripModel.Page = 0;
      this.flightService.roundTripModel.PageItemCount = 0;
      this.flightService.roundTripModel.FlexDates = true;
      this.flightService.roundTripModel.FlightType = "1";
      this.flightService.roundTripModel.RequestId = "null";
      this.flightService.roundTripModel.IsNewRequest = true;
      this.flightService.roundTripModel.DirectFlight = false;

      this.router.navigate(['/flights' + '/1' + '/' + this.flightService.roundTripModel.Class + '/false' + '/' + this.flightService.roundTripModel.Adult + '/' + this.flightService.roundTripModel.Children + '/true' + '/' + this.flightService.roundTripModel.OriginCityId + '/' + this.flightService.roundTripModel.DestinationCityId + '/' + this.flightService.roundTripModel.DepartureDate + '/' + this.flightService.roundTripModel.ReturnDate]);

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
    else {
      this.router.navigate(['/flights' + '/1' + '/' + this.flightService.roundTripModel.Class + '/false' + '/' + this.flightService.roundTripModel.Adult + '/' + this.flightService.roundTripModel.Children + '/true' + '/' + this.flightService.roundTripModel.OriginCityId + '/' + this.flightService.roundTripModel.DestinationCityId + '/' + this.flightService.roundTripModel.DepartureDate + '/' + this.flightService.roundTripModel.ReturnDate]);
    }
  }

}
