import { FlightService } from 'src/app/_services';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Passenger } from 'src/app/_models';

@Component({
  selector: 'app-flight-payment',
  templateUrl: './flight-payment.component.html',
  styleUrls: ['./flight-payment.component.css']
})
export class FlightPaymentComponent implements OnInit {

  passengers: Passenger[];
  modalRef: BsModalRef;
  constructor(public modalService: BsModalService, public flightService: FlightService) {
    if (this.passengers == undefined) {
      this.passengers = [];
    }
  }

  ngOnInit() {

    if (this.flightService.flightTypeSearchResult == "roundTrip") {
      for (var i = 0; i < this.flightService.roundTripModel.Adult; i++) {
        this.passengers.push(new Passenger());
      }
    }
    else if (this.flightService.flightTypeSearchResult == "oneWay") {
      for (var i = 0; i < this.flightService.oneWayModel.Adult; i++) {
        this.passengers.push(new Passenger());
      }
    }
    else if (this.flightService.flightTypeSearchResult == "multiCity") {
      for (var i = 0; i < this.flightService.multiCitiesModel.Adult; i++) {
        this.passengers.push(new Passenger());
      }
    }
  }



  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}
