const protoContainScope = (() => {
    console.log("~~~~~~~~   __proto__  ~~~~~~~~")



    function userCreator(name, score) {                     // we make a function called userCreator that has 2 parameters, name and score.
        const newUser = Object.create(functionStorage)      // we declare variable "newUser" and set it to an empty object, this time using Object.create(). We pass in the name of the object where we're storing our functions.
        newUser.name = name                                 //we set the atributes using dot notation for name and score, to the arguments passed in as those parameters
        newUser.score = score
        return newUser                                      // lastly, we return that "newUser" object.
    }

    const functionStorage = {                                                       //here, we create a variable in which to store our object.
        increment: function () { this.score++ },                                    //inside this object we store the increment fuction.
        login: function () { console.log(`You are Logged In, ${this.name}!`) }      //we can make other functions to store in here, too
    }                                                                               //we use "this" as a stand in for the user. Here, the "this" keyword refers to whatever is to the left of the "." when increment is called.

    /**
     * when we use Object.create() and pass in an object, we create a
     * prototypal bond via the hidden property "__proto__". When we run
     * user1.increment(), javascript will look for the increment method
     * of user1; when it doesn't fid it, it will follow this prototypal
     * bond to functionStorage, where the function is stored. It will 
     * follow this path for every user created, running the same function
     * every time, rather than copying the function, wholesale, into each 
     * user.
     */

    const user1 = userCreator('Marcus', 0)                  //now, when we call userCreator(), it will generate a "newUser" object with the appropiate information, and a link to the increment method stored inside of functionStorage.
    const user2 = userCreator('Jasmine', 1)
    user1.increment()                                       //we can call the function, and it will work like last time.
    user2.increment()
    console.log(user1)
    console.log(user2)

    /**
     * this is a fully functional solution. There's nothing wrong with it,
     * except maybe that it's a bit verbose. However, there's an easier, built-
     * in way that JavaScript has to handle this.
     * 
     * >>>> see "new.js"
     */


})()
