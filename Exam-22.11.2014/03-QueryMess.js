function solve(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var splittedInput = arr[i].split('&');
        for (var j = 0; j < splittedInput.length; j++) {
            var indexOfQuestionMark = splittedInput[j].indexOf('?');
            if (indexOfQuestionMark >= 0) {
                splittedInput[j] = splittedInput[j].substr(indexOfQuestionMark + 1, splittedInput[j].length - 1);
            }

            var fieldsToAdd = splittedInput[j].split('=');
            for (var k = 0; k < fieldsToAdd.length; k++) {
                fieldsToAdd[k] = fieldsToAdd[k].replace(/%20/g, ' ');
                fieldsToAdd[k] = fieldsToAdd[k].replace(/\+/g, ' ');
                fieldsToAdd[k] = fieldsToAdd[k].replace(/\s{2,}/g, ' ');
                fieldsToAdd[k] = fieldsToAdd[k].trim();
            }

            var keyToAdd = fieldsToAdd[0];
            var valueToAdd = fieldsToAdd[1];
            if (!result[keyToAdd]) {
                result[keyToAdd] = [];
            }
            result[keyToAdd].push(valueToAdd);
        }

        var resultStr = '';
        for (var key in result) {
            resultStr = resultStr + key + '=';
            for (var l = 0; l < result[key].length; l++) {
                if (result[key].length == 1) {
                    resultStr = resultStr + '[' + result[key][0] + ']';
                } else if (l == 0) {
                    resultStr = resultStr + '[' + result[key][l];
                } else if (l > 0 && l < result[key].length - 1) {
                    resultStr = resultStr + ', ' + result[key][l];
                } else {
                    resultStr = resultStr + ', ' + result[key][l] + ']';
                }
            }
        }
        console.log(resultStr);
        result = {};
    }
}

//solve([
//    'login=student&password=student'
//]);

//solve([
//    'field=value1&field=value2&field=value3',
//    'http://example.com/over/there?name=ferret'
//]);

solve([
    'foo=%20foo&value=va-l&foo+=5+%20+203',
    'foo=%20  +++poo%20++&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
]);
