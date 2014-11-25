function solve(arr) {
    var result = [];

    console.log('<table>');
    console.log('<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');

    for (var i = 2; i < arr.length - 1; i++) {
        var splittedArray = arr[i].split(/<tr><td>|<\/td><td>/g).filter(Boolean);
        var currentPrice = parseFloat(splittedArray[1]);
        result.push({ price: currentPrice, row: arr[i] });

    }

    result.sort(function(a, b) {
        if (a.price !== b.price) {
            return a.price - b.price;
        } else {
            if (a.row !== b.row) {
                return a.row - b.row;
            } else {
                return 0;
            }
        }
    });

    for (var j = 0; j < result.length; j++) {
        console.log(result[j].row);
    }

    console.log('</table>');
}

solve(['<table>',
'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
'<tr><td>Laptop Lenovo IdeaPad B5400</td><td>929.00</td><td>0</td></tr>',
'<tr><td>Laptop ASUS ROG G550JK-CN268D</td><td>1939.00</td><td>+1</td></tr>',
'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'</table>']);