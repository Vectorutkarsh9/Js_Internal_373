let user = { name: "Aman", age: 21, course: "JS" };


let jsonData = JSON.stringify(user);

console.log(jsonData);

let userObj = JSON.parse(jsonData);

console.log(userObj);
