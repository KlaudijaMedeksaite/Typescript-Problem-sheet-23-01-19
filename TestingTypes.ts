let TrueOrFalse:boolean = false;
let num1:number = 5;
let num2:number = 10;
let trueString:string = "Num1 equals num2-num1\n";

console.log("TrueOrFalse boolean is " + TrueOrFalse + " at the beginning");
if(num1 == (num2-num1))
{
    TrueOrFalse = true;
    console.log(trueString);
}
console.log("TrueOrFalse boolean is " + TrueOrFalse + " at the end");
console.log("Num1 is " + num1 + " and Num2 is: " + num2);