function extractContent(str) {
    var tempResult = str.match(/>\w+</g);
    var result = '';

    for(var index in tempResult) {
        result += tempResult[index].substring(1, tempResult[index].length - 1);
    }

    return result;
}

console.log(extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>"));