const num = 42;
const str = "Hello, World!";
const bool = true;
const arr = [1, 2, 3];
const obj = { name: "John", age: 30 };
function greet() {
    console.log("Hello!");
}
const n = null;
let x;
const sym = Symbol();

console.log(typeof num); // Output: "number"
console.log(typeof str); // Output: "string"
console.log(typeof bool); // Output: "boolean"
console.log(typeof arr); // Output: "object"
console.log(typeof obj); // Output: "object"
console.log(typeof greet); // Output: "function"
console.log(typeof n); // Output: "object" (历史遗留问题)
console.log(typeof x); // Output: "undefined"
console.log(typeof sym); // Output: "symbol"
