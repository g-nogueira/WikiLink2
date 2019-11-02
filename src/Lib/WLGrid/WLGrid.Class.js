export default class WLGrid {

    /**
     * @param {object} options
     * @param {any[]} options.datasource 
     * @param {object} options.model
     * @param {number|string} options.dataIdField
     * @param {string} options.dataTitleField
     * @param {string} options.dataDescriptionField
     */
    constructor(options, elementId) {
        this.elementId = elementId;
        this.datasource = options.datasource;
        this.fieldId = options.dataIdField;
        this.fieldTitle = options.dataTitleField;
        this.fieldDescription = options.dataDescriptionField;
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
            this._header = $.parseHTML(`<div class="py-2 pl-4"><div class="row align-items-center"><input type="checkbox"></div></div>`)[0];
        }
        return this._header;
    }

    get body() {
        if (!this._body) {
            this._body = $.parseHTML(`<div class="list-group" style="font-size: .875em"></div>`)[0];
        }
        return this._body;
    }

    /**
     * @returns {HTMLDivElement}
     */
    row(data) {

        var el = this.datasource.filter(r => r[this.fieldId] === data[this.fieldId])[0];
        var row = this.rows().filter(r => r.dataset.uid === el._uid)[0];

        return row;
    }


    /**
     * @returns {HTMLDivElement[]}
     */
    rows() {
        if (!this._rows) {
            this._rows = this.datasource.map(data => {
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
                    <div id="rowOptions" class="btn-group btn-group-sm ml-auto" role="group">
                        <button class="btn btn-outline-primary"><i class="far fa-star fa-xs"></i></button>
                        <button class="btn btn-outline-primary"><i class="fas fa-external-link-alt fa-xs"></i></button>
                        <button class="btn btn-outline-primary"><i class="fas fa-cloud-upload-alt fa-xs"></i></button>
                        <button class="btn btn-outline-primary"><i class="fas fa-times fa-xs"></i></button>
                    </div>
                </div>
            </div>`)[0];

        // $(rowEl).data(WLGrid.name, data);

        return rowEl;
    }

}
