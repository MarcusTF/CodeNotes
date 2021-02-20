console.log("~~~~~~~~   .filter   ~~~~~~~~")
function filterContainScope() {


    /*
    the .filter function takes each item in an array, runs a comparison against it and, if true, puts it into a new array, if false, does not.
    So for array [1,2,3,4,5,6,7,8,9,10], you can filter by numbers divisible by 2 and get array [2,4,6,8,10]
    */

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const filteredArray = array.filter(arrayItem => arrayItem % 2 === 0)
    //console.log(array, filteredArray)


    //////// breakdown ////////

    const arrayYouWantToFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    //example array

    const nameOfNewFilteredArray = arrayYouWantToFilter.filter(     //(optionally declare a variable to store the new array and set it equal to) the array you want to filter followed by .filter
        function (standInForEachArrayItem) {                        //inside of the .filter either insert a pre-written function, or a write new function. This function must accept at least 1 parameter, which is a stand in for the array item that the function will be working with.
            return (                                                //the function must return the conditional statement that will be used to filter the array item
                standInForEachArrayItem % 2 === 0                   //here, we simply run a modulo to see if the array item is divisible by 2 without a remainder, but it can do whatever you like.
            )
        }
    )
    console.log(arrayYouWantToFilter, nameOfNewFilteredArray)



}
filterContainScope()
