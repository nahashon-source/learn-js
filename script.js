// function whosPaying (names) {
//     let numberofPeople = names.length;
//     let randomPersonPosition = Math.floor(Math.random() * numberofPeople);
//     let randomPerson = names[randomPersonPosition];

//     return randomPerson + "is going to buy lunch today!";


// }

// let nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// let result = whosPaying(nameList);
// console.log(result);





function lyrics () {
    while (true) {
    let count = 99;
    let verse1 = "11 bottles of beer on the wall, 11 bottles 0f beer"
    let verse2 = "Take one down, pass it around,10 bottles of beer on the wall"

    while (count > 0){
    if (verse1 <= 100 && verse2 <= 100 ) {
        console.log(verse1);
        console.log(verse2);
        count++;
    } 
}
};
}

// let result = lyrics();
console.log (result)




function lyrics() {
    while (true) { // Infinite loop
        let count = 99; // Start with 99 bottles

        while (count > 0) {
            console.log(`${count} bottle${count > 1 ? 's' : ''} of beer on the wall, ${count} bottle${count > 1 ? 's' : ''} of beer.`);
            count--; // Take one down
            console.log(`Take one down, pass it around, ${count > 0 ? count : 'no more'} bottle${count === 1 ? '' : 's'} of beer on the wall.\n`);
        }

        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.\n");
    }
}

// Call the function
lyrics();


