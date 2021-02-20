console.log("~~~~~~~~   function factory   ~~~~~~~~")

function functionFactoryContainScope() {

    //function factory = function that uses iifes to create functions
    
    const functionFactory = num => (n => n * n)(num)                    //streamlined arrow function version
    const twoTimesTwo = functionFactory(2)
    const threeTimesThree = functionFactory(3)
    //console.log(twoTimesTwo, threeTimesThree)
    
    function functionFactoryBreakdown(parameter) {                      //define new function that takes a parameter
        return (                                                        //that function just declared returns something
            function (innerParameter) {                                 //the thing it returns is an iife, declared here
                return innerParameter * innerParameter                  //multiply the parameter of the iife times itself
            }
            )(parameter)                                                //imediately invoke the iife with the top-level parameter from the function factory.
        }                                                               //now you have a fully functoning function factory!
        
        const breakdownExample = functionFactoryBreakdown(4)            //test it with the number 4
        
        console.log(breakdownExample)                                   //log it!
}

functionFactoryContainScope()