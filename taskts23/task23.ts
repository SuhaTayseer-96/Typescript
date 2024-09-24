// 1 
let num: number = 3;
debugger;
if (num % 2 === 0) {
  console.log(`${num} is even.`);
} else {
  console.log(`${num} is odd.`);
}

console.log("------------------------------");

// 2
let prodPrices: number[] = [120, 300, 45, 1000, 250]; 
let thresPrice: number = 200;

for (let i = 0; i < prodPrices.length; i++) {
  if (prodPrices[i] > thresPrice) {
    console.log(prodPrices[i]);
  }
}

console.log("------------------------------");

// 3 
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let users: User[] = [
  { name: "S", age: 40, isAdmin: true },
  { name: "T", age: 35, isAdmin: false }
]; 

let oldestAdmin: User | null = null;

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

let s = document.getElementById("t") as HTMLElement; 
if (s) { 
  s.innerHTML = `
  <div> odd and even : ${num} </div>
  <div> prodPrices ${prodPrices} </div>
  <div> oldestAdmin ${oldestAdmin} </div>
  `;
} else {
  console.error('Element with ID "t" not found.');
}
