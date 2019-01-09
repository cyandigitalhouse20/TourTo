import { ServiceConfig } from './../../../_models/flights-models/flight-air-make-reservation-models/service-config';
import { Passenger, AirMakeReservation } from 'src/app/_models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/_services';

import { PaxRef } from 'src/app/_models/flights-models/flight-air-make-reservation-models/pax-ref';
import { SeatRequests } from 'src/app/_models/flights-models/flight-air-make-reservation-models/seat-requests';
import { Seat } from 'src/app/_models/flights-models/flight-air-make-reservation-models/seat';
import { FrequentTravellerCards } from 'src/app/_models/flights-models/flight-air-make-reservation-models/frequent-traveller-cards';

@Component({
  selector: 'app-flight-trip-summary',
  templateUrl: './flight-trip-summary.component.html',
  styleUrls: ['./flight-trip-summary.component.css']
})
export class FlightTripSummaryComponent implements OnInit {
  numberOfTickets: number;
  Passengers:Passenger[];
  ServiceConfig:ServiceConfig;


  constructor(private router: Router, public flightservice: FlightService) {
    if (this.Passengers == undefined) {
      this.Passengers= [];
    }
    this.ServiceConfig=new ServiceConfig();
   }

    ngOnInit() {

    
    this.numberOfTickets = parseInt(this.flightservice.numberOfAdult.toString()) + parseInt(this.flightservice.numberOfChilds.toString());
  }

