////kanbandata
$(document).ready(function () {
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
                $("#DetailBlockItem" + countZ + '_' + countY + '_' + countX).append('<div id="DetailBlockItemName' + countZ + '_' + countY + '_' + countX + '" class="borderSer">' + detail[countX] + '</div>');
                $("#DetailBlockItem" + countZ + '_' + countY + '_' + countX).append('<div id="DetailBlockItemValue' + countZ + '_' + countY + '_' + countX + '" class="borderSer"><nobr class="noHighlight">¡´</nobr>' + kanbandata[system[countZ]][subsystem[countY]][detail[countX]] + '</div>');
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

            }

        }
    }
    ColorJudge(kanbandata, 'DetailBlockItemValue');
    SetFunction({ function: ColorToggle, parameter: { data: kanbandata, idFormat: 'DetailBlockItemValue' } });
});

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
                data[system[countZ]][subsystem[countY]][detail[countX]] = Math.floor(Math.random() * 10);
            }

        }
    }
    return data;
}
function ColorJudge(data, idFormat) {
    var flashing = 8;
    var sl = 6;
    var cl = 4;
    var system = Object.keys(data);
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            for (var countX = 0; countX < detail.length; countX++) {
                if (data[system[countZ]][subsystem[countY]][detail[countX]] > flashing) {
                    $('#' + idFormat + countZ + '_' + countY + '_' + countX + ' nobr').addClass('flashHighlight_Red');
                }
                else if (data[system[countZ]][subsystem[countY]][detail[countX]] > sl) {
                    $('#' + idFormat + countZ + '_' + countY + '_' + countX + ' nobr').addClass('slHighlight');
                }
                else if (data[system[countZ]][subsystem[countY]][detail[countX]] > cl) {
                    $('#' + idFormat + countZ + '_' + countY + '_' + countX + ' nobr').addClass('clHighlight');
                }
            }
        }
    }
}
function ColorToggle(parameter) {
    var flashing = 8;
    var system = Object.keys(parameter.data);
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(parameter.data[system[countZ]]);
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(parameter.data[system[countZ]][subsystem[countY]]);
            for (var countX = 0; countX < detail.length; countX++) {
                if (parameter.data[system[countZ]][subsystem[countY]][detail[countX]] > flashing) {
                    $('#' + parameter.idFormat + countZ + '_' + countY + '_' + countX + ' nobr').toggleClass('flashHighlight_Red');
                    $('#' + parameter.idFormat + countZ + '_' + countY + '_' + countX + ' nobr').toggleClass('flashHighlight_White');
                }
            }
        }
    }
}