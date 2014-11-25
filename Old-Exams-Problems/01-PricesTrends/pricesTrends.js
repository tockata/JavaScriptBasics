function solve(arr) {
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    console.log('<tr><td>' + (parseFloat(arr[0])).toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');

    for (var i = 1; i < arr.length; i++) {
        var prevNumber = parseFloat(parseFloat(arr[i - 1]).toFixed(2));
        var currNumber = parseFloat(parseFloat(arr[i]).toFixed(2));
        if (prevNumber == currNumber) {
            console.log('<tr><td>' + currNumber.toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
        } else if (currNumber > prevNumber) {
            console.log('<tr><td>' + currNumber.toFixed(2) + '</td><td><img src="up.png"/></td></td>');
        } else {
            console.log('<tr><td>' + currNumber.toFixed(2) + '</td><td><img src="down.png"/></td></td>');
        }
    }
    console.log('</table>');
}

solve(['36.333', '36.5', '37.019', '35.4', '35', '35.001', '36.225']);