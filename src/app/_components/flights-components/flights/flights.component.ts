import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/_services';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(public flightservice: FlightService) { }

  ngOnInit() {
  }

}
