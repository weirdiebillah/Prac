const hasMeetings = true;

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

/// .then and .catch

// meeting
// .then((result) => {
//     console.log(result);
// })

// .catch((error) => {
//     console.log(error.message);
// });


meeting
.then(addToCalender)
.then((calender) => {
    console.log(calender);
})
.catch((error) => {
    console.log(error.message);
});
