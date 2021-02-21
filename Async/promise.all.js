function promiseAllContainScope() {


    //Promise.all takes an array of promises, and returns them all once the last one finishes.


    Promise.all([                                                   //Promise.all takes an array of promises
        promise1 = new Promise((resolve, reject) => {               //promise 1 immediately resolves
            resolve('hello world')
        }),
        promise2 = new Promise((resolve, reject) => {               //promise 2 waits 3000ms, then resolves.
            setTimeout(() => resolve('I <3 Promises'), 3000)
        }),
        promise3 = new Promise((resolve, reject) => {               //finally, promise 3 resolves after 5500ms.
            setTimeout(() => resolve('Promise.all rules!'), 5500)
        })
    ]).then((result) => {                                           //after the last promise finishes, the .then will run for ALL of the promises.
        console.log("~~~~~~~~   promise.all   ~~~~~~~~")
        console.log("All Promises Have Completed! YAY!")
        console.log(result)
        console.log(result[0])
        console.log(result[1])
        console.log(result[2])
    })

}


promiseAllContainScope()