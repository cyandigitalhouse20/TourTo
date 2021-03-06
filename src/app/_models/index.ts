import { from } from 'rxjs';

// static Data
export * from './static-data-models/city';

// menu
export * from './menu-models/footer';

// flights
export * from './flights-models/flight-search-option-models/flight-search-option-round-one';
export * from './flights-models/flight-search-option-models/flight-search-option-multi-cities';
export * from './flights-models/flight-search-result-models/flight-search-result';
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/air-result-itineraries';
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/routes-models/routes';
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/routes-models/segment-models/aircraft'; 
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/routes-models/segment-models/airport'; 
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/routes-models/segment-models/baggage-allowance';
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/routes-models/segment-models/carrier';
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/routes-models/segment-models/destination';
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/routes-models/segment-models/flight';   
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/routes-models/segment-models/marketing'; 
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/routes-models/segment-models/origin';
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/routes-models/segment-models/segment';  
export * from './flights-models/flight-search-result-models/air-result-itineraries-models/routes-models/segment-models/operating';
export * from './flights-models/flight-filter-models/slider-filter';


//flight details
export * from './flights-models/flight-details-models/flight-details';

//flight reservation
export * from './flights-models/flight-air-make-reservation-models/air-make-reservation';
export * from './flights-models/flight-air-make-reservation-models/passenger';

// flight seat map
export * from './flights-models/flight-air-seat-map-models/air-seat-map';
export * from './flights-models/flight-air-seat-map-models/seat-map-segment';