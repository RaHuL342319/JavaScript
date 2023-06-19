/*
* In JavaScript, it is perfectly normal to have functions inside functions. 
  The function within another function body is called a nested function.

* The nested function is private to the container function and cannot be invoked
  from outside the container function.

*/
function giveMessage(message) {
	let userMsg = message;
	function toUser(userName) {
		let name = userName;
		let greet = userMsg + " " + name;
		return greet;
	}
	userMsg = toUser("Bob");
	return userMsg;
}
console.log(giveMessage("The world says hello dear: "));
// The world says hello dear: Bob
