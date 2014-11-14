function reverseWordsInString(str) {
    var stringArray = str.split(' ');
    for(var i in stringArray) {
        stringArray[i] = stringArray[i].split('').reverse().join('');
    }
    var result = stringArray.join(' ');
    console.log(result);
}

reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');