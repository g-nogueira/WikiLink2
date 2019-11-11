"use strict";

(() => {
    const PATH_WLWIDGET = chrome.extension.getURL('Lib/WLWidget/WLWidget.js');



    function initDOMEvents() {
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
    }
})();