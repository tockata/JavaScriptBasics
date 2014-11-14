var result1 = biggerThanNeighbors(2, [1, 2, 3, 3, 5]);
printResult(result1);
var result2 = biggerThanNeighbors(2, [1, 2, 5, 3, 4]);
printResult(result2);
var result3 = biggerThanNeighbors(5, [1, 2, 5, 3, 4]);
printResult(result3);
var result4 = biggerThanNeighbors(0, [1, 2, 5, 3, 4]);
printResult(result4);

function biggerThanNeighbors(index,  arr) {
    var number = arr[index];
    var count = 0;
    if(index < 0 || index > arr.length-1) {
        return undefined;
    } else if(index === 0 || index === arr.length - 1){
        return -1;
    }   else {
        if(number > arr[index - 1]){
            count++;
        }
        if(number > arr[index + 1]){
            count++;
        }
        return count;
    }
}

function printResult(result) {
    if(result == undefined) {
        console.log('invalid index');
    } else if(result === -1) {
        console.log('only one neighbor');
    } else if(result === 0 || result === 1) {
        console.log('not bigger');
    } else if(result === 2) {
        console.log('bigger');
    }
}