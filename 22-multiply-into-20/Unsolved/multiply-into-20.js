// Write code to create a function that accepts an array of unique numbers
// if any two numbers in the array multoply up to 20, return true, else return false

// [2, 7, 8, 10, 15]
// 20 / 2 = 10
// 20 / 7 = 2 with a remainder of 6

// We are going to use an object to hold the values of the numbers that can be divided into 20 evenly
// We need to loop through the array
// We need to check if the current number in the array will be divied into 20
// If it can be divided into 20
// We will save the value of 20 divided by the current number into a variable
// We will check to see if that value is in our object property
// If it is, we will return true
// If it isn't in our object we will save the current number into our object as a property
// When the loop is done, if there are not two numbers that multiply into 20
// We return false


const multiplyInto20 = function(arr) {
    // TODO: Write Your Code Here

    multiplyInto20 = (arr) => {
        let numbers = {}

        for (var i = 0; i < arr.length; i++) {
            let currentNumber = arr[i];

            let factorNumber = 0;

            if (currentNumber % 20 === 0) {
                factorNumber = 20 / currentNumber;

                if (numbers[factorNumber]) {
                    return true
                } else {
                    numbers[currentNumber] = true;
                }
            }
        }
    }

    return false;

    

};

console.log(multiplyInto20(5, 7, 15, 3, 1))