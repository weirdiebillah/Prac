// Conditionals

// Fizzbuzz

// The order of the conditions is important to ensure that 'FizzBuzz' is printed for multiples of both 3 and 5.
// for (let i = 1; i <= 100; i++){
//   if (i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz');
//   }
//   else if (i % 3 === 0){
//     console.log('Fizz');
//   }
//   else if (i % 5 === 0){
//     console.log('Buzz');
//   }
//   else {
//     console.log(i);
//   }
// }

// Date Object Switch Case

// let date = new Date();

// switch(date.getDay()){
//   case 0:
//     console.log('Sunday');
//     break;
//   case 1:
//     console.log('Monday');
//     break;  
//   case 2:
//     console.log('Tuesday');
//     break;  
//   case 3:
//     console.log('Wednesday');
//     break;  
//   case 4:
//     console.log('Thursday');
//     break;
//   case 5:
//     console.log('Friday');
//     break;
//   case 6:
//     console.log('Saturday');
//     break;
//   default:
//     console.log('Invalid day');
// }

//odd even number

// let nums = [1,2,3, 212, 3434, 54, 34 , 32, 23];

// let even = [];
// let odd = [];

// for (let i =0; i < nums.length; i++){
//   if (nums[i] % 2 === 0){
//     even.push(nums[i]);
//   }
//   else {
//     odd.push(nums[i]);
//   }
// }

// console.log('EvenNumber: ' + even.join(','));
// console.log('OddNumber: ' + odd.join(','));

// let person = [
//   ['Shakib', 39 , 'Bangladesh'],
//   ['Tamim', 32 , 'Bangladesh'],
//   ['Mushfiq', 36 , 'Bangladesh'],
// ]
// let ageLessThan35 = [];
// let country = [];
// for (let i = 0; i < person.length; i++){
//     if (person[i][1] <35){
//       ageLessThan35.push(person[i][0] + ' ' + person[i][1]);
//     }
//     else if (person[i][2] === 'Bangladesh'){
//       country.push(person[i][0] + ' ' + person[i][1]);
//     }
// }
// console.log(ageLessThan35.join(','));
// console.log(country.join(','));
