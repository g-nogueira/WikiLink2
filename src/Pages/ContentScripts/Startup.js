"use strict";

(async () => {

    const PATH_WLWIDGET = chrome.extension.getURL('Lib/WLWidget/WLWidget.js');
    const PATH_PARSER = chrome.extension.getURL("Lib/RscParser/parser.js");
    const PATH_CONTENT_SCRIPT = chrome.extension.getURL("Pages/ContentScripts/WLWidget.html");
    const PATH_JQUERY = chrome.extension.getURL("Lib/jQUery/jquery-3.4.1.min.js");


    /********** IMPORTING MODULES **************/
    const Parser = (await import(PATH_PARSER)).default;


    /********** CREATING HTMLELEMENTS **************/
    var shadowHost = document.createElement("div")
    var shadowRoot = shadowHost.attachShadow({ mode: "open" });

    var shadowRootContent = await getMainTemplate();
    var jQueryScript = getjQueryScript();


    /********** INSERTING HTMLELEMENTS **************/
    if (!window.$ || !window.jQuery) {
        shadowRoot.appendChild(jQueryScript);
    }

    shadowRoot.appendChild(shadowRootContent);
    document.body.appendChild(shadowHost);


    /********** PARSING RESOURCES **************/
    Parser.parse({ type: "i18n", parent: shadowRoot });
    Parser.parse({ type: "rsc", parent: shadowRoot });

    /********** DECLARING PUBLIC VAR **************/
    window.wikilink2 = {
        shadowHost,
        shadowRoot
    }

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

    function getjQueryScript() {
        let script = document.createElement("script");
        script.setAttribute("src", PATH_JQUERY);

        return script;
    }
})();