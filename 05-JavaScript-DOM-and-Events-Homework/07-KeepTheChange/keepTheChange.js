function solve(arr) {
    var bill = parseFloat(arr[0]);
    var mood = arr[1];

    switch(mood) {
        case 'happy': console.log((bill * 0.10).toFixed(2)); break;
        case 'married': console.log((bill * 0.0005).toFixed(2)); break;
        case 'drunk':
            var tip = bill * 0.15;
            var firstDigit = parseFloat(tip.toString()[0]);
            console.log(Math.pow(tip, firstDigit).toFixed(2)); break;
        default: console.log((bill * 0.05).toFixed(2)); break;
    }
}

solve(['120.44', 'happy']);
solve(['1230.83', 'drunk']);
solve(['716.00', 'bored']);