function ReturnChars (sentence : string) : number{
    let x:number;
    x = sentence.length;
    return x;
} 
function ReturnCharsNS (sentence : string) : number{
    let x:number;
    sentence = sentence.replace(/\s+/, "");
    console.log(sentence);
    x = sentence.length;
    return x;
} 
function Both (sentence:string, spaces ? : boolean) : number{
    let x: number;
    if(spaces == true)
    {
        x = ReturnChars(sentence);
    }
    else 
    {
        x = ReturnCharsNS(sentence);
    }
    return x;
}

let howMany:number;
howMany = ReturnChars("Wow Cat Amazin g Li fe");
console.log("There are " + howMany + " characters in Wow Cat Amazin g Li fe");
howMany = ReturnCharsNS("Wow Cat Amazin g Li fe");
console.log("There are " + howMany + " characters in Wow Cat Amazin g Li fe, not including spaces");
howMany = Both("Wow Cat Amazin g Li fe", true);
console.log("There are " + howMany + " characters in Wow Cat Amazin g Li fe, in 'Both' method true");
howMany = Both("Wow Cat Amazin g Li fe");
console.log("There are " + howMany + " characters in Wow Cat Amazin g Li fe, in 'Both' method");

// replace function only works once, solution is complicated and was told not to do it