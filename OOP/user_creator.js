const userCreatorContainScope = (() => {
    console.log("~~~~~~~~   user creator  ~~~~~~~~")

    /** 
     * the first solution to the problem of rewriting each user by hand is to just make a
     * function that does it for us. Simple enough.
     */

    function userCreator(name, score) {                     // we make a function called userCreator that has 2 parameters, name and score.
        const newUser = {}                                  // we declare variable "newUser" and set it to an empty string.
        newUser.name = name                                 //we set the atributes using dot notation for name and score, to the arguments passed in as those parameters
        newUser.score = score
        newUser.increment = function(){newUser.score++}     // we set an attribute called increment that has the functionality we want to be able to call
        return newUser                                      // lastly, we return that "newUser" object.
    }

    const user1 = userCreator('Marcus', 0)                  //now, when we call userCreator(), it will generate a "newUser" object with the appropiate information and the relevant function.
    const user2 = userCreator('Jasmine', 1)
    user1.increment()                                       //we can call the function, and it will work like last time.
    user2.increment()
    console.log(user1)
    console.log(user2)

    /**
     * It works! But there's a catch...
     * 
     * The problem with this solution is that it creates a copy of the
     *  increment function (or method) for every single user, and cpies all the code with it.
     * our example is just 1 line, but imagine if this were a complex function with hundreds
     * of lines and there were thousands of users. Additionally, what if we have multiple
     * functions? We need a way to have every user reference the SAME function, while maintaining
     * their unique properties.
     * 
     * >>>> see "__proto__.js"
     */

})()
