/*
Problem Statement:
Write a function, check_palindrome() to check whether the given string is a palindrome or not. The function should return true if it is a palindrome else it should return false.

Assume that all the letters in the given string are all of the same case. 
Example: MAN, civic, WOW etc.

Note: Initialize the string with various values and test your program. 

(Hint: Refer the String Operations tables in the Quick Reference section.)
*/
function check_palindrome(str){
    var s = str.split('');
    var isPalindrome = false;
    for(var i =0; i<s.length/2;i++){
        if(s[i] == s[s.length-1-i]){
            isPalindrome = true;
        }else{
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}

console.log(check_palindrome('aba'));
