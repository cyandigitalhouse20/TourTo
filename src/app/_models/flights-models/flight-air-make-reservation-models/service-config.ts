import { ServiceConfigPassengers } from './service-config-passengers';
import { FrequentTravellerCards } from './frequent-traveller-cards';
export class ServiceConfig {
    ItineraryCode:string;
    Passengers:ServiceConfigPassengers;
    FrequentTravellerCards:FrequentTravellerCards[];
    Comments:string;
    BackOfficeRemarks:string[];
    ResultCode:string;

}
