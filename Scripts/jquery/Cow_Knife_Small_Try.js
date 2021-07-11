////kanbandata
$(document).ready(function () {
    var system = Object.keys(kanbandata);
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(kanbandata[system[countZ]]);
        $("#Base").append('<div id="SystemBlock' + countZ + '"></div>');
        $("#SystemBlock" + countZ).append('<div id="SystemBlockItemName' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $("#SystemBlock" + countZ).append('<div id="SystemBlockItemContent' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            $("#SystemBlockItemContent" + countZ).append('<div id="SubsystemBlock' + countZ + '_' + countY + '"></div>');
            $("#SubsystemBlock" + countZ + '_' + countY).append('<div id="SubsystemBlockItemName' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $("#SubsystemBlock" + countZ + '_' + countY).append('<div id="SubsystemBlockItemContent' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            var detail = Object.keys(kanbandata[system[countZ]][subsystem[countY]]);
            $("#SubsystemBlockItemContent" + countZ + '_' + countY).append('<div id="DetailBlock' + countZ + '_' + countY + '"></div>');
            for (var countX = 0; countX < detail.length; countX++) {
                $("#DetailBlock" + countZ + '_' + countY).append('<div id="DetailBlockItem' + countZ + '_' + countY + '_' + countX + '" data-options="dxItem: {ratio: 1}"></div>');
                $("#DetailBlockItem" + countZ + '_' + countY + '_' + countX).append('<div id="DetailBlockItemName' + countZ + '_' + countY + '_' + countX + '">' + detail[countX] + '</div>');
                $("#DetailBlockItem" + countZ + '_' + countY + '_' + countX).append('<div id="DetailBlockItemValue' + countZ + '_' + countY + '_' + countX + '">' + kanbandata[system[countZ]][subsystem[countY]][detail[countX]] + '</div>');
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