/* 
*  Function parameters are the variables that are defined in the function definition and the values 
   passed to the function when it is invoked are called arguments.

*  In JavaScript, function definition does not have any data type specified for the parameters, 
   and type checking is not performed on the arguments passed to the function.

*/

function multiply(num1, num2) {
	if (num2 == undefined) {
		num2 = 1;
	}
	return num1 * num2;
}
console.log(multiply(5, 6)); // 30
console.log(multiply(5)); // 5


/* 
JavaScript introduces an option to assign default values in functions.
Default parameter:
*/

function multiply1(num1, num2 = 1) {
    return num1 * num2;
}
console.log(multiply1(5, 5)); //25
console.log(multiply1(10)); //10
console.log(multiply1(10, undefined)); //10

/*
Rest Parameters: Rest parameter syntax allows to hold an indefinite number of arguments in the form of an array.
syntax:
function(a, …args) {
    //…
}

The rest of the parameters can be included in the function definition by using three dots ( … ) 
followed by the name of the array that will hold them. 
Example:
 */

function showNumbers(x, y,...z) {
    return z;
}
console.log(showNumbers(1, 2, 3, 4, 5)); // [3,4,5]
console.log(showNumbers(3, 4, 5, 6, 7, 8, 9, 10)); // [5,6,7,8,9,10]


function add(a,b,...c){
    sum = a+b
    for(item of c){
        sum += item
    }
    return sum
}
console.log(add(1,2,3,4,5))


