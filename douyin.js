// ==UserScript==
// @name         douyin live auto comment
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
	addButton();
})();

// async sleep
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// 自动刷评论
async function sendComment() {
	const active = document.activeElement;
	if (active && active.isContentEditable) {
		active.textContent = '大家好';
	}
	await sleep(1000);
	// click at (1290,600)相对于页面位置，不通用
	simulateClick(1290, 660);
}

function addButton() {
	// 创建按钮
	const btn = document.createElement('button');
	btn.textContent = '开始';
	Object.assign(btn.style, {
		position: 'fixed',
		top: '20px',
		right: '20px',
		zIndex: 99999,
		backgroundColor: '#409EFF',
		color: 'white',
		border: 'none',
		borderRadius: '8px',
		padding: '10px 16px',
		cursor: 'pointer',
		boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
		fontSize: '14px'
	});

	document.body.appendChild(btn);

	// 控制状态
	let running = false;

	btn.addEventListener('click', () => {
		running = !running;
		if (running) {
			btn.textContent = '停止';
			btn.style.backgroundColor = '#E74C3C';
			startTask();
		} else {
			btn.textContent = '开始';
			btn.style.backgroundColor = '#409EFF';
			stopTask();
		}
	});

	async function startTask() {
		console.log('任务开始');
		// 执行重复发送评论
		for (let i = 0; i < 100 && running; i++) {
			sendComment();
			await sleep(5000);
		}
	}

	function stopTask() {
		console.log('任务停止');
		// TODO: 这里写停止逻辑
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

function simulateKeyPressEnter() {
	var evt = new KeyboardEvent('keydown', {
		key: 'Enter',
		code: 'Enter',
		keyCode: 13,
		bubbles: true,
		cancelable: true,
		composed: true
	});
	document.dispatchEvent(evt);
}


// 显示当前鼠标坐标位置{e.pageX,e.pageY} {e.offsetX, e.offsetY} {e.clientX, y: e.clientY}
// document.addEventListener('click', function (e) {
// 	console.log('相对于浏览器窗口的坐标:', { x: e.clientX, y: e.clientY });
// });
function simulateClick(x, y) {
	// 1. Find the element at the specified coordinates
	const targetElement = document.elementFromPoint(x, y);

	// 2. Check if an element was found
	if (!targetElement) {
		// console.warn(`No element found at coordinates (${x}, ${y})`);
		return;
	}

	// 3. Create a new 'click' event
	// We use the modern MouseEvent constructor
	const clickEvent = new MouseEvent('click', {
		view: window,// The window object
		bubbles: true,// Event should bubble up through the DOM
		cancelable: true,// Event can be canceled
		clientX: x,// The x-coordinate
		clientY: y// The y-coordinate
		// You can also add other properties like screenX, screenY, ctrlKey, etc.
	});

	// 4. Dispatch the event on the target element
	targetElement.dispatchEvent(clickEvent);
}