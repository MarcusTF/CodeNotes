function callbackContainScope() {
    console.log("~~~~~~~~   callback   ~~~~~~~~")

    const callback = parameter => parameter
    const mainFuntion = (parameterA, parameterB, callback) => console.log(parameterA, callback(parameterB))
    //mainFuntion('Hello World!','I <3 Callbacks!', callback)


    /////// breakdown //////

    function functionToBeUsedAsCallback(parameter) {        //Define a function that will be used as a callback function.
        return parameter                                    //this one just returns whatever parameter it is passed. Super useless, but very simple to keep from complicating things unneccessarily.
    }

    function functionThatWillTakeTheCallback(               //define a function that will use the previously created callback function.
        parameterForCurrentFunction,                         //this function will take a parameter for use in its own code.
        parameterForCallbackFunction,                       //this function will also take a parameter that will be passed to the callback.
        callback                                            //most importantly, this second parameter is a function that is the stand-in for the callback function that will be passed in later.
    ) {
        console.log(                                        //this function is just logs to the console
            parameterForCurrentFunction,                    //this function itself just logs whatever is passed as the first parameter
            callback(parameterForCallbackFunction)          //it also logs the returned value of the callback function with the second parameter.
        )
    }

    functionThatWillTakeTheCallback('Hello World!', 'I <3 Callbacks!', functionToBeUsedAsCallback)
    /*
    When we run this functionThatWillTakeTheCallback() will console.log() "hello world!", then it will run functionToBeUsedAsCallback() as a callback, and pass "I <3 Callbacks!" into it.
    Because functionToBeUsedAsCallback() simply returns whatever parameter it is passed, the console will log "I <3 Callbacks" as well.
    */












}
callbackContainScope()