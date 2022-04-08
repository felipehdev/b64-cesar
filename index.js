//B64 FUNCTIONS
function b64EncodeDecode() {
  
  var entry = document.getElementById("entry").value;
  if ((document.getElementById("code").checked = true)) {
    var toB64 = window.btoa(entry);
    document.getElementById("result").innerText = toB64;
  } else if ((document.getElementById("decode").checked = true)) {
    var fromB64 = window.atob(entry);
    document.getElementById("result").innerText = fromB64;
    b64Decode(entry);
  }
}

//CESAR FUNCTIONS

//asci converter & INCREMENTER
var converted = [];
function asciiIncrementer(jump) {
  var jump = getElementById("jump").value;

  var entry = document.getElementById("entry").value;
  var entryArray = entry.split("");

  for (let i = 0; i < entryArray.length; i++) {
    asciiResults = entryArray[i].charCodeAt();
    console.log(asciiResults);

    if (192 <= asciiResults) {
      asciiResults;
    } else if (97 <= asciiResults) {
      asciiResults = ((asciiResults - 97 + jump) % 26) + 97;
    } else if (65 <= asciiResults) {
      asciiResults = ((asciiResults - 65 + jump) % 26) + 65;
    } else if (asciiResults == 32) {
      asciiResults;
    }

    converted.push(asciiResults);
  }
}
console.log(converted);

//asci converter & DECREMENTER
var converted = [];
function asciiDecrementer(jump) {
  var jump = getElementById("jump").value;

  var entry = document.getElementById("entry").value;
  var entryArray = entry.split("");

  for (let i = 0; i < entryArray.length; i++) {
    asciiResults = entryArray[i].charCodeAt();
    console.log(asciiResults);

    if (192 <= asciiResults) {
      asciiResults;
    } else if (97 <= asciiResults) {
      asciiResults = ((asciiResults - 97 - jump) % 26) + 97;
    } else if (65 <= asciiResults) {
      asciiResults = ((asciiResults - 65 - jump) % 26) + 65;
    } else if (asciiResults == 32) {
      asciiResults;
    }

    converted.push(asciiResults);
  }
}
console.log(converted);

//back to unicode

var unicode = [];

function toUnicode() {
  for (let i = 0; i < converted.length; i++) {
    unicodeResults = String.fromCharCode(converted[i]);
    unicode.push(unicodeResults);
    console.log(unicode);
  }
}
console.log(unicode);

// array to string

var exitString = "";
console.log(exitString);

function arrToString() {
  for (let i = 0; i < unicode.length; i++) {
    exitString = exitString.concat(unicode[i]);
    console.log(exitString);
  }
}
arrToString();

console.log(exitString);

// INTERACTIONS

var crypts = document.getElementById("crypts");

crypts.addEventListener("change", cryptoMethod);

function cryptoMethod(event) {
  event.preventDefault();

  if ((crypts.selectedIndex = 1)) {
    b64EncodeDecode();
  } else if ((crypts.selectedIndex = 2)) {
    if ((document.getElementById("code").checked = true)) {
      asciiIncrementer(jump);
      toUnicode();
      arrToString();
    } else if ((document.getElementById("decode").checked = true)) {
      asciiDecrementer(jump);
      toUnicode();
      arrToString();
    }
  }
}

var go = document.getElementById("go-btn");

go.addEventListener("click", cryptoMethod);

/*
function resultText(exitString) {
  var result = document.getElementById("result");
  var p = document.createElement("p");
  p.innerText = exitString;
  result.innerHTML = "";
  result.append(p);
}
*/
