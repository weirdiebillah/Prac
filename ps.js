// Problem 1:Write a function `calculateStrikeRate` that takes in two parameters - the runs scored by a batsman and the total number of balls they faced. The function should return the batsman's strike rate, which is calculated as the number of runs scored per 100 balls faced.
// For example, if the batsman scored 45 runs off 30 balls, their strike rate would be calculated as follows:
// (45 / 30) * 100 = 150
// The function should round the strike rate to two decimal places.
// Example Input/Output:
// - calculateStrikeRate(45, 30) should return 150.00
// - calculateStrikeRate(100, 60) should return 166.67
// - calculateStrikeRate(25, 40) should return 62.50

// function strikeRate(totalscore, totalBall){
//     return (totalscore / totalBall) * 100;
// }
// console.log(strikeRate(45, 30));

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem 2: Have the function `CountPairs` take in a string of lowercase letters and digits. The function should return the count of all pairs of characters in the string that add up to an even number.
// For example, if the input string is "a1b2c3d4e5f6", there are 3 pairs that add up to an even number: "b2", "d4", and "f6". So the function should return 3.
// If there are no such pairs, the function should return 0.


// // The following lines of code call the countPairs function with different input strings and log the result to the console.
// console.log(countPairs("a1b2c3d4e5f6"));    //should return 3
// console.log(countPairs("x1y2z3"));// should return 1
// console.log(countPairs("a2b2c2d2")); //should return 4


//Slove 1
// // The countPairs function takes a string as input and returns the number of pairs in the string where the second character of the pair is an even digit.
// function countPairs(str){
//     // Initialize a variable to count the number of pairs.
//     let count = 0;
//     // Iterate over the string in steps of 2.
//     for (let i = 0; i < str.length - 1; i += 2) {
//         // Check if the second character of the pair is an even digit.
//         if (parseInt(str[i + 1]) % 2 === 0) {
//             // If it is, increment the count.
//             count++;
//         }
//     }
//     // Return the total count of pairs.
//     return count;
// }

//Slove 2
//    function countPairs(str){
//       return [...str].filter((el, index) => index % 2 === 1 && parseInt(el) % 2 === 0).length;
//    }

// console.log(countPairs("a1b2c3d4e5f6"));    //should return 3

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // Problem: Write a function to reverse a string.
// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("Hello world"));


// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem: Write a function to merge two arrays.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// function mergeArray(arr1, arr2){
//     return [...arr1, ...arr2];
// }
// console.log(mergeArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem: Write a function to find the shortest word in a string.

//slove 1

// function findShortWord (str){
//     let shortWord = str.split(' ')[0];
//     for (let i = 1; i < str.split(' ').length; i++){
//         if (str.split(' ')[i].length < shortWord.length){
//             shortWord = str.split(' ')[i];
//         }
//     }
//     return shortWord;
// }
// console.log(findShortWord("Hell world to the world"));
// console.log(findShortWord("Hello world the world"));


//slove 2 
// function findShortWord (str){
//     return str.split(' ').sort((a,b) => a.length - b.length)[0];
// }
// console.log(findShortWord("Hell world to the world"));


// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem: Write a function to remove duplicate elements from an array.

//slove 1
// function removeDuplicate(arr){
//     // Iterate through the array from the first element to the last
//     for (let i = 0; i < arr.length; i++){
//         // Check if the current element is not the first occurrence of itself in the array
//         if (arr.indexOf(arr[i]) !== i){
//             // Remove the duplicate element from the array
//             arr.splice(i, 1);
//             // Decrement the index to re-check the current position after removal
//             i--;
//         }
//     }
//     // Return the array with duplicates removed
//     return arr;
// }
// slove 2
// console.log(removeDuplicate([1,1,2,3,3,4,4,5,6,7,8,8,9,10]));
// function removeDuplicate(arr){
//     return [...new Set(arr)];
// }

// //slove 3
// function removeDuplicate(arr){
//     return arr.filter((element, index) => arr.indexOf(element) === index);
//  }

//slove 4
// function removeDuplicate(arr){
//     return arr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
// }


