function closureContainScope() {
    console.log("~~~~~~~~   closure   ~~~~~~~~")


    

    function closureMakerFunction() {                               //define a function that will create the closure
        let closureVariable                                         //within that function you can define variables and set their values. Here we simply define a variable.
        function functionThatTurnsIntoClosure(parameter) {          //within the function that creates the variable, define another functiion that you want to be the closure function.
            closureVariable = parameter                             //here, we simply have it set the variable "closureVariable" = to whatever argument is passed as the parameter. Note: "closureVariable" is defined OUTSIDE of functionThatTurnsIntoClosure(). This is an important note.
            console.log(closureVariable)                            //our closure function then logs the contents of closure variable.
        }
        return functionThatTurnsIntoClosure                         //The most important part! closureMakerFunction() returns functionThatTurnsIntoClosure. Note the lack of parenthesis! It is returning the function's definition, rather than the returned value of the function.
    }

    const functionThatStoresTheClosure = closureMakerFunction()     //We then set a new variable equal to the RETURNED VALUE of closureMakerFunction(). The RETURNED VALUE is definition of the function functionThatTurnsIntoClosure! Therefore functionThatStoresClosure is now effectively the SAME FUNCTION as functionThatTurnsIntoClosure

    functionThatStoresTheClosure('Hello World!')                    //Now we invoke functionThatStoresTheClosure with "Hello World" as an arguement. "Hello World" prints to the console. But wait... how? Isn't closureVariable left behind in closureMakerFunction?


    /* 
    when a function is returned out of another function, it carries with
    it the relevant local environment variables from the scope
    in which it was defined.
    
    This is called the "Persistent Lexical Scope Reference", the
    "Closed Over Variable Environment", or, more simply, the "Closure"

    Essentially, when the function is returned, Javascript packs up all the relevant
    variables with the function, stores them in the "closure", and the function
    brings them along with them when it gets returned. This means we can
    access variables from the scope that the function was defined.
    
    Useful examples:
    
    Once
    - make a closure that contains a counter, have the function only operate if the
    counter = 0, and if counter is not equal to zero, it cannot be run again
    
    Memoize
    - make a closure that calculates a complicated algorithm, and once it calculates
    it, store it in memory in an object or array; that way if it is called again 
    to do the same function with the same parameter, it can check the array or 
    object and instantly return the correcct value.
    
    Modules
    - For large codebases, making variable definitions closed off into their own 
    environment with specific access to their functions is useful for avoiding
    polluting the namespace
    
    */
}

closureContainScope()