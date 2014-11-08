function solve(input) {
    var startNumber = parseInt(input[0]);
    var endNumber = parseInt(input[1]);

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

    for (var i = startNumber; i<= endNumber; i++) {
        resultString = resultString + '<tr><td>' + i + '</td><td>' + i * i + '</td><td>';

        if (fibonacciNumbers.indexOf(i) >= 0) {
            resultString += 'yes</td></tr>\n';
        } else {
            resultString += 'no</td></tr>\n';
        }
    }

    return resultString += '</table>';
}