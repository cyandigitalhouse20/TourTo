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

  constructor(public staticDataService: StaticDataService, public flightService: FlightService, public router: Router) {
    if (this.flightService.oneWayModel == undefined) {
      this.flightService.oneWayModel = new FlightSearchOptionRoundOne();
    }
  }

  ngOnInit() {
  }

  checkE(key, type) {
    if (key == '' && type == 'adult')
      this.flightService.oneWayModel.Adult = 1;
    else if (key == '' && type == 'child')
      this.flightService.oneWayModel.Children = 0;
  }

  updateCitiesFrom(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.oneWayModel.OriginCity.length == 1) {
        this.staticDataService.searchCity(this.flightService.oneWayModel.OriginCity).subscribe((data: any) => {
          this.citiesFrom = data;
        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  updateCitiesTo(event) {
    if (event.code != 'Backspace') {
      if (this.flightService.oneWayModel.DestinationCity.length == 1) {
        this.staticDataService.searchCity(this.flightService.oneWayModel.DestinationCity).subscribe((data: any) => {
          this.citiesTo = data;

        }, (err: HttpErrorResponse) => {
          console.log(err.error.Message);
        });
      }
    }
  }

  selectCity(event, city) {
    if (city == "from") {
      this.flightService.oneWayModel.OriginCityId = event.item.Id;
    }
    else {
      this.flightService.oneWayModel.DestinationCityId = event.item.Id;
    }
  }

  changeOption() {
    if (this.flightService.oneWayModel.Children == 0) {
      this.flightService.oneWayModel.searchOption = this.flightService.oneWayModel.Adult + " Adult / " + this.flightService.oneWayModel.Class;
    }
    else {
      this.flightService.oneWayModel.searchOption = this.flightService.oneWayModel.Adult + " Adult / " + this.flightService.oneWayModel.Children
        + " child / " + this.flightService.oneWayModel.Class;
    }

  }

  search() {
    localStorage.removeItem('RequestId');
    this.flightService.isCompleated = false;
    this.flightService.oneWayModel.DepartureDate = new Date(this.flightService.oneWayModel.Date).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    this.flightService.oneWayModel.ReturnDate = new Date(this.flightService.oneWayModel.Date).toLocaleDateString().toString().replace('/', '-').replace('/', '-');

    if (this.router.url.includes("/flights") && this.router.url != "/flights") {

      this.flightService.numberOfChilds = this.flightService.oneWayModel.Children;
      this.flightService.numberOfAdult = this.flightService.oneWayModel.Adult;
      this.flightService.oneWayModel.LangId = 2;
      this.flightService.oneWayModel.Page = 0;
      this.flightService.oneWayModel.PageItemCount = 0;
      this.flightService.oneWayModel.FlexDates = true;
      this.flightService.oneWayModel.FlightType = "2";
      this.flightService.oneWayModel.RequestId = "null";
      this.flightService.oneWayModel.IsNewRequest = true;
      this.flightService.oneWayModel.DirectFlight = false;

      this.router.navigate(['/flights' + '/2' + '/' + this.flightService.oneWayModel.Class + '/false' + '/' + this.flightService.oneWayModel.Adult + '/' + this.flightService.oneWayModel.Children + '/true' + '/' + this.flightService.oneWayModel.OriginCityId + '/' + this.flightService.oneWayModel.DestinationCityId + '/' + this.flightService.oneWayModel.DepartureDate]);

      this.flightService.airLowFareSearch(this.flightService.oneWayModel).subscribe((data: any) => {
        localStorage.setItem('RequestId', data.RequestId);
        this.flightService.flightsearchresult = data;
        this.flightService.displayedFlightSearchResult = data.AirResultItineraries;
        this.setFilters();
        this.flightService.isCompleated = true;
        this.flightService.flightTypeSearchResult = "oneWay";
        this.flightService.showFlightsDetails = true;
      }, (err: HttpErrorResponse) => {
        this.flightService.isCompleated = true;
        console.log(err.error.Message);
      });
    }
    else {
      this.router.navigate(['/flights' + '/2' + '/' + this.flightService.oneWayModel.Class + '/false' + '/' + this.flightService.oneWayModel.Adult + '/' + this.flightService.oneWayModel.Children + '/true' + '/' + this.flightService.oneWayModel.OriginCityId + '/' + this.flightService.oneWayModel.DestinationCityId + '/' + this.flightService.oneWayModel.DepartureDate]);
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