  continueBooking() {

    if (this.router.url == "/flight/details") {
      this.router.navigate(['/flight/payment']);
    }
    else 
    {
      
        let i=1;
        let checkAllRequirments=true;
        this.flightservice.PassengerViewModel.forEach(element => {
          if(element.FirstName==undefined||element.FirstName=="")
          {
            element.FirstName="";
            checkAllRequirments=false;
          }
          if(element.LastName==undefined||element.LastName=="")
          {
            element.LastName="";
            checkAllRequirments=false;
          }
          if(element.BirthDate==undefined||element.BirthDate=="")
          {
            element.BirthDate="";
            checkAllRequirments=false;
          }
          if(this.flightservice.flightDetails.offerConfigurationField.contactDetailsField.requiredField)
{
  if((element.Email==undefined||element.Email=="")&&i==1)
  {

    element.Email="";
    checkAllRequirments=false;
  }
  if(element.Phone==undefined||element.Phone=="")
          {
            element.Phone="";
            checkAllRequirments=false;
          }
}
if(element.Type==undefined||element.Type=="")
{
  element.Type="";
  checkAllRequirments=false;
}
if(element.Title==undefined||element.Title=="")
{
  element.Title="";
  checkAllRequirments=false;
}
          i++;
        });
        if(this.flightservice.acceptTerms&&checkAllRequirments==true)
        {


          let UserId="";
          let PassngerNumber=0;

          this.flightservice.PassengerViewModel.forEach(element => {
            debugger;
            UserId=this.makeid();
            this.Passengers.push(new Passenger());
          this.Passengers[PassngerNumber].Title=element.Title;
          this.Passengers[PassngerNumber].FirstName=element.FirstName;
          this.Passengers[PassngerNumber].LastName=element.LastName;
          this.Passengers[PassngerNumber].BirthDate=element.BirthDate;
          this.Passengers[PassngerNumber].Email=element.Email;
          this.Passengers[PassngerNumber].Phone=element.Phone;
          this.Passengers[PassngerNumber].Occupation="null";
          if(this.flightservice.flightDetails.offerConfigurationField.identificationDocumentField.requiredField)
          {
          this.Passengers[PassngerNumber].IdentificationDocument.Number=element.IdentificationDocument.Number;
          this.Passengers[PassngerNumber].IdentificationDocument.ExpiryDate=element.IdentificationDocument.ExpiryDate;
          this.Passengers[PassngerNumber].IdentificationDocument.IssuingCountry=element.IdentificationDocument.IssuingCountry;
          this.Passengers[PassngerNumber].IdentificationDocument.PaxNationality=element.IdentificationDocument.PaxNationality;
          this.Passengers[PassngerNumber].IdentificationDocument.Type=element.IdentificationDocument.Type;
          }
          else
          {
            this.Passengers[PassngerNumber].IdentificationDocument.Number="null";
          this.Passengers[PassngerNumber].IdentificationDocument.ExpiryDate=null;
          this.Passengers[PassngerNumber].IdentificationDocument.IssuingCountry="null";
          this.Passengers[PassngerNumber].IdentificationDocument.PaxNationality="null";
          this.Passengers[PassngerNumber].IdentificationDocument.Type="null";
          }
          if(this.flightservice.PassengerViewModel[PassngerNumber].haveFrequent)
          {
            this.Passengers[PassngerNumber].FrequentTravellerCards.AirlineCode=element.FrequentTravellerCards.AirlineCode;
            this.Passengers[PassngerNumber].FrequentTravellerCards.Number=element.FrequentTravellerCards.Number;
            this.Passengers[PassngerNumber].FrequentTravellerCards.PaxRef=UserId;
          }
          else
          {
            this.Passengers[PassngerNumber].FrequentTravellerCards.AirlineCode="null";
            this.Passengers[PassngerNumber].FrequentTravellerCards.Number="null";
            this.Passengers[PassngerNumber].FrequentTravellerCards.PaxRef="null";
          }
this.Passengers[PassngerNumber].PaxRef=UserId;
this.Passengers[PassngerNumber].Type=element.Type;
this.Passengers[PassngerNumber].PTC=element.Type;
if(PassngerNumber==0)
this.Passengers[PassngerNumber].Lead=true;
else
this.Passengers[PassngerNumber].Lead=false;


//ServiceConfig
debugger;

this.ServiceConfig.Passengers.PaxRef.push(new PaxRef());



this.ServiceConfig.Passengers.PaxRef[PassngerNumber].PTC=element.Type;
this.ServiceConfig.Passengers.PaxRef[PassngerNumber].Value=UserId;
this.ServiceConfig.Passengers.SeatRequests.push(new SeatRequests());
this.ServiceConfig.Passengers.SeatRequests[PassngerNumber].PaxRef=UserId;
this.ServiceConfig.Passengers.SeatRequests[PassngerNumber].Preference=element.Seat;
this.ServiceConfig.Passengers.SeatRequests[PassngerNumber].Seat.push(new Seat());
this.ServiceConfig.Passengers.SeatRequests[PassngerNumber].Seat[0].Code="null";
this.ServiceConfig.Passengers.SeatRequests[PassngerNumber].Seat[0].Number="null";
this.ServiceConfig.Passengers.SeatRequests[PassngerNumber].Seat[0].Preference="null";
this.ServiceConfig.Passengers.SeatRequests[PassngerNumber].Seat[0].RouteIndex="null";
this.ServiceConfig.Passengers.SeatRequests[PassngerNumber].Seat[0].SegmentDestination="null";
this.ServiceConfig.Passengers.SeatRequests[PassngerNumber].Seat[0].SegmentOrigin="null";
this.ServiceConfig.FrequentTravellerCards.push( new FrequentTravellerCards());
this.ServiceConfig.FrequentTravellerCards[PassngerNumber].AirlineCode= this.Passengers[PassngerNumber].FrequentTravellerCards.AirlineCode;
this.ServiceConfig.FrequentTravellerCards[PassngerNumber].Number=this.Passengers[PassngerNumber].FrequentTravellerCards.Number;
this.ServiceConfig.FrequentTravellerCards[PassngerNumber].PaxRef=this.Passengers[PassngerNumber].FrequentTravellerCards.PaxRef;




PassngerNumber++;


          });
          this.ServiceConfig.ItineraryCode=this.flightservice.flightDetails.itineraryCodeField;
          this.ServiceConfig.Comments="";
          this.ServiceConfig.BackOfficeRemarks=null;
          this.ServiceConfig.ResultCode=this.flightservice.flightDetails.resultCodeField;
         





         let airMakeReservation:AirMakeReservation =new AirMakeReservation();
         airMakeReservation.Passengers=this.Passengers;
         airMakeReservation.ServiceConfig=this.ServiceConfig;
         airMakeReservation.ServiceConfig.FrequentTravellerCards= this.ServiceConfig.FrequentTravellerCards;

         airMakeReservation.ServiceConfig.Passengers= this.ServiceConfig.Passengers;
         airMakeReservation.ServiceConfig.Passengers.PaxRef=this.ServiceConfig.Passengers.PaxRef;
         airMakeReservation.ServiceConfig.Passengers.SeatRequests=this.ServiceConfig.Passengers.SeatRequests;

         airMakeReservation.ExternalRef="";
       console.log(JSON.stringify(airMakeReservation));
          alert("success");
        }

      }
    
  }



  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

}
