import { IdentificationDocument } from "./identification-document";
import { FrequentTravellerCards } from "./frequent-traveller-cards";

export class Passenger {
    Title:string;
    FirstName:string;
    LastName:string;
    BirthDate:string;
    Email:string;
    Phone:string;
    Occupation:string;
    IdentificationDocument:IdentificationDocument;
    FrequentTravellerCards:FrequentTravellerCards;
    PaxRef:string;
    Type:string;
    PTC:string;
    Lead:boolean;
}
