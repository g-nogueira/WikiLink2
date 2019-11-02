"use strict";

(() => {
    extendJquery();

    function extendJquery() {

        $.fn.uuidv4 = uuidv4;
        $.fn.WLGrid = wlGrid;

        /**
         * @param {object} options
         * @param {any[]} options.datasource 
         * @param {object} options.model
         * @param {string} options.dataTitleField
         * @param {string} options.dataDescriptionField
         * @this {HTMLElement}
         */
        function wlGrid(options) {

            // Setting default options.
            // var settings = $.extend({
            //     datasource: [],
            // }, options);

            if (!options) {
                return this.data(WLGrid.name);
            }


            return this.each(function () {

                const GRID = new WLGrid(options, this.id);

                this.parentNode.replaceChild(GRID.wrapper, this);
                GRID.wrapper.append(GRID.body);
                GRID.body.append(...GRID.rows(options.datasource))
            });
        }

        /** 
         * Generates a RFC4122 compliant GUID.
         * @see https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript#answer-2117523
        */
        function uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
    }

    class WLGrid {

        /**
         * @param {object} options
         * @param {any[]} options.datasource 
         * @param {object} options.model
         * @param {string} options.dataTitleField
         * @param {string} options.dataDescriptionField
         */
        constructor(options, elementId) {
            this.elementId = elementId;
            this.datasource = options.datasource;
            this.fieldTitle = options.dataTitleField;
            this.fieldDescription = options.dataDescriptionField;
        }

        /**
         * @returns {HTMLDivElement}
         */
        get wrapper() {

            if (!this._wrapper) {
                this._wrapper = $.parseHTML(`<div id="${this.id}"></div>`)[0];
                $(this._wrapper).data(WLGrid.name, this);
            }
            return this._wrapper;
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
            return this._row(data);
        }


        /**
         * @returns {HTMLDivElement[]}
         */
        rows() {
            return this.datasource.map(data => this._row(data));
        }

        _row(data) {
            const ROW_ID = $().uuidv4();

            return $.parseHTML(`<div data-uid="${ROW_ID}" class="list-group-item list-group-item-action">
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
        }

    }
})();
