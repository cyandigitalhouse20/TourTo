import { IdentificationDocument } from "./identification-document";
import { FrequentTravellerCards } from "./frequent-traveller-cards";

export class PassangerViewModel {

Title: string;
FirstName: string;
LastName: string;
BirthDate: string;
Email: string;
Phone: string;
Occupation: string;
IdentificationDocument: IdentificationDocument;
FrequentTravellerCards: FrequentTravellerCards;
PaxRef: string;
Type: string;
PTC: string;
Lead: boolean;
Seat: string;
isCollapsed:boolean;
haveFrequent:boolean;
comment:string;

protected static SInit = (() => {
    PassangerViewModel.prototype.IdentificationDocument = new IdentificationDocument();
    PassangerViewModel.prototype.FrequentTravellerCards = new FrequentTravellerCards();
})();
}
