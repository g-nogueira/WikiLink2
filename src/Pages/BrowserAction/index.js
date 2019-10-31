(() => {
    "use strict";

    init();

    function init() {
        populateHistory();
    }

    function populateHistory() {
        // Returns Array<UserHistory>
        var histories = API.UserHistory.getAll();
        histories.forEach(history => {
            $("#userHistoryRows").append(new UserHistoryRow(history).element);
        });
    }
})();