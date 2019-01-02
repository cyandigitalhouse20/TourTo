import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/_services';

@Component({
  selector: 'app-flight-type-select',
  templateUrl: './flight-type-select.component.html',
  styleUrls: ['./flight-type-select.component.css']
})
export class FlightTypeSelectComponent implements OnInit {
  constructor(private flightService: FlightService) {
   }

  ngOnInit() {

  }
  setFlightType(type) {
    this.flightService.flightType = type;
  }
}