// console.log(removeDuplicate([1,1,2,3,3,4,4,5,6,7,8,8,9,10]));

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem: Write a function to create a book list with titles, authors, and available copies.Write a function `createBookList` that takes in three parameters: `bookTitles`, an array of book titles, `authorNames`, an array of corresponding author names and ‘number of copies available’ , an array of corresponding copies available for the book.
// Write a function ‘Add Copies’ that takes two parameters : `bookTitle` and the number of copies you are adding to that book. The function should add copies to that particular book.
// Write a function ‘Sell Book’ that takes two parameters : `bookTitle` and the number of copies you are selling of that book. The function should deduct copies of that particular book.
// Write a function ‘GetDetails’ that takes no parameters and returns all the titles of the book in the bookTitles array ,the author names of the book in the `authorNames’ array and the number of copies available of the corresponding books, which should be updated after adding or selling a book.

// createBookList('Bohubrihi', 'Humayun Ahmed', 10);
// addCopies('Bohubrihi', 5);
// sellBook('Bohubrihi', 3);
// console.log(getDetails());

// // Function to create a book list with titles, authors, and available copies
// function createBookList(bookTitles, authorNames, copiesAvailable){
//     // Initialize the book list object with the provided parameters
//     const bookList = {
//         bookTitles,
//         authorNames,
//         copiesAvailable,
//     };
//     // Return an object with methods to manipulate the book list
//     return {
//         // Method to add copies of a book to the list
//         addCopies: function(bookTitle, copiesToAdd){
//             // Find the index of the book title in the book list
//             const index = bookList.bookTitles.indexOf(bookTitle);
//             // If the book is found, add the specified number of copies
//             if (index !== -1){
//                 bookList.copiesAvailable[index] += copiesToAdd;
//             }
//         },
//         // Method to sell copies of a book from the list
//         sellBook: function(bookTitle, copiesToSell){
//             // Find the index of the book title in the book list
//             const index = bookList.bookTitles.indexOf(bookTitle);
//             // If the book is found and there are available copies, sell the specified number of copies
//             if (index !== -1 && bookList.copiesAvailable[index] > 0){
//                 bookList.copiesAvailable[index] -= copiesToSell;
//             }
//         },
//         // Method to get the details of the book list
//         getDetails: function(){
//             // Return a string with the book title, author, and available copies
//             return bookList.bookTitles + ' by ' + bookList.authorNames + ' numbers of copies available ' + bookList.copiesAvailable;
//         },
//     };
// }

// // Create a book list with a single book
// const bookList = createBookList(['Bohubrihi'], ['Humayun Ahmed'], [10]);
// // Attempt to add 5 copies of the book to the list, but 0 is passed as the number of copies to add
// bookList.addCopies('Bohubrihi', 0);
// // Sell 3 copies of the book from the list
// bookList.sellBook('Bohubrihi', 3);
// // Log the details of the book list
// console.log(bookList.getDetails());


// function createBookList(bookTitles, authorNames, copiesAvailable){
//     return {
//        bookTitles,
//        authorNames,
//        copiesAvailable,
//     };
// }

// function addCopies(bookList, bookTitle, copiesToAdd){
//     const index = bookList.bookTitles.indexOf(bookTitle);
//     if (index !== -1) {
//         bookList.copiesAvailable[index] += copiesToAdd;
//     }
// }

// function sellBook(bookList, bookTitle, copiesToSell){
//     const index = bookList.bookTitles.indexOf(bookTitle);
//     if (index !== -1 && bookList.copiesAvailable[index] > 0) {
//         bookList.copiesAvailable[index] -= copiesToSell;
//     }
// }

// function getDetails(bookList){
//     return bookList.bookTitles.map((title, index) => `${title} by ${bookList.authorNames[index]}, number of copies available ${bookList.copiesAvailable[index]}`).join('\n');
// }

// const bookList = createBookList(['Bohubrihi'], ['Humayun Ahmed'], [10]);
// addCopies(bookList, 'Bohubrihi', 5);
// sellBook(bookList, 'Bohubrihi', 3);
// console.log(getDetails(bookList));

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem : Write a Javascript Program that takes String as a parameter and checks if the parameters are number or text. If the parameters are numbers then it will return a summation of the numbers. If the parameters are not numbers then it will generate a text by concatenating the strings.

// slove : 

// function parseString (...args){
//    if (args.length === 0) return "";
//    let isNumber = true ;
//    let result = 0 ;
//    for (const arg of args) {
//       if (isNaN(arg)){
//          isNumber = false;
//          break;
//       }
//       result += Number(arg);
//    }
//    return isNumber ? result : args.join(" ");
// }

