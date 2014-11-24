function solve(arr) {
    var inputText = [];
    var resultText = [];

    for (var i = 0; i < arr.length; i++) {
        resultText[i] = arr[i].split('');
        arr[i] = arr[i].toLowerCase();
        inputText[i] = arr[i].split('');
    }

    for (var row = 0; row < inputText.length; row++) {
        for (var col = 0; col < inputText[row].length; col++) {
            if (row + 2 < inputText.length && col + 2 < inputText[row].length) {
                var a = inputText[row][col];
                var b = inputText[row][col + 2];
                var c = inputText[row + 1][col + 1];
                var d = inputText[row + 2][col];
                var e = inputText[row + 2][col + 2];
                if (a == b && b == c && c == d && d == e) {
                    resultText[row][col] = '';
                    resultText[row][col + 2] = '';
                    resultText[row + 1][col + 1] = '';
                    resultText[row + 2][col] = '';
                    resultText[row + 2][col + 2] = '';
                }
            }
        }
    }

    for (var j = 0; j < resultText.length; j++) {
        console.log(resultText[j].join(''));
    }
}

solve([
        'abnbjs',
        'xoBab',
        'Abmbh',
        'aabab',
        'ababvvvv'
]);

solve([
        '8888888',
        '08*8*80',
        '808*888',
        '0**8*8?'
]);

solve([
        '^u^',
        'j^l^a',
        '^w^WoWl',
        'adw1w6',
        '(WdWoWgPoop)'
]);

solve([
        'puoUdai',
        'miU',
        'ausupirina',
        '8n8i8',
        'm8o8a',
        '8l8o860',
        'M8i8',
        '8e8!8?!'
]);