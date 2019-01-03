import { Component, OnInit } from '@angular/core';
import { StaticDataService, FlightService } from 'src/app/_services';
import { Router } from '@angular/router';
import { City, FlightSearchOptionMultiCities } from 'src/app/_models';
import { HttpErrorResponse } from '@angular/common/http';
// import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-flight-multi-city',
  templateUrl: './flight-multi-city.component.html',
  styleUrls: ['./flight-multi-city.component.css']
})
export class FlightMultiCityComponent implements OnInit {

  citiesFrom1: City[] = [];
  citiesTo1: City[] = [];
  citiesFrom2: City[] = [];
  citiesTo2: City[] = [];
  citiesFrom3: City[] = [];
  citiesTo3: City[] = [];
  citiesFrom4: City[] = [];
  citiesTo4: City[] = [];
  citiesFrom5: City[] = [];
  citiesTo5: City[] = [];

  constructor(public staticDataService: StaticDataService, public flightService: FlightService, public router: Router) {
    // this._localeService.use('engb');
    if (this.flightService.multiCitiesModel == undefined) {
      this.flightService.multiCitiesModel = new FlightSearchOptionMultiCities();
    }
    if (this.flightService.multiCityFlightsNumber == undefined) {
      this.flightService.multiCityFlightsNumber = 2;
    }
  }

  ngOnInit() {
  }

  deleteFlight() {
    this.flightService.multiCityFlightsNumber -= 1;
  }

  addFlight() {
    this.flightService.multiCityFlightsNumber += 1;
  }

  updateCitiesFrom1(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.multiCitiesModel.Origin1.length == 1) {
        this.staticDataService.searchCity(this.flightService.multiCitiesModel.Origin1).subscribe((data: any) => {
          this.citiesFrom1 = data;
        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  updateCitiesTo1(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.multiCitiesModel.Destination1.length == 1) {
        this.staticDataService.searchCity(this.flightService.multiCitiesModel.Destination1).subscribe((data: any) => {
          this.citiesTo1 = data;

        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  selectCity1(event, city) {
    if (city == "from") {
      this.flightService.multiCitiesModel.OriginId1 = event.item.Id;
    }
    else {
      this.flightService.multiCitiesModel.DestinationId1 = event.item.Id;
    }
  }


  updateCitiesFrom2(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.multiCitiesModel.Origin2.length == 1) {
        this.staticDataService.searchCity(this.flightService.multiCitiesModel.Origin2).subscribe((data: any) => {
          this.citiesFrom2 = data;
        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  updateCitiesTo2(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.multiCitiesModel.Destination2.length == 1) {
        this.staticDataService.searchCity(this.flightService.multiCitiesModel.Destination2).subscribe((data: any) => {
          this.citiesTo2 = data;

        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  selectCity2(event, city) {
    if (city == "from") {
      this.flightService.multiCitiesModel.OriginId2 = event.item.Id;
    }
    else {
      this.flightService.multiCitiesModel.DestinationId2 = event.item.Id;
    }
  }

  updateCitiesFrom3(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.multiCitiesModel.Origin3.length == 1) {
        this.staticDataService.searchCity(this.flightService.multiCitiesModel.Origin3).subscribe((data: any) => {
          this.citiesFrom3 = data;
        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  updateCitiesTo3(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.multiCitiesModel.Destination3.length == 1) {
        this.staticDataService.searchCity(this.flightService.multiCitiesModel.Destination3).subscribe((data: any) => {
          this.citiesTo3 = data;

        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  selectCity3(event, city) {
    if (city == "from") {
      this.flightService.multiCitiesModel.OriginId3 = event.item.Id;
    }
    else {
      this.flightService.multiCitiesModel.DestinationId3 = event.item.Id;
    }
  }


  updateCitiesFrom4(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.multiCitiesModel.Origin4.length == 1) {
        this.staticDataService.searchCity(this.flightService.multiCitiesModel.Origin4).subscribe((data: any) => {
          this.citiesFrom4 = data;
        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  updateCitiesTo4(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.multiCitiesModel.Destination4.length == 1) {
        this.staticDataService.searchCity(this.flightService.multiCitiesModel.Destination4).subscribe((data: any) => {
          this.citiesTo4 = data;

        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  selectCity4(event, city) {
    if (city == "from") {
      this.flightService.multiCitiesModel.OriginId4 = event.item.Id;
    }
    else {
      this.flightService.multiCitiesModel.DestinationId4 = event.item.Id;
    }
  }

  updateCitiesFrom5(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.multiCitiesModel.Origin5.length == 1) {
        this.staticDataService.searchCity(this.flightService.multiCitiesModel.Origin5).subscribe((data: any) => {
          this.citiesFrom5 = data;
        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  updateCitiesTo5(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.multiCitiesModel.Destination5.length == 1) {
        this.staticDataService.searchCity(this.flightService.multiCitiesModel.Destination5).subscribe((data: any) => {
          this.citiesTo5 = data;

        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  selectCity5(event, city) {
    if (city == "from") {
      this.flightService.multiCitiesModel.OriginId5 = event.item.Id;
    }
    else {
      this.flightService.multiCitiesModel.DestinationId5 = event.item.Id;
    }
  }


  search() {
    this.flightService.numberOfChilds=this.flightService.multiCitiesModel.Children;
    this.flightService.numberOfAdult=this.flightService.multiCitiesModel.Adult;
    this.flightService.multiCitiesModel.DepartureDate1 = new Date(this.flightService.multiCitiesModel.Date1).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    this.flightService.multiCitiesModel.DepartureDate2 = new Date(this.flightService.multiCitiesModel.Date2).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    this.flightService.multiCitiesModel.LangId = 2;
    this.flightService.multiCitiesModel.Page = 0;
    this.flightService.multiCitiesModel.PageItemCount = 0;
    this.flightService.multiCitiesModel.FlexDates = true;
    this.flightService.multiCitiesModel.FlightType = "2";
    this.flightService.multiCitiesModel.IsNewRequest = true;
    this.flightService.multiCitiesModel.Class = "Economy";
    this.flightService.multiCitiesModel.RequestId = "null";

    this.flightService.airLowFareSearchMultiCity(this.flightService.multiCitiesModel).subscribe((data: any) => {
      this.flightService.flightsearchresult = data;
      this.flightService.displayedFlightSearchResult = data.AirResultItineraries;
      this.flightService.sliderFilters.setCoastFilter(this.flightService.displayedFlightSearchResult[0].Amount, this.flightService.displayedFlightSearchResult[this.flightService.displayedFlightSearchResult.length - 1].Amount);
      this.flightService.sliderFilters.setDurationfiltervaliues(this.flightService.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Duration)));
      if (this.router.url != "/flights") {
        this.router.navigate(['/flights']);
      }
      this.flightService.flightTypeSearchResult="multiCity";
      this.flightService.showFlightsDetails = true;
    }, (err: HttpErrorResponse) => {
      console.log(err.error.Message);
    });
  }

}
