(() => {
    "use strict";

    $(document).ready(() => {
        parseResources();
        parseI18n();
    });

    function parseResources() {
        var selector = "[data-rsc]";

        $(selector).each((i, el) => {
            let rscPath = el.dataset.rsc;
            let chromePath = chrome.runtime.getURL(rscPath)
            el.setAttribute("src", chromePath);
        });

    }

    function parseI18n() {

        var selector = "[data-i18n]";

        $(selector).each((i, el) => {
            let translationName = el.dataset.i18n;
            let translationValue = chrome.i18n.getMessage(translationName)

            el.innerHTML = translationValue;
        });
    }
    chrome.runtime.getURL("Resources/Images/01wikilink16.png")


})();