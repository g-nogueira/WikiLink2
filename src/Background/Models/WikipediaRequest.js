class WikipediaRequest extends BaseClass {

    constructor() {
        super(WikipediaRequest);

        this.language = ""; // The language to be searched for.
        this.search = "";
        this.serachFragment = ""; // The surrounding text of a search.
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