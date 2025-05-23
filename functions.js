function addNums(num1 = 1, num2 =2) {
    return num1 + num2;
    
};

console.log(addNums(5, 10));


/* METHOD 2
//  arrow functions 
instead of using the function keyword use the const keyword instead

The arrow is called the fat arrow function
*/
const addNumsArrow = (num1 = 1, num2 = 2) => num1 + num2;

console.log(addNumsArrow(5, 10));


// FUNCTION EXPRESSIONS
let sayHi = function() {
    ALERT ("Hello");
};