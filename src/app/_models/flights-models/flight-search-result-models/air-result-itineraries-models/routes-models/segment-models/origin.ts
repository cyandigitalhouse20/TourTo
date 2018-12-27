import { Airport } from "src/app/_models";

export class Origin {
    Airport: Airport;
    Date: string;
    DateSpecified: boolean;
    Time: string;
    TimeSpecified: boolean;
    Terminal: string;
}
