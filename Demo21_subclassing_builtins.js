/* 

Subclassing Built-ins

The keywords, class and extends, help developers to create classes and implement inheritance in the application
 where user-defined classes can be created and extended. Similarly, the built-in classes can be subclassed to add more functionality.

Example:

To display the array items, the built-in Array class can be extended as mentioned below.
*/
class MyArray extends Array {
	constructor(...args) {
		super(...args);
	}
	display() {
		let strItems = "";
		for (let val of this) {
			strItems += `${val} `;
		}
		console.log(strItems);
	}
}
let letters = new MyArray("Sam", "Jack", "Tom");
letters.display(); 
