function checkBrackets(str) {
    var expression = str;
    var leftBracket = 0;
    var rightBracket = 0;

    for(var i = 0; i < expression.length; i++) {
        if(expression[i] === '(') {
            leftBracket++;
        } else if (expression[i] === ')' && rightBracket < leftBracket) {
            rightBracket++;
        } else if (expression[i] === ')' && rightBracket >= leftBracket) {
            console.log('incorrect');
            return;
        }
    }

    if(leftBracket === rightBracket) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');