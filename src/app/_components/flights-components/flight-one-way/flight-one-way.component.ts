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

  changeOption() 
  {
    if(this.flightService.oneWayModel.Children==0)
    {
      this.flightService.oneWayModel.searchOption=this.flightService.oneWayModel.Adult+" Adult / "+this.flightService.oneWayModel.Class;
    }
    else{
      this.flightService.oneWayModel.searchOption=this.flightService.oneWayModel.Adult+" Adult / "+this.flightService.oneWayModel.Children
      +" child / "+this.flightService.oneWayModel.Class;
    }
   
  }

  search() {
    localStorage.removeItem('RequestId');
    this.flightService.isCompleated = false;
    this.flightService.oneWayModel.DepartureDate = new Date(this.flightService.oneWayModel.Date).toLocaleDateString().toString().replace('/', '-').replace('/', '-');
    this.flightService.oneWayModel.ReturnDate = new Date(this.flightService.oneWayModel.Date).toLocaleDateString().toString().replace('/', '-').replace('/', '-');

    this.router.navigate(['/flights'+'/2'+'/'+this.flightService.oneWayModel.Class+'/false'+'/'+this.flightService.oneWayModel.Adult+'/'+this.flightService.oneWayModel.Children+'/true'+'/'+this.flightService.oneWayModel.OriginCityId+'/'+this.flightService.oneWayModel.DestinationCityId+'/'+this.flightService.oneWayModel.DepartureDate]);
    
  }

}
