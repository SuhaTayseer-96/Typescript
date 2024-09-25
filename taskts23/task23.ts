//1 
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


console.log("------------------------------");
console.log("------------------------------");
console.log("------------------------------");
console.log("-------------24---------------");
console.log("------------------------------");
console.log("------------------------------");
console.log("------------------------------");

let numbers: number[] = [1, 2, 3, 4];

let sum : number = 0;

for (let i = 0 ; i<numbers.length; i++)
{
    sum += numbers[i];  
}

console.log("Sum of the numbers: " + sum); 

console.log("------------------------------");

function checkAllPositive(arr: number[]): void {
  const allPositive = arr.every(num => num > 0);
  console.log(allPositive ? "All Positive" : "Not All Positive");
}


console.log("------------------------------");
let arrString: string [] = ["Hi", "DDD", "WWWEEEEE"]
let longestString: string = arrString[0];

for (let i = 1 ; i<arrString.length; i++)
{
    if (arrString[i].length > longestString.length)
        longestString = arrString[i];
}

console.log("Longest String: " + longestString);

console.log("------------------------------");
function countCharacterOccurrences(str: string, char: string): number {
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
let array: number[] = [5, 10, 20];

for (let j = 0; j < array.length; j++) {
    let isPrime: boolean = true;
    let numberToCheck = array[j];

    if (numberToCheck <= 1) {
        isPrime = false; 
    } else {
        for (let i = 0; i <= numberToCheck / 2; i++) {
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

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 28 },
  { name: 'David', age: 32 },]

  for (let i = 0; i<people.length; i++) 
  {
      if (people[i].age > 18)
      {
          console.log(people[i].name + " is above 18");
      }
      else {
          console.log(people[i].name + " is not above 18");
      }
  }

  console.log("------------------------------");
  interface Teacher {
    name: string;
    subjects: string[];
}

function TSubjects(teacher: Teacher): void {
    teacher.subjects.forEach(subject => {
        console.log(subject);
    });
}

const teacher: Teacher = { name: "Mr. doe", subjects: ["Math", "Science", "History"] };
TSubjects(teacher); 

  console.log("------------------------------");
  interface Product {
    name: string;
    price: number;
    quantity: number;
}

function updatePP(products: Product[]): void {
    products.forEach(product => {
        if (product.quantity > 5) product.price *= 1.10; 
    });
}

// const products: Product[] = [
//     { name: "Laptop", price: 1000, quantity: 10 },
// ];

// updatePP(products);
// console.log(products);

  console.log("------------------------------");
  interface Device {
    start?: () => void;
}

function startDevice(device: Device): void {
    if (device.start) {
        device.start();
    } else {
        console.log("Device starting with default settings.");
    }
}