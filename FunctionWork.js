function ReturnChars(sentence) {
    var x;
    x = sentence.length;
    return x;
}
function ReturnCharsNS(sentence) {
    var x;
    sentence = sentence.replace(/\s+/, "");
    console.log(sentence);
    x = sentence.length;
    return x;
}
function Both(sentence, spaces) {
    var x;
    if (spaces == true) {
        x = ReturnChars(sentence);
    }
    else {
        x = ReturnCharsNS(sentence);
    }
    return x;
}
var howMany;
howMany = ReturnChars("Wow Cat Amazin g Li fe");
console.log("There are " + howMany + " characters in Wow Cat Amazin g Li fe");
howMany = ReturnCharsNS("Wow Cat Amazin g Li fe");
console.log("There are " + howMany + " characters in Wow Cat Amazin g Li fe, not including spaces");
howMany = Both("Wow Cat Amazin g Li fe", true);
console.log("There are " + howMany + " characters in Wow Cat Amazin g Li fe, in 'Both' method true");
howMany = Both("Wow Cat Amazin g Li fe");
console.log("There are " + howMany + " characters in Wow Cat Amazin g Li fe, in 'Both' method");
// replace function only works once, solution is complicated and was told not to do it
