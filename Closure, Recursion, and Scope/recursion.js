function recursionContainScope(){
    isChrome ? console.log("%cRecursion","font-size: 20px; font-family:sans-serif") : console.log("------------recursion------------")



    let count = 0                                               //set a counter equal to 0 OUTSIDE the recursive function
    
    function recursion() {                                      //define a function that you want to be recursive
        if (count === 5) return "Count Hit 5, end recursion."   //set up your "base case", or, what you want to do once your iterations have reached their stop case. Here we use when count equals 5.
        count++                                                 //every time recursion() runs, increment count by 1
        console.log(count)                                      //console log the count to keep track.
        return recursion()                                      //here we return recursion() so that the base case can shoot itself up through the layers of recursion and be returned all the way out.
    }
    
    console.log( recursion() )                                  


}
recursionContainScope()