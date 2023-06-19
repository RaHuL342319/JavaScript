/* 
Variable declaration in the JavaScript program can be done within the function or outside the function. 
But the accessibility of the variable to other parts of the same program is decided based on the place of its declaration. 
This accessibility of a variable is referred to as scope.

JavaScript scopes can be of three types:
1. Global scope
2. Local scope
3. Block scope
*/

/* Global Scope: Variables defined outside function have Global Scope and they are accessible anywhere in the program.  */
//Global variable
var greet = "Hello JavaScript";
function message() {
	
	//Global variable accessed inside the function
	console.log("Message from inside the function: " + greet);
}
message();
//Global variable accessed outside the function
console.log("Message from outside the function: " + greet);
//Message from inside the function: Hello JavaScript
//Message from outside the function: Hello JavaScript


/*Local Scope: Variables declared inside the function would have local scope. These variables cannot be accessed outside the declared function block. 
Example: */
function message() {
	//Local variable
	var greet = "Hello JavaScript";
	//Local variables are accessible inside the function
	console.log("Message from inside the function: " + greet);
}
message();
//Local variable cannot be accessed outside the function
console.log("Message from outside the function: " + greet);
//Message from inside the function: Hello JavaScript
//Uncaught ReferenceError: greet is not defined


/*  Block Scope: Variables declared with 'var' keyword are function-scoped whereas variables 
                declared with 'let' and 'const' are block-scoped and they exist only in the block
                in which they are defined.  
                
    example:
*/
function testVar() {
	if (10 == 10) {
		var flag = "true";
	}
	console.log(flag); //true
}
testVar();



// example 2:
function testVar() {
    if (10 == 10) {
        let flag = "true";
    }
    console.log(flag); //Uncaught ReferenceError: flag is not defined
}
testVar();

