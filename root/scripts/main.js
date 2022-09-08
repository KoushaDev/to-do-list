// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
function setSessionItem(name, value) {
  var mySession;
  try {
      mySession = JSON.parse(localStorage.getItem('mySession'));
  } catch (e) {
      console.log(e);
      mySession = {};
  }

  mySession[name] = value;

  mySession = JSON.stringify(mySession);

  localStorage.setItem('mySession', mySession);
}

function getSessionItem(name) {
  var mySession = localStroage.getItem('mySession');
  if (mySession) {
      try {
          mySession = JSON.stringify(mySession);
          return mySession[name];
      } catch (e) {
          console.log(e);
      }
  }
}

function restoreSession(data) {
  for (var x in data) {
      //use saved data to set values as needed
      console.log(x, data[x]);
  }
}



window.addEventListener('load', function(e) {
  var mySession = localStorage.getItem('mySession');
  if (mySession) {
      try {
          mySession = JSON.parse(localStorage.getItem('mySession'));
      } catch (e) {
          console.log(e);
          mySession = {};
      }
      restoreSession(mySession);
  } else {
      localStorage.setItem('mySession', '{}');
  }

  setSessionItem('foo', Date.now()); //should change each time

  if (!mySession.bar) {
      setSessionItem('bar', Date.now()); //should not change on refresh
  }
}, false);