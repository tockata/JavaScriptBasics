function solve(arg) {
    var rowAndCols = arg[0].split(' ');
    var rows = parseInt(rowAndCols[0]);
    var cols = parseInt(rowAndCols[1]);

    var arrayOfDigits = [];
    var arrayOfDirections = [];
    var lastRow = 0;
    var lastCol = 0;
    var nextRow = 0;
    var nextCol = 0;
    var sum = 1;
    var resultFound = false;

    for (var i = 0; i < rows; i++) {
        arrayOfDigits[i] = [];
        arrayOfDirections.push(arg[i + 1].split(' '));
        for (var j = 0; j < cols; j++) {
            if (j === 0) {
                arrayOfDigits[i][j] = (Math.pow(2, i));
            } else {
                arrayOfDigits[i][j] = (arrayOfDigits[i][j - 1] + 1);
            }
        }
    }

    var nextDirection = arrayOfDirections[nextRow][nextCol];

    while(!resultFound) {
        switch(nextDirection) {
            case 'dr':
                nextRow += 1;
                nextCol += 1;
                checkAndCalculate(nextRow, nextCol); break;
            case 'ur':
                nextRow -= 1;
                nextCol += 1;
                checkAndCalculate(nextRow, nextCol); break;
            case 'ul':
                nextRow -= 1;
                nextCol -= 1;
                checkAndCalculate(nextRow, nextCol); break;
            case 'dl':
                nextRow += 1;
                nextCol -= 1;
                checkAndCalculate(nextRow, nextCol); break;
            default: break;
        }
    }

    function checkAndCalculate(row, col) {
        if (row >= rows || row < 0 || col >= cols || col < 0) {
            console.log('successed with ' + sum);
            resultFound = true;
        } else if (arrayOfDirections[row][col] === 'x') {
            console.log('failed at (' + row + ', ' + col + ')');
            resultFound = true;
        } else {
            sum += arrayOfDigits[row][col];
            nextDirection = arrayOfDirections[row][col];
            arrayOfDirections[row][col] = 'x';
            lastRow = row;
            lastCol = col;
        }
    }
}

solve([
    '3 5',
    'dr dl dr ur ul',
    'dr dr ul ur ur',
    'dl dr ur dl ur'
]);

solve([
    '3 5',
    'dr dl dl ur ul',
    'dr dr ul ul ur',
    'dl dr ur dl ur'
]);