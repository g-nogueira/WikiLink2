(() => {

    "use strict";

    chrome.runtime.onInstalled.addListener(initializeDB);

    // CLASSES
    window.API = API;
    window.Enums = {
        KeyCode
    };
    window.Models = {
        UserPreference,
        UserHistory,
        WikipediaRequest,
        WikipediaResult
    };

    function initializeDB(params) {
        Seeding.seed();
    }

})();