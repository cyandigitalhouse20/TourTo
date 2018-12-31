import { Destination } from 'src/app/_models';
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
     


    // this.flightservice.sliderFilters.setDepatureFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Segment.map(o=>o.Origin.Time))));
    // this.flightservice.sliderFilters.setDestinationFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Segment.map(o=>o.Destination.Time))));
    this.flightservice.sliderFilters.setDurationfiltervaliues(this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Duration)));
    this.flightservice.sliderFilters.setCoastFilter(this.flightservice.displayedFlightSearchResult[0].Amount,this.flightservice.displayedFlightSearchResult[this.flightservice.displayedFlightSearchResult.length-1].Amount);
     

     this.flightservice.showFilter=true;

        
    }, (err: HttpErrorResponse) => {
      console.log(err.error.Message);
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
