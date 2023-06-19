let dateObject1 = new Date(); 
console.log("Date is: " + dateObject1);

/**
 * var Date: DateConstructor
new (year: number, monthIndex: number, date?: number | undefined, hours?: number | undefined, minutes?: number | undefined, seconds?: number | undefined, ms?: number | undefined) => Date (+4 overloads)
Creates a new Date.

@param year — The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.

@param monthIndex — The month as a number between 0 and 11 (January to December).

@param date — The date as a number between 1 and 31.

@param hours — Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.

@param minutes — Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.

@param seconds — Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.

@param ms — A number from 0 to 999 that specifies the milliseconds.
 */
let  dataObject2 = new Date(2023, 5, 23, 22, 20, 23, 0000); 
console.log("Date is: "+dataObject2);  //OUTPUT: Date is: Thu Jun 18, 2020, 22:20:23 GMT+0530 (India Standard Time) 

// Getter methods of Date:
let dateObject3 = new Date(); 
console.log("Date is: " + dateObject3.getDate()); 
console.log("Day is: " + dateObject3.getDay()); 
console.log("Year is: " + dateObject3.getYear()); 
console.log("Horrs: " + dateObject3.getHours()); 
console.log("Month is: " + dateObject3.getMonth()); 
console.log("Time is: " + dateObject3.getTime()); 
console.log("Millisecond: " + dateObject3.getMilliseconds()); 
/* 
OUTPUT: 
Date is: 23
Day is: 2
Year is: 123
Horrs: 16
Month is: 4
Time is: 1684840771892
Millisecond: 892 
*/ 

// Setter methods in Date:
let dateObject4 = new Date(); 
dateObject4.setDate(3); 
dateObject4.setYear(1996); 
dateObject4.setHours(8); 
dateObject4.setMonth(7); 
dateObject4.setMilliseconds(2000); 
 
console.log("Date is: " + dateObject4.getDate()); 
console.log("Year is: " + dateObject4.getYear()); 
console.log("Hours: " + dateObject4.getHours()); 
console.log("Month is: " + dateObject4.getMonth()); 
console.log("Millisecond: " + dateObject4.getMilliseconds()); 
/* 
OUTPUT: 
Date is: 3 
Year is: 96 
Hours: 8 
Month is: 7 
Millisecond: 0 
*/ 
