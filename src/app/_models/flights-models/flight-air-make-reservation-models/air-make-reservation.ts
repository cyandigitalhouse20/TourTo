import { Passenger } from './passenger';
import { ServiceConfig } from './service-config';

export class AirMakeReservation {
    ExternalRef:string;
    Passengers:Passenger[];
    ServiceConfig:ServiceConfig;

    protected static SInit = (() => {
        AirMakeReservation.prototype.Passengers =[];
        AirMakeReservation.prototype.ServiceConfig = new ServiceConfig() ;
    })();

}
