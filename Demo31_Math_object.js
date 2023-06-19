/* It is the JavaScript object that is used to make mathematical calculations on the web. 

Properties and methods of this object can be called without instantiation of this object because the Math object cannot be instantiated. 

Properties: 

PI - holds the value of the ratio of the circle’s circumference to its diameter.
SQRT2 - holds the value of the square root of 2

*/

console.log(Math.PI);//Returns 3.14159265358793   
console.log(Math.SQRT2);//Returns 1.4142135623730951 

//1. max():It accepts multiple numeric values and returns the maximum out of them. 
console.log(Math.max(10,20,20.4,20.6,30.5)); 
//Returns: 30.5 

// 2. min(): It accepts multiple numeric values and returns the minimum out of them 
console.log(Math.min(10,20,20.4,20.6,30.5)); 
//Returns: 10 

// 3. ceil(): It returns the upward rounded value of the given number
console.log(Math.ceil(20.4)); 
//Returns: 21 

// 4. floor(): It returns the downward rounded value of the given number. 
// Example: 
console.log(Math.floor(20.4)); 
//Returns: 20 

// 5. random(): It returns any random number between 0 and 1 inclusive of 0 and exclusive of 1. 
// Example: 
console.log(Math.random()); 


// 6. round(): It returns the value of the given number rounded to the nearest integer. 
//Example: 
Math.round(30.5); 
//Returns: 31 

// 7. sqrt(): It returns square root of given number. 
// Example: 
Math.sqrt(9); 
//Returns: 3 

