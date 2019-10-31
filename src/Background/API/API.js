"use strict";

class API {

    constructor() { }

    get UserHistory() {
        return new _UserHistory();
    }

    get UserPreferences() {
        return new _UserPreferences();
    }

    get Wikipedia() {
        return new _Wikipedia();
    }
}