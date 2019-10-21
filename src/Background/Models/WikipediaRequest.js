class WikipediaRequest extends BaseClass {

    constructor() {
        super(WikipediaRequest);

        this.language = "";
        this.search = "";
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