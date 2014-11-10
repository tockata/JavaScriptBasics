function findMinAndMax(arr) {
    var minNumber = arr[0];
    var maxNumber = arr[0];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < minNumber) {
            minNumber = arr[i];
        }
        if(arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    console.log('Min -> ' + minNumber);
    console.log('Max -> ' + maxNumber);
}


findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
console.log();
findMinAndMax([2, 2, 2, 2, 2]);
console.log();
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);