// function parseString (...args){
//    let isNumber = true ;
//    let result = 0 ;
//    for (const arg of args) {
//       if (isNaN(arg)){
//          isNumber = false;
//          break;
//       }
//       result += Number(arg);
    
//    }

//    return isNumber ? result : args.join(" ");
// }

// function parseString (...args){
//    if (args.every(arg => !isNaN(arg))) {
//       return args.reduce((sum, arg) => sum + Number(arg), 0);
//    }
//    return args.join(" ");
// }

// console.log(parseString("21", "24", "40"));
// console.log(parseString("Hello", "Alpha"));

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem : Given an array exists that has integers, write a function called "getPositiveNumbers" that takes the entire array as input and returns a new array containing only the positive numbers from the original array.
// solve : 

// function getPositiveNumbers(arr) {
//    arr.filter(num => num > 0);
// }

// console.log(getPositiveNumbers([2, -5, 10, -3, 8, -1, 0, 7]));


// const getPositiveNumber = (arr) => {
//      positiveNumbers = arr.filter(num => num < 0);
//      return [...new Set(positiveNumbers)];

// }

// console.log(getPositiveNumber([2, -5, 10, -3, 8, -1, 0, 7]));

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// problem : Write a function called "findMissingNumber" that takes an array of consecutive integers from 1 to n, with one number missing, and returns the missing number.
 // solve : 



// const findMissingNumber = (arr) => {
//       let n = arr.length + 1;
//       let expectedSum = (n*(n+1)/2);

//       let actualSum = arr.reduce((sum,num) => sum + num, 0);
      
//       return expectedSum - actualSum ; 

// }

// function findMissingNumber(arr){

//    const n = arr.length + 1;
//    const expectedSum = (n*(n+1)/2);
//    let actualSum = 0 ;
//    for (let i = 0; i < arr.length; i++){
//       actualSum += arr[i];
//    }
//      return expectedSum - actualSum ;
// }


// function findMissingNumber(arr){
//    let expectedSum = 0 ;
//    let actualSum = 0 ;
//     for(let i = 0 ; i < i.length; i++){
//     actualSum += arr[i];
//     expectedSum += i - 1 ;
// }
//    expectedSum += arr.length + 1 ; 

//    return expectedSum - actualSum ;
// }


// console.log(findMissingNumber([1,2,3,5]));


 
// function findMissingNumber(arr) {
//    const n = arr.length + 1; // The full length of the array (including the missing number)
//    let expectedSum = 0; // Initialize expectedSum
//    let actualSum = 0;   // Initialize actualSum
 
//    // Calculate the expected sum of numbers from 1 to n
//    for (let i = 1; i <= n; i++) {
//      expectedSum += i;   // Add each number from 1 to n
//    }
 
//    // Calculate the actual sum of the numbers in the given array
//    for (let i = 0; i < arr.length; i++) {
//      actualSum += arr[i]; // Add each element from the array
//    }
 
//    // The missing number is the difference between the expected sum and the actual sum
//    return expectedSum - actualSum;
//  }
 
//  console.log(findMissingNumber([2, 3, 4, 5])); // Output: 3
//  console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
//  console.log(findMissingNumber([1, 3, 4, 5])); // Output: 2
//  console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4
//  console.log(findMissingNumber([2, 3, 4, 5])); // Output: 1

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem : Write a function called "getMaxProduct" that takes an array of integers as input and returns the maximum product that can be obtained by multiplying any two distinct elements from the array.
// slove : 

// function getMaxProduct(arr){
//     let maxProduct = 0;
//     for (let i = 0; i < arr.length; i++){
//        for(let j = i+1; j <arr.length; j++){
//          const product = arr[i] * arr[j];
//          if (product > maxProduct){
//             maxProduct = product;
//          }
//        }
//     }
//     return maxProduct;
// }

// console.log(getMaxProduct([1, 2, 3, 4]));

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem : Write a function called "findPrimeNumbers" that takes an array of positive integers as input and returns a new array containing only the prime numbers from the original array.
// slove : 

// function findPrimeNumbers(arr){
//    const prime = [];
//    for (let num of arr) {
//       if (num <= 1)continue;
//       let isPrime = true;

//       for(let i = 2; i < num; i++){
//          if (num % i === 0){
//             isPrime = false;
//             break;
//          }
//       }

