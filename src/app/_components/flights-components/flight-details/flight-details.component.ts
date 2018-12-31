import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/_services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
obj:any;
  constructor( public flightservice: FlightService) { }

  ngOnInit() {
    debugger;
    this.flightservice.GetFlightDetails().subscribe((data: any) => {
      this.obj=data;
      console.log(this.obj);
     }, (err: HttpErrorResponse) => {
       debugger;
       console.log(err.error.Message);
     });

    
     
  }

}
