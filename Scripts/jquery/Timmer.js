var functionList = [];
var stepCount = [];
var nowCount = 0;
$(function () {
	setInterval(Run, 500);
});
function Run() {
	nowCount++;
	for (var count in functionList) {
		if (nowCount % stepCount[count] == 0)
			functionList[count].function(functionList[count].parameter);
	}
}
function SetFunction(functionItem, step) {
	functionList.push(functionItem);
	stepCount.push(step);
}