import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-trip-summary',
  templateUrl: './flight-trip-summary.component.html',
  styleUrls: ['./flight-trip-summary.component.css']
})
export class FlightTripSummaryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  continueBooking() {
    if (this.router.url == "/flight/details") {
      this.router.navigate(['/flight/payment']);
    }
  }

}
