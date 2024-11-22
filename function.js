// // Functions
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }
// greet('John');

// // Function Types
// function add(x, y) {
//   return x + y;
// }
// console.log(add(5, 3)); // returns 8

// function multiply(x, y) {
//   return x * y;
// }
// console.log(multiply(5, 3)); // returns 15

// // Arrow Functions
// const sum = (x, y) => x + y;
// console.log(sum(5, 3)); // returns 8


// function SayHello(name){
//     console.log('Hello ' + name);
// }

// SayHello('John');
// SayHello('Jane');
// SayHello('Jim');
// SayHello('Jill');


// function add (a, b){
//     return a + b;
// }

// console.log(add(1, 2));

// return default value if undefined
// function add (a, b){
//     if (a == undefined)
//     {
//         a = 0;
//     }
//     if (b == undefined)
//     {
//         b = 0;
//     }

//     return a + b;

// }

// let result = add();
// console.log(result); // 0

// Function with Parameters
// function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   // ফাংশন আহ্বান
//   greet("Rahim"); // Output: Hello, Rahim!
  

// Function as an Expression
// const greet = function(name) {
//     console.log(`Hi, ${name}!`);
//   };
  
//   // ফাংশন আহ্বান
//   greet("Karim"); // Output: Hi, Karim!
  
// Arrow Function Invocation
// const greet = (name) => {
//     console.log(`Welcome, ${name}!`);
//   };
  
//   // ফাংশন আহ্বান
//   greet("Fatima"); // Output: Welcome, Fatima!
  
// Constructor Invocation
// const person = {
//     name: "John",
//     greet: function() {
//       console.log(`Hello, my name is ${this.name}.`);
//     }
//   };
  
//   // মেথড আহ্বান
//   person.greet(); // Output: Hello, my name is John.
  

// function Person(name) {
//     this.name = name;
//   }
  
//   const john = new Person("John");
  
//   console.log(john.name); // Output: John
  

// Call, Apply, and Bind Invocation
// function greet() {
//     console.log(`Hello, ${this.name}!`);
//   }
  
//   const person = { name: "Alice" };
  
//   // ফাংশন আহ্বান
//   greet.call(person); // Output: Hello, Alice!

// greet.apply(person); // Output: Hello, Alice!

// const boundGreet = greet.bind(person);
// boundGreet(); // Output: Hello, Alice!


// IIFE (Immediately Invoked Function Expression)
// (function() {
//     console.log("This is an IIFE!");
//   })(); // Output: This is an IIFE!


// What is accidental variable ?

// Implicit Global Variables: If you assign a value to a variable without declaring it with var, let, or const, JavaScript will create a global variable. This can lead to unexpected behavior, especially in larger codebases
// function example() {
//     accidentalGlobal = "I'm a global variable"; // No 'var', 'let', or 'const'
// }
// example();
// console.log(accidentalGlobal); // Outputs: "I'm a global variable"

// Variable Hoisting: In JavaScript, variable declarations (using var) are hoisted to the top of their containing function or global context. This can lead to situations where a variable is used before it is declared, which can be confusing.
// function example() {
//     accidentalGlobal = "I'm a global variable"; // No 'var', 'let', or 'const'
// }
// example();
// console.log(accidentalGlobal); // Outputs: "I'm a global variable"

//Variable Hoisting: In JavaScript, variable declarations (using var) are hoisted to the top of their containing function or global context. This can lead to situations where a variable is used before it is declared, which can be confusing.
// function example() {
//     accidentalGlobal = "I'm a global variable"; // No 'var', 'let', or 'const'
// }
// example();
// console.log(accidentalGlobal); // Outputs: "I'm a global variable"


// if (true){
//     let num1 = 10;
//     var num2 = 20;
//     const num3 = 30;
// }

// console.log(num3); // ReferenceError: num1 is not defined
// // console.log(num2); // 20
// // console.log(num3); // ReferenceError: num3 is not define




// function calculator(num1 = 0, operator = '+', num2 = 0){
//     switch (operator){
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num1 / num2 || 'Cannot divide by zero';
//         case '%':
//             return num1 % num2;
//         default:
//             return 'Invalid operator';
//     }
// }

// let result = calculator(10, '+', 20);
// console.log(result); // 30


// let sayhello = (name) => {
//     console.log(`Hello, ${name}!`);
// }

// sayhello('John');


