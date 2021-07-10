var stage = 0;
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
        text: "Row",
        type: "success",
        width: 120,
        stage: 0,
        onClick: function (e) {
            switch (stage) {
                case 1:
                    stage++;
                    Stage_1_Row(kanbandata);
                    break;
                case 3:
                    stage++;
                    Stage_3_Row(kanbandata);
                    break;
                case 4:
                    stage++;
                    Stage_4_Row(kanbandata);
                    break;
                case 5:
            }
        }
    });
    $("#ColButton").dxButton({
        stylingMode: "outlined",
        text: "Col",
        type: "danger",
        width: 120,
        onClick: function (e) {
            switch (stage) {
                case 0:
                    stage++;
                    Stage_0_Col(kanbandata);
                    break;
                case 2:
                    stage++;
                    Stage_1_Row(kanbandata);
                    break;
                case 5:
                    stage++;
                    Stage_5_Col(kanbandata);
                    break;
            }
        }
    });
}
function Stage_Final(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '" class="borderSet"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '" class="borderSet"></div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Name_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Content_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            for (var countX = 0; countX < Math.ceil(detail.length / 8); countX++) {
                $('#Popup_Subsystem_Content_' + countZ + '_' + countY).append('<div id="Popup_DetailBlock_' + countZ + '_' + countY + '_' + countX + '"></div>');
                for (var countW = countX * 8; countW < ((countX + 1) * 8 > detail.length ? detail.length : (countX + 1) * 8); countW++) {
                    $('#Popup_DetailBlock_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '_' + countW + '" data-options="dxItem: {ratio: 1}"></div>');
                    $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '_' + countW).append('<div id="Popup_Detail_Name_' + countZ + '_' + countY + '_' + countX + '_' + countW + '" class="borderSet">' + detail[countX] + '</div>');
                    $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '_' + countW).append('<div id="Popup_Detail_Value_' + countZ + '_' + countY + '_' + countX + '_' + countW + '" class="borderSet">' + data[system[countZ]][subsystem[countY]][detail[countW]] + '</div>');
                }
            }
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
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
    $('#BoxBaseDiv').empty();
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
    }
}
function Stage_0_Row(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '"></div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Name_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Content_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            $('#Popup_Subsystem_Content_' + countZ + '_' + countY).append('<div id="Popup_DetailBlock_' + countZ + '_' + countY + '"></div>');
            for (var countX = 0; countX < detail.length; countX++) {
                $('#Popup_DetailBlock_' + countZ + '_' + countY).append('<div id="Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '" data-options="dxItem: {ratio: 1}"></div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Name_' + countZ + '_' + countY + '_' + countX + '" >' + detail[countX] + '</div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Value_' + countZ + '_' + countY + '_' + countX + '" >' + data[system[countZ]][subsystem[countY]][detail[countX]] + '</div>');
            }
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
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
function Stage_1_Col(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '"></div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Name_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Content_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            $('#Popup_Subsystem_Content_' + countZ + '_' + countY).append('<div id="Popup_DetailBlock_' + countZ + '_' + countY + '"></div>');
            for (var countX = 0; countX < detail.length; countX++) {
                $('#Popup_DetailBlock_' + countZ + '_' + countY).append('<div id="Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '" data-options="dxItem: {ratio: 1}"></div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Name_' + countZ + '_' + countY + '_' + countX + '" >' + detail[countX] + '</div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Value_' + countZ + '_' + countY + '_' + countX + '" >' + data[system[countZ]][subsystem[countY]][detail[countX]] + '</div>');
            }
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
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
function Stage_1_Row(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').empty();
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
    }
}
function Stage_2_Col(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').empty();
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '"></div>');
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
    }
}
function Stage_2_Row(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '"></div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Name_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Content_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            $('#Popup_Subsystem_Content_' + countZ + '_' + countY).append('<div id="Popup_DetailBlock_' + countZ + '_' + countY + '"></div>');
            for (var countX = 0; countX < detail.length; countX++) {
                $('#Popup_DetailBlock_' + countZ + '_' + countY).append('<div id="Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '" data-options="dxItem: {ratio: 1}"></div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Name_' + countZ + '_' + countY + '_' + countX + '" >' + detail[countX] + '</div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Value_' + countZ + '_' + countY + '_' + countX + '" >' + data[system[countZ]][subsystem[countY]][detail[countX]] + '</div>');
            }
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
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
function Stage_3_Col(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '"></div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Name_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Content_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            $('#Popup_Subsystem_Content_' + countZ + '_' + countY).append('<div id="Popup_DetailBlock_' + countZ + '_' + countY + '"></div>');
            for (var countX = 0; countX < detail.length; countX++) {
                $('#Popup_DetailBlock_' + countZ + '_' + countY).append('<div id="Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '" data-options="dxItem: {ratio: 1}"></div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Name_' + countZ + '_' + countY + '_' + countX + '" >' + detail[countX] + '</div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Value_' + countZ + '_' + countY + '_' + countX + '" >' + data[system[countZ]][subsystem[countY]][detail[countX]] + '</div>');
            }
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
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
function Stage_3_Row(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').empty();
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '"></div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Name_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Content_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $("#Popup_Subsystem_Block_" + countZ + '_' + countY).dxBox({
                direction: "row",
                width: "100%"
            });
        }
    }
}
function Stage_4_Col(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '"></div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Name_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Content_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            $('#Popup_Subsystem_Content_' + countZ + '_' + countY).append('<div id="Popup_DetailBlock_' + countZ + '_' + countY + '"></div>');
            for (var countX = 0; countX < detail.length; countX++) {
                $('#Popup_DetailBlock_' + countZ + '_' + countY).append('<div id="Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '" data-options="dxItem: {ratio: 1}"></div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Name_' + countZ + '_' + countY + '_' + countX + '" >' + detail[countX] + '</div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Value_' + countZ + '_' + countY + '_' + countX + '" >' + data[system[countZ]][subsystem[countY]][detail[countX]] + '</div>');
            }
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
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
function Stage_4_Row(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').empty();
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '"></div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Name_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Content_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            for (var countX = 0; countX < Math.ceil(detail.length / 8); countX++) {
                $('#Popup_Subsystem_Content_' + countZ + '_' + countY).append('<div id="Popup_DetailBlock_' + countZ + '_' + countY + '_' + countX + '"></div>');
                for (var countW = countX * 8; countW < ((countX + 1) * 8 > detail.length ? detail.length : (countX + 1) * 8); countW++) {
                    $('#Popup_DetailBlock_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '_' + countW + '" data-options="dxItem: {ratio: 1}"></div>');
                }
            }
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
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
function Stage_5_Col(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').empty();
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '"></div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Name_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Content_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            $('#Popup_Subsystem_Content_' + countZ + '_' + countY).append('<div id="Popup_DetailBlock_' + countZ + '_' + countY + '"></div>');
            for (var countX = 0; countX < detail.length; countX++) {
                $('#Popup_DetailBlock_' + countZ + '_' + countY).append('<div id="Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '" data-options="dxItem: {ratio: 1}"></div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Name_' + countZ + '_' + countY + '_' + countX + '" >' + detail[countX] + '</div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Value_' + countZ + '_' + countY + '_' + countX + '" >' + data[system[countZ]][subsystem[countY]][detail[countX]] + '</div>');
            }
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
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
function Stage_5_Row(data) {
    var system = Object.keys(data);
    $('#BoxBaseDiv').append('<div id="Popup_Base_Col"></div>');
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $('#Popup_Base_Col').append('<div id="Popup_System_Block_' + countZ + '"></div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Name_' + countZ + '" data-options="dxItem: {ratio: 1}">' + system[countZ] + '</div>');
        $('#Popup_System_Block_' + countZ).append('<div id="Popup_System_Content_' + countZ + '" data-options="dxItem: {ratio: 9}"></div>');
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
            $('#Popup_System_Content_' + countZ).append('<div id="Popup_Subsystem_Block_' + countZ + '_' + countY + '"></div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Name_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 1}">' + subsystem[countY] + '</div>');
            $('#Popup_Subsystem_Block_' + countZ + '_' + countY).append('<div id="Popup_Subsystem_Content_' + countZ + '_' + countY + '" data-options="dxItem: {ratio: 9}"></div>');
            $('#Popup_Subsystem_Content_' + countZ + '_' + countY).append('<div id="Popup_DetailBlock_' + countZ + '_' + countY + '"></div>');
            for (var countX = 0; countX < detail.length; countX++) {
                $('#Popup_DetailBlock_' + countZ + '_' + countY).append('<div id="Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX + '" data-options="dxItem: {ratio: 1}"></div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Name_' + countZ + '_' + countY + '_' + countX + '" >' + detail[countX] + '</div>');
                $('#Popup_Detail_Content_' + countZ + '_' + countY + '_' + countX).append('<div id="Popup_Detail_Value_' + countZ + '_' + countY + '_' + countX + '" >' + data[system[countZ]][subsystem[countY]][detail[countX]] + '</div>');
            }
        }
    }
    for (var countZ = 0; countZ < system.length; countZ++) {
        var subsystem = Object.keys(data[system[countZ]]);
        $("#Popup_System_Block_" + countZ).dxBox({
            direction: "row",
            width: "100%"
        });
        for (var countY = 0; countY < subsystem.length; countY++) {
            var detail = Object.keys(data[system[countZ]][subsystem[countY]]);
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