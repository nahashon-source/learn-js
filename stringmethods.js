let text = "HELLO WORLD";
let char = text.charAt(0);
// let length = length(2 , 1);

console.dir(text);
console.log(text);

/*JavaScript String charCodeAt() 

1. The charCodeAt() method returns the code of the character at a specified index in a string:

2. The method returns a UTF-16 code (an integer between 0 and 65535).
*/

let title = "HELLO WORLD";
let method = text.charCodeAt(0);
console.dir(title);
console.dir(method);



let k = "The rain in SPAIN stays mainly in the plain";
let rich = text.match("ain");

console.dir(k);
console.log(rich);


//Expression Substitution
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
console.dir(total);




// Replacing String Content
let str = "Hello World";
let newStr = str.replace("World", "JavaScript");
console.log(newStr);


// Searching a String
let str2 = "Hello World";
let position = str2.indexOf("World");
let length = str2.length
console.log(position);
console.dir(length);
console.dir(position);

// Splitting a String
let str3 = "Hello, World!";
let words = str3.split(", ");
console.log(words);


// JavaScript String split()
let str7 = "Hello, World!";
let words2 = str7.split(", ");
console.log(words2);


// JavaScript String toLowerCase()
let str8 = "HELLO WORLD";
let lowerCase = str8.toLowerCase();
console.log(lowerCase);


// JavaScript String toUpperCase()
let str9 = "hello world";
let upperCase = str9.toUpperCase();
console.log(upperCase);


// JavaScript String trim()
let str10 = "   Hello World   ";
let trimmed = str10.trim();
console.log(trimmed);


// JavaScript String repeat()
let str11 = "Hello";
let repeated = str11.repeat(3);
console.log(repeated);


// JavaScript String slice()
let str12 = "Hello World";
let sliced = str12.slice(6);
console.log(sliced);


// JavaScript String substring()
let str13 = "Hello World";
let substring = str13.substring(6, 11);
console.log(substring);


// JavaScript String concat()
let str14 = "Hello";
let str15 = "World";
let concatenated = str14.concat(str15);
console.log(concatenated);


// JavaScript String includes()
let str16 = "Hello World";
let includes = str16.includes("World");
console.log(includes);


// JavaScript String startsWith()
let str17 = "Hello World";
let startsWith = str17.startsWith("Hello");
console.log(startsWith);


// JavaScript String endsWith()
let str18 = "Hello World";
let endsWith = str18.endsWith("World");
console.log(endsWith);


// JavaScript String search()
let str19 = "Hello World";
let search = str19.search("World");
console.log(search);


// JavaScript String replace()
let str20 = "Hello World";
let replaced = str20.replace("World", "JavaScript");
console.log(replaced);


// JavaScript String toLocaleLowerCase()
let str21 = "HELLO WORLD";
let toLocaleLowerCase = str21.toLocaleLowerCase();
console.log(toLocaleLowerCase);


// JavaScript String toLocaleUpperCase()
let str22 = "hello world";
let toLocaleUpperCase = str22.toLocaleUpperCase();
console.log(toLocaleUpperCase);


// JavaScript String fromCharCode()
let str23 = String.fromCharCode(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100);
console.log(str23);


// JavaScript String fromCodePoint()
let str24 = String.fromCodePoint(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100);
console.log(str24);


// JavaScript String normalize()
let str25 = "Hello\u0301 World";
let normalized = str25.normalize();
console.log(normalized);


// JavaScript String padStart()
let str26 = "World";
let paddedStart = str26.padStart(10, "Hello ");
console.log(paddedStart);


// JavaScript String padEnd()
let str27 = "Hello";
let paddedEnd = str27.padEnd(10, " World!");
console.log(paddedEnd);


// JavaScript String trimStart()
let str28 = "  Hello World  ";
let trimmedStart = str28.trimStart();
console.log(trimmedStart);


// JavaScript String trimEnd()
let str29 = "  Hello World  ";
let trimmedEnd = str29.trimEnd();
console.log(trimmedEnd);


// JavaScript String matchAll() 
let str30 = "Hello, World!";
let matches = [...str30.matchAll(/(\w+)/g)];
console.log(matches);



