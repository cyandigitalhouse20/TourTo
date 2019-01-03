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
  DurArr: number[];
  OrigArr: number[];
  DestArr: number[];
  NoneStop: boolean = false;
  OneStop: boolean = false;
  TwoStop: boolean = false;
  SortAsc: boolean = false;
  SortDesc: boolean = false;
 
  AgmyTimeoptions: Options = {
    floor: 50,
    ceil: 200
  };
  AgmyMinvalue = 90;
  AgmyMaxvalue = 150;


  agmy() {
    alert(this.AgmyMinvalue);
  }

  constructor(private flightservice: FlightService) { }

  ngOnInit() {

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


  onsortchange(v) {
    if (v == "Lowest") {
      this.SortAsc = true;
      this.SortDesc = false;
      this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Amount).sort((a, b) => 0 - (a > b ? -1 : 1));
    }
    else if (v == "hieght") {
      this.SortAsc = false;
      this.SortDesc = true;
      this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Amount).sort((a, b) => 0 - (a > b ? -1 : 1));
    }
  }
  filterDataOfTranzet() {
    if (this.NoneStop && this.OneStop == false && this.TwoStop == false) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length == 1))
    }
    else if (this.NoneStop == false && this.OneStop && this.TwoStop == false) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length == 2))
    }
    else if (this.NoneStop == false && this.OneStop == false && this.TwoStop) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length > 2))

    }
    else if (this.NoneStop && this.OneStop == false && this.TwoStop) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length > 2 || seg.Segment.length == 1))

    }
    else if (this.NoneStop && this.OneStop && this.TwoStop == false) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length == 2 || seg.Segment.length == 1))
    }
    else if (this.NoneStop == false && this.OneStop && this.TwoStop) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length == 2 || seg.Segment.length > 2))
    }
    else {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries;
    }

    // this.flightservice.sliderFilters.setDepatureFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Segment.map(o => o.Origin.Time))));
    // this.flightservice.sliderFilters.setDestinationFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Segment.map(o => o.Destination.Time))));
    this.flightservice.sliderFilters.setDurationfiltervaliues(this.flightservice.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Duration)));
    this.flightservice.sliderFilters.setCoastFilter(this.flightservice.displayedFlightSearchResult[0].Amount, this.flightservice.displayedFlightSearchResult[this.flightservice.displayedFlightSearchResult.length - 1].Amount);
    if (this.SortDesc) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Amount).sort((a, b) => 0 - (a > b ? -1 : 1));
    }
  }
  FilterCoast() {
    this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Amount >= this.flightservice.sliderFilters.CoastMinvalue && o.Amount <= this.flightservice.sliderFilters.CoastMaxvalue);
    // this.flightservice.sliderFilters.setDepatureFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Segment.map(o=>o.Origin.Time))));
    // this.flightservice.sliderFilters.setDestinationFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Segment.map(o=>o.Destination.Time))));
    this.flightservice.sliderFilters.setDurationfiltervaliues(this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Duration)));

    }
    FilterDuration() {

      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(a=>parseInt(a.Duration.substring(0,2).toString()) >= this.flightservice.sliderFilters.DurationMinvalue && parseInt(a.Duration.substring(0,2).toString()) <= this.flightservice.sliderFilters.DurationMaxvalue));
      // this.flightservice.sliderFilters.setDepatureFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Segment.map(o=>o.Origin.Time))));
      // this.flightservice.sliderFilters.setDestinationFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Segment.map(o=>o.Destination.Time))));
        this.flightservice.sliderFilters.setCoastFilter(this.flightservice.displayedFlightSearchResult[0].Amount,this.flightservice.displayedFlightSearchResult[this.flightservice.displayedFlightSearchResult.length-1].Amount);  
    
      }


      SetallSliderFilters()
      {
        // this.flightservice.sliderFilters.setDepatureFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Segment.map(o=>o.Origin.Time))));
        // this.flightservice.sliderFilters.setDestinationFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Segment.map(o=>o.Destination.Time))));
        this.flightservice.sliderFilters.setDurationfiltervaliues(this.flightservice.displayedFlightSearchResult.map(o=>o.Routes).map(s=>s.map(l=>l.Duration)));
        this.flightservice.sliderFilters.setCoastFilter(this.flightservice.displayedFlightSearchResult[0].Amount,this.flightservice.displayedFlightSearchResult[this.flightservice.displayedFlightSearchResult.length-1].Amount);        
      }
}
