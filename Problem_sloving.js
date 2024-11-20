// This section is commented out to remove duplicate elements from an array
/*
const array = [1, 3, 5, "banana", 7, 3, 5, 9, "banana"];

const uniqueElements = array.filter((element, index) => {
    return array.indexOf(element) === index;
});

console.log(uniqueElements);
*/


// This section is find out for fibonacci number 


// function fibonacci (length){
//     const fibArray = [0,1];

//     for (let i = 2; i  < length; i++){
//         fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//         }
//         return fibArray;
// }
//   const  fibArray = fibonacci(10);
//   console.log(fibArray.join(',')); 



// Problem: Find the smallest number in an array

// Solution: Using Math.min() with the spread operator to find the smallest number in the array

/* const arr = [ 20, 60, 470, 2830, 4384, 443, 23, -3, -21, 70];

const min = Math.min(...arr);

console.log(min);  // Output: -21
*/

/* //Solution: Using reduce to find the smallest number in the array

const arr = [20, 60, 470, 2830, 4384, 443, 23, -3, -21, 70];
const smallest = arr.reduce((min, current) => (current < min ? current : min), arr[0]);

onsole.log(smallest); // Output: -21

*/

/*
//Solution: Using sort to find the smallest number in the array
const arr = [20, 60, 470, 2830, 4384, 443, 23, -3, -21, 70];
const smallest = arr.sort((a, b) => a - b)[0];

console.log(smallest); // Output: -21
*/


/*
Solution: Using forEach() to find the smallest number in the array
const arr = [20, 60, 470, 2830, 4384, 443, 23, -3, -21, 70];
let smallest = arr[0];

arr.forEach(num => {
  if (num < smallest) {
    smallest = num;
  }
});

console.log(smallest); // Output: -21
*/

// Problem: Given an array of numbers, find the total of the numbers.



// Solution: Using a for loop to iterate through the array and sum up all the numbers.

/*const arr = [20, 60, 470, 2830, 4384, 443, 23, -3, -21, 70];
let total = 0;

// Using a for loop to iterate through the array and sum up all the numbers.
for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}

console.log(total);
*/
// Solution: Using reduce to find the total of the numbers

/*const arr = [20, 60, 470, 2830, 4384, 443, 23, -3, -21, 70];
const total = arr.reduce((sum, current) => sum + current, 0);

console.log(total);*/









