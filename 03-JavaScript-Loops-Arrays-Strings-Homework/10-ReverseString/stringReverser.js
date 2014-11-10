function reverseString(str) {
    var resultStr = '';
    var strArray = str.split('');
    strArray = strArray.reverse();
    resultStr = strArray.join('');

    return resultStr;
}


console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));