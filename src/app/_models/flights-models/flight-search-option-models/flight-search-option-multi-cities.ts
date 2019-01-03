export class FlightSearchOptionMultiCities {
    FlightType: string;
    RequestId: string;
    IsNewRequest: boolean
    LangId: number;
    Page: number;
    PageItemCount: number;
    Class: string;
    DirectFlight: boolean;
    Adult: number;
    Children: number;
    FlexDates: boolean;

    Origin1:string;
    Destination1:string;
    OriginId1:number;
    DestinationId1:number;
    Date1:Date;
    DepartureDate1:string;

    Origin2:string;
    Destination2:string;
    OriginId2:number;
    DestinationId2:number;
    Date2:Date;
    DepartureDate2:string;

    Origin3:string;
    Destination3:string;
    OriginId3:number;
    DestinationId3:number;
    Date3:Date;
    DepartureDate3:string;

    Origin4:string;
    Destination4:string;
    OriginId4:number;
    DestinationId4:number;
    Date4:Date;
    DepartureDate4:string;

    Origin5:string;
    Destination5:string;
    OriginId5:number;
    DestinationId5:number;
    Date5:Date;
    DepartureDate5:string;


    protected static SInit = (() => {
        FlightSearchOptionMultiCities.prototype.Adult = 1;
        FlightSearchOptionMultiCities.prototype.Children = 0;
        FlightSearchOptionMultiCities.prototype.DirectFlight = false;
        FlightSearchOptionMultiCities.prototype.Origin1 = "";
        FlightSearchOptionMultiCities.prototype.Destination1 = "";
        FlightSearchOptionMultiCities.prototype.Origin2 = "";
        FlightSearchOptionMultiCities.prototype.Destination2 = "";
        FlightSearchOptionMultiCities.prototype.Origin3 = "";
        FlightSearchOptionMultiCities.prototype.Destination3 = "";
        FlightSearchOptionMultiCities.prototype.Origin4 = "";
        FlightSearchOptionMultiCities.prototype.Destination4 = "";
        FlightSearchOptionMultiCities.prototype.Origin5 = "";
        FlightSearchOptionMultiCities.prototype.Destination5 = "";
    })();
}
