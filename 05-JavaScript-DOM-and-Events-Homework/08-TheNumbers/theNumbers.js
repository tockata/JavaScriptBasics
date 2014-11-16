function solve(arr) {
    var numbers = arr[0].split(/\D+/g).filter(Boolean);
    var result = '';
    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        var hexNumber = parseFloat(numbers[i]).toString(16).toUpperCase();
        hexNumber = addSymbols(hexNumber);
        if (i === 0) {
            result += hexNumber;
        } else {
            result += ('-' + hexNumber);
        }
    }

    console.log(result);

    function addSymbols(hex) {
        while(hex.length < 4) {
            hex = '0' + hex;
        }
        hex = '0x' + hex;
        return hex;
    }
}

solve(['5tffwj(//*7837xzc2---34rlxXP%$']);
