export default class BaseClass {

    constructor(type) {
        this.type = type;
    }

    /**
     * Casts a Json Object to a RequestActionViewModel instance.
     * @param {any} obj
     * @param {any} objType A class type to instantiate the object.
     */
    static fromJson(objString, objType) {
        var obj = JSON.parse(objString);
        return this._getInstanceFromObj(obj, objType);
    }

    /**
     * Casts an URI query to a RequestActionViewModel instance.
     * @param {any} obj
     * @param {any} objType A class type to instantiate the object.
     */
    static fromUri(uriString, objType) {
        var obj = new URLSearchParams(uriString);
        return this._getInstanceFromObj(obj, objType);
    }

    /**
     * Casts an object to a RequestActionViewModel instance.
     * @param {any} obj
     * @param {any} objType A class type to instantiate the object.
     */
    static fromObject(obj, objType) {
        return this._getInstanceFromObj(obj, objType);
    }

    static _getInstanceFromObj(obj, objType) {
        var invariantCaseObj = {};
        var instance = new objType();


        for (var pair of Object.entries(obj || {})) {
            invariantCaseObj[pair[0].toLowerCase()] = pair[1];
        }

        Object.keys(instance).forEach(k => {
            if (k !== "type") {
                instance[k] = invariantCaseObj[k.toLowerCase()];
            }
        });

        return instance;

    }
}