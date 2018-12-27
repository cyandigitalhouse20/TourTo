import { Origin, Destination, Carrier, Flight, Aircraft, BaggageAllowance } from "src/app/_models";


export class Segment {
    Origin: Origin;
    Destination: Destination;
    Carrier: Carrier;
    Flight: Flight;
    Aircraft: Aircraft;
    TechnicalStop: string;
    BaggageAllowance: BaggageAllowance;
    Secured: boolean;
    Tatoo: string;
    Status: string;
}
