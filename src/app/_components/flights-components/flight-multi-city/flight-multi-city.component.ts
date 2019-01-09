import { Component, OnInit } from '@angular/core';
import { StaticDataService, FlightService } from 'src/app/_services';
import { Router } from '@angular/router';
import { City, FlightSearchOptionMultiCities } from 'src/app/_models';
import { HttpErrorResponse } from '@angular/common/http';

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
    if (this.flightService.multiCitiesModel == undefined) {
      this.flightService.multiCitiesModel = new FlightSearchOptionMultiCities();
    }
    if (this.flightService.multiCityFlightsNumber == undefined) {
      this.flightService.multiCityFlightsNumber = 2;
    }
  }

  ngOnInit() {
  }

  checkE(key, type) {
    if (key == '' && type == 'adult')
      this.flightService.multiCitiesModel.Adult = 1;
    else if (key == '' && type == 'child')
      this.flightService.multiCitiesModel.Children = 0;
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

  changeOption() {
    if (this.flightService.multiCitiesModel.Children == 0) {
      this.flightService.multiCitiesModel.searchOption = this.flightService.multiCitiesModel.Adult + " Adult / " + this.flightService.multiCitiesModel.Class;
    }
    else {
      this.flightService.multiCitiesModel.searchOption = this.flightService.multiCitiesModel.Adult + " Adult / " + this.flightService.multiCitiesModel.Children
        + " child / " + this.flightService.multiCitiesModel.Class;
    }

  }

  search() {
    localStorage.removeItem('RequestId');
    this.flightService.isCompleated = false;
    this.flightService.multiCitiesModel.DepartureDate1 = new Date(this.flightService.multiCitiesModel.Date1).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    this.flightService.multiCitiesModel.DepartureDate2 = new Date(this.flightService.multiCitiesModel.Date2).toLocaleDateString().toString().replace('/', '-').replace('/', '-');

    if (this.router.url.includes("/flights") && this.router.url != "/flights") {

      this.flightService.numberOfChilds = this.flightService.multiCitiesModel.Children;
      this.flightService.numberOfAdult = this.flightService.multiCitiesModel.Adult;
      this.flightService.multiCitiesModel.LangId = 2;
      this.flightService.multiCitiesModel.Page = 0;
      this.flightService.multiCitiesModel.PageItemCount = 0;
      this.flightService.multiCitiesModel.FlexDates = true;
      this.flightService.multiCitiesModel.FlightType = "3";
      this.flightService.multiCitiesModel.RequestId = "null";
      this.flightService.multiCitiesModel.IsNewRequest = true;
      this.flightService.multiCitiesModel.DirectFlight = false;

      if (this.flightService.multiCityFlightsNumber == 2) {
        this.router.navigate(['/flights' + '/2' + '/3' + '/' + this.flightService.multiCitiesModel.Class + '/false' + '/' + this.flightService.multiCitiesModel.Adult + '/' + this.flightService.multiCitiesModel.Children + '/true' + '/' + this.flightService.multiCitiesModel.OriginId1 + '/' + this.flightService.multiCitiesModel.DestinationId1 + '/' + this.flightService.multiCitiesModel.DepartureDate1 + '/' + this.flightService.multiCitiesModel.OriginId2 + '/' + this.flightService.multiCitiesModel.DestinationId2 + '/' + this.flightService.multiCitiesModel.DepartureDate2
          + '/null/null/null/null/null/null/null/null/null']);
      }

      else if (this.flightService.multiCityFlightsNumber == 3) {
        this.flightService.multiCitiesModel.DepartureDate3 = new Date(this.flightService.multiCitiesModel.Date3).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.router.navigate(['/flights' + '/3' + '/3' + '/' + this.flightService.multiCitiesModel.Class + '/false' + '/' + this.flightService.multiCitiesModel.Adult + '/' + this.flightService.multiCitiesModel.Children + '/true' + '/' + this.flightService.multiCitiesModel.OriginId1 + '/' + this.flightService.multiCitiesModel.DestinationId1 + '/' + this.flightService.multiCitiesModel.DepartureDate1 + '/' +
          this.flightService.multiCitiesModel.OriginId2 + '/' + this.flightService.multiCitiesModel.DestinationId2 + '/' + this.flightService.multiCitiesModel.DepartureDate2 + '/' +
          this.flightService.multiCitiesModel.OriginId3 + '/' + this.flightService.multiCitiesModel.DestinationId3 + '/' + this.flightService.multiCitiesModel.DepartureDate3 + '/' +
          'null/null/null/null/null/null']);
      }
      else if (this.flightService.multiCityFlightsNumber == 4) {
        this.flightService.multiCitiesModel.DepartureDate3 = new Date(this.flightService.multiCitiesModel.Date3).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.flightService.multiCitiesModel.DepartureDate4 = new Date(this.flightService.multiCitiesModel.Date4).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.router.navigate(['/flights' + '/4' + '/3' + '/' + this.flightService.multiCitiesModel.Class + '/false' + '/' + this.flightService.multiCitiesModel.Adult + '/' + this.flightService.multiCitiesModel.Children + '/true' + '/' + this.flightService.multiCitiesModel.OriginId1 + '/' + this.flightService.multiCitiesModel.DestinationId1 + '/' + this.flightService.multiCitiesModel.DepartureDate1 + '/' +
          this.flightService.multiCitiesModel.OriginId2 + '/' + this.flightService.multiCitiesModel.DestinationId2 + '/' + this.flightService.multiCitiesModel.DepartureDate2 + '/' +
          this.flightService.multiCitiesModel.OriginId3 + '/' + this.flightService.multiCitiesModel.DestinationId3 + '/' + this.flightService.multiCitiesModel.DepartureDate3 + '/' +
          this.flightService.multiCitiesModel.OriginId4 + '/' + this.flightService.multiCitiesModel.DestinationId4 + '/' + this.flightService.multiCitiesModel.DepartureDate4 + '/' +
          'null/null/null']);
      }
      else if (this.flightService.multiCityFlightsNumber == 5) {
        this.flightService.multiCitiesModel.DepartureDate3 = new Date(this.flightService.multiCitiesModel.Date3).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.flightService.multiCitiesModel.DepartureDate4 = new Date(this.flightService.multiCitiesModel.Date4).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.flightService.multiCitiesModel.DepartureDate5 = new Date(this.flightService.multiCitiesModel.Date5).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.router.navigate(['/flights' + '/5' + '/3' + '/' + this.flightService.multiCitiesModel.Class + '/false' + '/' + this.flightService.multiCitiesModel.Adult + '/' + this.flightService.multiCitiesModel.Children + '/true' + '/' + this.flightService.multiCitiesModel.OriginId1 + '/' + this.flightService.multiCitiesModel.DestinationId1 + '/' + this.flightService.multiCitiesModel.DepartureDate1 + '/' +
          this.flightService.multiCitiesModel.OriginId2 + '/' + this.flightService.multiCitiesModel.DestinationId2 + '/' + this.flightService.multiCitiesModel.DepartureDate2 + '/' +
          this.flightService.multiCitiesModel.OriginId3 + '/' + this.flightService.multiCitiesModel.DestinationId3 + '/' + this.flightService.multiCitiesModel.DepartureDate3 + '/' +
          this.flightService.multiCitiesModel.OriginId4 + '/' + this.flightService.multiCitiesModel.DestinationId4 + '/' + this.flightService.multiCitiesModel.DepartureDate4 + '/' +
          this.flightService.multiCitiesModel.OriginId5 + '/' + this.flightService.multiCitiesModel.DestinationId5 + '/' + this.flightService.multiCitiesModel.DepartureDate5]);
      }

      this.flightService.airLowFareSearchMultiCity(this.flightService.multiCitiesModel).subscribe((data: any) => {
        localStorage.setItem('RequestId', data.RequestId);
        this.flightService.flightsearchresult = data;
        this.flightService.displayedFlightSearchResult = data.AirResultItineraries;
        this.setFilters();
        this.flightService.isCompleated = true;
        this.flightService.flightTypeSearchResult = "multiCity";
        this.flightService.showFlightsDetails = true;
      }, (err: HttpErrorResponse) => {
        this.flightService.isCompleated = true;
        console.log(err.error.Message);
      });
    }
    else {

      if (this.flightService.multiCityFlightsNumber == 2) {
        this.router.navigate(['/flights' + '/2' + '/3' + '/' + this.flightService.multiCitiesModel.Class + '/false' + '/' + this.flightService.multiCitiesModel.Adult + '/' + this.flightService.multiCitiesModel.Children + '/true' + '/' + this.flightService.multiCitiesModel.OriginId1 + '/' + this.flightService.multiCitiesModel.DestinationId1 + '/' + this.flightService.multiCitiesModel.DepartureDate1 + '/' + this.flightService.multiCitiesModel.OriginId2 + '/' + this.flightService.multiCitiesModel.DestinationId2 + '/' + this.flightService.multiCitiesModel.DepartureDate2
          + '/null/null/null/null/null/null/null/null/null']);
      }

      else if (this.flightService.multiCityFlightsNumber == 3) {
        this.flightService.multiCitiesModel.DepartureDate3 = new Date(this.flightService.multiCitiesModel.Date3).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.router.navigate(['/flights' + '/3' + '/3' + '/' + this.flightService.multiCitiesModel.Class + '/false' + '/' + this.flightService.multiCitiesModel.Adult + '/' + this.flightService.multiCitiesModel.Children + '/true' + '/' + this.flightService.multiCitiesModel.OriginId1 + '/' + this.flightService.multiCitiesModel.DestinationId1 + '/' + this.flightService.multiCitiesModel.DepartureDate1 + '/' +
          this.flightService.multiCitiesModel.OriginId2 + '/' + this.flightService.multiCitiesModel.DestinationId2 + '/' + this.flightService.multiCitiesModel.DepartureDate2 + '/' +
          this.flightService.multiCitiesModel.OriginId3 + '/' + this.flightService.multiCitiesModel.DestinationId3 + '/' + this.flightService.multiCitiesModel.DepartureDate3 + '/' +
          'null/null/null/null/null/null']);
      }
      else if (this.flightService.multiCityFlightsNumber == 4) {
        this.flightService.multiCitiesModel.DepartureDate3 = new Date(this.flightService.multiCitiesModel.Date3).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.flightService.multiCitiesModel.DepartureDate4 = new Date(this.flightService.multiCitiesModel.Date4).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.router.navigate(['/flights' + '/4' + '/3' + '/' + this.flightService.multiCitiesModel.Class + '/false' + '/' + this.flightService.multiCitiesModel.Adult + '/' + this.flightService.multiCitiesModel.Children + '/true' + '/' + this.flightService.multiCitiesModel.OriginId1 + '/' + this.flightService.multiCitiesModel.DestinationId1 + '/' + this.flightService.multiCitiesModel.DepartureDate1 + '/' +
          this.flightService.multiCitiesModel.OriginId2 + '/' + this.flightService.multiCitiesModel.DestinationId2 + '/' + this.flightService.multiCitiesModel.DepartureDate2 + '/' +
          this.flightService.multiCitiesModel.OriginId3 + '/' + this.flightService.multiCitiesModel.DestinationId3 + '/' + this.flightService.multiCitiesModel.DepartureDate3 + '/' +
          this.flightService.multiCitiesModel.OriginId4 + '/' + this.flightService.multiCitiesModel.DestinationId4 + '/' + this.flightService.multiCitiesModel.DepartureDate4 + '/' +
          'null/null/null']);
      }
      else if (this.flightService.multiCityFlightsNumber == 5) {
        this.flightService.multiCitiesModel.DepartureDate3 = new Date(this.flightService.multiCitiesModel.Date3).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.flightService.multiCitiesModel.DepartureDate4 = new Date(this.flightService.multiCitiesModel.Date4).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.flightService.multiCitiesModel.DepartureDate5 = new Date(this.flightService.multiCitiesModel.Date5).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
        this.router.navigate(['/flights' + '/5' + '/3' + '/' + this.flightService.multiCitiesModel.Class + '/false' + '/' + this.flightService.multiCitiesModel.Adult + '/' + this.flightService.multiCitiesModel.Children + '/true' + '/' + this.flightService.multiCitiesModel.OriginId1 + '/' + this.flightService.multiCitiesModel.DestinationId1 + '/' + this.flightService.multiCitiesModel.DepartureDate1 + '/' +
          this.flightService.multiCitiesModel.OriginId2 + '/' + this.flightService.multiCitiesModel.DestinationId2 + '/' + this.flightService.multiCitiesModel.DepartureDate2 + '/' +
          this.flightService.multiCitiesModel.OriginId3 + '/' + this.flightService.multiCitiesModel.DestinationId3 + '/' + this.flightService.multiCitiesModel.DepartureDate3 + '/' +
          this.flightService.multiCitiesModel.OriginId4 + '/' + this.flightService.multiCitiesModel.DestinationId4 + '/' + this.flightService.multiCitiesModel.DepartureDate4 + '/' +
          this.flightService.multiCitiesModel.OriginId5 + '/' + this.flightService.multiCitiesModel.DestinationId5 + '/' + this.flightService.multiCitiesModel.DepartureDate5]);
      }
    }
  }

  setFilters() {
    const distinct = (value, index, self) => {
      return self.indexOf(value) === index;
    }

    this.flightService.allFilters.sliderFilter.setCoastFilter(this.flightService.displayedFlightSearchResult[0].Amount, this.flightService.displayedFlightSearchResult[this.flightService.displayedFlightSearchResult.length - 1].Amount);

    this.flightService.allFilters.sliderFilter.setDurationfiltervaliues(this.flightService.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Duration)));

    // set  AirLine Filters
    let AirLineInthreeDArry = this.flightService.displayedFlightSearchResult.map(o => o.Routes.map(s => s.Segment.map(i => i.Carrier.Marketing.Value)));
    let AirLineIntWoDArry = AirLineInthreeDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });
    let AirLineInOneDArry = AirLineIntWoDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });

    let distinctAirLineInOneDArry = AirLineInOneDArry.filter(distinct);

    distinctAirLineInOneDArry.forEach(element => {
      this.flightService.allFilters.airLinesFilter.push({ name: element, isChecked: true });
    });

    // set AirCraft Filters
    let AirCraftInthreeDArry = this.flightService.displayedFlightSearchResult.map(o => o.Routes.map(s => s.Segment.map(i => i.Aircraft.Value)));
    let AirCraftIntWoDArry = AirCraftInthreeDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });
    let AirCraftInOneDArry = AirCraftIntWoDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });

    let distinctAirCraftInOneDArry = AirCraftInOneDArry.filter(distinct);

    distinctAirCraftInOneDArry.forEach(element => {
      this.flightService.allFilters.airCraftsFilter.push({ name: element, isChecked: true });
    });


    // set capinType Filters

    let capinTypeInthreeDArry = this.flightService.displayedFlightSearchResult.map(o => o.Routes.map(s => s.Segment.map(i => i.Flight.CabinType)));

    let capinTypeIntWoDArry = capinTypeInthreeDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });
    let capinTypeInOneDArry = capinTypeIntWoDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });

    let distinctcapinTypeInOneDArry = capinTypeInOneDArry.filter(distinct);

    distinctcapinTypeInOneDArry.forEach(element => {
      this.flightService.allFilters.capinTypesFilter.push({ name: element, isChecked: true });
    });

    // set Airport Filters

    let AirportInthreeDArry = this.flightService.displayedFlightSearchResult.map(o => o.Routes.map(s => s.Segment.map(i => i.Origin.Airport.Value && i.Destination.Airport.Value)));


    let AirportIntWoDArry = AirportInthreeDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });
    let AirportInOneDArry = AirportIntWoDArry.reduce(function (prev, next) {
      return prev.concat(next);
    });

    let distinctAirportInOneDArry = AirportInOneDArry.filter(distinct);

    distinctAirportInOneDArry.forEach(element => {
      this.flightService.allFilters.AirportsFilter.push({ name: element, isChecked: true });
    });

  }


}
