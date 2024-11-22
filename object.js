// // Objects
// let person = { name: 'John Doe', age: 30 };
// console.log(person.name); // returns 'John Doe'
// person.country = 'USA';
// console.log(person); // returns { name: 'John Doe', age: 30, country: 'USA' }


// let person = {
//     name : 'Masum Billah Zihadi',
//     age : 20,
//     city : 'Dhaka',
//     country : 'Bangladesh',
//     sayHello : function(){
//         console.log('Hello world');
//     }
// } // object literal

// console.log(person.name);
// person.sayHello();

// let str = 'city';
// console.log(person[str]);

// person.interest = ['coding', 'reading', 'traveling'];
// console.log(person);

// let calculator = {

//     // property
//     name : 'Masum Billah Zihadi',

//     // method
//     add (num1, num2){
//         return num1 + num2;
//     },
//     subtract (num1, num2){
//         return num1 - num2;
//     },
//     multiply (num1, num2){
//         return num1 * num2;
//     },
//     divide(num1, num2){
//         return num1 / num2;
//     }
// }


// we can change the property of an object 
// calculator.name = 'Calculator';

// console.log(calculator.name);



// convertor.name = 'Convertor';

// console.log(convertor.name);


// let person = {
//     name : 'Masum Billah Zihadi',
//     age : 20,
//     interest : ['coding', 'reading', 'traveling'],
//     address : {
//         street : '123 Main St',
//         city : 'Dhaka',
//         country : 'Bangladesh'
//     }
// }

//console.log(person.address.city);


// This loop iterates through each property of the 'person' object and logs its value to the console.
// for (let element in person){
//     console.log(person[element]);
// }


// This Keyword


// window object is the global object in the browser
// console.log(window);

// this keyword refers to the current execution context
// console.log(this);


// // this keyword in a function
// function sayHello(){
//     console.log(this);
// }
// sayHello();


// // this keyword in a method
// let calculator = {
//     name : 'Calculator',
// }
// calculator.sayHello = function(){
//     console.log(this);
// }
// calculator.sayHello();  


// let person = {
//     name : 'Masum Billah Zihadi',
//     age : 20,
//     interest : ['coding', 'reading', 'traveling'],
//     address : {
//         street : '123 Main St',
//         city : 'Dhaka',
//         country : 'Bangladesh'
//     },
//     sayHello (){
//         console.log(`Hello ` + this.name);
//     },

//     // showInterest (){
//     //     this.interest.forEach(function(element){
//     //         console.log(element,  this.name);
//     //     }, this);
//     // },

//     showInterest (){
//         this.interest.forEach(element => {
//             console.log(element, this.name);
//         });
       
//     }
// }

// person.showInterest();
// person.sayHello();

// method--> this -->  same object
// function --> this --> window / global object
// arrow function --> this --> window / global object


// const person ={
//     fullName : function (){
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// const person1 = {
//     firstName : 'Masum',
//     lastName : 'Billah'
// }

// console.log(person.fullName.call(person1));