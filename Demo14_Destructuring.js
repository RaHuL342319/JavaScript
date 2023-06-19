/* 
Destructuring gives a syntax which makes it easy to unpack values from arrays, 
or properties from objects, into different variables.
*/

/* Array destructuring in functions */
let myArray = ["Andrew", "James", "Chris"];
function showDetails([arg1, arg2]) {
	console.log(arg1); // Andrew
	console.log(arg2); // James
}
showDetails(myArray);


/* Object destructuring in functions */
let myObject = { name: "Mark", age: 25, country: "India" };
function showDetails({ name, country }) {
	console.log(name, country); // Mark India
}
showDetails(myObject);
