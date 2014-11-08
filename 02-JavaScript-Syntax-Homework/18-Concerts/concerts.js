function orderConcerts(input) {
    var concerts = {};
    for (var index in input) {
        var splittedString = input[index].split('|');
        for (var index in splittedString) {
            splittedString[index] = splittedString[index].trim();
        }
        /** console.log(splittedString); **/

        if (!(splittedString[1] in concerts)) {
            concerts[splittedString[1]] = {};
        }
        if (!concerts[splittedString[1]][splittedString[3]]) {
            concerts[splittedString[1]][splittedString[3]] = [];
        }
        if (concerts[splittedString[1]][splittedString[3]].indexOf(splittedString[0]) === -1) {
            concerts[splittedString[1]][splittedString[3]].push(splittedString[0]);
        }

        /** sort bands **/
        concerts[splittedString[1]][splittedString[3]].sort();

       /** console.log(concerts); **/
    }
    /** sort keys **/

    concerts = sortObject(concerts);
    for (var town in concerts) {
        concerts[town] = sortObject(concerts[town]);
    }

    console.log(JSON.stringify(concerts));

    function sortObject(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedConcerts = {};

        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedConcerts[key] = obj[key];
        }

        return sortedConcerts;
    }
}
