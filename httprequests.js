// XMLHttpRequest(XHR)

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("demo").innerHTML = this.responseText;
			// var jsonObj = JSON.parse(this.responseText);
		}
	};
	xhttp.open("GET", "ajax_info.txt", true);
	xhttp.send();
}

// fetch
let response = fetch(url);

fetch(url)
	.then(response => {
		// handle the response
	})
	.catch(error => {
		// handle the error
	});

async function fetchText() {
	let response = await fetch('/readme.txt');
	let data = await response.text();
	console.log(data);
}