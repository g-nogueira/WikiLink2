export default class WLGrid {

    /**
     * @param {object} options
     * @param {any[]} [options.datasource]
     * @param {object} [options.transaction]
     * @param {Function} [options.transaction.create]
     * @param {Function} [options.transaction.read]
     * @param {Function} [options.transaction.update]
     * @param {Function} [options.transaction.delete]
     * @param {object} options.model
     * @param {number|string} options.dataIdField
     * @param {string} options.dataTitleField
     * @param {string} options.dataDescriptionField
     */
    constructor(options, elementId) {
        this.elementId = elementId;
        this.fieldId = options.dataIdField;
        this.fieldTitle = options.dataTitleField;
        this.fieldDescription = options.dataDescriptionField;
        this.actions = options.actions || [];

        this._data = options.datasource;
        this._transaction = options.transaction;
    }

    /**
     * @returns {HTMLDivElement}
     */
    get wrapper() {

        if (!this._wrapper) {
            this._wrapper = $.parseHTML(`<div id="${this.elementId}"></div>`)[0];
            $(this._wrapper).data(WLGrid.name, this);
        }
        return this._wrapper;
    }

    get header() {
        if (!this._header) {
            const CKBX_ID = $().uuidv4();
            const that = this;

            this._header = $.parseHTML(`<div class="py-2 pl-4"><div class="row align-items-center"><input data-uid=${CKBX_ID} type="checkbox"></div></div>`)[0];


            this._registerEvent({
                owner: this._header,
                target: "input[type=checkbox]",
                type: "change",
                listener: function (e) {
                    // Checks all rows.
                    that.rows().forEach((row) => {
                        $(row).find("input[type=checkbox]")[0].checked = this.checked;
                    });
                }
            });
        }

        return this._header;
    }

    get body() {
        if (!this._body) {
            this._body = $.parseHTML(`<div class="list-group" style="font-size: .875em"></div>`)[0];
        }
        return this._body;
    }

    get dataSource() {
        return {
            read: () => this._read.call(this)
        };
    }
    /**
     * @returns {HTMLDivElement}
     */
    row(data) {

        var el = this._data.filter(r => r[this.fieldId] === data[this.fieldId])[0];
        var row = this.rows().filter(r => r.dataset.uid === el._uid)[0];

        return row;
    }

    /**
     * @returns {HTMLDivElement[]}
     */
    rows() {
        if (!this._rows) {
            this._rows = this._data.map(data => {
                let row = this._row(data);
                data._uid = row.dataset.uid;

                return row;
            });
        }

        return this._rows;
    }

    /**
     * @returns {HTMLDivElement}
     */
    _row(data) {
        const ROW_ID = $().uuidv4();

        var rowEl = $.parseHTML(`<div data-uid="${ROW_ID}" class="list-group-item list-group-item-action">
                    <div id="listItemRow" class="row align-items-center">
                    <div class="col-1 text-center">
                        <input id="ckbxSelectRow" type="checkbox">
                    </div>
                    <div>
                        <span id="rowTitle">${data[this.fieldTitle]}</span>
                    </div>
                    <div class="text-muted text-truncate col">
                        <span id="rowDescription">${data[this.fieldDescription]}</span>
                    </div>
                </div>
            </div>`)[0];

        if (this.actions.length > 0) {
            let actionsCol = $.parseHTML(`<div id="rowOptions" class="btn-group btn-group-sm ml-auto" role="group"></div>`)[0];

            this.actions.forEach(action => {
                let btnAction = $.parseHTML(`<button class="btn btn-outline-primary">${action.innerHtml}</button>`)[0];
                actionsCol.appendChild(btnAction);

                this._registerEvent({
                    target: btnAction,
                    type: "click",
                    listener: typeof action.events.click === "string" ? (e) => this._transaction[action.events.click](data) : action.events.click
                });
            });

            $(rowEl).find("#listItemRow").append(actionsCol);
        } else {

            let actionsCol = $.parseHTML(`<button class="btn btn-outline-primary wl-grid-fav"><i class="far fa-star fa-xs"></i></button>
            <button class="btn btn-outline-primary wl-grid-link"><i class="fas fa-external-link-alt fa-xs"></i></button>
            <button class="btn btn-outline-primary wl-grid-cloud"><i class="fas fa-cloud-upload-alt fa-xs"></i></button>
            <button class="btn btn-outline-primary wl-grid-delete"><i class="fas fa-times fa-xs"></i></button>`)[0];

            $(rowEl).find("#listItemRow").append(actionsCol);

            this._registerEvent({
                owner: rowEl,
                target: ".wl-grid-delete",
                type: "click",
                listener: (e) => this._transaction.delete(data)
            });
        }
        return rowEl;
    }

    async _read() {
        this._data = await this._transaction.read();

        this._rows = undefined;
        while (this.body.firstChild) {
            this.body.removeChild(this.body.firstChild);
        }
        this.body.append(...this.rows(this._data));

        return this.wrapper;
    }

    async refresh() {
        this._data = await this._transaction.read();
        this._wrapper = undefined;
        this.wrapper.append(this.header);
        this.wrapper.append(this.body);
        this.body.append(...this.rows(this._data));

        return this.wrapper;
    }

    /**
     * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
     * @param {object} options 
     * @param {HTMLElement} [options.owner] 
     * @param {string} [options.parent]
     * @param {string | HTMLElement} options.target 
     * @param {string} options.type 
     * @param {Function | false} options.listener 
     */
    _registerEvent({ owner, parent = "", target, type, listener }) {
        if (target instanceof HTMLElement) {
            return $(target, owner).on(type, listener);
        }
        return $(`${parent} ${target}`, owner).on(type, listener);
    }

}
