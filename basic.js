

// // // Variables and Data Types

// // Automatically: JavaScript variables are automatically declared and initialized when assigned a value.
// // Using var: The var keyword is used to declare a variable, and it can be reassigned.
// var variableVar = 'value';
// var is function scoped
// // Using let: The let keyword is used to declare a variable, and it can be reassigned.
// let variableLet = 'value';
// // let is block scoped
// // Using const: The const keyword is used to declare a constant, and it cannot be reassigned.
// const variableConst = 'value';
// const is block scoped


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

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  

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



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  

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




//  **1. String Methods**
// String methods are used to manipulate and work with text data.

// | **Method**              | **Description**                                                                 |
// |--------------------------|---------------------------------------------------------------------------------|
// | `charAt(index)`          | Returns the character at the specified index.                                  |
// | `charCodeAt(index)`      | Returns the Unicode of the character at the specified index.                   |
// | `concat(string2, ...)`   | Joins two or more strings.                                                     |
// | `includes(substring)`    | Checks if a string contains the given substring.                               |
// | `indexOf(substring)`     | Returns the index of the first occurrence of the substring, or `-1` if not found. |
// | `lastIndexOf(substring)` | Returns the index of the last occurrence of the substring.                     |
// | `slice(start, end)`      | Extracts a section of the string.                                              |
// | `substring(start, end)`  | Similar to `slice`, but does not accept negative indices.                      |
// | `replace(search, replaceWith)` | Replaces occurrences of a substring.                                    |
// | `split(separator)`       | Splits a string into an array of substrings.                                   |
// | `toLowerCase()`          | Converts the string to lowercase.                                              |
// | `toUpperCase()`          | Converts the string to uppercase.                                              |
// | `trim()`                 | Removes whitespace from both ends of a string.                                 |
// | `startsWith(substring)`  | Checks if the string starts with the given substring.                          |
// | `endsWith(substring)`    | Checks if the string ends with the given substring.                            |

// ---

//  2. Array Methods**
// Array methods are used to manipulate and process arrays.

// | **Method**             | **Description**                                                                 |
// |-------------------------|---------------------------------------------------------------------------------|
// | `push(element)`        | Adds an element to the end of the array.                                        |
// | `pop()`                | Removes and returns the last element of the array.                              |
// | `shift()`              | Removes and returns the first element of the array.                             |
// | `unshift(element)`     | Adds an element to the beginning of the array.                                  |
// | `splice(start, count)` | Adds/removes elements from an array.                                            |
// | `slice(start, end)`    | Returns a shallow copy of a portion of the array.                               |
// | `concat(array2, ...)`  | Combines two or more arrays.                                                    |
// | `join(separator)`      | Converts an array to a string with elements separated by `separator`.           |
// | `indexOf(element)`     | Returns the first index of the element, or `-1` if not found.                   |
// | `lastIndexOf(element)` | Returns the last index of the element, or `-1` if not found.                    |
// | `forEach(callback)`    | Executes a callback function for each array element.                            |
// | `map(callback)`        | Creates a new array with results of calling `callback` on each element.         |
// | `filter(callback)`     | Creates a new array with elements that pass the `callback` condition.           |
// | `reduce(callback, initialValue)` | Reduces the array to a single value based on `callback`.              |
// | `find(callback)`       | Returns the first element that satisfies the condition.                         |
// | `findIndex(callback)`  | Returns the index of the first element that satisfies the condition.            |
// | `every(callback)`      | Checks if every element satisfies the condition.                                |
// | `some(callback)`       | Checks if at least one element satisfies the condition.                         |
// | `sort()`               | Sorts the array (by default, lexicographically).                                |
// | `reverse()`            | Reverses the order of elements in the array.                                    |
// | `flat(depth)`          | Flattens nested arrays by the specified `depth`.                                |
// | `includes(element)`    | Checks if the array contains the specified element.                             |

// ---

// **3. Object Methods**
// Object methods are used for manipulating and querying objects.

