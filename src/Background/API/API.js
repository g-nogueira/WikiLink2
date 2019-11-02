import _UserHistory from './_UserHistory.js';
import _UserPreferences from './_UserPreferences.js';
import _Wikipedia from './_Wikipedia.js';

export default class API {

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