(() => {
    "use strict";

    const background = chrome.extension.getBackgroundPage();

    window.API = new background.API();
})();