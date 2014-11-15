function solve(arr) {
    var gameField = [];
    var tetriminosCount = {'I':0, 'L':0, 'J':0, 'O':0, 'Z':0, 'S':0, 'T':0};
    for(var i in arr) {
        gameField.push(arr[i].split(''));
    }
    /** console.log(gameField); **/

    for(var row = 0; row < gameField.length; row++){
        for(var col = 0; col < gameField[row].length; col++) {
            countTetriminos(row, col);
        }
    }

    console.log(JSON.stringify(tetriminosCount));

    function countTetriminos(row, col) {
        if(row + 3 < gameField.length) {
            if (gameField[row][col] === 'o' && gameField[row+1][col] === 'o' &&
                gameField[row+2][col] === 'o' && gameField[row+3][col] === 'o') {
                tetriminosCount.I++;
            }
        }
        if(row + 2 < gameField.length && col + 1 < gameField[row].length) {
            if(gameField[row][col] === 'o' && gameField[row+1][col] === 'o' &&
                gameField[row+2][col] === 'o' && gameField[row+2][col+1] === 'o') {
                tetriminosCount.L++;
            }
        }
        if(row + 2 < gameField.length && col - 1 >= 0) {
            if(gameField[row][col] === 'o' && gameField[row+1][col] === 'o' &&
                gameField[row+2][col] === 'o' && gameField[row+2][col-1] === 'o') {
                tetriminosCount.J++;
            }
        }
        if(row + 1 < gameField.length && col + 1 < gameField[row].length) {
            if (gameField[row][col] === 'o' && gameField[row+1][col] === 'o' &&
                gameField[row][col+1] === 'o' && gameField[row+1][col+1] === 'o') {
                tetriminosCount.O++;
            }
        }
        if(row + 1 < gameField.length && col + 2 < gameField[row].length) {
            if (gameField[row][col] === 'o' && gameField[row][col+1] === 'o' &&
                gameField[row+1][col+1] === 'o' && gameField[row+1][col+2] === 'o') {
                tetriminosCount.Z++;
            }
        }
        if(row + 1 < gameField.length && col + 1 < gameField[row].length && col - 1 >= 0) {
            if (gameField[row][col] === 'o' && gameField[row][col+1] === 'o' &&
                gameField[row+1][col] === 'o' && gameField[row+1][col-1] === 'o') {
                tetriminosCount.S++;
            }
        }
        if(row + 1 < gameField.length && col + 2 < gameField[row].length) {
            if (gameField[row][col] === 'o' && gameField[row][col+1] === 'o' &&
                gameField[row][col+2] === 'o' && gameField[row+1][col+1] === 'o') {
                tetriminosCount.T++;
            }
        }

    }
}
/**
solve(['--o--o-', '--oo-oo', 'ooo-oo-', '-ooooo-', '---oo--']);
 **/