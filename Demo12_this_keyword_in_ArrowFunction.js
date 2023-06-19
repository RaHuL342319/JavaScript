const myObject = {
    items: [1],
    myMethod() {
      console.log(this == myObject) // true
      this.items.forEach(function() {
        console.log(this === myObject) // false
        // console.log(this === window); // true
      });
    }
  };
  myObject.myMethod();
  


  