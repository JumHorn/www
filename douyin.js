// ==UserScript==
// @name         douyin live without comment
// @namespace    http://douyin.com/
// @version      2025-10-19
// @description  coming to douyin live without comment!
// @author       You
// @match        https://live.douyin.com/*
// @icon         https://jumhorn.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// Your code here...
	setTimeout(closeComment, 3000);

})();

// 自动刷评论
function sendComment() {
	const selector = "#chatInput";
	const btn = document.querySelector(selector);
	if (btn) {
		btn.click();
		console.log("✅ 已点击关闭弹幕按钮：", selector);
	} else {
		console.log("❌ 未找到按钮：", selector);
	}
}

// 关闭弹幕
function closeComment() {
	simulateKeyPress('b');
}

// 模拟键盘发送字符
function simulateKeyPress(char) {
	var evt = new KeyboardEvent('keydown', {
		key: char,
		code: 'Key' + char.toUpperCase(),
		shiftKey: false,
		ctrlKey: false,
		metaKey: false
	});
	document.dispatchEvent(evt);
}
