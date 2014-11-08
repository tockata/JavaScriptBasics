function revealTriangles(input) {
    var inputText = [];
    var resultText = [];

    for (var row = 0; row < input.length; row++) {
        resultText[row] = input[row].split('');
        inputText[row] = input[row].split('');
    }

    for (var row = inputText.length - 1; row >= 1; row--) {
        for (var col = 0; col < inputText[row].length; col++) {
            var a = inputText[row][col];
            var b = inputText[row][col + 1];
            var c = inputText[row][col + 2];
            var d = inputText[row - 1][col + 1];

            if (a === b && b === c && c === d) {
                resultText[row][col] = '*';
                resultText[row][col + 1] = '*';
                resultText[row][col + 2] = '*';
                resultText[row - 1][col + 1] = '*';
            }
        }
    }

    var output = [];

    for (var i = 0; i < resultText.length; i++) {
        output[i] = resultText[i].join('');
        console.log(output[i]);
    }
}