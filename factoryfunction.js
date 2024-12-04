// // Factory function is a function that returns an object.

// function createPerson(firstName, lastName){
//     return {
//         firstName,
//         lastName,
//         fullName : function(){
//             return `${firstName} ${lastName}`;
//         }
//     }
// }

// const person1 = createPerson('Masum', 'Billah');
// console.log(person1.fullName());


// function createCarList(carModel , carBrand , manufactureYear){
//      return {
//          carModel,
//          carBrand,
//          manufactureYear,
//         //  car : function(){
//         //      return `${carModel}  ${carBrand}  ${manufactureYear}` ;
//         //  }
//         car: () => `${carModel} ${carBrand} ${manufactureYear}`
//      }
// }

// const car1 = createCarList("911",'Porshe',1999);
// console.log(car1.car());