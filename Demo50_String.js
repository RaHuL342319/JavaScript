let myString = "Welcome to JavaScript Session"; 
console.log("Length is: " + myString.length);  // Returns the length of a String object.
/*OUTPUT: returns Length is: 29,  
space between words are also considered as a character*/

// 1. charAt(): It retrieves a character that resides on the index passed as an argument.
let myString1 = "Hello World"; 
console.log("Character at position 4 is : " + myString1.charAt(3));  //Returns: Character in position 4 is: l

// 2. concat(): It accepts an unlimited number of string arguments, joins them, and returns the combined result as a new string.
let myStr1 = "Hello"; 
let myStr2 = " "; 
let myStr3 = "World"; 
console.log("Concatenated string: "+myStr1.concat(myStr2,myStr3));  //Returns: Concatenated string: Hello World 

// 3. indexOf(): It returns the index of the given character or maybe the given set of characters in a string passed as an argument.
let myString3 = "Welcome to JavaScript"; 
console.log("Index of character l is : "+myString3.indexOf('c'));  //Returns: Index of character c is : 3

// 4. match(): It makes use of the regular expression to look for a specific string and returns all the strings that match.
let myStr4 = "Are you enjoying JavaScript?"; 
console.log(myStr4.match(/you/)); 
/*Returns an array: 
[ 
  'you', 
  index: 4, 
  input: 'Are you enjoying JavaScript?', 
  groups: undefined 
] 
*/
console.log("string found at index position: "+myStr4.match(/you/).index); /*Returns:  string found at index position: 4*/ 
 
// 5. replace(): It accepts the substring or the regular expression.Also, accepts the string that will be used for the replacement string. The idea is to replace all matches with the replacement string and provide the modified string.
let myStr5 = "Are you enjoying JavaScript?"; 
myStr5 = myStr5.replace('you', 'they'); 
console.log(myStr5);   //Returns Are they enjoying JavaScript?

// 6. search(): It searches for a match of regular expression in the given string and returns its position. If there is no match, it returns -1.
let myString4 = "can you find it?"; 
console.log("Occurrence of find in statement1: "+myString4.search('find')); 
let myString5 = "Or you can not?"; 
console.log("Occurrence of find in statement2: "+myString5.search('find'));
/*Returns: 
 The Occurrence of find in statement1: 8, 
 The Occurrence of find in statement2: -1*/ 

//7. split(): It splits the given string into the array of substrings where separator marks the index for split begin and end.
let myString6 = "Hello World"; 
console.log("Split string based on spaces: "+myString6.split(" ")); //Returns: Split of string based on spaces: Hello,World 

//8. slice(): It extracts and returns part of a string. The Second parameter is optional.
//               If only one parameter is passed, it is the index from which string will start slicing from till the end of this string. If two parameters are passed, the string between these 2 index values is sliced.
//               Index value passed as the first parameter is included whereas index value passed as the second parameter is excluded.
let myString8 = "Hello World"; 
console.log("Slicing using 2 parameters: "+myString8.slice(0,5)); 
console.log("Slicing using 1 parameter: "+myString8.slice(5)); 
/*Returns:  
Slicing using 2 parameters: Hello, 
Slicing using 1 parameter: World*/

// 9.substring(): It extracts and returns part of a string. Compared to the slice() method, it can accept a negative parameter, meaning slicing should start from the end. 
let myString9 = "Hello World"; 
console.log("Substring using 2 parameters: "+myString9.substring(2,5)); 
console.log("Substring using 1 parameter: "+myString9.substring(5)); 
/*Returns: 
Substring using 2 parameters: llo 
Substring using 1 parameter: World*/ 

// 10.
let myString10 = "Hello World"; 
console.log("Substr using 2 parameters: "+myString10.substr(2,5)); 
console.log("Substr using 1 parameter: "+myString10.substr(5)); 
/*Returns: 
Substr using 2 parameters: llo W 
Substr using 1 parameter: World*/


//let myString = "Hello World"; 
console.log("Substr using 2 parameters: "+myString.substr(2,5)); 
console.log("Substr using 1 parameter: "+myString.substr(5)); 
/*Returns: 
Substr using 2 parameters: llo W 
Substr using 1 parameter: World*/ 


// let myString = "Hello World"; 
console.log("Lower case string: "+myString.toLowerCase()); 
//Returns: Lower case string: hello world 

// let myString = "Hello World"; 
console.log("Upper case string: "+myString.toUpperCase()); 
//Returns: Upper case string: HELLO WORLD 








