import { SliderFilter } from "./slider-filter";

export class AllFilters {
    NoneStop: boolean ;
    OneStop: boolean ;  
    TwoStop: boolean ;
    SortAsc: boolean ;
    SortDesc: boolean ;
    airLinesFilter: any[]=[];
    airCraftsFilter:any[]=[];
    capinTypesFilter:any[]=[];
    AirportsFilter:any[]=[];
    sliderFilter:SliderFilter;
    protected static SInit = (() => {
        AllFilters.prototype.NoneStop =false;
        AllFilters.prototype.TwoStop =false;
        AllFilters.prototype.OneStop =false; 
        AllFilters.prototype.sliderFilter=new SliderFilter();
    })();

}