//       if (isPrime){
//          prime.push(num);
//       }
      
//    }
//    return prime;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(findPrimeNumbers(numbers));

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Problem : Write a program that prints a triangle asterisk (*). The number of rows in the triangle is determined by the user's input. Each row should contain a  string where the characters are repeated in a mirrored pattern.
// slove : 
// function printTriangle(rows) {
//    for (let i = 1; i <= rows; i++) {
//        // Create the spaces for the current row
//        let spaces = ' '.repeat(rows - i);
//        // Create the stars for the current row
//        let stars = '*'.repeat(2 * i - 1);
//        // Print the row with spaces and stars
//        console.log(spaces + stars);
//    }
// }

// function printTriangle(rows) {
//    for (let i = 1; i <= rows; i++) {
//        let row = '';
//         // Add spaces before the stars
//        for (let j = 0; j < rows - i; j++) {
//            row += ' ';
//        }
//        // Add stars for the current row
//        for (let k = 0; k < (2 * i - 1); k++) {
//            row += '*';
//        }
       
//        // Print the row
//        console.log(row);
//    }
// }


// // Example usage
// let rows = 6; // You can change this to any number of rows
// printTriangle(rows);

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem : Write a program that prints a triangle of palindromic strings. The number of rows in the triangle is determined by the user's input. Each row should contain a palindromic string where the characters are repeated in a mirrored pattern.

// slove : 

// function printPalindromicTriangle(rows) {
//    for (let i = 1; i <= rows; i++) {
//        let row = '';
       
//        // Add spaces for center alignment
//        for (let j = 0; j < rows - i; j++) {
//            row += ' ';
//        }
       
//        // Create the first half of the palindromic string (increasing part)
//        for (let k = i; k < 2 * i; k++) {
//            row += k;
//        }
       
//        // Create the second half of the palindromic string (decreasing part)
//        for (let k = 2 * i - 2; k >= i; k--) {
//            row += k;
//        }
       
//        // Print the row
//        console.log(row);
//    }
// }

// // Example usage
// let rows = 5; // You can change this to any number of rows
// printPalindromicTriangle(rows);

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// problem : Problem 16:
// A Fibonacci number is a sequence of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. In mathematical terms, the Fibonacci sequence is defined as:
// F(n) = F(n-1) + F(n-2) for n > 1
// So, the Fibonacci sequence begins as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on. Each subsequent number in the sequence is the sum of the two preceding numbers. The Fibonacci sequence has numerous mathematical properties and applications in various fields, including mathematics, computer science, and nature.
// Task 1:
// Write a function called "fibonacciSequence" that takes a positive integer n as input and returns an array containing the first n numbers in the Fibonacci sequence.
// Sample Input: 8
// Sample Output: [0, 1, 1, 2, 3, 5, 8, 13]
// Task 2: Write a function called "isFibonacciNumber" that takes a number as input and returns true if the number is a Fibonacci number, and false otherwise.
// For example:
// Input: 8
// Output: true
// Input: 10
// Output: false

// slove : 

// function fibonacci (length){
//    const fibArray = [0,1];

//    for (let i = 2; i  < length; i++){
//        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//        }
//        return fibArray;
// }
//  const  fibArray = fibonacci(13);
//  console.log(fibArray.join(' ')); 

//  function isFibonacciNumber (num){
//     let fib1 = 0 , fib2 = 1;
    
//     if (num === 0 || num === 1) return true;

//     while (fib2 < num){
//       let nextFib = fib1 + fib2 ;
//       fib1 = fib2;
//       fib2 = nextFib;

//       if (fib2 === num){
//          return true;
//       }
//     }

//     return false; 
//  }

// console.log(isFibonacciNumber(8));  // Output: true
// console.log(isFibonacciNumber(10));  // Output: false

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// problem : Write a function called "findMedian" that takes an array of numbers as input and returns the median value of the numbers.
// For example:
// Input: [5, 2, 8, 1, 9]
// Output: 5
// Input: [4, 2, 7, 1, 9, 10]
// Output: 5.5

// // slove : 
// function findMedian(arr) {
//    // Sort the array in ascending order using a simple sorting method (bubble sort)
//    for (let i = 0; i < arr.length; i++) {
//        for (let j = i + 1; j < arr.length; j++) {
//            if (arr[i] > arr[j]) {
//                let temp = arr[i];
//                arr[i] = arr[j];
//                arr[j] = temp;
//            }
//        }
//    }

