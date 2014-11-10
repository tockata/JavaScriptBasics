function findCardFrequency(str) {
    var tempFaces = str.split(/\W+/g);
    var faces = tempFaces.filter(function(v){return v!==''});

    var facesCount = {};

    for(var i = 0; i < faces.length; i++) {
        var key = faces[i];
        if(!facesCount[key]) {
            facesCount[key] = 0;
        }
        facesCount[key] += 1;
    }

    for(var i = 0; i < faces.length; i++) {
        var key = faces[i];
        if(facesCount[key]) {
            var frequency = ((facesCount[key] / faces.length) * 100).toFixed(2);
            console.log(key + ' -> ' + frequency + '%');
            delete facesCount[key];
        }
    }
}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log();
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log();
findCardFrequency('10♣ 10♥');