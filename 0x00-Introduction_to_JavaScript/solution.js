//1. add two numbers

function sum(num1 , num2){
  return num1+num2;

};
console.log(sum(3 ,2));
console.log(sum(3 ,2));
console.log(sum(3 ,2));


//2.return next number from the number passed
function nextNumber(num){
  return num + 1;

};
console.log(nextNumber(1));
console.log(nextNumber(20));
console.log(nextNumber(50));

//3.find perimeter of a rectangle
function perimeter(length , width){
  let result=((2*length)+(2*width)); 
  return result;
}
console.log(perimeter(2 , 5));
console.log(perimeter(20 , 25));
console.log(perimeter(10 , 15));

//4.return something to me
function something(str){
  return "something " + str;
}
console.log(something("is better than nothing"));
console.log(something("jack daniels"))
console.log(something("pinocchio"))

//5.bob's bmi vs janes bmi
function bmi(bob , jane){
  if(bob > jane){
    return "bob";
  }
  else if (jane > bob){
    return "jane";
  }
  else {
    return "equal";
}
}
console.log(bmi(25 , 18));
console.log(bmi(18 , 18));
console.log(bmi(25 , 40));

//6.basketball points
function basketballPoints(twoPointer , threePointer){
  return (2*twoPointer) + (3*threePointer);
}
console.log(basketballPoints(1 , 1));
console.log(basketballPoints(7 , 5));
console.log(basketballPoints(12 , 5));

//7.less than 100
function isSumLessThan100(number1 , number2){
  if(number1 + number2 < 100) {
    return false;
  }
else {
  return true;
}
}
console.log(isSumLessThan100(20 , 40));
console.log(isSumLessThan100(70 , 40));
console.log(isSumLessThan100(50 , 50));

//8.convert minutes to seconds
function convertMinutesToSeconds(minutes){
    const seconds = minutes*60;
    if(seconds ==0){
      return 0;
    }
    else if(seconds == 1){
      return "1 second";
    }
    else{
      return seconds +' seconds';
    }
}
console.log(convertMinutesToSeconds(60));
console.log(convertMinutesToSeconds(1));
console.log(convertMinutesToSeconds(90));
console.log(convertMinutesToSeconds(1/60));

//9.greater among three
function greater(num1 , num2 , num3){
  return Math.max (num1 , num2, num3) ;
}
console.log(greater(15 , 50 , 90));
console.log(greater(85 , 5, 90));
console.log(greater(40 , 15, 37));

//10.less among three
function less(num1 , num2 , num3){
  return Math.min (num1 , num2, num3) ;
}
console.log(less(15 , 50 , 90));
console.log(less(85 , 5, 90));
console.log(less(40 , 15, 37));

//11.footballPoints
function footballPoints(won , drawn , lost){
  return(3*won) +(1*drawn) +(0*lost);
}
console.log(footballPoints(5 , 0 , 2));
console.log(footballPoints(5 , 2, 0));
console.log(footballPoints(9 , 4, 0));

//12.even numbers
function isEven(number){
    return number % 2==0;
}
  for(let i = 0; i<=101; i++){
    if(isEven(i)){
      console.log(i +": true");
    }
    else{
      console.log(i +": false");
    }
  }

