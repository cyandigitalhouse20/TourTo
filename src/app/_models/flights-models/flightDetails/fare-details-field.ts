import { PaxFareField } from './pax-fare-field';
import { ValidatingCarrierField } from './validating-carrier-field';
export class FareDetailsField {
    paxFareField:PaxFareField[];
    validatingCarrierField:ValidatingCarrierField;
currencyField: String;
baseFareField:Number;
baseFareFieldSpecified: string;
    fullFareField: string;
    fullFareFieldSpecified: string;
    serviceFeeField: string;
    serviceFeeFieldSpecified: string;
    nonRefundableFieldSpecified: string;
    isAutoTicketableField: string;
    isAutoTicketableFieldSpecified: string;
    PropertyChanged: string;
}
