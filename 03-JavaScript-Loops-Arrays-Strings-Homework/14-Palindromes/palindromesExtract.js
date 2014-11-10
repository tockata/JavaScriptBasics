function findPalindromes(str) {
    var result = [];

    var words = str.toLowerCase().split(/[ .,!?]+/);
    for (var i = 0; i < words.length; i++) {
        if(isPalindrome(words[i]) && words[i].length > 0) {
            result.push(words[i]);
        }
    }
    console.log(result.join(', '));
}

function isPalindrome(word) {
    var wordReversed = word.split('').reverse().join('');
    if(word === wordReversed) {
        return true;
    } else {
        return false;
    }
}

findPalindromes('There is a man, his name was Bob.');