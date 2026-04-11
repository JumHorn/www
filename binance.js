// ==UserScript==
// @name         binance claim envelope
// @namespace    https://www.binance.com/
// @version      2026-04-10
// @description  binance claim envelope
// @author       JumHorn
// @match        https://www.binance.com/zh-CN/square/*
// @icon         https://jumhorn.com/favicon.ico
// @grant        none
// ==/UserScript==

// async sleep
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const counter = (function () {
	let value = 0; // static 变量

	return {
		peek() {
			return value; // 只读
		},
		inc() {
			value++; // 只自增
		},
		reset() {
			value = 0; //重置
		}
	};
})();

// 记录进入直播间时间
let inRoomTime = Date.now();

const oldFetch = window.fetch;

window.fetch = async (...args) => {

	const url = args[0];
	if (url.includes('box-list')) {
		const options = args[1];
		const body = JSON.parse(options.body);
		if (counter.peek() >= 29) {//通过重置进入直播间时间，重置红包
			inRoomTime = Date.now();
			counter.reset();
		}
		const res = await oldFetch("/bapi/square/v1/private/square-live/box/box-list", {
			method: "POST",
			mode: "cors",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				contentId: Number(body.contentId),
				inRoomTime: inRoomTime
			})
		});
		const clone = res.clone();
		clone.json().then(data => {
			// console.warn(body.contentId);
			let claimCount = -1;
			for (const d of data.data.redBoxList) {
				++claimCount;
				if (d.canClaim) {
					// console.warn(d.redBoxId);
					// console.warn(d.canClaim);
					if (claimCount <= counter.peek())// 跳过领取失败的红包
						continue;
					oldFetch("/bapi/square/v1/private/square-live/box/claim-box", {
						method: "POST",
						mode: "cors",
						credentials: "include",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							contentId: Number(body.contentId),
							redBoxId: d.redBoxId
						})
					}).then(res => res.json())
						.then(data => {
							if (data.success === false) {
								counter.inc();
							}
						});
					sleep(2000);
				}
			}
		});
		//处理完box-list请求，要返回
		return res;
	}
	// if (url.includes('claim-box')) {
	// 	const options = args[1];
	// 	console.warn('打印调试claim-box阶段');
	// 	console.warn(options);
	// }

	// 其他请求，调用默认fetch函数
	const res = await oldFetch(...args);
	return res;
};