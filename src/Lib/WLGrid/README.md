Example of the full usage of the grid.

```js
$("#userHistoryGrid").WLGrid({
        transaction: {
            read: API.UserHistory.getAll,
            update: () => { },
            delete: () => { },
            create: () => { }
        },
        datasource: API.UserHistory.getAll,
        dataIdField: "id",
        dataTitleField: "search",
        dataDescriptionField: "search",
        actions: [{
            innerHtml: `<i class="far fa-star fa-xs"></i>`,
            events: {
                click: "delete"
            }
        },
        {
            innerHtml: `<i class="far fa-star fa-xs"></i>`,
            events: {
                click: function () { console.log(this); }
            }
        },
        {
            innerHtml: `<i class="far fa-star fa-xs"></i>`,
            events: {
                click: "update"
            }
        },
        {
            innerHtml: `<i class="far fa-star fa-xs"></i>`,
            events: {
                click: "create"
            }
        }
        ]
    });
```