

// // // Variables and Data Types

// // Automatically: JavaScript variables are automatically declared and initialized when assigned a value.
// // Using var: The var keyword is used to declare a variable, and it can be reassigned.
// var variableVar = 'value';
// // Using let: The let keyword is used to declare a variable, and it can be reassigned.
// let variableLet = 'value';
// // Using const: The const keyword is used to declare a constant, and it cannot be reassigned.
// const variableConst = 'value';


// let name = 'John Doe'; // string
// let age = 30; // number
// let isAdmin = true; // boolean
// let hobbies = ['reading', 'coding', 'gaming']; // array
// let person = { name: 'Jane Doe', age: 25 }; // object
// let nullValue = null; // null
// let undefinedValue = undefined; // undefined
// let symbolValue = Symbol('symbol'); // symbol
// let date = new Date("2022-03-25");  // date
// let bigIntValue = 12345678901234567890n; // big integer
// let floatValue = 3.14; // float
// let regexValue = /regex/; // regex

// // Using exponential notation to represent large and small numbers
// let y = 123e5; // 123 * 10^5 = 12300000
// let z = 123e-8; // 123 * 10^-8 = 0.0000000123
// let a = 123e+8; // 123 * 10^8 = 12300000000
// let b = 123e-8; // 123 * 10^-8 = 0.0000000123

// // Logging the values to the console to verify the results
// console.log(y); // Expected output: 12300000
// console.log(z); // Expected output: 0.0000000123
// console.log(a); // Expected output: 12300000000
// console.log(b); // Expected output: 0.0000000123

// // Operators
// let x = 10;
// let y = 5;

// console.log(x + y);  // addition -> 15
// console.log(x - y);  // subtraction -> 5
// console.log(x * y);  // multiplication -> 50
// console.log(x / y);  // division -> 2
// console.log(x % y);  // modulus (remainder of 10 divided by 5) -> 0
// console.log(x > y);  // greater than -> true (10 > 5)
// console.log(x < y);  // less than -> false (10 < 5)
// console.log(x === y);  // strict equality -> false (10 is not equal to 5)
// console.log(x !== y);  // inequality -> true (10 is not equal to 5)
// console.log(x >= y);  // greater than or equal to -> true (10 >= 5)
// console.log(x <= y);  // less than or equal to -> false (10 <= 5)
// console.log(x && y);  // logical AND -> 5 (since both x and y are non-zero, returns last operand)
// console.log(x || y);  // logical OR -> 10 (since x is truthy, returns first truthy operand)
// console.log(!x);  // logical NOT -> false (since x is non-zero, !x is false)

// x = 10; // Reset x for increment and assignment operations
// console.log(x++);  // increment -> 10 (post-increment, returns original value, then increases by 1)
// console.log(--y);  // decrement -> 4 (pre-decrement, decreases by 1, then returns the new value)

// x = 10;  // Reset x to 10 for assignment operations
// y = 5;   // Reset y to 5
// console.log(x += y);  // addition assignment -> 15 (x = x + y)
// console.log(x -= y);  // subtraction assignment -> 10 (x = x - y)
// console.log(x *= y);  // multiplication assignment -> 50 (x = x * y)
// console.log(x /= y);  // division assignment -> 10 (x = x / y)
// console.log(x %= y);  // modulus assignment -> 0 (x = x % y, remainder of 10 divided by 5)

// // Bitwise and Shift Operators (bitwise operations happen at the binary level)
// x = 10; // 10 in binary: 1010
// y = 5;  // 5 in binary: 0101

// console.log(x <<= y); // left shift assignment -> 320 (shifts x's bits left by 5 places)
// console.log(x >>= y); // right shift assignment -> 10 (shifts x's bits right by 5 places)
// console.log(x >>>= y); // unsigned right shift assignment -> 0 (unsigned right shift)

