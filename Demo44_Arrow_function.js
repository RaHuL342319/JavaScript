// Multi parameter, multi line code

calculateCost = (ticketPrice, noOfPerson)=>{
    noOfPerson = ticketPrice * noOfPerson;
    return noOfPerson;
}
console.log(calculateCost(500, 2)); //1000


//No parameter,single line code
trip = () => "Lets go to trip."
console.log(trip());    //// Lets go to trip.


//One parameter, single line code
let trip2 = place => "Trip to " + place;
console.log(trip2("Paris")); // Trip to Paris


//One parameter, single line code:
trip3= _ => "Trip to " + _;
console.log(trip3("Paris"));  // Trip to Paris




