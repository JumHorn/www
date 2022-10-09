
function findAndClick(str) {
	//寻找str按钮并点击
	var self = text(str).findOnce();
	if (self) {
		//获取其中心位置并点击
		click(self.bounds().centerX(), self.bounds().centerY());
	}
	else {
		toast("未检查到str按钮");
		// 中止脚本
		// exit();
	}
}

function swipeUp() {
	swipe(200, 900, 300, 180, 800);
}

function swipeDown() {
	swipe(300, 180, 200, 900, 800);
}

function readPage(count) {
	for (let i = 0; i < count; ++i) {
		swipeUp();
		sleep(1500);
		swipeDown();
		sleep(1500);
		if (i % 5 == 0) {
			click(200, 500);
		}
	}
}

var appName = "bilibili";
launchApp(appName);
sleep(5000);