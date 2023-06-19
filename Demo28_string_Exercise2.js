/**
 * Problem Statement:
Write a JavaScript code to process name as the sample below.

Sample Input: Rama Krishna Narayan

Sample Output: R. K. Narayan

(Hint: Refer the String Operations tables in the Quick Reference section.)


 */

function shortNameCreation(name){
    var s = name.split(" ");
    console.log(s[0][0]+'. '+s[1][0]+". "+s[2])
}

shortNameCreation("Rama Krishna Narayan")