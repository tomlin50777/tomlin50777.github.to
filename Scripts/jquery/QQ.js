$(function () {
	$('#qq').text('5446');
});
$(function () {
    $("#gg").dxButton({
        stylingMode: "contained",
        text: "Test",
        icon: "add",
        type: "success",
        hint: "Click will boom",
        width: 120,
        height: 120,
        onClick: function () {
            DevExpress.ui.notify("The Contained button was clicked");
        }
    });
});
