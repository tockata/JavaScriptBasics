function fixCasing(str) {
    var upcase = str.match(/<upcase>\w+(\W)?\w+<\/upcase>/g);
    var lowcase = str.match(/<lowcase>\w+(\W)?\w+<\/lowcase>/g);
    var mixcase = str.match(/<mixcase>\w+(\W)?\w+<\/mixcase>/g);

    var upcaseReplace = [];
    var lowcaseReplace = [];
    var mixcaseReplace = [];

    for (var i = 0; i < upcase.length; i++) {
        upcaseReplace[i] = upcase[i].substring(8, upcase[i].length - 9).toUpperCase();
        str = str.replace(upcase[i], upcaseReplace[i]);
    }

    for (var i = 0; i < lowcase.length; i++) {
        lowcaseReplace[i] = lowcase[i].substring(9, lowcase[i].length - 10).toLowerCase();
        str = str.replace(lowcase[i], lowcaseReplace[i]);
    }

    for (var i = 0; i < mixcase.length; i++) {
        var stringToReplace = mixcase[i].substring(9, mixcase[i].length - 10);
        var newString = '';

        for(var j = 0; j < stringToReplace.length; j++){
            var random = Math.floor((Math.random() * 2));
            if (random === 0) {
                var charToAdd = stringToReplace[j].toLowerCase();
                newString += charToAdd;
            } else {
                var charToAdd = stringToReplace[j].toUpperCase();
                newString += charToAdd;
            }
        }
        mixcaseReplace[i] = newString;
        str = str.replace(mixcase[i], mixcaseReplace[i]);
    }

    return str;
}

console.log(fixCasing("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else."));