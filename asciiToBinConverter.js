// This is an utility function to convert an ASCII value to it's corresponding BIN value


function ascii2binValueConverter(asciiValue) {
    // this function is responsible for the conversion
    if (asciiValue.length == 0) return;

    // if the ASCII value exists
    var binValue = '';
    for (var i = 0; i < asciiValue.length; i++) {
        binValue += ('00000000' + asciiValue.charCodeAt(i).toString(2)).slice(-8);
    }

    return binValue;
  }