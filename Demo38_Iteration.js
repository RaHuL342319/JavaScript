/*
Iteration Structures:
The code demonstrates the usage of iteration structures (if-else inside for-loop).

A Javascript program is given to construct a pattern as shown below:

​​​​​​​

*
*#
*#*
*#*#
*#*#* 
*/

var x,y;
var chr='';
for(x=1; x <=5; x++)
{
   for (y=1; y <= x; y++)
     {
     if(y%2!=0){
        chr=chr+("*");
     }
     else{
         chr=chr+("#")
     }
         
      }
 console.log(chr);
 chr='';    
}

