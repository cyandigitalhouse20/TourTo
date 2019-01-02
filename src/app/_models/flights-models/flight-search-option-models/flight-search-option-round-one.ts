export class FlightSearchOptionRoundOne{    
    CityFromId:number;
    CityToId:number;
    CityFrom:string;
    CityTo:string;
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
    
    protected static SInit = (() => {
        FlightSearchOptionRoundOne.prototype.Adult =1;
        FlightSearchOptionRoundOne.prototype.Children = 0;
        FlightSearchOptionRoundOne.prototype.DirectFlight = false;
        FlightSearchOptionRoundOne.prototype.CityFrom = "";
        FlightSearchOptionRoundOne.prototype.CityTo = "";
    })();
}
