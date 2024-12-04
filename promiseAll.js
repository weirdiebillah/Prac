const promise1 = Promise.resolve('success1');
let a = true;

const promise2 = new Promise((res,rej) => {
    setTimeout(() => {
        
        if(!a){
            res('suceess 2')
        } else {
            rej (new Error('i am error from'));
        }

    }, 2000);
});

// Promise.all([promise1 , promise2])
// .then((res) => console.log(res))
// .catch((err) => console.log(err.message));


// Promise.allSettled([promise1 , promise2])
// .then((res) => console.log(res))
// .catch((err) => console.log(err.message));

Promise.all([promise1 , promise2])
.then((res) => console.log(res))
.catch((err) => console.log(err.message));