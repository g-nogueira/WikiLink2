(() => {

    "use strict";

    chrome.runtime.onInstalled.addListener(initializeDB);

    function initializeDB(params) {
        debugger;
        Seeding.seed()
            .then(userPreferences().getShortcuts);
    }

})();