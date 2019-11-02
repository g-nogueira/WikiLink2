import storage from "./storage.js";
import UserPreference from "../Models/UserPreference.js";
import KeyCode from "../Enums/KeyCode.js";

export default class Seeding {

    constructor() {

    }

    static getSeed() {
        return Seeding._getSeed();
    }

    static seed() {
        // Retrieving initial seed.
        var seed = Seeding._getSeed();
        var db = storage();
        var promises = [];

        // Sending all storage_set requests.
        seed.forEach(data => promises.push(db.set(data)));

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

        // OTHER SETTINGS

        return [userPref];
    }
}