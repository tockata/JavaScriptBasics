function findMostFreqWord(str) {
    var tempArray = str.split(/[\W\d]+/);
    var stringArray = tempArray.filter(function(v){return v!==''});

    var wordFrequences = {};
    var maxFrequentWordCount = 1;

    for(var i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].toLowerCase();
        if(!wordFrequences[stringArray[i]]) {
            wordFrequences[stringArray[i]] = 1;
        } else {
            wordFrequences[stringArray[i]] += 1;
        }
    }

    for(key in wordFrequences) {
        var value = wordFrequences[key];
        if(value >= maxFrequentWordCount) {
            maxFrequentWordCount = value;
        }
    }

    var sortedKeys = Object.keys(wordFrequences).sort();

    for(var sortedKey in sortedKeys) {
        if(wordFrequences[sortedKey] === maxFrequentWordCount) {
            console.log(sortedKey + ' -> ' + wordFrequences[sortedKey] + ' times');
        }
    }
}

findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');