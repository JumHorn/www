// normal js functions

function onClear() {
	document.getElementById("vipurl").value = "";
}

function onPlay() {
	var vipurl = document.getElementById("vipurl").value;
	if (vipurl == "") {
		alert("请输入视频链接");
	} else {
		var selectedStream = document.getElementById("stream");
		var streamurl = selectedStream.options[selectedStream.selectedIndex].value;
		var play = document.getElementById("play");
		play.src = streamurl + vipurl;
	}
}

async function onLoad() {
	const response = await fetch('/api/vipurl');
	const vipurl = await response.json();
	if (!vipurl || vipurl.length === 0)
		return;
	var selecturl = document.getElementById("stream");
	selecturl.replaceChildren(); // 删除所有子节点
	let index = 0;
	for (const url of vipurl) {
		++index;
		const opt = document.createElement("option");
		opt.value = url;
		opt.textContent = "线路" + index;
		if (index === 1) {
			opt.setAttribute("selected", "");
			opt.selected = true;
		}
		selecturl.appendChild(opt)
	}
}

window.onload = onLoad();