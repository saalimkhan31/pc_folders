window.onkeydown = detectKey;

function detectKey(e) {
  var posLeft = document.getElementById("myId").offsetLeft;
  var posTop = document.getElementById("myId").offsetTop;

  if (e.keyCode == "38") {
    document.getElementById("myId").style.marginTop = posTop - 58 + "px";
  } else if (e.keyCode == "40") {
    document.getElementById("myId").style.marginTop = posTop + 58 + "px";
  } else if (e.keyCode == "37") {
    document.getElementById("myId").style.marginLeft = posLeft - 58 + "px";
  } else if (e.keyCode == "39") {
    document.getElementById("myId").style.marginLeft = posLeft + 58 + "px";
  }
}

// 37 left
// 38 top
// 39 right
// 40 down
