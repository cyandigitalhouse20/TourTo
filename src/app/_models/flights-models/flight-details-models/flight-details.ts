import { SystemField } from './system-field';
import { FareDetailsField } from './fare-details-field';
import { PriceField } from './price-field';
import { OfferConfigurationField } from './offer-configuration-field';
import { ItineraryField } from './itinerary-field';


export class FlightDetails {
  resultCodeField:string;
  itineraryCodeField:string;
  priceField:PriceField;
  fareDetailsField:FareDetailsField;
  offerConfigurationField:OfferConfigurationField;
  itineraryField:ItineraryField[];
  systemField:SystemField;
  PropertyChanged:string;
}
