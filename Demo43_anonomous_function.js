function greet(choice){
	choice();
}

greet(function(){ console.log("Hello World")}); // Hello World