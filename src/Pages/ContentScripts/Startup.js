"use strict";

(async () => {

    const PATH_WLWIDGET = chrome.extension.getURL('Lib/WLWidget/WLWidget.js');
    const PATH_PARSER = chrome.extension.getURL("Lib/RscParser/parser.js");
    const PATH_CONTENT_SCRIPT = chrome.extension.getURL("Pages/ContentScripts/WLWidget.html");
    const PATH_API = chrome.extension.getURL("Background/API/API.js");
    const PATH_WIKIPEDIA_REQUEST = chrome.extension.getURL("Background/Models/WikipediaRequest.js");
    const PATH_BACKGROUND_WIRING = chrome.extension.getURL("Lib/RequestIntercepter/BackgroundWiring.js");


    /********** IMPORTING MODULES **************/
    const Parser = (await import(PATH_PARSER)).default;
    const BackgroundWiring = (await import(PATH_BACKGROUND_WIRING)).default;
    const API = new (await import(PATH_API)).default;
    const Models = {
        WikipediaRequest: (await import(PATH_WIKIPEDIA_REQUEST)).default
    };

    /********** CREATING HTMLELEMENTS **************/
    var shadowHost = document.createElement("div")
    var shadowRoot = shadowHost.attachShadow({ mode: "open" });

    var shadowRootContent = await getMainTemplate();


    /********** INSERTING HTMLELEMENTS **************/
    shadowRoot.appendChild(shadowRootContent);
    document.body.appendChild(shadowHost);


    /********** PARSING RESOURCES **************/
    Parser.parse({ type: "i18n", parent: shadowRoot });
    Parser.parse({ type: "rsc", parent: shadowRoot });

    /********** DECLARING PUBLIC VAR **************/
    window.wikilink2 = {
        shadowHost,
        shadowRoot,
        API,
        Models
    };

    (new BackgroundWiring()).Intercept("fetch");
    window.dispatchEvent(readyEvent());

    function getMainTemplate() {
        return new Promise((resolve) => {

            fetch(PATH_CONTENT_SCRIPT).then((response) => {
                return response.text();
            }).then((response) => {
                let content = (new DOMParser()).parseFromString(response, "text/html");
                let template = content.querySelector("template").content;
                resolve(template);
            });
        })

    }

    function readyEvent() {
        var event = new CustomEvent("wl2-ready", {
            detail: {
                wikilink2: window.wikilink2
            }
        });

        return event;
    }
})();