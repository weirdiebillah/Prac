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


// const arr1 = [1, 2, 3, 4, 5];

// let index = 1;

// console.log( `An index ${index} returns ${arr1.at(index)}`);

// index = -1;

// console.log(`An index ${index} returns ${arr1.at(index)}`);


// map, filter, sort, every, some, reduce 

// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = arr.map((element) => element * 2);

// console.log(newArr.join(','));


const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


// // MAP 

// // Get an array of all names

// let allNames = characters.map(function (el){
//     return el.name;
// });

// console.log(allNames.join(', '));

// // Get an array of all heights
// let allHeights = characters.map(function (el){
//     return el.height;
// });

// let arr = ['1', '2','3', '4', '5', '6', '7'];
// arr = arr.map(Number);
// let result = 0;
// for (let i = 0; i < arr.length; i++){
//     result += arr[i];
// }
// console.log(result);

// console.log(allHeights.join(', '));

// // Get an array of objects with just name and height properties
// let objects = characters.map(function (el){
//     return {name: el.name, height: el.height};
// });

// console.log(objects);

// // Get an array of all first names

// let fristNames = characters.map(function (el){
//     return el.name.split(' ')[0];
// });

// console.log(fristNames.join(', '));



// // FILTER

// let arr = [1,3,4,6,7,8,23,32,33,34,35,36,37,]

// let evenNumber = arr.filter(function (el) { 
//     if (el % 2 === 0) return el;
// });

// console.log(evenNumber.join("  "));


// Get characters with mass greater than 100

// let greaterMass = characters.filter(function(el){
//     return el.mass > 100;
// });

// console.log(greaterMass);

// Get characters with height less than 200

// let lessTheHieght = characters.filter(function(el){
//     return el.height < 200;
// });

// console.log(lessTheHieght); 

// Get all male characters

// let male = characters.filter(function(el){
//     return el.gender ==='male';
// });

// console.log(male);

// Get all female characters

// let female = characters.filter(function(el){
//     return el.gender ==='female';
// });

// console.log(female);



// every / some 

// let arr = [2 , 4 , 6 , 13 ]

// let allEven = arr.every(function(el){
//     return el % 2 === 0;
// });

// console.log(allEven); 

// let allEven = arr.some(function(el){
//     return el % 2 === 0;
// });

// console.log(allEven); 




// // // Every 


// // Does every character have blue eyes?
// let allBlueEye =  characters.every(function(el){
//     return el.eye_color === 'blue';
// });

// console.log(allBlueEye);


// // Does every character have mass more than 40?
// let allMassMore = characters.every(function(el){ 
//     return el.mass > 40;
// });
// // Is every character shorter than 200?
// let allShorter = characters.every(function(el){ 
//     return el.height < 200;
// });

// console.log(allShorter);

// // Is every character male?
// let allMale = characters.every(function(el){ 
//     return el.gender ==='male';
// });

// console.log(allMale);

// // Is every character female?
// let allFemale = characters.every(function(el){
//     return el.gender ==='female';
// })
// console.log(allFemale);

// // Some 

// // Is there at least one male character?
// // Is there at least one character with blue eyes?
// // Is there at least one character taller than 200?
// // Is there at least one character that has mass less than 50?


// Sort 

// let arr = [ 2, 1 , 22 , 43 ,21 , 13 , 123 , 22 , 43 , 21 , 13 , 123 , 22 , 43 , 21 ];

// arr.sort(function (a, b) {
//     return a - b;
// });
// let arr = [ 'Banana', 'Apple', 'Orange' , 'JackFruit'];

// arr.sort();

// console.log(arr);

// // negative -> a age boshe b pore boshe
// // positive -> b age bose a pore boshe
// // equal -> je jekhane ache sekhanei thakbe


// Reduce 

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let result = 0 ;

// for (let i = 0; i < arr.length; i++){
//     result += arr[i];
// }


// let result = arr.reduce(function(acc,el){
//     return (acc += el);
// },10);


// console.log(result);


// // Get the total mass of all characters
// let totalMass =  characters.reduce(function(acc,el){
//          return (acc += Number(el.mass));
//     },0);

// console.log(totalMass);

// // Get the total height of all characters

// let totalHeight = characters.reduce(function(acc,el){
//     return (acc += Number(el.height));
// },0);

// console.log(totalHeight);


// Get the total number of characters in all the character names

// let totalNumberOfCharacters = characters.reduce(function(acc,el){
//            return (acc += Number(el.name.length))

// },0);

// let totalNumberOfCharacters = characters.reduce(function(acc,el){
//            return (acc += el.name.split(' ').join('').length);

// },0);

// console.log(totalNumberOfCharacters);


// Get the total number of characters by eye color (hint. a map of eye color to count)

// let totalNumberOfCharacters = characters.reduce(function(acc,el){
//     if (acc[el.eye_color]){
//         acc[el.eye_color]++;
//     }
//     else {
//         acc[el.eye_color] = 1;
//     }

//     return acc;

// }, {});

// console.log(totalNumberOfCharacters);