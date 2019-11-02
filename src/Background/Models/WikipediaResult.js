import BaseClass from "./BaseClass.js";

export default class WikipediaResult extends BaseClass {

    constructor() {
        super(WikipediaResult);

        this.pages = [
            {
                pageId: 0,
                title: "",
                description: "",
                extract: "",
                thumbnail: {
                    width: 0,
                    height: 0,
                    source: ""
                }
            }
        ]
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