// x = 10;  // Reset x
// y = 5;   // Reset y
// console.log(x &= y);  // bitwise AND assignment -> 0 (bitwise AND between 1010 and 0101 results in 0000)
// console.log(x |= y);  // bitwise OR assignment -> 5 (bitwise OR between 1010 and 0101 results in 0101)
// console.log(x ^= y);  // bitwise XOR assignment -> 0 (bitwise XOR between 0101 and 0101 results in 0000)



// Implicit vs. explicit coercion


// String(123) // explicit
// 123 + ''    // implicit


// Type conversion

// to string
// to boolean
// to number

// var isFalse = false ; // Declaring a variable isFalse and assigning it the value false
// var isTrue = true ; // Declaring a variable isTrue and assigning it the value true

// // console.log(isFalse); // Logging the value of isFalse to the console

// var something = null ; // Declaring a variable something and assigning it the value null

// console.log (something); // Logging the value of something to the console

// console.log ('5' + 5 + 5); // Concatenating strings and numbers, resulting in a string output
// console.log ('5' + 5 * 5); // Concatenating a string with the result of a multiplication operation

// console.log(true + 5); // Adding a boolean value (converted to number) to a number
// console.log(5 + false); // Adding a number to a boolean value (converted to number)
// console.log(null + 5); // Adding a null value (converted to number) to a number
// console.log(undefined + 5); // Adding an undefined value (converted to number) to a number
// console.log('false'+6); // Concatenating a string with a number
// console.log('false' * 6) // Multiplying a string (converted to number) by a number
// console.log('false' - 6); // Subtracting a number from a string (converted to number)
// console.log('false' / 6); // Dividing a string (converted to number) by a number
// console.log('false' % 6); // Calculating the modulus of a string (converted to number) by a number
// console.log(Boolean('hello world') + 5); // Adding a boolean value (converted to number) to a number
// console.log(Boolean('') + 5); // Adding a boolean value (converted to number) to a number
// console.log(5 ** 2); // Calculating the exponentiation of a number
// let num = true + false ;
// console.log(num); // Output: 1
// let num = {}+[]+{}+[2] ;

// ++ -- // Increment and decrement operators
// pre increment / pre decrement // Pre-increment and pre-decrement operations
// post increment / post decrement // Post-increment and post-decrement operations
// let num2 = num++; // Post-increment operation on num and assigning the result to num2
// let num2 = ++num; // Pre-increment operation on num and assigning the result to num2
// console.log(num2); // Logging the value of num2 to the console
// let num2 = num++; // num = num + 1


// // This line of code increments the value of 'num' by 10.
// num += 10; // Increment 'num' by 10

// // This line of code decrements the value of 'num' by 30.
// num -= 30; // Decrement 'num' by 30

// // This line of code calculates the remainder of 'num' divided by 30 and assigns it back to 'num'.
// num %= 30; // Calculate remainder of 'num' divided by 30

// // This line of code divides the value of 'num' by 30.
// num /= 30; // Divide 'num' by 30

// // This line of code multiplies the value of 'num' by 30.
// num *= 30; // Multiply 'num' by 30

// // This line of code calculates the exponentiation of 'num' to the power of 10 and assigns it back to 'num'.
// num **= 10; // Calculate exponentiation of 'num' to the power of 10





// // Boolean implicit conversion example

// if (2) {
//     console.log("2 is truthy"); // This condition evaluates to true because 2 is a truthy value in JavaScript.
// }

//console.log(!!2); // Output: true // The double negation (!!) converts the value to a boolean, and since 2 is truthy, it outputs true.

// console.log(2 || 'hello'); // Output: 2 // In this case, the || operator is used for logical OR operation. Since 2 is a truthy value, it outputs 2. If the first value was falsy, it would output 'hello'.
 

// let num = 30 && 10; // Logical AND operation
// let num = 'hello' && 123 ;  // Logical AND operation

