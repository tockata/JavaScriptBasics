function solve(arr) {
    var result = { 'I': 0, 'L': 0, 'J': 0, 'O': 0, 'Z': 0, 'S': 0, 'T': 0 };

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (i + 3 < arr.length && arr[i][j] == 'o' && arr[i + 1][j] == 'o' &&
                arr[i + 2][j] == 'o' && arr[i + 3][j] == 'o') {
                result['I']++;
            }
            if (i + 2 < arr.length && j + 1 < arr[i].length && arr[i][j] == 'o' && arr[i + 1][j] == 'o' &&
                arr[i + 2][j] == 'o' && arr[i + 2][j + 1] == 'o') {
                result['L']++;
            }
            if (i + 2 < arr.length && j - 1 >= 0 && arr[i][j] == 'o' && arr[i + 1][j] == 'o' &&
                arr[i + 2][j] == 'o' && arr[i + 2][j - 1] == 'o') {
                result['J']++;
            }
            if (i + 1 < arr.length && j + 1 < arr[i].length && arr[i][j] == 'o' && arr[i + 1][j] == 'o' &&
                arr[i + 1][j + 1] == 'o' && arr[i][j + 1] == 'o') {
                result['O']++;
            }
            if (i + 1 < arr.length && j + 2 < arr[i].length && arr[i][j] == 'o' && arr[i][j + 1] == 'o' &&
                arr[i + 1][j + 1] == 'o' && arr[i + 1][j + 2] == 'o') {
                result['Z']++;
            }
            if (i - 1 >= 0 && j + 2 < arr[i].length && arr[i][j] == 'o' && arr[i][j + 1] == 'o' &&
                arr[i - 1][j + 1] == 'o' && arr[i - 1][j + 2] == 'o') {
                result['S']++;
            }
            if (i + 1 < arr.length && j + 2 < arr[i].length && arr[i][j] == 'o' && arr[i][j + 1] == 'o' &&
                arr[i][j + 2] == 'o' && arr[i + 1][j + 1] == 'o') {
                result['T']++;
            }
        }
    }

    console.log(JSON.stringify(result));
}

solve([
    '--o--o-',
    '--oo-oo',
    'ooo-oo-',
    '-ooooo-',
    '---oo--'
]);