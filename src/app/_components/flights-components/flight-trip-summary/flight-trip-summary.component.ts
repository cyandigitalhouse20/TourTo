import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/_services';

@Component({
  selector: 'app-flight-trip-summary',
  templateUrl: './flight-trip-summary.component.html',
  styleUrls: ['./flight-trip-summary.component.css']
})
export class FlightTripSummaryComponent implements OnInit {

  constructor(private router: Router, public flightservice: FlightService) { }
  numberOfTickets: number;
    ngOnInit() {
    this.numberOfTickets = this.flightservice.numberOfAdult + this.flightservice.numberOfChilds;
    
  }

  continueBooking() {

    if (this.router.url == "/flight/details") {
      this.router.navigate(['/flight/payment']);
    }
    else 
    {
      if(this.flightservice.acceptTerms)
      alert("Success");
     

    }
  }

}
