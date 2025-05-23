//performing a task

// function greet(name , lastName) {
//     console.log("Hello" + name + lastName);
// }

// function square(number) {
//     return number * number
// }


// greet("nash", "mwendwa");

// console.log(square(2));




function lifeInWeeks (age) {

   let timeRemaining = 90 - age; 

   let weeksRemaining = Math.floor(timeRemaining  *52);
   let daysRemaining = Math.floor(timeRemaining * 365)
   let monthsRemaining = Math.floor(timeRemaining * 12)


   console.log(`You have ${weeksRemaining} weeks, ${daysRemaining} days, and ${monthsRemaining} months left.`);
   return {
      weeks:weeksRemaining,
      days:daysRemaining,
      months:monthsRemaining

   };
  }

  lifeInWeeks(12);



  function car (bmw ) {
   let driver = 'James'
 
 console.log (`Find my driver, please: ${driver} ,with my ${bmw}.`);
 }
 
 car('BMW X5');



 // create your function below this line.
 function calculator(height, weight) {
   // BMI calculation formula
   function bmiCalculator(weight, height) {
     return weight / (height * height); // weight in kg divided by height in meters squared
   }
 
   // Calculate BMI
   const bmi = bmiCalculator(weight, height);
 
   // Display BMI
   console.log(`Your BMI is: ${bmi}`);
 
   // Height to weight ratio
   const heightAmount = height / weight;
   const weightAmount = weight / (height * 2);
 
   // Display ratios
   console.log(
     `Your height to weight ratio is: ${heightAmount}, and your weight to height ratio is: ${weightAmount}`
   );
 
   return bmi; // Return the BMI
 }
 
 // Call the function with weight 65kg and height 1.8m
 const bmi = calculator(1.8, 65);
 console.log(`Returned BMI: ${bmi}`);





 let student = {
  name: "Nashon",
  lastName: null,
  age: 12
};

// Display the student object
console.log(`Student Info: ${JSON.stringify(student)}`);

// Check if the student's name is provided
if (student.name) {
  console.log(`Name: ${student.name}`);
} else {
  console.log("Name not provided.");
}


//  return student; its used with a function





// function game(sudoku, gta) {
//   console.log(`Playing Sudoku: ${sudoku} , gta: ${gta}`);
  
//   let personOne =Math.floor (Math.random()* 11 );
//   let personTwo = Math.floor(Math.random() * 11);

//   console.log(`Person One's chance: ${personOne}, Person Two's chance: ${personTwo}`);

  

//   if ('personOne >= personTwo') {
//     console.log("Person One lost.");
//     return "person One lost.";

//   } else if ('personTwo <= personOne') {
//     console.log("Person Two lost.");
//     return "Person Two lost.";
//   } else {
//     console.log("Its a tie!");
//     return "Its a tie!";  // return "Its a tie!" its used with a function
//   }
// }

// let result = game("Yes", "No");
// console.log(`Result of the game: ${result}`);





function fizzbuzz() {
  let output = [];
  for (let i = 1; i <= 5; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
      console.log("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
      console.log("Buzz");
    } else {
      output.push(i);
      console.log(i);
    }
  }
  return output.join(", "); // Return the result as a single string separated by commas
}

// Call the function and capture the result
console.log(fizzbuzz);





