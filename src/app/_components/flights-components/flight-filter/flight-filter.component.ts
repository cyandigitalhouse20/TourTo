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
  nonchecked: string[] = [];
  SortAsc: boolean = false;
  SortDesc: boolean = false;
  isCollapsed: boolean;
  isCollapsed2: boolean;
  AirLinesFilter: any[];
  AirCraftsFilter: any[];
  isCollapsed3: boolean;



  constructor(public flightservice: FlightService) { }

  ngOnInit() {

  }


  setAllFilter() {

    this.filterDataOfTranzet();
    this.FilterCoast();
    this.FilterDuration();
  }
  setAllFilter2(name) {
    this.setAllFilter();
    this.setAirlinesFilters(name);
  }







  filterDataOfTranzet() {
    if (this.flightservice.allFilters.NoneStop && this.flightservice.allFilters.OneStop == false && this.flightservice.allFilters.TwoStop == false) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length == 1))
    }
    else if (this.flightservice.allFilters.NoneStop == false && this.flightservice.allFilters.OneStop && this.flightservice.allFilters.TwoStop == false) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length == 2))
    }
    else if (this.flightservice.allFilters.NoneStop == false && this.flightservice.allFilters.OneStop == false && this.flightservice.allFilters.TwoStop) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length > 2))

    }
    else if (this.flightservice.allFilters.NoneStop && this.flightservice.allFilters.OneStop == false && this.flightservice.allFilters.TwoStop) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length > 2 || seg.Segment.length == 1))

    }
    else if (this.flightservice.allFilters.NoneStop && this.flightservice.allFilters.OneStop && this.flightservice.allFilters.TwoStop == false) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length == 2 || seg.Segment.length == 1))
    }
    else if (this.flightservice.allFilters.NoneStop == false && this.flightservice.allFilters.OneStop && this.flightservice.allFilters.TwoStop) {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries.filter(o => o.Routes.every(seg => seg.Segment.length == 2 || seg.Segment.length > 2))
    }
    else {
      this.flightservice.displayedFlightSearchResult = this.flightservice.flightsearchresult.AirResultItineraries;
    }

    // this.flightservice.sliderFilters.setDepatureFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Segment.map(o => o.Origin.Time))));
    // this.flightservice.sliderFilters.setDestinationFiltervaliues(this.flightservice.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Segment.map(o => o.Destination.Time))));
    // this.flightservice.sliderFilters.setDurationfiltervaliues(this.flightservice.displayedFlightSearchResult.map(o => o.Routes).map(s => s.map(l => l.Duration)));
    // this.flightservice.sliderFilters.setCoastFilter(this.flightservice.displayedFlightSearchResult[0].Amount, this.flightservice.displayedFlightSearchResult[this.flightservice.displayedFlightSearchResult.length - 1].Amount);
    // if (this.SortDesc) {
    //   this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Amount).sort((a, b) => 0 - (a > b ? -1 : 1));
    // }
  }


  FilterCoast() {
    this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Amount >= this.flightservice.allFilters.sliderFilter.CoastMinvalue && o.Amount <= this.flightservice.allFilters.sliderFilter.CoastMaxvalue);

  }
  FilterDuration() {

    this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Routes.every(a => parseInt(a.Duration.substring(0, 2).toString()) >= this.flightservice.allFilters.sliderFilter.DurationMinvalue && parseInt(a.Duration.substring(0, 2).toString()) <= this.flightservice.allFilters.sliderFilter.DurationMaxvalue));

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


  setAirlinesFilters(airlineName) {

    alert(airlineName.name);

    if (airlineName.isChecked) {
      const index = this.nonchecked.indexOf(airlineName.name, 0);
      if (index > -1) {
        this.nonchecked.splice(index, 1);
      }
    }
    else
      this.nonchecked.push(airlineName.name);


    this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Routes.every(o => o.Segment.every(k => this.nonchecked.every(s => s != k.Carrier.Marketing.Value))));


  }
}