//    const n = arr.length;
//    if (n % 2 === 1) {
//        // If the length is odd, return the middle element
//        return arr[(n - 1) / 2];
//    } else {
//        // If the length is even, return the average of the two middle elements
//        const mid1 = arr[n / 2 - 1];
//        const mid2 = arr[n / 2];
//        return (mid1 + mid2) / 2;
//    }
// }

// // Example usage
// console.log(findMedian([5, 2, 8, 1, 9]));  // Output: 5
// console.log(findMedian([4, 2, 7, 1, 9, 10])); // Output: 5.5

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem : Write a function called ‘countCharacter’ that takes a string as parameters and returns an object with character count.
// slove : 

// function countCharacter(str) {
//    const charCount = {};  // Initialize an empty object to store the character counts
//    // Loop through each character in the string
//    for (let char of str) {
//        if (charCount[char]) {
//            // If the character is already in the object, increment its count
//            charCount[char]++;
//        } else {
//            // If the character is not in the object, add it with count 1
//            charCount[char] = 1;
//        }
//    }

//    return charCount;
// }

// // Example usage
// console.log(countCharacter("HellooH"));  // Output: { H: 1, e: 1, l: 2, o: 1 }


// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Problem: Write a function to replace a word in a string with another word.
// let str = 'Hello world';

// replaceWord = ( str , word1, word2) => {
//     return str.replace(word1, word2);
// }

// console.log(replaceWord(str, 'world', 'masum'));


// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This section is commented out to remove duplicate elements from an array
/*
const array = [1, 3, 5, "banana", 7, 3, 5, 9, "banana"];

const uniqueElements = array.filter((element, index) => {
    return array.indexOf(element) === index;
});

console.log(uniqueElements);
*/

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem: Find the smallest number in an array

// Solution: Using Math.min() with the spread operator to find the smallest number in the array

/* const arr = [ 20, 60, 470, 2830, 4384, 443, 23, -3, -21, 70];

const min = Math.min(...arr);

console.log(min);  // Output: -21
*/

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* 
// Problem: Find the smallest number in an array
//Solution: Using reduce to find the smallest number in the array

const arr = [20, 60, 470, 2830, 4384, 443, 23, -3, -21, 70];
const smallest = arr.reduce((min, current) => (current < min ? current : min), arr[0]);

onsole.log(smallest); // Output: -21

*/

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
//Problem: Find the smallest number in an array
//Solution: Using sort to find the smallest number in the array
const arr = [20, 60, 470, 2830, 4384, 443, 23, -3, -21, 70];
const smallest = arr.sort((a, b) => a - b)[0];

console.log(smallest); // Output: -21
*/

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
// Problem: Find the smallest number in an array
// Solution: Using forEach() to find the smallest number in the array
const arr = [20, 60, 470, 2830, 4384, 443, 23, -3, -21, 70];
let smallest = arr[0];

arr.forEach(num => {
  if (num < smallest) {
    smallest = num;
  }
});

console.log(smallest); // Output: -21
*/

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem: Find the total of the numbers in an array

// Solution: Using a for loop to iterate through the array and sum up all the numbers.

/*const arr = [20, 60, 470, 2830, 4384, 443, 23, -3, -21, 70];
let total = 0;

// Using a for loop to iterate through the array and sum up all the numbers.
for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}

console.log(total);
*/

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem: Find the total of the numbers in an array
// Solution: Using reduce to find the total of the numbers

// const total = arr.reduce((sum, current) => sum + current, 0);
// console.log(total);*/



// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // Problem: Implement a calculator function that takes two numbers and an operator as input and returns the result of the operation.
// // The function should use a switch case to handle different operators (+, -, *, /, %).
// // If the operator is invalid, it should return 'Invalid operator'.
// // If division by zero is attempted, it should return 'Cannot divide by zero'.

