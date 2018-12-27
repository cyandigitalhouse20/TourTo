import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FlightService } from 'src/app/_services';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css']
})
export class FlightFilterComponent implements OnInit {

  oneStopData: any[];
  twoStopData: any[];
  arr: number[];
  NoneStop: boolean = false;
  OneStop:  boolean= false;
  TwoStop: boolean= false;
  SortAsc: boolean = false;
  SortDesc: boolean = false;
  Coastminvalue = 40;
  CoastHieghtvalue = 60;
  Durationminvalue = 90;
  DurationHieghtvalue = 150; 

  Coastoptions: Options = {
    floor: 0,
    ceil: 100
  };
  Durationoptions: Options = {
    floor:50,
    ceil: 200
  };

  constructor(public flightservice: FlightService) { }

  ngOnInit() {
    
    // this.options = {
    //   floor:Number(this.flightservice.flightsearchresult.MinPrice),
    //   ceil: Number(this.flightservice.flightsearchresult.MaxPrice)
    // }; 
    this.Coastoptions = {
      floor:Number(this.flightservice.flightsearchresult.MinPrice),
      ceil: 200
    }; 
  }
 
  onFilterChange() {
 
    this.filterDataOfTranzet();
   }
   onOneStopFilterChange() {
    this.filterDataOfTranzet();
  }
  onTwoStopFilterChange() {
    this.filterDataOfTranzet();
  }

  onMoneychange()
  {
alert('f');    
  }
  onsortchange(v)
  {
if(v=="Lowest")  
{
  this.SortAsc=true;
  this.SortDesc=false;
  this.flightservice.displayedFlightSearchResult=this.flightservice.displayedFlightSearchResult.filter(o=>o.Amount).sort((a,b) => 0 - (a > b ? -1 : 1));

}
else if(v=="hieght")
{
  this.SortAsc=false;
  this.SortDesc=true;
  this.flightservice.displayedFlightSearchResult=this.flightservice.displayedFlightSearchResult.filter(o=>o.Amount).sort((a,b) => 0 - (a > b ? -1 : 1));
}
  }
  filterDataOfTranzet()
  { 
    if(this.NoneStop&&this.OneStop==false&&this.TwoStop==false)
    {
      this.flightservice.displayedFlightSearchResult=this.flightservice.flightsearchresult.AirResultItineraries.filter( o => o.Routes.every(seg => seg.Segment.length==1))
    }
    else if(this.NoneStop==false&&this.OneStop&&this.TwoStop==false)
    {
      this.flightservice.displayedFlightSearchResult=this.flightservice.flightsearchresult.AirResultItineraries.filter( o => o.Routes.every( seg => seg.Segment.length==2))
    }
    else if(this.NoneStop==false&&this.OneStop==false&&this.TwoStop)
    {
      this.flightservice.displayedFlightSearchResult=this.flightservice.flightsearchresult.AirResultItineraries.filter( o => o.Routes.every( seg => seg.Segment.length > 2))

    }
    else if(this.NoneStop&&this.OneStop==false&&this.TwoStop)
    {
      this.flightservice.displayedFlightSearchResult=this.flightservice.flightsearchresult.AirResultItineraries.filter( o => o.Routes.every( seg => seg.Segment.length > 2||seg.Segment.length==1))

    }
    else if(this.NoneStop&&this.OneStop&&this.TwoStop==false)
    {
      this.flightservice.displayedFlightSearchResult=this.flightservice.flightsearchresult.AirResultItineraries.filter( o => o.Routes.every( seg => seg.Segment.length ==2 ||seg.Segment.length==1))
    }
    else if(this.NoneStop==false&&this.OneStop&&this.TwoStop)
    {
      this.flightservice.displayedFlightSearchResult=this.flightservice.flightsearchresult.AirResultItineraries.filter( o => o.Routes.every( seg => seg.Segment.length ==2 ||seg.Segment.length>2))
    }
    else
    {
      this.flightservice.displayedFlightSearchResult=this.flightservice.flightsearchresult.AirResultItineraries;
    }
    if(this.SortDesc)
    {
      this.flightservice.displayedFlightSearchResult=this.flightservice.displayedFlightSearchResult.filter(o=>o.Amount).sort((a,b) => 0 - (a > b ? -1 : 1));
    }

   
    this.Coastoptions = {
      floor: this.flightservice.displayedFlightSearchResult[0].Amount,
      ceil: this.flightservice.displayedFlightSearchResult[this.flightservice.displayedFlightSearchResult.length-1].Amount
    }; 

this.Coastminvalue=this.flightservice.displayedFlightSearchResult[0].Amount;

this.CoastHieghtvalue=this.flightservice.displayedFlightSearchResult[this.flightservice.displayedFlightSearchResult.length-1].Amount;


let DurationTwoD=this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Duration));
let arrivalTimeTwoD=this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Segment.map(o=>o.Origin.Time)));
debugger;
let DurationInOneD = DurationTwoD.reduce(function(prev, next) {
  return prev.concat(next);
});

let durationArray=[];
DurationInOneD.forEach(element => {
  durationArray.push(element.substr(0,2));
  });

  this.arr=durationArray.map(Number);
  var max = this.arr.reduce(function(a, b) {
    return Math.max(a, b);});
   this.Durationoptions={floor:this.arr.reduce(function(a, b) {
    return Math.min(a, b);}),
    ceil: this.arr.reduce(function(a, b) {
      return Math.max(a, b);})

     
  }; 
  this.Durationminvalue=this.Durationoptions.floor;
  this.DurationHieghtvalue=this.Durationoptions.ceil;
}

}
