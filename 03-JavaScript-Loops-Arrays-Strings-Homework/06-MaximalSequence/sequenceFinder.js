function findMaxSequence(arr) {
    var maxCount = 1;
    var tempCount = 1;
    var lastIndex = 0;
    var tempIndex = 0;
    var resultArr = [];

    for(var i = 0; i < arr.length - 1; i++) {
        if(arr[i] === arr[i + 1]) {
            tempCount++;
            tempIndex = i + 1;
            if(i === arr.length - 2){
                if(tempCount >= maxCount) {
                    maxCount = tempCount;
                    lastIndex = tempIndex;
                }
            }
        } else {
            if(tempCount >= maxCount) {
                maxCount = tempCount;
                lastIndex = tempIndex;
            }
            tempCount = 1;
        }
    }
    var firstIndex = lastIndex - maxCount + 1;
    for(var i = firstIndex, j = 0; i < firstIndex + maxCount; i++, j++) {
        resultArr[j] = arr[i];
    }

    return resultArr;
}


console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));