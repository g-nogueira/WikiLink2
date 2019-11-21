"use strict";

window.addEventListener("wl2-ready", (e) => {

    const shadowRoot = window.wikilink2.shadowRoot;
    const shadowHost = window.wikilink2.shadowHost;
    const WikipediaRequest = wikilink2.Models.WikipediaRequest;
    const API = wikilink2.API;

    (async () => {
        var request = new WikipediaRequest("pt", "Math", "");
        var all = await API.Wikipedia.getList(request);
    })();

    // $("WLWidget", shadowRoot).WLWidget({
    //     transaction: {
    //         read: async () => {
    //             var request = new WikipediaRequest("pt", "Math", "");
    //             var all = await API.Wikipedia.getList(request);
    //             return all.all;
    //         }
    //     },
    // });


    function initDOMEvents() {
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
    }
});