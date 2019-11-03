import BaseClass from "./BaseClass.js";

export default class UserHistoryFragment extends BaseClass {

    constructor(id, timestamp, search, resultIds) {
        super(UserHistoryFragment);

        this.id = id || 0;
        this.timestamp = timestamp || Date();
        this.search = search || ""; // The term searched.
        this.resultIds = resultIds || []; // Wikipedia search result property of name "pageid"
    }

    static fromJson(objString) {
        return super.fromJson(objString, UserHistoryFragment);
    }

    static fromUri(uriString) {
        return super.fromUri(uriString, UserHistoryFragment);
    }

    static fromObject(obj) {
        return super.fromObject(obj, UserHistoryFragment);
    }
}