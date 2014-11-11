function solve(arr) {
    var rotationDegreesStr = arr[0].match(/\d+/);
    var rotationDeg = parseInt(rotationDegreesStr);
    var rotateIndex = rotationDeg / 90;

    var twoDimArray = new Array(arr.length - 1);
    var resultArray = [];
    var maxLength = 0;
    for(var i = 1; i < arr.length; i++) {
        if(arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
        twoDimArray.push(arr[i].split(''));
    }
    twoDimArray = twoDimArray.filter(Boolean);

    for(var i = 0; i < twoDimArray.length; i++) {
        var currentLength = twoDimArray[i].length;
        while(currentLength < maxLength) {
            twoDimArray[i].push(' ');
            currentLength++;
        }
    }

    if(rotateIndex % 4 === 0) {
        resultArray = twoDimArray;
    } else if(rotateIndex % 4 === 1) {
        resultArray = new Array(maxLength);
        for(var i = 0; i < maxLength; i++) {
            resultArray[i] = new Array(twoDimArray.length);
        }
        for(var col1 = twoDimArray.length - 1, row2 = 0; col1 >= 0; col1--, row2++){
            for(var row1 = 0, col2 = 0; row1 < maxLength; row1++, col2++){
                resultArray[row1][col1] = twoDimArray[row2][col2];
            }
        }
    } else if(rotateIndex % 4 === 2) {
        resultArray = new Array(twoDimArray.length);
        for(var i = 0; i < twoDimArray.length; i++) {
            resultArray[i] = new Array(maxLength);
        }
        for(var row1 = 0, row2 = twoDimArray.length - 1; row1 < twoDimArray.length; row1++, row2--){
            for(var col1 = maxLength - 1, col2 = 0; col1 >= 0; col1--, col2++){
                resultArray[row1][col1] = twoDimArray[row2][col2];
            }
        }
    } else if(rotateIndex % 4 === 3) {
        resultArray = new Array(maxLength);
        for(var i = 0; i < maxLength; i++) {
            resultArray[i] = new Array(twoDimArray.length);
        }
        for(var col1 = 0, row2 = 0; col1 < twoDimArray.length; col1++, row2++){
            for(var row1 = maxLength - 1, col2 = 0; row1 >= 0; row1--, col2++){
                resultArray[row1][col1] = twoDimArray[row2][col2];
            }
        }
    }

    for(var i = 0; i < resultArray.length; i++) {
        console.log(resultArray[i].join(''));
    }
}

solve(['Rotate(720)', 'js', 'exam']);