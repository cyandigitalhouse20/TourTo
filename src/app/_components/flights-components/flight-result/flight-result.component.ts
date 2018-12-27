import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FlightService } from 'src/app/_services';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.css']
})
export class FlightResultComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, public flightservice: FlightService) { }

  ngOnInit() {
    this.flightservice.GetAirLowFareSearch().subscribe((data: any) => {
  
     this.flightservice.flightsearchresult = data;
     this.flightservice.displayedFlightSearchResult=data.AirResultItineraries;
   
    }, (err: HttpErrorResponse) => {
      console.log(err.error.Message);
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
