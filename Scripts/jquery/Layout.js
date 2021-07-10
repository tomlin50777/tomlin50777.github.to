$(function () {
    $('#menuTab').dxTabs({
        dataSource: menuTabItem
    });


    //var tabPanel = $("#menuTabPanel").dxTabPanel({
    //    dataSource: employees.slice(0, 3),
    //    itemTitleTemplate: titleTemplate,
    //    itemTemplate: itemTemplate,
    //    height: 410,
    //    deferRendering: false,
    //    showNavButtons: true,
    //    repaintChangesOnly: true
    //}).dxTabPanel("instance");
    $('#Content').load('View/KanBan/data.html');
});