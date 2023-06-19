//Default Parameters

function multiply(num1, num2 = 1){
    return num1 * num2;
}
const result1 = multiply(5, 5);
console.log("Result 1: ", result1); 

const result2 = multiply(5);
console.log("Result 2: ", result2); 

const result3 = multiply(5, undefined);
console.log("Result 3: ", result3); 



//Destructured Parameters - Array
const names = ["Andrew", "James", "Chris"];
function showDetails([arg1, arg2]){
    console.log("Arg1: ", arg1);
    console.log("Arg2: ", arg2);
}
showDetails(names);



//Destructured Parameters - Object
const empObj = {name : "Mark", age : 25, country : "India"}
function showEmpDetails({name, country}){
    console.log("Name: ", name);
    console.log("Country: ", country);
}
showEmpDetails(empObj);