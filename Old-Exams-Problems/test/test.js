function tableRow(input) {
    debugger;
    var sum = 0;
    var maxSum = -Infinity;
    var output = '';
    // var tempExp = '';

    for (var i = 2; i < input.length - 1; i++) {
        var values = input[i].match(/[-][0-9.]+|[0-9.]+/g);
        if (values == null) {
            continue;
        } else {
            for (var j = 0; j < values.length; j++) {
                sum = sum + parseFloat(values[j]);
                // sum = Math.round(sum * 100) / 100
                //var tempExp = ''+ sum + ' = ' +
            }
            if (sum > maxSum) {
                maxSum = sum;
                output = '' + maxSum + ' = ' + values.join(' + ');
                
            }
        }
        sum = 0;
    }
    if (maxSum == -Infinity) {
        console.log('no data');
    } else {
        console.log(output);
    }

}
tableRow(['\<table>',
    '\<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
'\</table>']);