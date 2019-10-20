"use strict";

function userPreferences() {

    return {
        getBlacklist,
        updateBlacklist,
        setBlacklist,

        getWhitelist,
        updateWhitelist,
        setWhitelist,

        getDefaultLanguage,
        updateDefaultLanguage,
        setDefaultLanguage,

        getShortcuts,
        updateShortcuts,
        setShortcuts,
    };

    /**
     * @returns {array} An array of blacklisted domains.
     */
    async function getBlacklist() {
        var preferences = await storage().get(UserPreference);
        return preferences.domainBlacklist;
    }
    function updateBlacklist() {}
    function setBlacklist() {}

    /**
     * @returns {array} An array of whitelisted domains.
     */
    function getWhitelist() {}
    function updateWhitelist() {}
    function setWhitelist() {}


    /**
     * @returns {string} The default language.
     */
    async function getDefaultLanguage() {
        var preferences = await storage().get(UserPreference);

        return preferences.defaultLanguage;
    }
    function updateDefaultLanguage() {}
    function setDefaultLanguage() {}

    /**
     * @returns {[{keyCode: Number, location: Number}]} UserPreference.shortcuts.
     */
    async function getShortcuts() {
        var preferences = await storage().get(UserPreference);

        return preferences.shortcuts;
    }
    function updateShortcuts() {}
    function setShortcuts() {}
}