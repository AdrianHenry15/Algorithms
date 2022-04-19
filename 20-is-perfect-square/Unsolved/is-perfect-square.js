// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function (num) {
    let width = 0;
    let length = 0;
    for (let i = 0; i < num.length; i++) {
        if (num >= width && num >= length) {
            i++
            return true;
        }
        return false
    }
};