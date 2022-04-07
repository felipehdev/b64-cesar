
//B64 FUNCTIONS

// var entry = document.getElementById("entry");
// var entry = entry.value;
var entry = 'Sulzc2ljYQ=='

// var result = document.getElementById("result");
// var result = result.value;


//Base64 functions
function b64Code(entry) {
  var toB64 = window.btoa(entry);
  console.log(window.btoa(entry));
}

function b64Decode(entry) {
  var fromB64 = window.atob(entry);
  console.log(window.atob(entry));
}

function b64EncodeDecode(params) {
  if (document.getElementById("code").checked) {
    b64Code(entry);
    //imprimir resultado no textarea de baixo
  } else if (document.getElementById("decode").checked) {
    b64Decode(entry);
    //imprimir resultado no textarea de baixo
  }
}
b64Code(entry)
b64Decode(entry)

//CESAR FUNCTIONS
var entry = 'joao JOAO Z';
var entryArray = entry.split("");

console.log(entryArray);


//asci converter & incrementer
var converted = [];
function asciiConverter(increment) {
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
      asciiResults = 32;
    }
    
    converted.push(asciiResults)    
  }
}
asciiConverter(2)
console.log(converted);

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
