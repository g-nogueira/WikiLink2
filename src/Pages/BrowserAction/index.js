import API from "./Startup.js";

init();

function init() {
    populateHistory();
}

function populateHistory() {

    const ICON_FAV = `<i class="far fa-star fa-xs"></i>`;
    const ICON_LINK = `<i class="fas fa-external-link-alt fa-xs"></i>`;
    const ICON_CLOUD = `<i class="fas fa-cloud-upload-alt fa-xs"></i>`;
    const ICON_DEL = `<i class="fas fa-times fa-xs"></i>`;

    $("#userHistoryGrid").WLGrid({
        transaction: {
            read: async () => {
                var all = await API.UserHistory.getAll();
                return all.all;
            },
            update: () => { },
            delete: async (data) => {
                await API.UserHistory.delete(data.id);
                $("#userHistoryGrid").data("WLGrid").dataSource.read();
            },
            create: () => { }
        },
        datasource: API.UserHistory.getAll,
        dataIdField: "id",
        dataTitleField: "search",
        dataDescriptionField: "search",
        actions: [{
            innerHtml: ICON_FAV,
            events: {
                click: "delete"
            }
        },
        {
            innerHtml: ICON_LINK,
            events: {
                click: "delete"
            }
        },
        {
            innerHtml: ICON_CLOUD,
            events: {
                click: "delete"
            }
        },
        {
            innerHtml: ICON_DEL,
            events: {
                click: "delete"
            }
        }
        ]
    });
}