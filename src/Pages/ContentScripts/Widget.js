"use strict";

window.addEventListener("load", () => {

    const shadowRoot = window.wikilink2.shadowRoot;
    const shadowHost = window.wikilink2.shadowHost;

    $("WLWidget", shadowRoot).WLWidget({

    });


    function initDOMEvents() {
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
    }
});