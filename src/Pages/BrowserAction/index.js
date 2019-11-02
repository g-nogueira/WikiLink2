(() => {
    "use strict";

    init();

    function init() {
        populateHistory();
    }

    function populateHistory() {

        // Returns Array<UserHistory>
        var histories = API.UserHistory.getAll();

        $("#userHistoryRows").WLGrid({
            datasource: histories,
            dataIdField: "id",
            dataTitleField: "search",
            dataDescriptionField: "search"
        });
    }
})();