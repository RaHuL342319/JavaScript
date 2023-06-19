// first class function
let sayHello = function () {
	console.log("Welcome to JavaScript");
};
sayHello();

// No parameter Arrow function
let sayHello2 = () => {
	console.log("Welcome to JavaScript");
};
sayHello2();    


trip = () => "Let's go to trip."
console.log(trip());     // Let's go to trip.


// single parameter function
trip = _ => "Trip to " + _;
console.log(trip("Paris"));   // Trip to Paris



// Multiparameter Arrow funtion
calculateCost = (ticketPrice, noOfPerson)=>{
    noOfPerson= ticketPrice * noOfPerson;
    return noOfPerson;
}
console.log(calculateCost(500, 2));  // 1000


