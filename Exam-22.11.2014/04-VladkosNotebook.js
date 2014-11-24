function solve(arr) {
    var result = {};

    for (var i = 0; i < arr.length; i++) {
        var splittedRow = arr[i].split('|');
        var color = splittedRow[0];
        if (!result[color]) {
            result[color] = { 'age': '', 'name': '', 'opponents': [], 'rank': 0, 'wins': 0, 'loss': 0 };
        }
        if (splittedRow[1] == 'win' || splittedRow[1] == 'loss') {
            var opponent = splittedRow[2];
            result[color].opponents.push(opponent);
            result[color].opponents.sort();
            if (splittedRow[1] == 'win') {
                result[color].wins++;
            } else {
                result[color].loss++;
            }
        } else if (splittedRow[1] == 'age') {
            var age = splittedRow[2];
            result[color].age = age;
        } else {
            var name = splittedRow[2];
            result[color].name = name;
        }
    }

    for (var key in result) {
        result[key].rank = ((result[key].wins + 1) / (result[key].loss + 1)).toFixed(2);
        delete result[key].wins;
        delete result[key].loss;
        if (result[key].name == '' || result[key].age == '') {
            delete result[key];
        }
    }

    result = sortObj(result);

    console.log(JSON.stringify(result));

    function sortObj(obj) {
        var keys = Object.keys(obj);
        keys.sort();
        var sortedObj = {};

        for (var j = 0; j < keys.length; j++) {
            sortedObj[keys[j]] = obj[keys[j]];
        }

        return sortedObj;
    }
}

solve([
    'purple|age|99',
'red|age|44',
'blue|win|pesho',
'blue|win|mariya',
'purple|loss|Kiko',
'purple|loss|Kiko',
'purple|loss|Kiko',
'purple|loss|Yana',
'purple|loss|Yana',
'purple|loss|Manov',
'purple|loss|Manov',
'red|name|gosho',
'blue|win|Vladko',
'purple|loss|Yana',
'purple|name|VladoKaramfilov',
'blue|age|21',
'blue|loss|Pesho'
]);