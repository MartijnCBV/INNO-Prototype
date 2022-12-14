import type {Result} from "@/models/Result";
// @ts-ignore
import {ResultType} from "/src/models/Result";
import type {Theme} from "@/models/Theme";
import type {Label} from "@/models/Label";
import {defineStore} from "pinia";
import type {Query} from "@/models/Query";

export type RootState = {
    results: Result[],
    themes: Theme[],
    labels: Label[],
    currentQuery: Query,
    currentResult: Result
}

export const Store = defineStore({
    id: "store",
    state: () => ({
        results: [],
        themes: [],
        labels: [],
        currentQuery: { content: "" },
        currentResult: { id: 0, name: "", shortDesc: "", longDesc: "", type: ResultType.FILE, labels: [], themes: []}
    } as RootState),
    actions: {
        addResult(result: Result) {
            if (!result || this.results.includes(result)) return;
            this.results.push(result);
        },
        removeResult(id: number) {
            const i = this.getResult(id);
            if (i === -1) return;
            this.results.splice(i, 1);
        },
        getResult(id: number) {
            return this.results.findIndex((i) => i.id === id);
        },
        getResults() {
            return this.results;
        },
        addTheme(theme: Theme) {
            if (!theme) return;
            this.themes.push(theme)
        },
        removeTheme(name: string) {
            const i = this.themes.findIndex((i) => i.name === name);
            if (i === -1) return;
            this.themes.splice(i, 1);
        },
        getThemes() {
            return this.themes;
        },
        addLabel(label: Label) {
            if (!label) return;
            this.labels.push(label)
        },
        removeLabel(name: string) {
            const i = this.themes.findIndex((i) => i.name === name);
            if (i === -1) return;
            this.themes.splice(i, 1);
        },
        getLabels() {
            return this.labels;
        },
        setCurrentQuery(query: Query) {
            this.currentQuery = query;
        },
        getCurrentQuery() {
            return this.currentQuery;
        },
        setCurrentResult(result: Result) {
            this.currentResult = result;
        },
        getCurrentResult() {
            return this.currentResult;
        }
    }
})
