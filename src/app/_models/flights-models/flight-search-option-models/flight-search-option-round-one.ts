export class FlightSearchOptionRoundOne{ 
    OriginCityId:number;
    DestinationCityId:number;
    OriginCity:string;
    DestinationCity:string;
    FlightType:string;
    RequestId:string;
    IsNewRequest:boolean
    LangId:number;
    Page:number;
    PageItemCount:number;
    Class:string;
    DirectFlight:boolean;
    Adult:number;
    Children:number;
    FlexDates:boolean;
    DepartureDate:string;
    ReturnDate:string;

    //round
    Dates:Date[];
    //one
    Date:Date;
    
    searchOption: string;

    protected static SInit = (() => {
        FlightSearchOptionRoundOne.prototype.Adult =1;
        FlightSearchOptionRoundOne.prototype.Children = 0;
        FlightSearchOptionRoundOne.prototype.DirectFlight = false;
        FlightSearchOptionRoundOne.prototype.OriginCity = "";
        FlightSearchOptionRoundOne.prototype.DestinationCity = "";
        FlightSearchOptionRoundOne.prototype.searchOption = "1 Adult / Economy";
        FlightSearchOptionRoundOne.prototype.Class = "Economy";
    })();
}
