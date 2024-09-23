"use strict";
// 1 
let num = 3;
if (num % 2 === 0) {
    console.log(`${num} is even.`);
}
else {
    console.log(`${num} is odd.`);
}
console.log("------------------------------");
// 2
let prodPrices = [120, 300, 45, 1000, 250];
let thresPrice = 200;
for (let i = 0; i < prodPrices.length; i++) {
    if (prodPrices[i] > thresPrice) {
        console.log(prodPrices[i]);
    }
}
console.log("------------------------------");
let users = [
    { name: "S", age: 40, isAdmin: true },
    { name: "T", age: 35, isAdmin: false }
];
let oldestAdmin = null;
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
        if (oldestAdmin === null || users[i].age > oldestAdmin.age) {
            oldestAdmin = users[i];
        }
    }
}
if (oldestAdmin) {
    console.log(`The oldest admin is ${oldestAdmin.name}.`);
}
