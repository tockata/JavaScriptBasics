function printNumbers(number) {
    var result = [];

    if(number < 1) {
        console.log("no");
    } else {
        for (var i = 1; i <= number; i++) {
            if(i % 4 != 0 && i % 5 != 0) {
                result.push(i);
            }
        }
        console.log(result.join(', '));
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);