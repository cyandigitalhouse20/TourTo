import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  showHotels: boolean;
  showFlights: boolean;

  constructor() {

  }

  ngOnInit() {
    this.showFlights = true;
  }

  show(type) {
    if (type == 'Flights') {
      this.showFlights = true;
      this.showHotels = false;
    }
    else if (type == 'Hotels') {
      this.showFlights = false;
      this.showHotels = true;
    }
  }

}
