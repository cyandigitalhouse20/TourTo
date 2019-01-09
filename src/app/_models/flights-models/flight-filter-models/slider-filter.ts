import { Destination } from 'src/app/_models';
import { Options } from "ng5-slider";

export class SliderFilter {
    private DurArr: number[];
    private OrigArr: number[];
    private DestArr: number[];
    CoastMinvalue: number;
    CoastMaxvalue: number;
    DurationMinvalue: number;
    DurationMaxvalue: number;
    OriginTimeMinvalue: number;
    OriginTimeMaxvalue: number;
    DestinationTimeMinvalue: number;
    DestinationTimeMaxvalue: number;
    
    Coastoptions: Options = {
        floor: 0,
        ceil: 100
    };
    Durationoptions: Options = {
        floor: 50,
        ceil: 200
    };
    OriginTimeoptions: Options = {
        floor: 50,
        ceil: 200
    };
    DestinationTimeoptions: Options = {
        floor: 50,
        ceil: 200
    };
   
    setDurationfiltervaliues(DurationTwoD) {
        let durationArray = [];
        let DurationInOneD = DurationTwoD.reduce(function (prev, next) {
            return prev.concat(next);
        });
        DurationInOneD.forEach(element => {
            durationArray.push(element.toString().substr(0, 2));
        });
        this.DurArr = durationArray.map(Number);


        this.Durationoptions = {
            floor: this.DurArr.reduce(function (a, b) {
                return Math.min(a, b);
            }),
            ceil: this.DurArr.reduce(function (a, b) {
                return Math.max(a, b);
            })
        };

        this.DurationMinvalue = this.Durationoptions.floor;
        this.DurationMaxvalue = this.Durationoptions.ceil;
    }
    setCoastFilter(mincost, maxcost) {
        this.Coastoptions = {
            floor: mincost,
            ceil: maxcost
        };
        this.CoastMinvalue=mincost;
        this.CoastMaxvalue=maxcost;
        }
}
