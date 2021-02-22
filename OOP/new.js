const newContainScope = (() => {

    console.log("~~~~~~~~   new  ~~~~~~~~") 


    /**
     * JavaScript handles functions as both objects and functions. For example:
     * add(1,1)
     * >>> result 2
     * add.name = 'bob'
     * now add can both be used as a function, and stores the value "bob".
     * 
     * all functions automatically contain an attribute called "prototype", that is an
     * object.
     */

    function UserCreator(name, score) {         //we declare new function that takes 2 arguments. Note the capitalization.
        this.name = name;                       // >> see [lines 29-45]
        this.score = score;
    }

    UserCreator.prototype.increment = function () { this.score ++ }                                     //we add the increment method to the .prototype object attribute.
    UserCreator.prototype.login = function () { console.log(`You are Logged In, ${this.name}!`) }


    const user1 = new UserCreator('Marcus', 0)      // here is the important part. the "new" keyword.

    /**
     * the "new" keyword automatically creates a prototypal bond for us to the 
     * .prototype attribute, which is an object. Imagine it this way; it
     * AUTOMATICALLY does THIS:
     * 
     * function UserCreator(name,score) {
     *      const this = Object.create(UserCreator.prototype)
     *      this.name = name
     *      this.score = score
     *      return this
     * }
     * 
     * it creates an object called "this", that you can assign atributes to, that
     * has a prototypal bond to the UserCreator.prototype object, and then it
     * returns the object "this". When a variable is set equal to the function
     * preceeded by "new", it is set equal to the returned "this" object that
     * has the approprite attributes, as well as the "__proto__" bond to the
     * UserCreator.prototype object, and thus its stored functions.
     */

    const user2 = new UserCreator('Jasmine', 0)
    user1.increment()
    user2.increment()
    console.log(user1)
    console.log(user2)


})()