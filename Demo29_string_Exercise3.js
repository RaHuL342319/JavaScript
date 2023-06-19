/**
 * Problem Statement:
Write a JavaScript function to extract unique characters from a string. 


Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"

(Hint: Refer the String Operations tables in  the Quick Reference section.)
 */

function popDuplicateCharacter(textString){
    textString = textString.split('');
    var outString = [];
    while(textString.length>0){
    let temp = textString.filter((item)=> item === textString[0]);
    outString.push(temp[0]);
    textString = textString.filter((item)=> item !== textString[0]);
    }
    console.log("--->",outString.join('') );
    }
    
    popDuplicateCharacter("thequickbrownfoxjumpsoverthelazydog");

