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
  airLineNonchecked: string[] = [];
  capinTypeNonchecked: string[] = [];
  airPortNonchecked: string[] = [];
  airCraftNonchecked: string[] = [];
  SortAsc: boolean = false;
  SortDesc: boolean = false;
  AirLinesFilter: any[];
  AirCraftsFilter: any[];

  isCollapsedStops: boolean;
  isCollapsedCost: boolean;
  isCollapsedDuration: boolean;
  isCollapsedAirLines: boolean;
  isCollapsedAirCraft: boolean;
  isCollapsedCapinType: boolean;
  isCollapsedAirPort: boolean;
  
  constructor(public flightservice: FlightService) { }

  ngOnInit() {

  }


  setAllFilter() {

    this.filterDataOfTranzet();
    this.FilterCoast();
    this.FilterDuration();
    this.AirlinesFilters();
    this.CapinTypesFilters();
    this.AirCraftsFilters();
    this.AirPortsFilters();
    if(this.SortDesc)
    this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Amount).sort((a, b) => 0 - (a > b ? -1 : 1));

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
      this.setAllFilter();
    }
    else if (v == "Highest") {
      this.SortAsc = false;
      this.SortDesc = true;
      this.setAllFilter(); 
    }
  }


  setAirlinesNonCheckList(airlineName) {
     if (airlineName.isChecked) {
      const index = this.airLineNonchecked.indexOf(airlineName.name, 0);
      if (index > -1) {
        this.airLineNonchecked.splice(index, 1);
      }
    }
    else
      this.airLineNonchecked.push(airlineName.name); 

     this.setAllFilter();

  }

  setAirCraftsNonCheckList(AirCraftName) {
    if (AirCraftName.isChecked) {
      const index = this.airCraftNonchecked.indexOf(AirCraftName.name, 0);
      if (index > -1) {
        this.airCraftNonchecked.splice(index, 1);
      }
    }
    else
      this.airCraftNonchecked.push(AirCraftName.name);
      this.setAllFilter();
  }
  setAirPortsNonCheckList(AirPortName) {
    if (AirPortName.isChecked) {
      const index = this.airPortNonchecked.indexOf(AirPortName.name, 0);
      if (index > -1) {
        this.airPortNonchecked.splice(index, 1);
      }
    }
    else
      this.airPortNonchecked.push(AirPortName.name);
      this.setAllFilter();
  }

  setCapinTypesNonCheckList(CapinType) {
    if (CapinType.isChecked) {
      const index = this.capinTypeNonchecked.indexOf(CapinType.name, 0);
      if (index > -1) {
        this.capinTypeNonchecked.splice(index, 1);
      }
    }
    else
      this.capinTypeNonchecked.push(CapinType.name);
      this.setAllFilter();
  }



  AirlinesFilters() {
    this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Routes.every(o => o.Segment.every(k => this.airLineNonchecked.every(s => s != k.Carrier.Marketing.Value))));
  }


  CapinTypesFilters() {

    this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Routes.every(o => o.Segment.every(k => this.capinTypeNonchecked.every(s => s != k.Flight.CabinType))));
  }

  AirPortsFilters() {

    this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Routes.every(o => o.Segment.every(k => this.airPortNonchecked.every(s => s != k.Origin.Airport.Value))));
  }

  AirCraftsFilters() {
    this.flightservice.displayedFlightSearchResult = this.flightservice.displayedFlightSearchResult.filter(o => o.Routes.every(o => o.Segment.every(k => this.airCraftNonchecked.every(s => s != k.Aircraft.Value))));
  }


}

