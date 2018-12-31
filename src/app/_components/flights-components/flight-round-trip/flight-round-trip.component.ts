import { Component, OnInit } from '@angular/core';
import { StaticDataService, FlightService } from 'src/app/_services';
import { HttpErrorResponse } from '@angular/common/http';
import { FlightSearchOptionTwoWay } from 'src/app/_models';

@Component({
  selector: 'app-flight-round-trip',
  templateUrl: './flight-round-trip.component.html',
  styleUrls: ['./flight-round-trip.component.css']
})
export class FlightRoundTripComponent implements OnInit {


  cityFrom: string;
  cityTo: string;
  originCityId:number;
destinationCityId:number;
  date: any[];
  adult: number;
  child: number;
  constructor(public staticDataService: StaticDataService, private flightService: FlightService) {

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
      this.originCityId = event.item.Id;
    }
    else {
      this.destinationCityId = event.item.Id;
    }
    //console.log(new Date(this.dt[0]).toLocaleDateString().toString().replace('/', '-').replace('/', '-'));
  }

  search() {
    debugger;
    let flightSearchOptionTwoWay: FlightSearchOptionTwoWay = new FlightSearchOptionTwoWay();
    flightSearchOptionTwoWay.CityFromId=this.originCityId;
    flightSearchOptionTwoWay.CityToId=this.destinationCityId;
    flightSearchOptionTwoWay.departureDate=new Date(this.date[0]).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    flightSearchOptionTwoWay.returnDate=new Date(this.date[1]).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    flightSearchOptionTwoWay.adult=this.adult;
    flightSearchOptionTwoWay.children=this.child;
    flightSearchOptionTwoWay.langId=2;
    flightSearchOptionTwoWay.page=0;
    flightSearchOptionTwoWay.pageItemCount=0;
    flightSearchOptionTwoWay.directFlight=true;
    flightSearchOptionTwoWay.flexDates=true;
    flightSearchOptionTwoWay.flightType="2";
    flightSearchOptionTwoWay.isNewRequest=true;
    flightSearchOptionTwoWay.class="Economy";
    flightSearchOptionTwoWay.requestId="null";

    this.flightService.GetAirLowFareSearch(flightSearchOptionTwoWay).subscribe((data: any) => {
  
      this.flightService.flightsearchresult = data;
      this.flightService.displayedFlightSearchResult=data.AirResultItineraries;
      
 
 
      this.flightService.sliderFilters.setCoastFilter(this.flightService.displayedFlightSearchResult[0].Amount,this.flightService.displayedFlightSearchResult[this.flightService.displayedFlightSearchResult.length-1].Amount);
      this.flightService.sliderFilters.setDurationfiltervaliues(this.flightService.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Duration)));
      
 
      this.flightService.showFilter=true;
 
         
     }, (err: HttpErrorResponse) => {
       console.log(err.error.Message);
     });


  }

}
