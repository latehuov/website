function loadDoc(page) {
  var xhr = new XMLHttpRequest();
xhr.open("GET", page, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("content").innerText = xhr.responseText;
  }
}
xhr.send();
}

window.onload=function loadFirst() {
  var xhr = new XMLHttpRequest();
xhr.open("GET", "./website/main.html", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("content").innerText = xhr.responseText;
  }
}
xhr.send();
}