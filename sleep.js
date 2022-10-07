// timeout
setTimeout(() => { console.log("hello world"); }, 1000)

// origin version
function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

let i = 0;
function doTask() {
	++i;
	if (i < 10) {
		console.log("sleep " + i);
		sleep(5000).then(doTask);
	}
}

sleep(5000).then(doTask);

// avoid global varible
function sleep1(time) {
	let i = 0;
	function doTask() {
		++i;
		if (i < 10) {
			console.log("sleep " + i);
			sleep(time).then(doTask);
		}
	}

	function sleep(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}

	sleep(time).then(doTask);
}

// 闭包(Closures)