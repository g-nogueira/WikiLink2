import WLGrid from "./WLGrid.Class.js";

export default function extendjQuery() {
    $.fn.uuidv4 = uuidv4;
    $.fn.WLGrid = wlGrid;
}

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
 * @this {HTMLElement}
 */
async function wlGrid(options) {

    // Setting default options.
    // var settings = $.extend({
    //     datasource: [],
    // }, options);

    if (options.transaction && options.transaction.read && typeof options.transaction.read === "function") {
        options.datasource = await options.transaction.read();
    }

    this.each(async function () {
        const GRID = new WLGrid(options, this.id);
        this.parentNode.replaceChild(await GRID.refresh(), this);
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