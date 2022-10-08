// 通过Autojs部署自动化脚本

// 启动App
launchApp("bilibili");

// 等待
sleep(5000);

// 打印日志到控制台
console.log("log");

//点击事件
setScreenMetrics(720, 1440);
click(200, 800);
longClick(300, 500);
swipe(x1, y1, x2, y2, duration);
