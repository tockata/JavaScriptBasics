function findLargestBySumOfDigits(arr) {
    var maxSum = Number.MIN_VALUE;
    var tempSum = 0;
    var maxNumber = arr[0];

    for (var index in arr) {
        if(arguments.length === 0 || !(typeof arr[index] == 'number') || !(arr[index] % 1 === 0)) {
            return undefined;
        } else {
            tempSum = calculateSum(arr[index]);
            if(tempSum > maxSum) {
                maxSum = tempSum;
                maxNumber = arr[index];
            }
            tempSum = 0;
        }
    }

    return maxNumber;

    function calculateSum(number) {
        var numberInString = number.toString().replace(/\D+/g, '');
        var sum = 0;
        for (var i in numberInString) {
            switch (numberInString[i]) {
                case '0': sum += 0; break;
                case '1': sum += 1; break;
                case '2': sum += 2; break;
                case '3': sum += 3; break;
                case '4': sum += 4; break;
                case '5': sum += 5; break;
                case '6': sum += 6; break;
                case '7': sum += 7; break;
                case '8': sum += 8; break;
                case '9': sum += 9; break;
            }
        }
        return sum;
    }
}


console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits(['hello']));
console.log(findLargestBySumOfDigits([5, 3.3]));