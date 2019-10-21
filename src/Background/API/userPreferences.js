"use strict";

function userPreferences() {

    return {
        blacklistGetAll,
        blacklistUpdate,
        blacklistInsert,

        whitelistGetAll,
        whitelistUpdate,
        whitelistInsert,

        defaultLanguageGet,
        defaultLanguageUpdate,
        defaultLanguageInsert,

        shortcutGetAll,
        shortcutUpdate,
        shortcutInsert,
    };

    /**
     * @returns {array} An array of blacklisted domains.
     */
    async function blacklistGetAll() {
        var preferences = await storage().get(UserPreference);
        return preferences.domainBlacklist;
    }
    function blacklistUpdate() {}
    function blacklistInsert() {}

    /**
     * @returns {array} An array of whitelisted domains.
     */
    function whitelistGetAll() {}
    function whitelistUpdate() {}
    function whitelistInsert() {}


    /**
     * @returns {string} The default language.
     */
    async function defaultLanguageGet() {
        var preferences = await storage().get(UserPreference);

        return preferences.defaultLanguage;
    }
    function defaultLanguageUpdate() {}
    function defaultLanguageInsert() {}

    /**
     * @returns {[{keyCode: Number, location: Number}]} UserPreference.shortcuts.
     */
    async function shortcutGetAll() {
        var preferences = await storage().get(UserPreference);

        return preferences.shortcuts;
    }
    function shortcutUpdate() {}
    function shortcutInsert(shortcuts = {}) {
        var preferences = await storage().get(UserPreference);
    }
}