// 1 
let num = 3;
debugger;
if (num % 2 === 0) {
  console.log(`${num} is even.`);
} else {
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

// 3 
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

// Remove DOM manipulation for Node.js environment
if (typeof document !== "undefined") {
  let s = document.getElementById("t");
  if (s) {
    s.innerHTML = `
    <div> odd and even : ${num} </div>
    <div> prodPrices ${prodPrices} </div>
    <div> oldestAdmin ${oldestAdmin} </div>
    `;
  } else {
    console.error('Element with ID "t" not found.');
  }
}

console.log("------------------------------");
console.log("------------------------------");
console.log("------------------------------");
console.log("-------------24---------------");
console.log("------------------------------");
console.log("------------------------------");
console.log("------------------------------");

let numbers = [1, 2, 3, 4];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];  
}

console.log("Sum of the numbers: " + sum); 

console.log("------------------------------");

function checkAllPositive(arr) {
  const allPositive = arr.every(num => num > 0);
  console.log(allPositive ? "All Positive" : "Not All Positive");
}

console.log("------------------------------");

let arrString = ["Hi", "DDD", "WWWEEEEE"];
let longestString = arrString[0];

for (let i = 1 ; i < arrString.length; i++) {
  if (arrString[i].length > longestString.length) {
    longestString = arrString[i];
  }
}

console.log("Longest String: " + longestString);

console.log("------------------------------");

function countCharacterOccurrences(str, char) {
  let count = 0;
  for (const c of str) {
    if (c === char) {
      count++;
    }
  }
  console.log(count);
  return count;
}

console.log("------------------------------");
let array = [5, 10, 20];

for (let j = 0; j < array.length; j++) {
  let isPrime = true;
  let numberToCheck = array[j];

  if (numberToCheck <= 1) {
    isPrime = false; 
  } else {
    for (let i = 2; i <= numberToCheck / 2; i++) {
      if (numberToCheck % i === 0) {
        console.log(numberToCheck + " is not a prime number");
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(numberToCheck + " is a prime number");
  }
}

console.log("------------------------------");
console.log("------------------------------");
console.log("------------------------------");
console.log("-------------25---------------");
console.log("------------------------------");
console.log("------------------------------");
console.log("------------------------------");

let people = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 28 },
  { name: 'David', age: 32 },
];

for (let i = 0; i < people.length; i++) {
  if (people[i].age > 18) {
    console.log(people[i].name + " is above 18");
  } else {
    console.log(people[i].name + " is not above 18");
  }
}

console.log("------------------------------");

let teacher = { name: "Mr. Doe", subjects: ["Math", "Science", "History"] };

function TSubjects(teacher) {
  teacher.subjects.forEach(subject => {
    console.log(subject);
  });
}

TSubjects(teacher);

console.log("------------------------------");

let products = [
  { name: "Laptop", price: 1000, quantity: 10 },
  { name: "Phone", price: 500, quantity: 3 }
];

function updatePP(products) {
  products.forEach(product => {
    if (product.quantity > 5) product.price *= 1.10; 
  });
}

updatePP(products);
console.log(products);

console.log("------------------------------");

function startDevice(device) {
  if (device.start) {
    device.start();
  } else {
    console.log("Device starting with default settings.");
  }
}
