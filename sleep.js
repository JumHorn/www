setTimeout(() => { console.log("hello world"); }, 1000)

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