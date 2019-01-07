import { PaxRef } from "./pax-ref";
import { SeatRequests } from "./seat-requests";

export class ServiceConfigPassengers {
    PaxRef:PaxRef[];  
    SeatRequests:SeatRequests[];
    
    protected static SInit = (() => {
        ServiceConfigPassengers.prototype.PaxRef = [];
        ServiceConfigPassengers.prototype.SeatRequests = [];
    })();


}
