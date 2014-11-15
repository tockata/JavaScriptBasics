function solve(arr) {
    var firstRowPrice = parseFloat(arr[0]);
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    console.log('<tr><td>'+ firstRowPrice.toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');

    for(var i = 1; i < arr.length; i++) {
        var firstNum = parseFloat((parseFloat(arr[i])).toFixed(2));
        var prevNum = parseFloat((parseFloat(arr[i - 1])).toFixed(2));
        if(firstNum === prevNum) {
            console.log('<tr><td>'+ firstNum.toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
        } else if(firstNum < prevNum) {
            console.log('<tr><td>'+ firstNum.toFixed(2) + '</td><td><img src="down.png"/></td></td>');
        } else if(firstNum > prevNum) {
            console.log('<tr><td>'+ firstNum.toFixed(2) + '</td><td><img src="up.png"/></td></td>');
        }
    }
    console.log('</table>');
}

/**
solve(['50', '60']);
solve(['36.333', '36.5', '37.019', '35.4', '35', '35.001', '36.225']);
 **/