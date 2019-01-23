var TrueOrFalse = false;
var num1 = 5;
var num2 = 10;
var trueString = "Num1 equals num2-num1\n";
console.log("TrueOrFalse boolean is " + TrueOrFalse + " at the beginning");
if (num1 == (num2 - num1)) {
    TrueOrFalse = true;
    console.log(trueString);
}
console.log("TrueOrFalse boolean is " + TrueOrFalse + " at the end");
console.log("Num1 is " + num1 + " and Num2 is: " + num2);
