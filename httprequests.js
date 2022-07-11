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