// To execute the code of this file:
// 1. tsc index.ts
// 2. node index.js
console.log("Hello world");
//1. Variable declaration and static typing
var number = 5;
var message = "Hello TypeScript";
var isActive = true;
console.log(number);
console.log(message);
console.log(isActive);
//2. Functions and parameter / return types:
function sum(a, b) {
    return a + b;
}
var result = sum(3, 7);
console.log("result", result);
//3. Classes and properties
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old"));
    };
    return Person;
}());
var person = new Person("Jhon", 25);
person.greet();
