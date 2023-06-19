/**
 * JSON is an acronym for JavaScript Object Notation. 
    It is a lightweight data-interchange format used for storing and sharing data between client and server 
    over the network. 

    e.g.:
    let data = {
    "customers": [
        { "firstName": "Bob", "lastName": "Morry" },
        { "firstName": "Albert", "lastName": "Smith" },
        { "firstName": "Kate", "lastName": "Ward" }
    ]
};
//Where data is the JSON object and  
//customers is the array name 

For JavaScript objects, the key is not put in quotes and if values are of string data type they can be put in single or double-quotes. 
But for JSON object, it is mandatory to put the key inside double quotes and all the values of type string inside double quotes. 

JavaScript Object: { firstName: "Sam", lastName: "Fernandes" } 
//key need not be enclosed within quotes for JavaScript Objects 
JSON Object: { "firstName": "Sam", "lastName": "Fernandes" } 
//key must be enclosed within quotes for JSON Objects 


 */
// parse(): Used to parse a string as JSON and helps the program to process objects. 
let stringJSON = '{"firstName":"Sam","lastName":"Fernandes"}' 
let obj = JSON.parse(stringJSON); 
console.log(obj); 
//OUTPUT: { firstName: 'Sam', lastName: 'Fernandes' } 


// stringify(): Returns the JSON string corresponding to the given object. 
let dataJSON = { firstName: "Sam", lastName: "Fernandes" }; 
let obj1 = JSON.stringify(dataJSON); 
console.log(obj1); 
//OUTPUT: {"firstName":"Sam","lastName":"Fernandes"} 
