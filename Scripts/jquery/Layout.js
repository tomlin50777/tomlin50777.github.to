$(function () {
    $("#menuTabPanel").dxTabPanel({
        dataSource: menuTabPanelItem,
        itemTitleTemplate: function (itemData, itemIndex, itemElement) {
            itemElement
                .append($("<span>").text(itemData.title));
        },
        itemTemplate: function (itemData, itemIndex, itemElement) {
            var item = $("<div>").append('<div id="TabPanelItem_' + itemData.title + '"></div>').appendTo(itemElement);
            $('#TabPanelItem_' + itemData.title).dxTabs({
                dataSource: itemData.item,
                onItemClick: function (e) {
                    $('#Content').load(e.itemData.url);
                }
            });
        },
        deferRendering: false,
        showNavButtons: true,
        repaintChangesOnly: true
    });
});