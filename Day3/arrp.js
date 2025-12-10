const fruits = ["apple", "banana", "mango", "orange", "grapes"];

for (let i of fruits) {
    console.log(i);
}
fruits.push("papaya");
fruits.pop();
fruits.unshift("kiwi");
let c=fruits.includes("mango");
console.log(c);
let d=fruits.indexOf("banana");
console.log(d);