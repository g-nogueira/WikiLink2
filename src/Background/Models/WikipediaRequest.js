import BaseClass from "./BaseClass.js";

export default class WikipediaRequest extends BaseClass {

    constructor(language, search, searchFragment) {
        super(WikipediaRequest);

        this.language = language; // The language to be searched for.
        this.search = search;
        this.searchFragment = searchFragment; // The surrounding text of a search.
    }

    static fromJson(objString) {
        return super.fromJson(objString, WikipediaResult);
    }

    static fromUri(uriString) {
        return super.fromUri(uriString, WikipediaResult);
    }

    static fromObject(obj) {
        return super.fromObject(obj, WikipediaResult);
    }
}