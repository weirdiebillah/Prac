// console.log('Take order from coustomer 1');

// const processOrder = () => {
//     console.log('Preparing order...');
//     let currentTime = new Date().getTime();
// }


// synchronized blocking code here

// console.log('taking order from coustomer 1');

// const processOrder = async () => {
//     console.log('processing order from coustomer 1');
//     let currentTime = new Date().getTime();
//     while (currentTime + 3000 >= new Date().getTime()) {

//     }
//     console.log('order prcessed for customer 1');
// }

// processOrder();

// console.log('complete order');


// 

// const takeOrder = (customer, callback) =>{
//     console.log(`take order from coustomer ${customer}`);
//     callback(customer);
// }
// const processOrder = (customer, callback) => {
//     console.log(`processing order from ${customer}`);
//       setTimeout(() => {
//         console.log(`cooking done`); // callback queue
//         console.log(`order prcessed for ${customer}`);
//         callback(customer);
//       }, 3000);   // asynchronously non-blocking code    
// }

// const completeOrder = (customer) =>{
//     console.log(`order completed for ${customer}`);
// }



// takeOrder('Customer 1',(customer) => {
//     processOrder(customer ,(customer) => {
//      completeOrder(customer);
//     });
// });



//

const hasMeetings = false;
const meeting = new Promise((resolve, reject) => {
    if(!hasMeetings){
        const meetingDetails = {
            name: 'Tech Meetings',
            time: '10 AM',
            location: 'New Califonia, Conference Room',
        }
        resolve(meetingDetails);
    }
    else {
        reject(new Error('No meetings scheduled for today.'));
    }

});


const addToCalender = ( meetingDetails) =>{
    
    const calender = `${meetingDetails.name} is secheduled in ${meetingDetails.location} at ${meetingDetails.time}`;
   
   return Promise.resolve(calender);

}

async function Meetings()
{
    try{const meetingDetails = await meeting;
    const calender = await addToCalender(meetingDetails);

    console.log(calender);}
    catch(err){
        console.log(err);
    }
}

// 


Meetings();


