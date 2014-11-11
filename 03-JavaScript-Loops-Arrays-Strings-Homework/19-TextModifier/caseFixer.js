/** not solved yet **/

function fixCasing(str) {
    var upcase = str.match(/<upcase>\w+(\W)?\w+<\/upcase>/g);
    var lowcase = str.match(/<lowcase>\w+(\W)?\w+<\/lowcase>/g);
    var mixcase = str.match(/<mixcase>\w+(\W)?\w+<\/mixcase>/g);

    var upcaseReplace = [];
    var lowcaseReplace = [];
    var mixcaseReplace = [];

    for (var i = 0; i < upcase.length; i++) {
        upcaseReplace[i] = '<upcase>' + upcase[i].substring(8, upcase[i].length - 8).toUpperCase() + '</upcase>';
        console.log(upcaseReplace[i]);
    }

    for (var i = 0; i < lowcase.length; i++) {
        lowcaseReplace[i] = '<lowcase>' + lowcase[i].substring(9, lowcase[i].length - 9).toLowerCase() + '</lowcase>';
        console.log(lowcaseReplace[i]);
    }

    for (var i = 0; i < mixcase.length; i++) {
        var random = Math.floor((Math.random() * 2));
        var stringToReplace = mixcase[i].substring(9, mixcase[i].length - 9);
        var newString = '';

        for(var j = 0; j < stringToReplace.length; j++){
            if (random === 0) {
                newString = newString + stringToReplace[j].toLowerCase();
            } else {
                newString = newString + stringToReplace[j].toUpperCase();
            }
        }
        mixcaseReplace[i] = '<mixcase>' + newString + '</mixcase>';
        console.log(mixcaseReplace[i]);
    }
}

console.log(fixCasing("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else."));