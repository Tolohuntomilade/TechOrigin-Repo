//QUESTION 1

    let firstNumber = 13;
    let secondNumber = 10;
    let biggerNumber;
    if (secondNumber > firstNumber) {
        biggerNumber=secondNumber;
        secondNumber=firstNumber;
       firstNumber=biggerNumber;
        console.log("The first number and second number is ",firstNumber,",",secondNumber ,"respectively")
    } 
    else{
        console.log("The first number and second number is ",firstNumber,",",secondNumber ,"respectively")
    }
   
    
    
//Question 2
let num1=-4;
let num2=-4;
let num3=-4;

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
let numOne=17;
let numTwo=5;
let numThree=2;
let max=Math.max(numOne,numTwo,numThree);

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
if (number1 <= number2) {
  for (let i = number1; i <= number2; i++) {
    if (!(i % 3 === 0 && i%7==0))
    console.log(i);
  }
} else {
  alert("invalid range!");
}



//Question 5
let range2=10;
let initial2=0;
let sum = 0;
while (initial2 < range2)
{ 
   initial2++;
   sum += initial2;
 }
 console.log(sum);

//Question 6
let range3=5;
let factorial = 1;
do
{ 
   factorial *= range3;
range3--;
} while (range3 > 0);
console.log("n! = " + factorial); 


