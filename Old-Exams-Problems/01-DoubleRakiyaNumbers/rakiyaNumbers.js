function solve(arr) {
    var start = parseInt(arr[0]);
    var end = parseInt(arr[1]);

    console.log('<ul>');
    for (var i = start; i <= end; i++) {
        if (checkNumber(i.toString())) {
            console.log("<li><span class='rakiya'>" + i + '</span><a href="view.php?id=' + i + '>View</a></li>');
        } else {
            console.log("<li><span class='num'>" + i + "</span></li>");
        }
    }
    console.log('</ul>');

    function checkNumber(numberStr) {
        if (numberStr.length < 4) {
            return false;
        } else {
            for (var j = 0; j < numberStr.length - 2; j++) {
                var subStr = numberStr.substr(j, 2);
                for (var k = j + 2; k < numberStr.length; k++) {
                    var nextStr = numberStr.substr(k, 2);
                    if (subStr == nextStr) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

solve(['5', '8']);
solve(['11210', '11215']);