import type {Theme} from "@/models/Theme";
import type {Label} from "@/models/Label";

export enum ResultType {
    FILE,
    DATABASE,
    INFOGRAPHIC
}

export interface Result {
    id: number;
    name: string;
    shortDesc: string;
    longDesc: string;
    type: ResultType;
    themes: Theme[];
    labels: Label[];
}
