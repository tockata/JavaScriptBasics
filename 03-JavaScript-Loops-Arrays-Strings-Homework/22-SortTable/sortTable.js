function solve(arr) {
    var result = [];

    for(var i = 2; i < arr.length - 1; i++) {
        var splittedRow = (arr[i].split(/<tr><td>|<\/td><td>|<\/td><\/tr>/g)).filter(Boolean);
        var price = parseFloat(splittedRow[1]);
        result.push({price: price, row: arr[i]});
    }

    result.sort(function(a,b){
       if(a.price != b.price) {
           return a.price - b.price;
       } else {
           if(a.price === b.price) {
               if (a.row === b.row) {
                   return 0;
               } else {
                   return a.row - b.row;
               }
           }
       }
    });

    console.log(arr[0]);
    console.log(arr[1]);
    for(var i = 0; i < result.length; i++) {
        console.log(result[i].row);
    }
    console.log(arr[arr.length - 1]);
}

solve(['<table>', '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'</table>']);