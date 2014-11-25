function solve(arr) {
    var result = {};

    for (var i = 0; i < arr.length; i++) {
        var splittedRow = arr[i].split(/\s?\|\s?/g);
        var band = splittedRow[0];
        var town = splittedRow[1];
        var venue = splittedRow[3];

        if (!result[town]) {
            result[town] = {};
        }
        if (!result[town][venue]) {
            result[town][venue] = [];
        }
        if (result[town][venue].indexOf(band) < 0) {
            result[town][venue].push(band);
        }
        result[town][venue].sort();
    }

    for (var key in result) {
        result[key] = sortObj(result[key]);
    }
    result = sortObj(result);

    console.log(JSON.stringify(result));

    function sortObj(obj) {
        var keys = Object.keys(obj);
        keys.sort();
        var sortedObj = {};

        for (var key in keys) {
            sortedObj[keys[key]] = obj[keys[key]];
        }

        return sortedObj;
    }
}

solve(['ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
       'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
       'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
       'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
       'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
       'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
       'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
       'Helloween | London | 28-Jul-2014 | Wembley Stadium',
       'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
       'Metallica | London | 03-Oct-2014 | Olympic Stadium',
       'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
       'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
]);