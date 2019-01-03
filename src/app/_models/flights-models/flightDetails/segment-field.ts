import { AircraftField } from './aircraft-field';
import { FlightField } from './flight-field';
import { CarrierField } from './carrier-field';
import { OriginField } from "./origin-field";
import { DestinationField } from "./destination-field";

export class SegmentField {
    originField:OriginField;
    destinationField:DestinationField;
    carrierField:CarrierField;
    flightField:FlightField;
    aircraftField:AircraftField;
    technicalStopField:string;
    aggageAllowanceField: string;
    securedField:string;
    tatooField:string;
    statusField:string;
    PropertyChanged:string;

}
