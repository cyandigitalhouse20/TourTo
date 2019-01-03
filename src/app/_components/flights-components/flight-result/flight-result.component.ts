import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FlightService } from 'src/app/_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.css']
})
export class FlightResultComponent implements OnInit {
  modalRef: BsModalRef;
  p:any;
  constructor(public modalService: BsModalService, public flightservice: FlightService, public router: Router) { }

  ngOnInit() {

  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getDetails(selectedItinerary) {

    this.flightservice.selectedItenartyId = selectedItinerary;
    
    this.flightservice.airFareValidation().subscribe((data: any) => {
      this.flightservice.flightDetails = data;
      this.router.navigate(['/flight/details']);
    }, (err: HttpErrorResponse) => {
      console.log(err.error.Message);
    });
  }


}
