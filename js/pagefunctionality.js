function loadDoc(page) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", page, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // JSON.parse does not evaluate the attacker's scripts.
      var resp = JSON.parse(xhr.responseText);
    }
  }
  xhr.send();
  }
  
  window.onload=function loadFirst() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", './website/main.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // JSON.parse does not evaluate the attacker's scripts.
        var resp = JSON.parse(xhr.responseText);
      }
    }
    xhr.send();
}