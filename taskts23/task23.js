// 1 
var num = 3;
debugger;
if (num % 2 === 0) {
    console.log("".concat(num, " is even."));
}
else {
    console.log("".concat(num, " is odd."));
}
console.log("------------------------------");
// 2
var prodPrices = [120, 300, 45, 1000, 250];
var thresPrice = 200;
for (var i = 0; i < prodPrices.length; i++) {
    if (prodPrices[i] > thresPrice) {
        console.log(prodPrices[i]);
    }
}
console.log("------------------------------");
var users = [
    { name: "S", age: 40, isAdmin: true },
    { name: "T", age: 35, isAdmin: false }
];
var oldestAdmin = null;
for (var i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
        if (oldestAdmin === null || users[i].age > oldestAdmin.age) {
            oldestAdmin = users[i];
        }
    }
}
if (oldestAdmin) {
    console.log("The oldest admin is ".concat(oldestAdmin.name, "."));
}
var s = document.getElementById("t");
if (s) {
    s.innerHTML = "\n  <div> odd and even : ".concat(num, " </div>\n  <div> prodPrices ").concat(prodPrices, " </div>\n  <div> oldestAdmin ").concat(oldestAdmin, " </div>\n  ");
}
else {
    console.error('Element with ID "t" not found.');
}
