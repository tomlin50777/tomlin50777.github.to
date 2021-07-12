var functionList = [];
$(function () {
	setInterval(Run, 500);
});
function Run() {
	for (var count in functionList)
		functionList[count].function(functionList[count].parameter);
}
function SetFunction(functionItem) {
	functionList.push(functionItem);
}