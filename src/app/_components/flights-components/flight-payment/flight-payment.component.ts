import { FlightService } from 'src/app/_services';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Passenger } from 'src/app/_models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-flight-payment',
  templateUrl: './flight-payment.component.html',
  styleUrls: ['./flight-payment.component.css']
})
export class FlightPaymentComponent implements OnInit {
  typeOptions = ["adult","child", "infant"];
  titleOptions=["mr","mrs", "miss"]; 
  identificationDocumentTypeOptions=["passport", "identityCard"];
  seatOptions=["Any seat", "Window","Aisle"];
  PassengerNumber:number=1;
  selectedSeat:string="Any seat";

  config = {
    displayKey:"description", 
    search:true, 
    height: 'auto' ,
    placeholder:'Select Passanger Title',
    customComparator: ()=>{} ,
    limitTo: 3 ,

    noResultsFound: 'No results found!' ,
 
  }

  config2 = {
    displayKey:"description", 
    search:true, 
    height: 'auto' ,
    placeholder:'Select Passanger Type',
    customComparator: ()=>{} ,
    limitTo: 3 ,
    noResultsFound: 'No results found!' ,
 
  }
  config3 = {
    displayKey:"description", 
    search:true, 
    height: 'auto' ,
    placeholder:'Select The type of the identification document',
    customComparator: ()=>{} ,
    limitTo: 2 ,
    noResultsFound: 'No results found!' ,
 
  }
  config4= {
    displayKey:"description", 
    search:true, 
    height: 'auto' ,
    placeholder:'Select Passanger Seat',
    customComparator: ()=>{} ,
    limitTo: 3 ,
    noResultsFound: 'No results found!' ,
 
  }

  passengers: Passenger[];
  modalRef: BsModalRef;
  constructor(public modalService: BsModalService, public flightservice: FlightService) {
    if (this.passengers == undefined) {
      this.passengers = [];
    }
  }

  ngOnInit() {
    this.flightservice.acceptTerms=false;
    for (var i = 0; i < this.flightservice.numberOfChilds+ this.flightservice.numberOfAdult; i++)
    {
    this.passengers.push(new Passenger());
    this.passengers[i].PaxRef=this.makeid();
    }

  }

NextPassanger()
{
  if(this.PassengerNumber<this.passengers.length)
  this.PassengerNumber+=1; 
}
PreviuosPassanger()
{
  if(this.PassengerNumber>1)
  this.PassengerNumber-=1;

}
SetPassengerSeat()
{
  if(this.selectedSeat=="Any seat")
  this.passengers[this.PassengerNumber-1].Seat="A";
  else if(this.selectedSeat=="Window")
  this.passengers[this.PassengerNumber-1].Seat="W";
  else if(this.selectedSeat=="Aisle")
  this.passengers[this.PassengerNumber-1].Seat="A";

}

Resrve()
{
  
console.log(this.passengers);
// let data={"ExternalRef":"null","Passengers":["Title": +panse+"","FirstName": "string","LastName": "string","BirthDate": "2019-01-05T10:30:06.781Z","],"",}
  alert(2);
}

 makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  
  }
}
