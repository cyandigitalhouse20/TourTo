import { Component, OnInit } from '@angular/core';
import { StaticDataService, FlightService } from 'src/app/_services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-flight-round-trip',
  templateUrl: './flight-round-trip.component.html',
  styleUrls: ['./flight-round-trip.component.css']
})
export class FlightRoundTripComponent implements OnInit {

  cityFrom: string;
  cityTo: string;

  constructor(public staticDataService: StaticDataService,private flightService:FlightService) {

  }

  ngOnInit() {
  }

  updateCitiesFrom(event) {
    if (event.code != 'Backspace') {
      if (this.cityFrom.length == 1) {
        this.staticDataService.searchCity(this.cityFrom).subscribe((data: any) => {
          this.staticDataService.cities = data;
        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  updateCitiesTo(event) {
    if (event.code != 'Backspace') {
      if (this.cityTo.length == 1) {
        this.staticDataService.searchCity(this.cityTo).subscribe((data: any) => {
          this.staticDataService.cities = data;

        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  selectCity(event, city) {
    if (city == "from") {
      this.flightService.flightSearchOptionTwoWay.CityFromId = event.item.Id;
    }
    else {
      this.flightService.flightSearchOptionTwoWay.CityToId = event.item.Id;
    }
  }

}
