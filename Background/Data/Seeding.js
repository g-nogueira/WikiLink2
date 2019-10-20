"use strict";

class Seeding {

    constructor() {

    }

    static getSeed() {
        return Seeding._getSeed();
    }

    static seed() {

        var seed = Seeding._getSeed();
        var db = storage();
        var promises = [];

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