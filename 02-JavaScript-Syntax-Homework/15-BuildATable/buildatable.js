function solve(arr) {
    var startNumber = arr[0];
    var endNumber = arr[1];

    var firstFibonacci = 1;
    var secondFibonacci = 1;
    var nextFibonacci = firstFibonacci + secondFibonacci;
    var fibonacciNumbers = [firstFibonacci, secondFibonacci];

    for (var i = 3; i <= 31; i += 1) {
        fibonacciNumbers.push(nextFibonacci);
        firstFibonacci = secondFibonacci;
        secondFibonacci = nextFibonacci;
        nextFibonacci = firstFibonacci + secondFibonacci;
    }

    var resultString = '<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';

    for (var i = startNumber; i<= endNumber; i += 1) {
        resultString = resultString + '<tr><td>' + i.toString() + '</td><td>' + (i * i).toString() + '</td><td>';

        if (fibonacciNumbers.indexOf(i) >= 0) {
            resultString += 'yes</td></tr>\n';
        } else {
            resultString += 'no</td></tr>\n';
        }
    }

    resultString += '</table>';
    return resultString;
}