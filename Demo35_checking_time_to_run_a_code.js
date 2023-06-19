function complexfn(n){
    let sum = 0;
    for(var i =0; i<n;i++){
        sum += i;
    }
    return sum;
}

var startTime = new Date().getTime();

const a = complexfn(1000000000);
const b = complexfn(1000000000);

var endTime = new Date().getTime();
console.log((endTime - startTime)/10000);