import BaseClass from "./BaseClass.js";

export default class UserPreference extends BaseClass {

    constructor() {
        super(UserPreference);
        this.domainBlacklist = [];
        this.domainWhitelist = [];
        this.defaultLanguage = "";
        this.shortcuts = {
            popup: [{
                keyCode: 0,
                location: 1,
            }]
        }
    }

    static fromJson(objString) {
        return super.fromJson(objString, UserPreference);
    }

    static fromUri(uriString) {
        return super.fromUri(uriString, UserPreference);
    }

    static fromObject(obj) {
        return super.fromObject(obj, UserPreference);
    }
}