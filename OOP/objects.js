const objectsContainScope = (() => {
    console.log("~~~~~~~~   object declaration   ~~~~~~~~")

    //declaring an object
    /*  
        each version is contained in a function to contain its scope so that the
        variable names can be the same. I did this to show that they all come out to 
        the same thing. Ignore the "const VERSION_X = (()...." bit.
    */

    const VERSION_1 = (() => {




        /**Here we use the object literal*/

        const user = {
            name: 'Marcus',
            score: 0,
            increment: function () { user.score++ }
        }
        user.increment()
        console.log(user)






    })()

    /////////////////////////////////////////////////////////////////

    const VERSION_2 = (() => {






        /**here we set the user to an empty object
         * then we use dot notation to assign the variables 
         */

        const user = {}
        user.name = 'Marcus'
        user.score = 0
        user.increment = function () { user.score++ }

        user.increment()
        console.log(user)






    })()

    //////////////////////////////////////////////////////////////////

    const VERSION_3 = (() => {






        /**Here we use Object.create() to create an empty object.
         * Object.create() has a special functionality, that will be touched on
         * in "user_creator"
         */

        const user = Object.create(null)
        user.name = 'Marcus'
        user.score = 0
        user.increment = function () { user.score++ }

        user.increment()
        console.log(user)






        /** all of these work, but are incredibly inefficient. We don't want to manually
         * create each user object by hand. Additionally, we don't want every single object
         * to have the exact same function written for it. There's a better way.
         * 
         * >>> see "user_creator.js"
        */








    })()

})()