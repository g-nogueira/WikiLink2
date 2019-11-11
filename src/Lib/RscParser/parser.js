export default class Parser {
    constructor() { }

    /**
     * @param {object} options
     * @param {"rsc" | "i18n"} options.type 
     * @param {HTMLElement[] | NodeList} options.elements 
     * @param {HTMLElement} options.parent 
     */
    static parse({ type, elements, parent }) {
        let response;

        switch (type) {
            case "rsc":
                response = this._parseResources(elements, parent);
                break;
            case "i18n":
                response = this._parseI18n(elements, parent);
                break;
            default:
                break;
        }

        return response;
    }

    static _parseResources(elements, parent) {
        var selector = "[data-rsc]";

        if (elements instanceof Array) {

            elements.forEach(el => {
                let rscPath = el.dataset.rsc;
                let chromePath = chrome.runtime.getURL(rscPath);

                if (el instanceof HTMLLinkElement) {
                    el.setAttribute("href", chromePath);
                } else {
                    el.setAttribute("src", chromePath);
                }
            });

        } else {

            (parent || document).querySelectorAll(selector).forEach((el) => {
                let rscPath = el.dataset.rsc;
                let chromePath = chrome.runtime.getURL(rscPath);

                if (el instanceof HTMLLinkElement) {
                    el.setAttribute("href", chromePath);
                } else {
                    el.setAttribute("src", chromePath);
                }
            });
        }

    }

    static _parseI18n(elements, parent) {

        var selector = "[data-i18n]";

        if (elements instanceof Array || elements instanceof NodeList) {

            elements.forEach(el => {
                let translationName = el.dataset.i18n;
                let translationValue = chrome.i18n.getMessage(translationName);

                el.innerHTML = translationValue;
            });

        } else {

            (parent || document).querySelectorAll(selector).forEach((el) => {
                let translationName = el.dataset.i18n;
                let translationValue = chrome.i18n.getMessage(translationName);

                el.innerHTML = translationValue;
            });
        }
    }
}


// function mutationObserver() {
//     // Select the node that will be observed for mutations
//     const targetNode = document;

//     // Options for the observer (which mutations to observe)
//     const config = { attributes: true, childList: true, subtree: true };

//     // Callback function to execute when mutations are observed
//     const callback = function (mutationsList, observer) {
//         for (let mutation of mutationsList) {
//             if (mutation.type === 'childList') {
//                 console.log('A child node has been added or removed.', mutation);
//             }
//             else if (mutation.type === 'attributes') {
//                 console.log('The ' + mutation.attributeName + ' attribute was modified.', mutation);
//             }
//         }
//     };

//     // Create an observer instance linked to the callback function
//     const observer = new MutationObserver(callback);

//     // Start observing the target node for configured mutations
//     observer.observe(targetNode, config);
// }