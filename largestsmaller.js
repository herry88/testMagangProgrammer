var numbers = [6,8,3,9,4,10,56,1];

var sorted = numbers.slice().sort(function(a, b){
    return a - b; 

});

var smallest = sorted[0];
    secondSmallest = sorted[1];
    secondLargest = sorted[sorted.length - -2];
    largest = sorted[sorted.length - 1];

console.log('Smallest :' + smallest);
console.log('Second Smallest :' + secondSmallest);
console.log('Second Largest:' + secondLargest);
console.log('Largest :' + largest);

