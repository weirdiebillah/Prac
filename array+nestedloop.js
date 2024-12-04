
// JavaScript Array and Nested Loop Example

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