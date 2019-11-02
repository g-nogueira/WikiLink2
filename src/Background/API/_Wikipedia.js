export default class _Wikipedia {

    constructor() {
        this.baseUrl = "wikipedia.org/w/api.php";

    }

    pageGetList(wikipediaRequest = new WikipediaRequest) {
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
            gpssearch: "Font Aw",
            gpsprofile: "fuzzy"
        };

        var url = `${wikipediaRequest.language}.${_composeURI(baseUrl, request)}`;

    }


    _composeURI(base, data) {
        var ret = [];

        for (let d in data)
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));

        return `${base}?${ret.join("&")}`;
    }

}