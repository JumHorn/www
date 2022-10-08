var appName = "bilibili";

launchApp(appName);
sleep(5000);

//寻找我的按钮并点击
var self = text("我的").findOnce();
if (self) {
	//获取其中心位置并点击
	click(self.bounds().centerX(), self.bounds().centerY());
	sleep(3000);
}
else {
	toast("未检查到我的按钮");
	//中止脚本
	exit();
}

//寻找我的收藏按钮并点击
var collect = text("我的收藏").findOnce();
if (collect) {
	click(collect.bounds().centerX(), collect.bounds().centerY());
}
else {
	toast("未检查到我的收藏按钮");
	//中止脚本
	exit();
}