/*
 --> An object consists of state and behavior. 

State: The State of an entity represents properties that can be modeled as key-value pairs. 
Behavior: The Behavior of an entity represents the observable effect of an operation performed on it and is modeled using functions. 

Example:  
A Car is an object in the real world. 

State of Car object: 

Color=red 
Model = VXI 
Current gear = 3 
Current speed = 45 km / hr 
Number of doors = 4 
Seating Capacity = 5 

The behavior of Car object: 

Accelerate 
Change gear 
Brake  
*/


/*  
                        Types Of Object
                                |
    ____________________________|______________________________
   |                                                           |
   |                                                           |
User Defined                                                In-Built
(Creating our own objects)               _______________________|______________________
                    ____________________|___________________                           |
                   |                                        |                       Browser
             Primitive type                            Miscellaneous            They allow  JavaScript code to 
            They are wrapper objects                They are utility objects    talk to browser and to manipulate HTML DOM.
            for their corresponding                 provided by javascripts.    e.g.: Browser object model(BOM)
            primitive datatypes.                                                      Document object model(DOM)
            e.g.: Number,String, Boolean etc.       e.g.: Date,Array,Math, etc.
            
        
*/

/*
Creating object by Object literals: */
//-------------states of the object--------- 
let myCar = {
    name: "Fiat",
    model: "VXI",
    color: "red",
    numberOfGears: 5,
    currentGear: 3,
    currentSpeed: 45,
    //-------------Behaviour of the object--------- 
    accelerate: function (speedCounter) {
        this.currentSpeed = this.currentSpeed + speedCounter;
        return this.currentSpeed;
    },
     
    brake: function (speedCounter) {
        this.currentSpeed = this.currentSpeed - speedCounter;
        return this.currentSpeed;
    }
}


// 2nd example:
let name="Arnold"; 
let age=65; 
let country="USA"; 
let obj={name,age,country}; 

// Creating Object using Enhanced Object Literals - Property Shorthand

//Literal property without shorthand 
function createCourse(name, status) {
    return {type: "JavaScript", name: name, status: status};
}
function reviewCourse(name) {
    return {type: "JavaScript", name: name};
}
/*Literal property with shorthand 
when the property and the value identifiers have the same name,  
the identifier can be omitted to make it implicit*/
function createCourse(name, status) {
    return {type: "JavaScript", name, status};
}
function reviewCourse(name) {
    return {type: "JavaScript", name};
} 
