import UserHistory from "../Models/UserHistory.js";
import Storage from "../Data/storage.js";

export default class _UserHistory {

    constructor() {
    }

    async getAll() {

        /** @type {UserHistory} */
        var history = await Storage.get(UserHistory);

        return history;
    }

    get(id) {

    }

    update() {

    }

    insert() {

    }

    async delete(id) {
        var all = await this.getAll();
        var result = all.all.filter(el => el.id === id)[0];
        var index = all.all.indexOf(result);

        all.all.splice(index, 1);

        Storage.set(all);
    }
}