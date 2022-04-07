
//B64 FUNCTIONS

 var entry = document.getElementById("entry").value;
 console.log(entry);

 // var result = document.getElementById("result").value;


//Base64 FUNCTION
function b64EncodeDecode() {
  if (document.getElementById("code").checked) {    
    var toB64 = window.btoa(entry);
    document.getElementById('paragrafo').innerHTML = toB64;
    
  } else {
    var fromB64 = window.atob(entry);
    document.getElementById('paragrafo').innerHTML = fromB64;
    
  }
}

//CESAR FUNCTIONS
var entryArray = entry.split("");

console.log(entryArray);


//asci converter & INCREMENTER
var converted = [];
function asciiIncrementer(increment) {
  for (let i = 0; i < entryArray.length; i++) {
    
    asciiResults = entryArray[i].charCodeAt();
    console.log(asciiResults);

    if (192 <= asciiResults) {
      asciiResults;
    }

    else if ( 97 <= asciiResults) {
      asciiResults = ((asciiResults - 97 + increment) % 26) + 97
    }
        
    else if (65 <= asciiResults) {
      asciiResults = ((asciiResults - 65 + increment) % 26) + 65;
      
    }
    else if (asciiResults == 32) {
      asciiResults;
    }
    
    converted.push(asciiResults)    
  }
}

//asci converter & DECREMENTER
var converted = [];
function asciiDecrementer(increment) {
  for (let i = 0; i < entryArray.length; i++) {
    
    asciiResults = entryArray[i].charCodeAt();
    console.log(asciiResults);

    if (192 <= asciiResults) {
      asciiResults;
    }

    else if ( 97 <= asciiResults) {
      asciiResults = ((asciiResults - 97 - increment) % 26) + 97
    }
        
    else if (65 <= asciiResults) {
      asciiResults = ((asciiResults - 65 - increment) % 26) + 65;
      
    }
    else if (asciiResults == 32) {
      asciiResults;
    }
    
    converted.push(asciiResults)    
  }
}

//back to unicode

var unicode = [];

function toUnicode() {
  for (let i = 0; i < converted.length; i++) {
    unicodeResults = String.fromCharCode(converted[i])
    unicode.push(unicodeResults)
    console.log(unicode);
  }
  
}
toUnicode()

// array to string
var exitString = '';
console.log(exitString);

function arrToString() {
  for (let i = 0; i < unicode.length; i++) {
    exitString = exitString.concat(unicode[i]);
    console.log(exitString);
  }
  
}
arrToString()


//BOTÃO

var go = document.getElementById('goBtn');
goBtn.addEventListener('click' , start);

var cryptOpts = document.getElementById('crypts')
cryptOpts.addEventListener('change', start)


function start(event) {
  event.preventDefault();

  var option1 = document.getElementById('base64Crypt')
  var option2 = document.getElementById('cesarCrypt')

  if (option1.value == 'base64') {
    b64EncodeDecode();    
  }
  else if (option2.value == "cesar" && document.getElementById("code").checked) {
    asciiConverter();
    toUnicode();
    arrToString();        
  }
  else if (option2.value == "cesar" && document.getElementById("decode").checked) {
    
  }
  
}





//asci incrementer

/*
var entry = "ABC abc";
var cesarArray = entry.split("");
var increment = 2;

//function to ascii + increment
function AsciiIncrementer() {
  for (var i = 0; i < cesarArray.length; i++) {
    var cesarResult = [];
    var ascii = cesarArray[i].charCodeAt();

    if (97 > ascii < 122) {
      var toAscii = ((cesarArray[i].charCodeAt() - 97 + increment) % 26) + 97;
      var toUnicode = String.fromCharCode(toAscii);
      cesarResult.push(toUnicode);

    } else if (65 < ascii < 90) {
      var toAscii = ((cesarArray[i].charCodeAt() - 65 + increment) % 26) + 65;
      var toUnicode = String.fromCharCode(toAscii);
      cesarResult.push(toUnicode);
    }
    
    console.log(cesarResult);
  }
}
AsciiIncrementer();
*/
