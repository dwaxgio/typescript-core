// To execute the code of this file:
// 1. tsc index.ts
// 2. node index.js

console.log("Hello world");

//1. Variable declaration and static typing
let number: number = 5;
let message: string = "Hello TypeScript";
let isActive: boolean = true;

console.log(number);
console.log(message);
console.log(isActive);

//2. Functions and parameter / return types:
function sum(a: number, b: number): number {
  return a + b;
}

let result = sum(3, 7);
console.log("result", result);

//3. Classes and properties
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

let person = new Person("Jhon", 25);
person.greet();
