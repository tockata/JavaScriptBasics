function solve(arr) {
    var splittedRows = [];
    for (var row in arr) {
        splittedRows.push(arr[row].split(''));
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 0; j < arr[i].length - 2; j++) {
            if ((j + 2) < arr[i].length && (i - 1) >= 0 && (j + 1) < arr[i - 1].length) {
                if (arr[i][j] === arr[i][j + 1] && arr[i][j + 1] === arr[i][j + 2] &&
                    arr[i][j] === arr[i - 1][j + 1]) {
                    splittedRows[i][j] = '*';
                    splittedRows[i][j + 1] = '*';
                    splittedRows[i][j + 2] = '*';
                    splittedRows[i - 1][j + 1] = '*';
                }
            }
        }
    }
    for (var index in splittedRows) {
        console.log(splittedRows[index].join(''));
    }
}

solve([
    'abcdexgh',
    'bbbdxxxh',
    'abcxxxxx'
]);

solve([
    'dffdsgyefg',
    'ffffeyeee',
    'jbfffays',
    'dagfffdsss',
    'dfdfa',
    'dadaaadddf',
    'sdaaaaa',
    'daaaaaaasf'
]);