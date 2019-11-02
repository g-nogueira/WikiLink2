export default class _UserPreferences {

    constructor() { }

    /**
     * @returns {array} An array of blacklisted domains.
     */
    async blacklistGetAll() {
        var preferences = await storage().get(UserPreference);
        return preferences.domainBlacklist;
    }
    blacklistUpdate() { }
    blacklistInsert() { }

    /**
     * @returns {array} An array of whitelisted domains.
     */
    whitelistGetAll() { }
    whitelistUpdate() { }
    whitelistInsert() { }


    /**
     * @returns {string} The default language.
     */
    async defaultLanguageGet() {
        var preferences = await storage().get(UserPreference);

        return preferences.defaultLanguage;
    }
    defaultLanguageUpdate() { }
    defaultLanguageInsert() { }

    /**
     * @returns {[{keyCode: Number, location: Number}]} UserPreference.shortcuts.
     */
    async shortcutGetAll() {
        var preferences = await storage().get(UserPreference);

        return preferences.shortcuts;
    }
    shortcutUpdate() { }
    async shortcutInsert(shortcuts = {}) {
        var preferences = await storage().get(UserPreference);
    }
}