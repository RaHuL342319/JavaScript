function starLine(row){
    var printstr = '';
    for(var i=0; i<row; i++){
        printstr = printstr + "*";
    }
    console.log(printstr);
}

function starryPattern(col){
    for(var i=0; i<col; i++){
        starLine(i);
    }
}

starryPattern(4);
