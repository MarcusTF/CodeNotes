var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
const mapContainScope = (() => {

    /*
    The .map function simply takes an array and applies a function to each item in the array, and then puts the items, in order, into a new array.
    So for array [1,2,3], you can have the map multiply times 2, and get array [2,4,6]
    */

   isChrome ? console.log("%c.map","font-size: 20px; font-family:sans-serif") : console.log("------------map------------")


    const array = [1, 2, 3]
    const mappedArray = array.map(arrayItem => arrayItem * 2)
    //console.log(array, mappedArray)


    //////// Breakdown /////////

    const arrayYouWantToMap = [1, 2, 3]                     //example array

    const nameOfNewMappedArray = arrayYouWantToMap.map(     //(optionally declare a variable to store the new array and set it equal to) the array you want to map followed by .map.
        function (standInForEachArrayItem) {                    //inside of the .map either insert a pre-written function, or a write new function. This function must accept at least 1 parameter, which is a stand in for the array item that the function will be working with.
            return (                                            //the function must return whatever you want to be placed into the new array.
                standInForEachArrayItem * 2                     //here, we simply multiply by 2, but it can do whatever you like.
            )
        }
    )

    console.log(arrayYouWantToMap, nameOfNewMappedArray)

    ///////// "UNDER THE HOOD" /////////


    const UNDER_THE_HOOD = (() => {
        const array = [1, 2, 3]

        const map = (array, callback) => {
            const output = []
            for (let i = 0; i < array.length; i++) {
                output.push(callback(array[i]))
            }
            return output
        }

        const mappedArray = map(array,arrayItem=>arrayItem*2)
        console.log(array,mappedArray) 
    })()






})()