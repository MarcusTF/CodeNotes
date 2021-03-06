function iifeContainScope() {

    isChrome ? console.log("%cIIFE%c (Immediately Invoked Function Expressions)","font-size: 20px; font-family:sans-serif","font-family:sans-serif") : console.log("------------IIFE------------")
    
    //iife = Immmediately Invoked Function Expression
    
    const iife = ((n) => n*n) (2)
    //console.log(iife)
    
    const immmediatelyInvokedFunctionExpression = (                 //variable the value is stored in
        function (parameter) {                                      //declaration of function with parameter
            return parameter * parameter                            //multiply parameter times itself
        }
        ) /*wrap whole thing in parenthesis*/(2)                    //immediately invoke with the number 2
        
        
        
        console.log(immmediatelyInvokedFunctionExpression)
        
    }

    iifeContainScope()