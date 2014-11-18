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

    var direction = arrayOfDirections[nextRow][nextCol];
    var nextDirection = direction;

    while(!resultFound) {
        switch(nextDirection) {
            case 'dr':
                nextRow += 1;
                nextCol += 1;
                if (nextRow >= rows || nextRow < 0 || nextCol >= cols || nextCol < 0) {
                    console.log('successed with ' + sum);
                    resultFound = true;
                } else if (arrayOfDirections[nextRow][nextCol] === 'x') {
                    console.log('failed at (' + nextRow + ', ' + nextCol + ')');
                    resultFound = true;
                } else {
                    sum += arrayOfDigits[nextRow][nextCol];
                    nextDirection = arrayOfDirections[nextRow][nextCol];
                    arrayOfDirections[nextRow][nextCol] = 'x';
                    lastRow = nextRow;
                    lastCol = nextCol;
                } break;
            case 'ur':
                nextRow -= 1;
                nextCol += 1;
                if (nextRow >= rows || nextRow < 0 || nextCol >= cols || nextCol < 0) {
                    console.log('successed with ' + sum);
                    resultFound = true;
                } else if (arrayOfDirections[nextRow][nextCol] === 'x') {
                    console.log('failed at (' + nextRow + ', ' + nextCol + ')');
                    resultFound = true;
                } else {
                    sum += arrayOfDigits[nextRow][nextCol];
                    nextDirection = arrayOfDirections[nextRow][nextCol];
                    arrayOfDirections[nextRow][nextCol] = 'x';
                    lastRow = nextRow;
                    lastCol = nextCol;
                } break;
            case 'ul':
                nextRow -= 1;
                nextCol -= 1;
                if (nextRow >= rows || nextRow < 0 || nextCol >= cols || nextCol < 0) {
                    console.log('successed with ' + sum);
                    resultFound = true;
                } else if (arrayOfDirections[nextRow][nextCol] === 'x') {
                    console.log('failed at (' + nextRow + ', ' + nextCol + ')');
                    resultFound = true;
                } else {
                    sum += arrayOfDigits[nextRow][nextCol];
                    nextDirection = arrayOfDirections[nextRow][nextCol];
                    arrayOfDirections[nextRow][nextCol] = 'x';
                    lastRow = nextRow;
                    lastCol = nextCol;
                } break;
            case 'dl':
                nextRow += 1;
                nextCol -= 1;
                if (nextRow >= rows || nextRow < 0 || nextCol >= cols || nextCol < 0) {
                    console.log('successed with ' + sum);
                    resultFound = true;
                } else if (arrayOfDirections[nextRow][nextCol] === 'x') {
                    console.log('failed at (' + nextRow + ', ' + nextCol + ')');
                    resultFound = true;
                } else {
                    sum += arrayOfDigits[nextRow][nextCol];
                    nextDirection = arrayOfDirections[nextRow][nextCol];
                    arrayOfDirections[nextRow][nextCol] = 'x';
                    lastRow = nextRow;
                    lastCol = nextCol;
                } break;
            default: break;
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