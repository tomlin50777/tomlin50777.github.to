
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
                    $('#Content').load(e.itemData.url, function() {
                        e.itemData.bulidFunction();
                    });
                }
            });
        },
        deferRendering: false,
        showNavButtons: true,
        repaintChangesOnly: true
    });
});
$(document).ready(function () {
    windowsResize();
});
function windowsResize() {
    var height = $('#LayoutBody').height() - 20;
    $('#headerSpace').height(height * 0.05);
    $('#menuTabSpace').height(height * 0.1);
    $('#contentSpcace').height(height * 0.85);
}
