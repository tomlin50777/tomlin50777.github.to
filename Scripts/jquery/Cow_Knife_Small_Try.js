////kanbandata
var buttonList = [];
$(document).ready(function () {
    Rebuild();
    SetFunction({ function: ColorToggle, parameter: { data: kanbandata, idFormat: 'DetailBlockItemValue' }}, 1);
    SetFunction({ function: Rebuild, parameter: {} }, 10);
});

function Rebuild()
{
    $("#Base").empty();
    kanbandata = RandomData(kanbandata);
    var system = Object.keys(kanbandata);
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(kanbandata[system[countZ]]);
        $("#Base").append('<div id="SystemBlock' + countZ + '"></div>');
        $("#SystemBlock" + countZ).append('<div id="SystemBlockItemName' + countZ + '" class="borderSer" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $("#SystemBlock" + countZ).append('<div id="SystemBlockItemContent' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            $("#SystemBlockItemContent" + countZ).append('<div id="SubsystemBlock' + countZ + '_' + countY + '"></div>');
            $("#SubsystemBlock" + countZ + '_' + countY).append('<div id="SubsystemBlockItemName' + countZ + '_' + countY + '" class="borderSer" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $("#SubsystemBlock" + countZ + '_' + countY).append('<div id="SubsystemBlockItemContent' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            var detail = Object.keys(kanbandata[system[countZ]][subsystem[countY]]);
            $("#SubsystemBlockItemContent" + countZ + '_' + countY).append('<div id="DetailBlock' + countZ + '_' + countY + '"></div>');
            for (var countX = 0; countX < detail.length; countX++) {
                $("#DetailBlock" + countZ + '_' + countY).append('<div id="DetailBlockItem' + countZ + '_' + countY + '_' + countX + '" data-options="dxItem: {ratio: 1}"></div>');
                $("#DetailBlockItem" + countZ + '_' + countY + '_' + countX).append('<div id="DetailBlockItemName' + countZ + '_' + countY + '_' + countX + '" class="borderSer">' + detail[countX] + '_' + kanbandata[system[countZ]][subsystem[countY]][detail[countX]][0].Process_Area + '</div>');
                $("#DetailBlockItem" + countZ + '_' + countY + '_' + countX).append('<div id="DetailBlockItemValue' + countZ + '_' + countY + '_' + countX + '" class="borderSer"><nobr class="noHighlight">●</nobr>' + ((kanbandata[system[countZ]][subsystem[countY]][detail[countX]].length == 1) ? kanbandata[system[countZ]][subsystem[countY]][detail[countX]][0].value : '') + '</div>');
                if (kanbandata[system[countZ]][subsystem[countY]][detail[countX]].length > 1) {
                    $("#Base").append('<div id="Popover' + countZ + '_' + countY + '_' + countX + '"></div>');
                    for (var countW = 0; countW < kanbandata[system[countZ]][subsystem[countY]][detail[countX]].length; countW++)
                        $("#Popover" + countZ + '_' + countY + '_' + countX).append(kanbandata[system[countZ]][subsystem[countY]][detail[countX]][countW].name + ' : ' + kanbandata[system[countZ]][subsystem[countY]][detail[countX]][countW].value + '<br />');
                }
            }
            $("#DetailBlock" + countZ + '_' + countY).append('<div id="EmptyBlockItem' + countZ + '_' + countY + '" data-options="dxItem: {ratio: ' + (9 - detail.length) + '}"></div>');
        }

        //Object.keys(kanbandata["Power"]).length
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(kanbandata[system[countZ]]);
        $("#SystemBlock" + countZ).dxBox({
            direction: "row",
            width: "100%",
        });

        for (var countY = 0; countY < subsystem.length; countY++) {
            $("#SubsystemBlock" + countZ + '_' + countY).dxBox({
                direction: "row",
                width: "100%"
            });
            var item = Object.keys(kanbandata[system[countZ]][subsystem[countY]]);
            for (var countX = 0; countX < item.length; countX++) {
                $("#DetailBlock" + countZ + '_' + countY).dxBox({
                    direction: "row",
                    width: "100%"
                });
                if (kanbandata[system[countZ]][subsystem[countY]][item[countX]].length > 1) {
                    $("#Popover" + countZ + '_' + countY + '_' + countX).dxPopover({
                        target: "#DetailBlockItemValue" + countZ + '_' + countY + '_' + countX,
                        showEvent: "mouseenter",
                        hideEvent: "mouseleave",
                        position: "top",
                        width: 300
                    });
                }
            }

        }
    }
    ColorJudge(kanbandata, 'DetailBlockItemValue');
}
//<div class="boxOptions1">
//	<div class="rect demo-dark" data-options="dxItem: {ratio: 1}">
//		ratio = 1
//		</div>
//	<div class="rect demo-light" data-options="dxItem: {ratio: 2}">
//		ratio = 2
//		</div>
//	<div class="rect demo-dark" data-options="dxItem: {ratio: 1}">
//		ratio = 1
//		</div>
//</div>
function RandomData(data) {
    var system = Object.keys(data);
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            for (var countX = 0; countX < detail.length; countX++) {
                for (var countW = 0; countW < data[system[countZ]][subsystem[countY]][detail[countX]].length; countW++)
                    data[system[countZ]][subsystem[countY]][detail[countX]][countW].value = Math.floor(Math.random() * 100);
            }
        }
    }
    return data;
}
function ColorJudge(data, idFormat) {
    var flashing = 90;
    var sl = 80;
    var cl = 50;
    var system = Object.keys(data);
    var processAreaStatus = {};
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            for (var countX = 0; countX < detail.length; countX++) {
                var max = -9999;
                for (var countW = 0; countW < data[system[countZ]][subsystem[countY]][detail[countX]].length; countW++) {
                    if (max < data[system[countZ]][subsystem[countY]][detail[countX]][countW].value)
                        max = data[system[countZ]][subsystem[countY]][detail[countX]][countW].value
                }
                if (max > flashing) {
                    processAreaStatus[data[system[countZ]][subsystem[countY]][detail[countX]][0].Process_Area] = 'flashHighlight_Red';
                    $('#' + idFormat + countZ + '_' + countY + '_' + countX + ' nobr').addClass('flashHighlight_Red');
                }
                else if (max > sl) {
                    processAreaStatus[data[system[countZ]][subsystem[countY]][detail[countX]][0].Process_Area] = 'slHighlight';
                    $('#' + idFormat + countZ + '_' + countY + '_' + countX + ' nobr').addClass('slHighlight');
                }
                else if (max > cl) {
                    processAreaStatus[data[system[countZ]][subsystem[countY]][detail[countX]][0].Process_Area] = 'clHighlight';
                    $('#' + idFormat + countZ + '_' + countY + '_' + countX + ' nobr').addClass('clHighlight');
                }
            }
        }
    }
    ChangeButton(processAreaStatus);
}
function ColorToggle(parameter) {
    var flashing = 90;
    var system = Object.keys(parameter.data);
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(parameter.data[system[countZ]]);
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(parameter.data[system[countZ]][subsystem[countY]]);
            for (var countX = 0; countX < detail.length; countX++) {
                var max = -9999;
                for (var countW = 0; countW < parameter.data[system[countZ]][subsystem[countY]][detail[countX]].length; countW++) {
                    if (max < parameter.data[system[countZ]][subsystem[countY]][detail[countX]][countW].value)
                        max = parameter.data[system[countZ]][subsystem[countY]][detail[countX]][countW].value
                }
                if (max > flashing) {
                    $('#' + parameter.idFormat + countZ + '_' + countY + '_' + countX + ' nobr').toggleClass('flashHighlight_Red');
                    $('#' + parameter.idFormat + countZ + '_' + countY + '_' + countX + ' nobr').toggleClass('flashHighlight_White');
                }
            }
        }
    }
}
function ChangeButton(processAreaStatus) {
    for (var countY in buttonList) {
        var name = $('#' + buttonList[countY]).dxButton('instance').option('text');
        var classSetting = "";
        $('#' + buttonList[countY]).removeClass('flashHighlight_Red slHighlight clHighlight flashHighlight_White');
        $('#' + buttonList[countY] + ' .dx-icon').removeClass('flashHighlight_Red slHighlight clHighlight flashHighlight_White');
        classSetting = $('#' + buttonList[countY]).attr('class');
        classSetting = processAreaStatus[name] + ' ' + classSetting;
        $('#' + buttonList[countY]).attr('class', classSetting);
        classSetting = $('#' + buttonList[countY] + ' .dx-icon').attr('class');
        classSetting = processAreaStatus[name] + ' ' + classSetting;
        $('#' + buttonList[countY] + ' .dx-icon').attr('class', classSetting);
    }
}
$(function () {
    buttonList.push('ect1Button');
    buttonList.push('ect2Button');
    buttonList.push('ect3Button');
    $("#ect1Button").dxButton({
        stylingMode: "contained",
        icon: "isnotblank",
        text: "ECT_1",
        type: "normal",
        width: 120,
        onClick: function () {
            DevExpress.ui.notify("The Contained button was clicked");
        }
    });
    $("#ect2Button").dxButton({
        stylingMode: "contained",
        icon: "isnotblank",
        text: "ECT_2",
        type: "normal",
        width: 120,
        onClick: function () {
            DevExpress.ui.notify("The Contained button was clicked");
        }
    });
    $("#ect3Button").dxButton({
        stylingMode: "contained",
        icon: "isnotblank",
        text: "ECT_3",
        type: "normal",
        width: 120,
        onClick: function () {
            DevExpress.ui.notify("The Contained button was clicked");
        }
    });
});


$(function () {
    $("#templateButton").dxButton({
        stylingMode: "contained",
        icon: "isnotblank",
        type: "normal",
        width: 120,
        template: function (e) {
            return '<p>A</p><p>B</p><p>C</p><p>D</p>';
            
        },
        onClick: function () {
            DevExpress.ui.notify("The Contained button was clicked");
        }
    });
    $("#QQTest").dxPopover({
        target: "#templateButton",
        showEvent: "mouseenter",
        hideEvent: "mouseleave",
        position: "top",
        width: 300
    });


}); 