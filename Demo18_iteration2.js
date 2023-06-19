/*
Problem Statement:
Write a JavaScript loop to print the below output:

1

1 2

1 2 3

1 2 3 4

1 2 3 4 5
*/

function pattern(n){
    for(var i =1;i<=n;i++){
        ch = '';
        for(var j = 1; j<=i;j++){
            ch += j;
        }
        console.log(ch);
    }
}

pattern(5);
