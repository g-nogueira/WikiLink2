import API from './Startup.js';

init();

function init() {
    populateHistory();
}

function populateHistory() {

    var histories = API.UserHistory.getAll();

    $("#userHistoryGrid").WLGrid({
        datasource: histories,
        dataIdField: "id",
        dataTitleField: "search",
        dataDescriptionField: "search"
    });
}