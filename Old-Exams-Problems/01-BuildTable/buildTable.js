function solve(arr) {
    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');

    var startNum = parseInt(arr[0]);
    var endNum = parseInt(arr[1]);

    for (var i = startNum; i <= endNum; i++) {
        var isFib = checkNumber(i);
        if (isFib) {
            console.log('<tr><td>' + i + '</td><td>' + i * i + '</td><td>yes</td></tr>');
        } else {
            console.log('<tr><td>' + i + '</td><td>' + i * i + '</td><td>no</td></tr>');
        }
    }

    console.log('</table>');

    function checkNumber(number) {
        var firstFib = 0;
        var secondFib = 1;
        var thirdFib = 0;
        var isFibTemp = false;

        while (thirdFib <= number) {
            thirdFib = firstFib + secondFib;
            if (number === thirdFib) {
                isFibTemp = true;
                break;
            }
            firstFib = secondFib;
            secondFib = thirdFib;
        }
        return isFibTemp;
    }
}

solve(['2', '6']);
solve(['55', '56']);