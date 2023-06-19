let myString = "Aeroplane";

// accessing character of a string
console.log("First Character of myString:",myString[0]);

// indexOf(): used for finding the index of a character or a string present inside the string variable.
let index = myString.indexOf('plane');
console.log('Index of "plane" is: '+ index);

// charAt(): if the index value is known and we want to find the charactwer at that position it can be done using charAt()
let charat = myString.charAt(6);
console.log("haracter at 6th index : "+charat);

// split():  If you want to split a string based on certain characters, It can be done by using split()
// It will split string into array.
let split_character_of_string = myString.split('');
console.log(split_character_of_string);

let split_character_of_string2 = myString.split('',4);  // we want only 4 split so we can limit by entering the number as second parameter
console.log(split_character_of_string2);

// substring():  to extract characters from existing string using starting and ending index.
let substring = myString.substring(1,5);
console.log(substring);

let substring2 = myString.substring(3,);
console.log(substring2);

console.log(myString.substring(3));

// toUpperCase()
// toLowerCase()

console.log(myString.toLowerCase());
console.log(myString.toUpperCase());

// concat(): to concat two string

console.log("Ram".concat(" Is a boy."));
