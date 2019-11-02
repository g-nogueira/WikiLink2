import UserHistory from "../Models/UserHistory.js";

export default class _UserHistory {

    constructor() { }

    getAll() {
        return [
            new UserHistory(0, new Date(), "Js", [6, 18, 221, 338]),
            new UserHistory(1, new Date(), "Angular", [4, 21, 482, 348]),
            new UserHistory(2, new Date(), "JSON", [340, 348, 298, 53]),
            new UserHistory(3, new Date(), "The Lion King", [518, 1832, 48, 3]),
        ]
    }

    get(id) {

    }

    update() {

    }

    insert() {

    }
}