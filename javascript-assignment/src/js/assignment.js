//QUESTION 1

    var firstNumber = 23;
    var secondNumber = 10;
    var biggerNumber = firstNumber;
    if (secondNumber > firstNumber) {
        console.log(secondNumber)
    } 
    else{
        console.log(biggerNumber);
    }
    
//Question 2
    var num1=4;
    var num2=4;
    var num3=4;

    if ((num1 < 0 && num2 > 0 && num3 > 0) || (num2 < 0 && num1 > 0 && num3 > 0) || (num3 < 0 && num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0 && num3 < 0))
    {
        console.log("-");
    }
    else if ((num1 < 0 && num2 < 0 && num3 > 0) || (num1 < 0 && num3 < 0 && num2 > 0) || (num2 < 0 && num3 < 0 && num1 > 0) || (num1 > 0 && num2 > 0 && num3 > 0))
    {
    console.log("+");
    }
    else if (num1 === 0 || num2 === 0 || num3 === 0)
    {
    console.log("0");
    }
    else{
        console.log("Unknown")
    }


//Question 3
    var numOne=17;
    var numTwo=5;
    var numThree=2;
    var max=Math.max(numOne,numTwo,numThree);

if (max===numThree)
    {
        console.log(numThree);
    }
else if (max===numTwo)
    {
        console.log(numTwo);
    }
else if(max===numOne)
    {
        console.log(numOne);
    }
else{
    console.log("Unknown");
    }

//Question 4

const number1 = 1;
const number2 = 100;
let output = [];
if (number1 <= number2) {
  for (let i = number1; i <= number2; i++) {
    if (i % 3 === 0 && i%7==0)
      output.push(i);
  }
} else {
  alert("invalid range!");
}
console.log(output);


//Question 5
var range2=100;
var initial2=1;
var sum = 1;
while (initial2 < range2)
{ 
   initial2++;
   sum += initial2;
 }
 console.log(sum);

//Question 6
var range3=5;
var factorial = 1;
do
{ 
   factorial *= range3;
range3--;
} while (range3 > 0);
console.log("n! = " + factorial); 


