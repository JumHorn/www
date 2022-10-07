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

// callback
function sleep2(time, callback, count = 1) {
	function doTask() {
		--count;
		if (count >= 0) {
			callback();
			sleep(time).then(doTask);
		}
	}

	function sleep(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}

	sleep(time).then(doTask);
}

// 能加一个闭包(Closures)版本吗