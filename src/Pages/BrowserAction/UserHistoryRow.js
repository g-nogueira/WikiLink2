"use strict";

class UserHistoryRow {

    /**
     * 
     * @param {UserHistory} userHistory 
     */
    constructor(userHistory) {
        this._data = {
            id: userHistory.id || 0,
            timestamp: userHistory.timestamp || Date(),
            search: userHistory.search || "", // The term searched.
            resultIds: userHistory.resultIds || []
        }

        this._element = document.createElement("div");

    }

    get data() {
        return this._data;
    }
    /**
     * @returns {HTMLElement}
     */
    get element() {
        this._element =
            $.parseHTML(`<div data-row="" class="list-group-item list-group-item-action">
            <div id="userHistoryRow" class="row align-items-center">
            <div class="col-1 text-center">
                <input id="ckbxSelectRow" type="checkbox">
            </div>
            <div>
                <span id="rowTitle">${this.data.search}</span>
            </div>
            <div class="text-muted text-truncate col">
                <span id="rowDescription">Former municipality of Switzerland in Fribourg Former municipality of Switzerland in Fribourg</span>
            </div>
            <div id="rowOptions" class="btn-group btn-group-sm ml-auto" role="group">
                <button class="btn btn-outline-primary"><i class="far fa-star fa-xs"></i></button>
                <button class="btn btn-outline-primary"><i class="fas fa-external-link-alt fa-xs"></i></button>
                <button class="btn btn-outline-primary"><i class="fas fa-cloud-upload-alt fa-xs"></i></button>
                <button class="btn btn-outline-primary"><i class="fas fa-times fa-xs"></i></button>
            </div>
        </div>
        </div>`, window.document);

        return this._element;
    }

}
