import WikipediaRequest from "../Models/WikipediaRequest.js";

export default class _Wikipedia {

    constructor() {
        this.baseUrl = "wikipedia.org/w/api.php";

    }

    /**
     * 
     * @param {WikipediaRequest} wikipediaRequest 
     */
    async getList(wikipediaRequest = new WikipediaRequest) {
        var request = {
            action: "query",
            format: "json",
            prop: "pageimages|description|extracts",
            generator: "prefixsearch",
            piprop: "thumbnail",
            pithumbsize: "70",
            pilimit: "10",
            exsentences: "10",
            exintro: 1,
            exsectionformat: "plain",
            gpssearch: wikipediaRequest.search,
            gpsprofile: "fuzzy"
        };

        var url = `https://${wikipediaRequest.language}.${this._composeURI(this.baseUrl, request)}`;

        return new Promise(async (resolve, reject) => {
            var response = await fetch(url);

            resolve(response);
        });
    }


    _composeURI(base, data) {
        var ret = [];

        for (let d in data) {
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        }

        return `${base}?${ret.join("&")}`;
    }


}