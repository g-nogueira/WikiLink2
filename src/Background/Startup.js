import API from "./API/API.js";

import KeyCode from "./Enums/KeyCode.js";

import UserPreference from "./Models/UserPreference.js";
import UserHistory from "./Models/UserHistory.js";
import WikipediaRequest from "./Models/WikipediaRequest.js";
import WikipediaResult from "./Models/WikipediaResult.js";

import Seeding from "./Data/Seeding.js";
import BackgroundWiring from "../Lib/RequestIntercepter/BackgroundWiring.js";


(() => {

    chrome.runtime.onInstalled.addListener(initializeDB);

    var wiring = new BackgroundWiring();
    wiring.Listen();

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

    function initializeDB() {
        Seeding.seed();
    }

})();