import Storage from "./storage.js";
import UserPreference from "../Models/UserPreference.js";
import KeyCode from "../Enums/KeyCode.js";
import UserHistory from "../Models/UserHistory.js";
import UserHistoryFragment from "../Models/UserHistoryFragment.js";

export default class Seeding {

    constructor() {

    }

    static getSeed() {
        return Seeding._getSeed();
    }

    static seed() {
        // Retrieving initial seed.
        var seeds = Seeding._getSeed();
        var promises = [];

        // Sending all storage_set requests.
        seeds.forEach(data => promises.push(Storage.set(data)));

        return Promise.all(promises);
    }

    static _getSeed() {

        // USER PREFERENCES
        var userPref = new UserPreference();

        userPref.defaultLanguage = "en";
        userPref.shortcuts.popup = [{
            keyCode: KeyCode.getKeyCode("shift"),
            location: KeyCode.KEY_LOCATION_LEFT()
        },
        {
            keyCode: KeyCode.getKeyCode("alt"),
            location: KeyCode.KEY_LOCATION_LEFT()
        }
        ];

        var userHistories = new UserHistory([
            new UserHistoryFragment(0, new Date(), "Js", [6, 18, 221, 338]),
            new UserHistoryFragment(1, new Date(), "Angular", [4, 21, 482, 348]),
            new UserHistoryFragment(2, new Date(), "JSON", [340, 348, 298, 53]),
            new UserHistoryFragment(3, new Date(), "The Lion King", [518, 1832, 48, 3]),
        ]);

        // OTHER SETTINGS

        return [userPref, userHistories];
    }
}