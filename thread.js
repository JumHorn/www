//main.js

let worker = new Worker("work.js");
worker.postMessage("Hello World");
worker.onmessage = function (event) {
	console.log("Received message " + event.data);
}

// worker.js
this.addEventListener("message", function (e) {
	this.postMessage("You said: " + e.data);
}, false);