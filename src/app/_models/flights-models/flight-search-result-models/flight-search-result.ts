import { AirResultItineraries } from 'src/app/_models';

export class Flightsearchresult {
    RequestId: string;
    ResultCod: string;
    CurrentPage: number;
    ItemsPerPage: number;
    TotalItems: number;
    MinPrice: string;
    MaxPrice: string;
    MinDuration: string;
    MaxDuration: string;
    AirResultItineraries: AirResultItineraries[];

    DetailsCollapse:boolean;
}
