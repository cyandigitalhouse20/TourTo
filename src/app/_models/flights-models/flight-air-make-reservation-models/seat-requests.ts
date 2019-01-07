import { Seat } from "./seat";

export class SeatRequests {
    Seat:Seat[]; 
    PaxRef:string;
    Preference:string;
    protected static SInit = (() => {
        SeatRequests.prototype.Seat = [];

    })();
}

