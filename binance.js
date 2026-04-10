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

const oldFetch = window.fetch;

window.fetch = async (...args) => {
	const res = await oldFetch(...args);

	const url = args[0];
	if (url.includes('box-list')) {
		const options = args[1];
		const body = JSON.parse(options.body);
		const clone = res.clone();
		clone.json().then(data => {
			// console.warn(body.contentId);
			for (const d of data.data.redBoxList) {
				if (d.canClaim) {
					// console.warn(d.redBoxId);
					// console.warn(d.canClaim);

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
					});
					sleep(2000);
				}
			}
		});
	}
	// if (url.includes('claim-box')) {
	// 	const options = args[1];
	// 	console.warn('打印调试claim-box阶段');
	// 	console.warn(options);
	// }

	return res;
};