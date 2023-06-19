/* Syntax for regex:
let myPattern1 = new RegExp(pattern, modifiers); 
let myPattern2 = /pattern/modifiers 
Here, 
pattern specifies the string for regular expression 
modifiers are optional 
*/

// to make sure that string has @ and .com 
let emailPattern = new RegExp("(?=.@*)(?=.+.com)");
 
//to make sure that given number has digits between 0-9 and max length of 10 digits 
let phoneNumberPattern = new RegExp("(?= [0-9]{10})"); 
//to make sure password has characters a to z, number 0-9 and special symbol @,#,$,%,!,^,&,*,+ or underscore
let passworPattern = new RegExp("(?=.*[0-9])(a-zA-Z)(?=.*[@#$%!^&*+_])"); 


// test():It offers the simplest way to match the given string with the expected pattern.
//        It takes a parameter which is the string to be inspected against the expected pattern. When the actual pattern is compared with the expected pattern, this function returns a boolean that is either true or false.  
let emailPattern2 = new RegExp("(?=.*@)(?=.+.com)"); 
let emailString = prompt("Enter email id(someone@xyz.abc)"); 
if(!(emailPattern2.test(emailString))) { 
     alert("Email Id is invalid! It should contain@ and .");
} 
else { 
    alert("Email Id is Valid"); 
} 

// search():
let myPattern = /@gmail.com/; 
let myString="mark.christ@gmail.com"; 
console.log(myString.search(myPattern));
console.log(myString.replace(myPattern,'@facebook.com')); 
/* 
OUTPUT: 
11 
mark.christ@facebook.com 
*/ 