// // This line of code performs a logical AND operation on 'hello' and 123, resulting in 123 being assigned to num.
// let num = 'hello' && 123; 
// console.log(num); // Output: 123
// // This line of code logs true to the console because num is indeed equal to 123.
// console.log(num === 123);
// let num = 'hello' || 123 ;  // This expression will evaluate to 'hello' because 'hello' is a truthy value and the OR operator will return the first truthy value it encounters.
// console.log(num); // Output: hello
// console.log(num===123); // This will log false to the console because num is actually 'hello', not 123.


// // Loops
// // For Loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // While Loop
// let j = 0;
// while (j < 5) {
//   console.log(j);
//   j++;
// }

// // Do-While Loop
// let k = 0;
// do {
//   console.log(k);
//   k++;
// } while (k < 5);

// // For-Of Loop
// let numbers = [0, 1, 2, 3, 4];
// for (let number of numbers) {
//   console.log(number);
// }

// // For-In Loop
// let person = { name: 'John Doe', age: 30, country: 'USA' };
// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }


// let age = 16;
// let great = age > 18 ? 'welcome' : 'get out'
// console.log(great);  

// // file.js
// export const MY_VALUE = 10;

// export function add(num1, num2) {
//   return num1 + num2;
// }

// // file.spec.js
// import { MY_VALUE, add } from './file';

// add(MY_VALUE, 5);
// // => 15

// let i;

// for (i = 1 ; i <=10; ++i )  
// {
//    console.log(i)
// }

// console.log( 'i : ' + i );



// let num = 10;

// while (num--)
// {
//   console.log(num);
// }


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

// // Data Structures
// // Arrays
// let colors = ['red', 'green', 'blue'];
// console.log(colors[0]); // returns 'red'
// colors.push('yellow');
// console.log(colors); // returns ['red', 'green', 'blue', 'yellow']

// // Objects
// let person = { name: 'John Doe', age: 30 };
// console.log(person.name); // returns 'John Doe'
// person.country = 'USA';
// console.log(person); // returns { name: 'John Doe', age: 30, country: 'USA' }

// // Sets
// let uniqueValues = new Set([1, 2, 2, 3, 4, 4, 5]);
// console.log(uniqueValues); // returns Set { 1, 2, 3, 4, 5 }

// // Maps
// let personData = new Map([
//   ['name', 'John Doe'],
//   ['age', 30],
// ]);
// console.log(personData.get('name')); // returns 'John Doe'
// personData.set('country', 'USA');
// console.log(personData); // returns Map { 'name' => 'John Doe', 'age' => 30, 'country' => 'USA' }

// // Algorithms
// // Sorting
// let numbers = [4, 2, 7, 1, 3];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // returns [1, 2, 3, 4, 7]

// // Searching
// let index = numbers.indexOf(3);
// console.log(index); // returns 2

// // Object-Oriented Programming
// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   startEngine() {
//     console.log('Vroom!');
//   }
// }

// let myCar = new Car('Toyota', 'Corolla', 2015);
// myCar.startEngine();

// // Inheritance
// class ElectricCar extends Car {
//   constructor(brand, model, year, batteryCapacity) {
//     super(brand, model, year);
//     this.batteryCapacity = batteryCapacity;
//   }

//   chargeBattery() {
//     console.log('Charging...');
//   }
// }

// let myElectricCar = new ElectricCar('Tesla', 'Model S', 2020, 75);
// myElectricCar.startEngine();
// myElectricCar.chargeBattery();

// // Advanced Topics
// // Closures
// function outerFunction() {
//   let counter = 0;
//   function innerFunction() {
//     counter++;
//     console.log(counter);
//   }
//   return innerFunction;
// }

// let incrementCounter = outerFunction();
// incrementCounter(); // returns 1
// incrementCounter(); // returns 2

// // Higher-Order Functions
// function twice(func) {
//   return function() {
//     func();
//     func();
//   };
// }

// function sayHello() {
//   console.log('Hello!');
// }

// let sayHelloTwice = twice(sayHello);
// sayHelloTwice(); // returns 'Hello!' twice

// // Async/Await
// async function fetchData() {
//   try {
//     let response = await fetch('https://api.github.com/users/octocat');
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }2
// }

// fetchData();








