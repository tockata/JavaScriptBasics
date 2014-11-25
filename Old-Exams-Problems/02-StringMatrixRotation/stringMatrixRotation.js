function solve(arr) {
    var rotation = arr[0].match(/\d+/);
    var rotationIndex = parseInt(rotation) % 360;
    var maxLength = 0;
    var strToPrint = '';

    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }

    for (var m = 1; m < arr.length; m++) {
        while (arr[m].length < maxLength) {
            arr[m] += ' ';
        }
    }

    if (rotationIndex === 0) {
        for (var j = 1; j < arr.length; j++) {
            console.log(arr[j]);
        }
    } else if (rotationIndex === 180) {
        strToPrint = '';
        for (var k = arr.length - 1; k > 0; k--) {
            strToPrint = arr[k].split('').reverse().join('');
            console.log(strToPrint);
        }
    } else if (rotationIndex === 90) {
        for (var col = 0; col < maxLength; col++) {
            strToPrint = '';
            for (var row = arr.length - 1; row > 0; row--) {
                strToPrint += arr[row].charAt(col);
            }
            console.log(strToPrint);
        }
    } else if (rotationIndex === 270) {
        for (var col = maxLength - 1; col >= 0; col--) {
            strToPrint = '';
            for (var row = 1; row < arr.length; row++) {
                strToPrint += arr[row].charAt(col);
            }
            console.log(strToPrint);
        }
    }
}

solve(['Rotate(90)',
       'hello',
       'softuni',
       'exam']);
solve(['Rotate(180)',
       'hello',
       'softuni',
       'exam']);
solve(['Rotate(270)',
       'hello',
       'softuni',
       'exam']);
solve(['Rotate(720)',
       'js',
       'exam']);
solve(['Rotate(810)',
       'js',
       'exam']);
solve(['Rotate(0)',
       'js',
       'exam']);