// | **Method**                  | **Description**                                                                 |
// |-----------------------------|---------------------------------------------------------------------------------|
// | `Object.keys(object)`       | Returns an array of the object's keys.                                         |
// | `Object.values(object)`     | Returns an array of the object's values.                                       |
// | `Object.entries(object)`    | Returns an array of `[key, value]` pairs.                                      |
// | `Object.assign(target, source)` | Copies properties from source object(s) to the target object.             |
// | `Object.freeze(object)`     | Freezes the object, making it immutable.                                       |
// | `Object.seal(object)`       | Prevents adding/removing properties but allows modifying existing ones.        |
// | `Object.is(obj1, obj2)`     | Compares two values for strict equality (including special cases like NaN).    |
// | `Object.create(proto)`      | Creates a new object with the specified prototype.                             |
// | `Object.hasOwnProperty(key)`| Checks if the object has the specified property.                               |

// ---

//  **4. Number Methods**
// Number methods are used to manipulate numbers.

// | **Method**        | **Description**                                                                 |
// |--------------------|---------------------------------------------------------------------------------|
// | `toFixed(digits)` | Formats the number with the specified number of decimal places.                 |
// | `toString()`      | Converts the number to a string.                                                |
// | `toExponential(digits)` | Returns the number in exponential notation with specified decimals.       |
// | `isFinite(value)` | Checks if the value is a finite number.                                         |
// | `isNaN(value)`    | Checks if the value is `NaN`.                                                  |
// | `parseInt(string)`| Converts a string to an integer.                                               |
// | `parseFloat(string)` | Converts a string to a floating-point number.                               |

// ---

//  **5. Math Methods**
// Math methods provide mathematical functions.

// | **Method**       | **Description**                                                                 |
// |-------------------|---------------------------------------------------------------------------------|
// | `Math.abs(x)`    | Returns the absolute value of `x`.                                             |
// | `Math.ceil(x)`   | Rounds `x` up to the nearest integer.                                           |
// | `Math.floor(x)`  | Rounds `x` down to the nearest integer.                                         |
// | `Math.round(x)`  | Rounds `x` to the nearest integer.                                              |
// | `Math.max(a, b, ...)` | Returns the largest number.                                                |
// | `Math.min(a, b, ...)` | Returns the smallest number.                                               |
// | `Math.pow(base, exp)` | Returns `base` raised to the power of `exp`.                               |
// | `Math.sqrt(x)`   | Returns the square root of `x`.                                                 |
// | `Math.random()`  | Returns a random number between `0` and `1`.                                    |

// ---

//  **6. Date Methods**
// Date methods are used to manipulate and format dates.

// | **Method**            | **Description**                                                                 |
// |------------------------|---------------------------------------------------------------------------------|
// | `Date.now()`          | Returns the current timestamp.                                                 |
// | `getFullYear()`       | Gets the 4-digit year of a date.                                               |
// | `getMonth()`          | Gets the month (0-11) of a date.                                               |
// | `getDate()`           | Gets the day of the month (1-31).                                              |
// | `getDay()`            | Gets the day of the week (0-6).                                                |
// | `getHours()`          | Gets the hours (0-23).                                                         |
// | `getMinutes()`        | Gets the minutes (0-59).                                                       |
// | `getSeconds()`        | Gets the seconds (0-59).                                                       |
// | `setFullYear(year)`   | Sets the year.                                                                 |
// | `setMonth(month)`     | Sets the month (0-11).                                                         |

// ---

//  **7. Utility Methods**
// JavaScript also provides utility methods like `alert()`, `console.log()`, and `setTimeout()`.

// | **Method**            | **Description**                                                                 |
// |------------------------|---------------------------------------------------------------------------------|
// | `alert(message)`      | Displays an alert box with a message.                                           |
// | `console.log(message)`| Logs a message to the browser console.                                          |
// | `setTimeout(func, ms)`| Calls a function after a specified delay (in milliseconds).                     |
// | `setInterval(func, ms)` | Repeatedly calls a function at specified intervals.                          |






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








