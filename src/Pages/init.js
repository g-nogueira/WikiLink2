(() => {
    "use strict";

    $(document).ready(() => {
        parseResources();
        parseI18n();
    });

    function parseResources() {
        var selector = "[data-rsc]"; 
        var attr = "data-rsc";

        $(selector).each((i, el) => {
            let rscPath = el.getAttribute(attr);
            let chromePath = chrome.runtime.getURL(rscPath)
            el.setAttribute("src", chromePath);
        });

    }

    function parseI18n() {

        var selector = "[data-i18n]";
        var attr = "data-i18n";
        $(selector).each((i, el) => {
            debugger;

            let translationName = el.getAttribute(attr);
            let translationValue = chrome.i18n.getMessage(translationName)

            el.innerHTML = translationValue;
        });
    }
    chrome.runtime.getURL("Resources/Images/01wikilink16.png")


})();