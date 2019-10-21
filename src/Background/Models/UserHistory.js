
class UserHistory extends BaseClass {

    constructor() {
        super(UserHistory);

        this.timestamp = Date();
        this.search = ""; // The term searched.
        this.resultIds = []; // Wikipedia search result property of name "pageid"
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