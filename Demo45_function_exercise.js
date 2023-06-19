/* 
Problem Statement:
A teacher is in the process of generating few reports based on the marks scored by the students of her class in a project based assessment.


1: Assume that the marks of her 10 students are available in an array. 
2: The marks are out of 25.


Write a JavaScript program to implement the following functions:

find_more_than_average(): Find and return the percentage of students who have scored more than the average mark of the class.


generate_frequency(): Find how many students have scored the same marks. For example, how many have scored 0, how many have scored 1, how many have scored 2, and so on, find it up to how many have scored 25. The result should be populated in a list and returned.


Sample Input:
list_of_marks = [12,18,25,24,2,5,18,20,20,21]


Sample Output:
more than average: 70.0
frequency: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 2, 1, 0, 0, 1, 1]
*/

function average_of_array(arr){
    var sum = 0;
    for(var i = 0; i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

find_more_than_average = (arr) => {
    var percentage_of_student;
    avg = average_of_array(arr);
    var count = 0;
    for(items of arr){
        // console.log(items)
        if(items > avg){
            count++;
        }
    }
    return count/arr.length * 100.0;
}


function generate_frequency(arr){
    var frquency = [];
    for(i = 0; i<=25;i++){
        var count = 0;
        for(var j = 0; j<arr.length;j++){
            if(i == arr[j]){
                count++;
            }
        }
        frquency.push(count);
    }
    return frquency;
}

list_of_marks = [12,18,25,24,2,5,18,20,20,21]
// console.log(average_of_array(list_of_marks))
console.log("more than average:"+find_more_than_average(list_of_marks));
console.log("frequency:"+ generate_frequency(list_of_marks));