function solve(arr) {
    var splittedInput = [];
    for(var i = 2; i < arr.length - 1; i++) {
        splittedInput.push(arr[i].split(/<tr><td>|<\/td><td>|<\/td><\/tr>/g).filter(Boolean));
    }
    var maxSum = -Infinity;
    var maxSumIndex = 0;
    var tempSum = 0;
    var result = '';
    var count = 0;

    for(var i = 0; i < splittedInput.length; i++) {
        tempSum = calcSum(splittedInput[i]);
        if(tempSum > maxSum) {
            maxSum = tempSum;
            maxSumIndex = i;
        }
    }

    if(maxSum === 0 && splittedInput[maxSumIndex][1] === '-' && splittedInput[maxSumIndex][2] === '-'
        && splittedInput[maxSumIndex][3] === '-') {
        console.log('no data');
    } else {
        result += (maxSum + ' = ');
        for (var i = 1; i < splittedInput[maxSumIndex].length; i++) {
            if ((splittedInput[maxSumIndex][i] !== '-' && i == 1) || (splittedInput[maxSumIndex][i] !== '-' && count == 0)) {
                result += (splittedInput[maxSumIndex][i]);
                count++;
            } else if (splittedInput[maxSumIndex][i] !== '-' && count > 0) {
                result += (' + ' + splittedInput[maxSumIndex][i]);
            }
        }
        console.log(result);
    }

    function calcSum(storeArr) {
        var sum = 0;
        for(var i = 1; i < storeArr.length; i++) {
            if(storeArr[i] !== '-'){
                sum += parseFloat(storeArr[i]);
            }
        }
        return sum;
    }
}

/**
solve(['<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
'<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
'<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
'<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
'</table>']);
 **/