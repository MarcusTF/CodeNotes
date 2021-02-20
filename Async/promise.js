
function promiseContainScope() {
    console.log("~~~~~~~~   promise   ~~~~~~~~")



    //the parts of a promise are a bit difficult to keep track of due to their asynchronous nature, but I tried to be very descrptive with the names of variables and such.



    //set whether the promise will be rejected or fulfilled with this boolean
    let success = false

    const nameOfYourPromise = (                                     //declare a variable and set it equal to a "new Promise()".
        new Promise(                                                //"Promise()" is an object constructor that takes 2 parameters, resolve and reject.
            (resolve, reject) => {                                  //resolve and reject are functions that change the promise's state to "fulfilled" or "rejected"
                setTimeout(() => {                                  //settimeout is used here to simulate a process taking some time to execute.
                    if (success) {                                  //if success = true, resolve() is called, setting the promise to "fulfilled"
                        let successResult = '"success state"'       //anything passed into resolve will be passed into the callback [line 25] in the .then [line 36]
                        resolve(successResult)
                    } else {                                        //if success = false, reject() is called, setting the promise to "rejected"
                        let failureResult = '"failure state"'       //anything passed into reject will be passed into the callback [line 30] in the .catch [line 37]
                        reject(failureResult)
                    }
                }, 5000)
            }))

    //this function is the callback for if the promise is successful.
    const functionToCallWhenPromiseIsFulfilled = successResultPassedFromResolve => {
        console.log("~~~~~~~~   promise completion   ~~~~~~~~")
        console.log(successResultPassedFromResolve, 'Success!', nameOfYourPromise)
    }
    //this function is the callback for if the promise is unsuccessful.
    const funtionToCallWhenPromiseIsRejected = failureResultPassedFromReject => {
        console.log("~~~~~~~~   promise completion   ~~~~~~~~")
        console.log(failureResultPassedFromReject, 'Failure.', nameOfYourPromise)
    }

    nameOfYourPromise                                       //here's the cool part: promise.then and promise.catch
        .then(functionToCallWhenPromiseIsFulfilled)         //.then will run the function in the () when the promise's state is set to fulfilled, which happens when resolve() is called above. Here we use onFulfill, which is the function we wrote for the success case.
        .catch(funtionToCallWhenPromiseIsRejected)          //.catch will run the function in the () when the promise's state is set to rejected, which happens when reject() is called above. Here we use onReject, which is the function we wrote for the failure case.

    //anything passed into resolve or reject will be passed into the functions that you pass into .then & .catch
    //for example, if you pass as a parameter "hello world" into resolve(), it will be passed as a parameter into onFulfill()

    console.log(nameOfYourPromise)    //note that this will be logged FIRST, becuase the promise will run in the background and continue on and allow this to run. then, when the promise finishes or fails, it will run the appropriate code.


    /*
    
    a Promise is just an object
    
    A Promise object has 3 states:
    - Pending: awaiting fulfillment or rejection
    - Fulfilled: operation was successful, or "fulfilled"
    - Rejected: operation failed, or was "rejected"

    */





    //uncommented, but commented-out version... that's confusing...
    /*
    let success = true
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                let successResult = '"success state"'
                resolve(successResult)
             } else {
                 let failureResult = '"failure state"'
                 reject(failureResult)
             }
         }, 5000)
     })
     const onFulfill = successResult => console.log(successResult, 'Success!', promise)
     const onReject = failureResult => console.log(failureResult, 'Failure.', promise)
     
     promise
     .then(onFulfill)
     .catch(onReject)
     
     console.log(promise)
     */

}

promiseContainScope()