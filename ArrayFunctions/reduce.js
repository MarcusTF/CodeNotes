function reduceContainScope() {

    console.log("~~~~~~~~   .reduce   ~~~~~~~~")

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const reducedArray = array.reduce((accumulator, arrayItem) => accumulator + arrayItem, 0)
    //console.log(reducedArray)


    /////// breakdown //////


    const arrayYouWantToReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]            //example array

    const nameOfNewReducedValue = arrayYouWantToReduce.reduce(              //(optionally declare a variable to store the new value and set it equal to) the array you want to reduce followed by .reduce
        function (                                                          ///inside of the .reduce either insert a pre-written function, or a write new function. This function must accept at least 2 parameters.
            valueOfPreviousIteration,                                       //the first parameter is the "accumulator". This is the running value or result of the previous iteration of the operation. Remember: this function is called on each item in a a row.
            standInForEachArrayItem                                         //the second parameter is a stand-in for the current item in the array upon which the reduce function is currently working.
        ) {
            return (                                                        //the function must return a value that will be stored as the current iteration result for use in the next iteration.
                valueOfPreviousIteration + standInForEachArrayItem          //here, we simply add the current array item to the result from the previous iteration.
            )
        },                                                                  //in addition to the function, .reduce can optionally take in an ititail value that will be used as the first "previous iteration result"
        0                                                                   //here, we put zero, but this particular example would work just fine without it.
    )

    console.log(arrayYouWantToReduce, '\n', nameOfNewReducedValue)







}
reduceContainScope()