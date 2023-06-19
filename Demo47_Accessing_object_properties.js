//-------------states of the object--------- 
let myCar = {
    name: "Fiat",
    model: "VXI",
    color: "red",
    numberOfGears: 5,
    currentGear: 3,
    currentSpeed: 45,

    //-------------Behaviour of the object--------- 
    accelerate: function (speedCounter) {
        this.currentSpeed = this.currentSpeed + speedCounter;
        return this.currentSpeed;
    },
     
    brake: function (speedCounter) {
        this.currentSpeed = this.currentSpeed - speedCounter;
        return this.currentSpeed;
    }
}

// Accessing object properties
console.log(myCar.name);
console.log(myCar.color);

// Setting object properties
myCar.color = 'Black';
console.log(myCar.color);