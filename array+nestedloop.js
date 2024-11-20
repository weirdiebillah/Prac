
// JavaScript Array and Nested Loop Example

// Array Methods Example

// Create an array
// let arr = [1, 2, 3, 4, 5];

// Push: add an element to the end of the array
// arr.push(6);
// console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// Pop: remove the last element from the array
// let lastElement = arr.pop();
// console.log(arr); // Output: [1, 2, 3, 4, 5]
// console.log(lastElement); // Output: 6

// Length: get the number of elements in the array
// console.log(arr.length); // Output: 5

// Shift: remove the first element from the array
// let firstElement = arr.shift();
// console.log(arr); // Output: [2, 3, 4, 5]
// console.log(firstElement); // Output: 1

// Unshift: add an element to the beginning of the array
// arr.unshift(0);
// console.log(arr); // Output: [0, 2, 3, 4, 5]


// let names =  ['John', 'Mary', 'David', 'Emily'];

 

// This section iterates through an array of names and logs each name to the console

// for (let i = 0; i < names.length; i++)
// {
//     console.log(names[i]);
// }
// This section iterates through the names array and sets each name to 'Masum'
// for (let i = 0; i < names.length; i++){
//       names[i] = 'Masum';
// }

// This section creates a new array and copies all elements from the names array to it
// let newArr = [];
// for (let i = 0; i < names.length; i++)
// { 
//   newArr.push('Mr '+ names[i]);
// }

// // Create a 2D array
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// // Accessing elements in a 2D array
// console.log(matrix[0][0]); // Output: 1
// console.log(matrix[1][1]); // Output: 5

// // Modifying elements in a 2D array
// matrix[0][0] = 10;
// console.log(matrix[0][0]); // Output: 10

// // Iterating through a 2D array
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

// Create a 3D array
// let threeDArray = [
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ],
//   [
//     [10, 11, 12],
//     [13, 14, 15],
//     [16, 17, 18]
//   ],
//   [
//     [19, 20, 21],
//     [22, 23, 24],
//     [25, 26, 27]
//   ]
// ];

// Accessing elements in a 3D array
// console.log(threeDArray[0][0][0]); // Output: 1
// console.log(threeDArray[1][1][1]); // Output: 14

// Modifying elements in a 3D array
// threeDArray[0][0][0] = 100;
// console.log(threeDArray[0][0][0]); // Output: 100

// Iterating through a 3D array
// for (let i = 0; i < threeDArray.length; i++) {
//   for (let j = 0; j < threeDArray[i].length; j++) {
//     for (let k = 0; k < threeDArray[i][j].length; k++) {
//       console.log(threeDArray[i][j][k]);
//     }
//   }
// }



// Nested loop example

// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 2; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }

// for (let i = 0; i < 2; i++) {
//  for (let j = 0; j < 2; j++)  {
//  console.log('i: ' + i + ' j:' + j);
//  }
// }



// let persons = [
//   ["Masum", 9, "Java"],
//   ["Billah", 18, "javascript"],
//   ["Zihadi", 29, "Python"],
// ];

// This outer loop iterates through each person in the persons array, excluding the last one.
// for (let i = 0; i < persons.length - 1; i++) {
//   // Initialize an empty string to store the person's details.
//   var data = "";
//   // This inner loop iterates through each detail of the current person, excluding the last detail.
//   for (let j = 0; j < persons[i].length - 1; j++) {
//     // Concatenate each detail to the data string, followed by a space.
//     data += persons[i][j] + " ";
//   }
//   // Log the concatenated details of the person to the console.
//   console.log(data);
// }


// This nested loop iterates through the persons array and then through each person's details (name, age, language).
// for (let i = 0; i < persons.length; i++)
// {
//   for (let j = 0; j < persons[i].length; j++)
//   {
//     console.log(persons[i][j]);
//   }
// }