// // Define a function called calculator that takes three parameters: num1, operator, and num2.
// // The function uses default values of 0 for num1 and num2, and '+' for operator.
// function calculator(num1 = 0, operator = '+', num2 = 0){
//   // Use a switch statement to determine which operation to perform based on the operator.
//   switch (operator){
//       // If the operator is '+', return the sum of num1 and num2.
//       case '+':
//           return num1 + num2;
//       // If the operator is '-', return the difference of num1 and num2.
//       case '-':
//           return num1 - num2;
//       // If the operator is '*', return the product of num1 and num2.
//       case '*':
//           return num1 * num2;
//       // If the operator is '/', return the quotient of num1 and num2.
//       // If num2 is 0, return 'Cannot divide by zero' instead of NaN.
//       case '/':
//           return num1 / num2 || 'Cannot divide by zero';
//       // If the operator is '%', return the remainder of num1 divided by num2.
//       case '%':
//           return num1 % num2;
//       // If the operator is none of the above, return 'Invalid operator'.
//       default:
//           return 'Invalid operator';
//   }
// }

// // Import the readline module, which allows reading input from the user.
// const readline = require('readline'); 

// // Create an instance of readline, specifying that input should come from process.stdin and output should go to process.stdout.
// const rl = readline.createInterface({ 
//   input: process.stdin,
//   output: process.stdout
// });

// // Define a function called calculateAndPrintResult that reads input from the user and calculates the result of an operation.
// function calculateAndPrintResult() {
//   // Initialize an empty array to store the user's input.
//   let operations = [];
  
//   // Prompt the user to enter the first number.
//   rl.question('Enter first number: ', (firstNumber) => {
//       // Convert the user's input to a float and add it to the operations array.
//       operations.push(parseFloat(firstNumber));
      
//       // Prompt the user to enter an operator.
//       rl.question('Enter operator (+, -, *, /, %): ', (operator) => {
//           // Define an array of valid operators.
//           const validOperators = ['+', '-', '*', '/', '%'];
//           // Check if the user's input is a valid operator.
//           if (!validOperators.includes(operator)) {
//               // If the operator is invalid, print an error message and exit the readline interface.
//               console.log('Invalid operator. Please enter one of +, -, *, /, %');
//               rl.close(); 
//               return; 
//           }
//           // Add the operator to the operations array.
//           operations.push(operator);
          
//           // Prompt the user to enter the second number.
//           rl.question('Enter second number: ', (secondNumber) => {
//               // Convert the user's input to a float and add it to the operations array.
//               operations.push(parseFloat(secondNumber));
//               // Calculate the result of the operation using the calculator function.
//               let result = calculator(operations[0], operations[1], operations[2]);
//               // Print the result.
//               console.log(result);
//               // Close the readline interface.
//               rl.close(); 
//           });
//       });
//   });
// }

// // Call the calculateAndPrintResult function to start the program.
// calculateAndPrintResult();
// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// The problem is to convert a string from snake_case or kebab-case to camelCase.
// The solution involves splitting the string into words based on the delimiter (- or _),
// then capitalizing the first letter of each word except the first one, and finally joining the words back together.

// function toCamelCase(str){
//   // Check if the input string is empty and return it as is if true.
//   if ( str.length === 0 )
//       return ''; 
//   // Split the input string into words based on the delimiter (- or _).
//   const words = str.split(/[-_]/);
//   // Map over the words array to transform each word into camelCase.
//   return words.map((word, index) => {
//     // For the first word, return it as is.
//     if ( index === 0 ){
//       return word;
//     }else{
//       // For subsequent words, capitalize the first letter and lowercase the rest.
//       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }
//   }).join('');
// }

// // Import the chai assertion library for unit testing.
// const { assert } = require('chai');

// // Define a test suite for the toCamelCase function.
// describe("Tests", () => {
//   it("test", () => {
//     // Test cases for the toCamelCase function.
//     assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
//     assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
//     assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
//     assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
//   });
// });

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem : Different between two arrays

// let arr1 = [5,9,6,7,8,3];
// let arr2 = [9,6,8,2,1,4,11];
// //    function diferenceBetween(arr1, arr2) {
// //       let result = [];
// //       for(let i = 0; i < arr1.length; i++) {
// //          if(arr2.indexOf(arr1[i]) === -1) {
// //             result.push(arr1[i]);
// //          }
// //       }
// //       return result;
// //    }

// //   function diferenceBetween(arr1, arr2) {
// //      const arrray1 = arr1.filter(x =>!arr2.includes(x));
// //      const arrray2 = arr2.filter(y => !arr1.includes(y));
// //      return [...arrray1,...arrray2];
// //   }

// console.log(diferenceBetween(arr1, arr2));

// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

