import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(public flightService: FlightService,public router: Router) {

   }

  ngOnInit() {
    
    
  }

}
