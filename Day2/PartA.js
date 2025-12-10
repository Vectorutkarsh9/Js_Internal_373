console.log("============== PART A OUTPUT ==============\n");

console.log("Question 1: Sum of two numbers");
function sumTwo(a, b) { return a + b; }
console.log("Answer:", sumTwo(4, 5), "\n");

console.log("Question 2: Print 'Hello <name>'");
function greet(name) { return `Hello ${name}`; }
console.log("Answer:", greet("Utkarsh"), "\n");

console.log("Question 3: Even/Odd Check");
function isEven(n) { return n % 2 === 0; }
console.log("Answer: 7 is even?", isEven(7), "\n");

console.log("Question 4: Celsius to Fahrenheit");
function cToF(c) { return (c * 9/5) + 32; }
console.log("Answer:", cToF(0), "°F\n");

console.log("Question 5: Max among 3 numbers");
function maxOf3(a,b,c) { return Math.max(a,b,c); }
console.log("Answer:", maxOf3(3,9,1), "\n");

console.log("Question 6: Find string length");
function strLen(s) { return s.length; }
console.log("Answer:", strLen("hello"), "\n");

console.log("Question 7: Toggle Boolean value");
function toggleBool(x) { return !x; }
console.log("Answer:", toggleBool(true), "\n");

console.log("Question 8: Concatenate two strings");
function concat(a,b) { return String(a) + String(b); }
console.log("Answer:", concat("Hello"," World"), "\n");

console.log("Question 9: Check Positive / Negative / Zero");
function signOf(n){
  if(n>0) return "Positive";
  if(n<0) return "Negative";
  return "Zero";
}
console.log("Answer:", signOf(-2), "\n");

console.log("Question 10: var / let / const Example");
function varLetConstExample(){
  var x = 1; x = 2;
  let y = 10;
  const z = 100;
  return {x,y,z};
}
console.log("Answer:", varLetConstExample(), "\n");

console.log("Question 11: Multiplication Table of 5");
function multiplicationTable(n, upto=10){
  const arr = [];
  for(let i=1;i<=upto;i++) arr.push(`${n} x ${i} = ${n*i}`);
  return arr.join("\n");
}
console.log(multiplicationTable(5,10), "\n");

console.log("Question 12: Sum of first 10 natural numbers");
function sumFirstN(n){
  return n*(n+1)/2;
}
console.log("Answer:", sumFirstN(10), "\n");

console.log("Question 13: Get day name using switch-case");
function dayName(num){
  switch(num){
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Invalid day";
  }
}
console.log("Answer:", dayName(3), "\n");

console.log("Question 14: Factorial of a number");
function factorial(n){
  if(n < 0) return undefined;
  let f = 1;
  for(let i=2;i<=n;i++) f *= i;
  return f;
}
console.log("Answer:", factorial(5), "\n");

console.log("Question 15: Voting eligibility (>=18)");
function isEligibleToVote(age){ return age >= 18; }
console.log("Answer:", isEligibleToVote(17), "\n");

console.log("============== END OF PART A ==============");
