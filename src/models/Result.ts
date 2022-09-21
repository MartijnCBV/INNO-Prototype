import type {Theme} from "@/models/Theme";
import type {Label} from "@/models/Label";

export interface Result {
    id: bigint;
    name: string;
    themes: Theme[];
    labels: Label[];
}
