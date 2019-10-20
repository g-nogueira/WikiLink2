(() => {

    "use strict";

    chrome.runtime.onInstalled.addListener(initializeDB);

    function initializeDB(params) {
        Seeding.seed();
    }

})();