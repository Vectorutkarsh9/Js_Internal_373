console.log("============== PART B OUTPUT ==============\n");

// 16. Prime check
let primeInput = 17;
console.log("Question 16: Check Prime");
console.log("Input:", primeInput);
function isPrime(n){
  if(n <= 1) return false;
  if(n <= 3) return true;
  if(n % 2 === 0 || n % 3 === 0) return false;
  for(let i=5;i*i<=n;i+=6){
    if(n % i === 0 || n % (i+2) === 0) return false;
  }
  return true;
}
console.log("Output:", isPrime(primeInput), "\n");

// 17. Sum of digits
let digitInput = 123;
console.log("Question 17: Sum of digits");
console.log("Input:", digitInput);
function sumOfDigits(n){
  n = Math.abs(Math.floor(n));
  let sum = 0;
  while(n>0){ sum += n % 10; n = Math.floor(n/10); }
  return sum;
}
console.log("Output:", sumOfDigits(digitInput), "\n");

// 18. Reverse string
let strInput = "hello";
console.log("Question 18: Reverse string");
console.log("Input:", strInput);
function reverseString(s){
  let res = "";
  for(let i = s.length-1; i>=0; i--) res += s[i];
  return res;
}
console.log("Output:", reverseString(strInput), "\n");

// 19. Grade from marks
let markInput = 82;
console.log("Question 19: Grade from marks");
console.log("Input:", markInput);
function gradeFromMarks(mark){
  if(mark >= 90) return "A";
  if(mark >= 75) return "B";
  if(mark >= 50) return "C";
  return "Fail";
}
console.log("Output:", gradeFromMarks(markInput), "\n");

// 20. Calculator
let a = 5, b = 6, op = "*";
console.log("Question 20: Calculator");
console.log("Input:", a, op, b);
function calc(a,b,op){
  switch(op){
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? "Division by zero" : a / b;
    default: return "Unknown operator";
  }
}
console.log("Output:", calc(a,b,op), "\n");

// 21. Count vowels
let vowelInput = "Education";
console.log("Question 21: Count vowels");
console.log("Input:", vowelInput);
function countVowels(s){
  const vowels = new Set(['a','e','i','o','u']);
  let count = 0;
  for(const ch of s.toLowerCase()) if(vowels.has(ch)) count++;
  return count;
}
console.log("Output:", countVowels(vowelInput), "\n");

// 22. Fibonacci
let fibInput = 7;
console.log("Question 22: Fibonacci series");
console.log("Input:", fibInput);
function fibonacci(n){
  const res = [];
  if(n >= 1) res.push(0);
  if(n >= 2) res.push(1);
  while(res.length < n) res.push(res[res.length-1] + res[res.length-2]);
  return res;
}
console.log("Output:", fibonacci(fibInput).join(", "), "\n");

// 23. Min/Max
let arrInput = [3,5,1,9];
console.log("Question 23: Min & Max of array");
console.log("Input:", arrInput);
function minMax(arr){
  let min = arr[0], max = arr[0];
  for(const v of arr){
    if(v < min) min = v;
    if(v > max) max = v;
  }
  return {min, max};
}
console.log("Output:", minMax(arrInput), "\n");

// 24. Menu Program
let choice = 3, x = 4, y = 5;
console.log("Question 24: Menu Program");
console.log("Input: choice =", choice, ", numbers =", x, ",", y);
function menuProgram(choice, a, b){
  switch(choice){
    case 1: return a + b;
    case 2: return a - b;
    case 3: return a * b;
    case 4: return b === 0 ? "Division by zero" : a / b;
    default: return "Invalid choice";
  }
}
console.log("Output:", menuProgram(choice, x, y), "\n");

// 25. Armstrong number
let armInput = 153;
console.log("Question 25: Armstrong Number Check");
console.log("Input:", armInput);
function isArmstrong(n){
  const s = String(Math.abs(n));
  const p = s.length;
  let sum = 0;
  for(const ch of s) sum += Math.pow(Number(ch), p);
  return sum === Math.abs(n);
}
console.log("Output:", isArmstrong(armInput), "\n");

console.log("============== END OF PART B ==============");
