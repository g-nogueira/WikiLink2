"use strict";

function wikipedia() {

    return {
        pageGetList,
        pageGet,
    };

    function pageGetList(wikipediaRequest = new WikipediaRequest) {
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
        }
    }

}