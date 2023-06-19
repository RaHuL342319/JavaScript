function Car(name, model, color, numberOfGears, currentSpeed, currentGear) { 
        //-------------States of the object--------- 
        this.name = name; 
        this.model = model; 
        this.color = color; 
        this.numberOfGears = numberOfGears;
        this.currentSpeed = currentSpeed; 
        this.currentGear = currentGear; 
        //-------------Behaviour of the object--------- 
        this.accelerate = function (speedCounter) {
            this.currentSpeed = this.currentSpeed + speedCounter; 
            return this.currentSpeed; 
        }
        this.brake = function (speedCounter) { 
            this.currentSpeed = this.currentSpeed - speedCounter; 
            return this.currentSpeed; 
        } 
    } 

    myCar = new Car('Tesla','XL','black',5,200,5);
    console.log(myCar.name);     
    console.log(myCar.currentSpeed);    
    console.log(myCar.accelerate(50));//invokes accelerate() with argument = 50 
    console.log(myCar["name"],myCar["currentSpeed"],)