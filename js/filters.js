//kebab filter
app.filter('kebab', function () {
  return function (input) {
      return input.replace(/_/g , "-");
  };
});

//camel filter
app.filter('camel', function () {
  return function (input) {
    var inputSplit = input.split(/-|_/);

    //capitalized second word
    var capitalize =inputSplit[1].charAt(0).toUpperCase() + inputSplit[1].substring(1);

    //rejoin
    var updated=inputSplit[0]+capitalize;

    return updated;
  }

});

//pigLatin
app.filter('pigLatin', function () {
  return function (input) {
       var vowels =['a','e','i','o','u'];
  var vowelIndex = [];
  var inputCopy = input.split('');
  var inputCopy2 = input.split('');
  var translated = "";

  for (var i = 0; i < inputCopy.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (inputCopy[i] === vowels[j]) {
        vowelIndex.push(i);
      }
    }
  }

  if (vowelIndex[0] === 0) {
    var translated = input+"-yay";
  } else {
    var removed = inputCopy2.splice(0,vowelIndex[0]);
    var output = inputCopy.splice(vowelIndex[0]);
    var translated = output.join('')+"-"+removed.join('') +"ay";
  }

  return translated;
  };
});

//redact filter
app.filter('redact', function () {
  return function (input) {
    return input.replace(input, "REDACTED");
  };
});


function redact (input) {
  return input.replace(input, "REDACTED");
}

//working
// function pigLatin (input) {
//   var vowels =['a','e','i','o','u'];
//   var vowelIndex = [];
//   var inputCopy = input.split('');
//   var inputCopy2 = input.split('');
//   var translated = "";

//   for (var i = 0; i < inputCopy.length; i++) {
//     for (var j = 0; j < vowels.length; j++) {
//       if (inputCopy[i] === vowels[j]) {
//         vowelIndex.push(i);
//       }
//     }
//   }

//   if (vowelIndex[0] === 0) {
//     var translated = input+"-yay";
//   } else {
//     var removed = inputCopy2.splice(0,vowelIndex[0]);
//     var output = inputCopy.splice(vowelIndex[0]);
//     var translated = output.join('')+"-"+removed.join('') +"ay";
//   }

//   return translated;
// };





