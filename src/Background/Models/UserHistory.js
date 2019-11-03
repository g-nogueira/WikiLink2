import BaseClass from "./BaseClass.js";
import UserHistoryFragment from "./UserHistoryFragment.js";

export default class UserHistory extends BaseClass {

    /**
     * 
     * @param {UserHistoryFragment[]} userHistories 
     */
    constructor(userHistories) {
        super(UserHistory);
        this.all = userHistories;

    }

    static fromJson(objString) {
        return super.fromJson(objString, UserHistory);
    }

    static fromUri(uriString) {
        return super.fromUri(uriString, UserHistory);
    }

    static fromObject(obj) {
        return super.fromObject(obj, UserHistory);
    }
}