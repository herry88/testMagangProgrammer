var a = [10, 3, 5, 1, 7, 9, 2, 6], 
count = a [a.length - 1];
var missing = [];
for(var i = 1; i <= count; i++){
    if(a.indexOf(i) == -1){
        missing.push(i);
    }
}

console.log(missing.toString());