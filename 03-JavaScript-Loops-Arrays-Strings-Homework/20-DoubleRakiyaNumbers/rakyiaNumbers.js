function solve(arr) {
    var startNumber = parseInt(arr[0]);
    var endNumber = parseInt(arr[1]);

    var result = '<ul>\n';

    for(var i = startNumber; i <= endNumber; i++) {
        if(i <= 999) {
            result += "<li><span class='num'>" + i + "</span></li>\n";
        } else {
            var currentNumber = i.toString();
            if(checkNumber(currentNumber)) {
                result += "<li><span class='rakiya'>" + i + '</span><a href="view.php?id=' + i + '>View</a></li>\n';
            } else {
                result += "<li><span class='num'>" + i + "</span></li>\n";
            }
        }
    }

    result += '</ul>';
    return result;

    function checkNumber(number) {
        for (var i = 0; i < number.length; i++) {
            var firstCouple = number.substr(i, 2);
            for (var j = i + 2; j < number.length; j++) {
                if(firstCouple === number.substr(j, 2)) {
                    return true;
                }
            }
        }
        return false;
    }
}

console.log(solve([55555, 55560]));