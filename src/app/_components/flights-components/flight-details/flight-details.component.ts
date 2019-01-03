import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/_services';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})

export class FlightDetailsComponent implements OnInit {
  isCollapsed = false;
  constructor( private flightservice: FlightService) { }

  ngOnInit() {
    
  }

}
