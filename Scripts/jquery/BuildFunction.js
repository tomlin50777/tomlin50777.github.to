function BuildKanBanData() {
    $("#KanBanDataLeftDataScrollView").dxScrollView({
        scrollByContent: true,
        scrollByThumb: true,
        showScrollbar: "onScroll",
    })
    $("#KanBanDataRightDataScrollView").dxScrollView({
        scrollByContent: true,
        scrollByThumb: true,
        showScrollbar: "onScroll",
    })
}


function BuildKanBanBox() {
    $("#RowButton").dxButton({
        stylingMode: "outlined",
        text: "Outlined",
        type: "success",
        width: 120,
        onClick: function (e) {
            Stage_Final(kanbandata);
            //switch (e.component.option('stage')) {
            //    case 0:
            //    case 1:
            //    case 2:
            //    case 3:
            //    case 4:
            //    case 5:
            //}
        }
    });
    $("#ColButton").dxButton({
        stylingMode: "outlined",
        text: "Outlined",
        type: "£¡",
        width: 120,
        onClick: function (e) {
            //switch (e.component.option('stage')) {
            //    case 0:
            //    case 1:
            //    case 2:
            //    case 3:
            //    case 4:
            //    case 5:
            //}
        }
    });
}
function Stage_Final(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[ccountZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[ccountZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '"></div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Name_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Content_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            $('#Popup_Subsystem_Content_' + countZ + '_' + countY).append('<div id="Popup_DetailBlock_' + countZ + '_' + countY + '"></div>');
            for (var countX = 0; countX < detail.length; countX++) {
                $('#Popup_DetailBlock_' + countZ + '_' + countY).append('<div id="Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '" data-options="dxItem: {ratio: 1}"></div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Name_' + countZ + '_' + countY + '_' + countX + '" >' + detail[countX] + '</div>');
                $('#Popup_DetailBlock_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Value_' + countZ + '_' + countY + '_' + countX + '" >' + data[system[countZ]][subsystem[countY]][detail[countX]] + '</div>');
            }
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[ccountZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[ccountZ]][subsystem[countY]]);
            $("#Popup_Subsystem_Block_" + countZ + '_' + countY).dxBox({
                direction: "row",
                width: "100%"
            });
            $("#Popup_DetailBlock_" + countZ + '_' + countY).dxBox({
                direction: "row",
                width: "100%"
            });
        }
    }

}
function Stage_0_Col(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var count = 0; count < system.length; count++) {
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + count + '"></div>');
    }
}
function Stage_0_Row(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').append('<div id="Popup_Base_Row"></div>');
    $('#Popup_Base_Row').append('<div id="Popup_System_Name_Block" data-options="dxItem: {ratio: 1}"></div>');
    $('#Popup_Base_Row').append('<div id="Popup_Subsystem_Block" data-options="dxItem: {ratio: 4}"></div>');

    for (var count = 0; count < system.length; count++) {
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + count + '">');
    }
}