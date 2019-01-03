import { CategoryField } from './category-field';
import { AirlineField } from './airline-field';
import { OriginField } from "./origin-field";

export class RulesField {
    originField:OriginField;
    destinationField:OriginField;
    airlineField:AirlineField;
    categoryField:CategoryField[];
    fareBasisField:string;
    PropertyChanged:string;
}
