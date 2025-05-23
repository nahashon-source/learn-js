const x = 11;
const y = 10;

if (y === 10){
    console.log("y is 10");

} else if (y === 11){
    console.log("y is 11");
} else {
    console.log("y is not 10 or 11");
}


/* Method 2: Ternary Operator
  condition ? value_if_true : value_if_false. */

const of = 10;

const no = of < 10 ? 'red' : 'green';


console.log(no); // output: green




// Method 3:
//switch

switch (type) {
    case 'car':
        console.log('This is a car');
        break;
    case 'bike':
        console.log('This is a bike');
        break;
    default:
        console.log('This is not a car or bike');
}
