function reqListener () {
  console.log(this.responseText);
}

var url = "http://127.0.0.1:9000"
var req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("POST", url);
req.setRequestHeader("Content-Type", "text\/plain")
req.send();

