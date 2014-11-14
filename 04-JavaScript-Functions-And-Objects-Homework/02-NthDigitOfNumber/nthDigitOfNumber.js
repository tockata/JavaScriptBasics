function findNthDigit(arr) {
    var numberStr = arr[1].toString().replace(/\D+/g, '');
    var n = arr[0];

    if(numberStr[numberStr.length - n] == undefined) {
        console.log('The number doesn\'t have ' + n + ' digits')
    } else {
        console.log(numberStr[numberStr.length - n]);
    }
}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);