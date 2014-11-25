function solve(arr) {
    var result = {};

    for (var i = 0; i < arr.length; i++) {
        var row = arr[i].split(/\s?\/\s?|\s?:\s?|\s?-\s?/g).filter(Boolean);
        //console.log(row);
        var homeTeam = row[0];
        var awayTeam = row[1];
        var homeGoals = parseInt(row[2]);
        var awayGoals = parseInt(row[3]);

        if (!result[homeTeam]) {
            result[homeTeam] = { 'goalsScored': 0, 'goalsConceded': 0, 'matchesPlayedWith': [] };
        }
        if (!result[awayTeam]) {
            result[awayTeam] = { 'goalsScored': 0, 'goalsConceded': 0, 'matchesPlayedWith': [] };
        }
        result[homeTeam].goalsScored += homeGoals;
        result[awayTeam].goalsScored += awayGoals;
        result[homeTeam].goalsConceded += awayGoals;
        result[awayTeam].goalsConceded += homeGoals;
        if (result[homeTeam].matchesPlayedWith.indexOf(awayTeam) < 0) {
            result[homeTeam].matchesPlayedWith.push(awayTeam);
            result[homeTeam].matchesPlayedWith.sort();
        }
        if (result[awayTeam].matchesPlayedWith.indexOf(homeTeam) < 0) {
            result[awayTeam].matchesPlayedWith.push(homeTeam);
            result[awayTeam].matchesPlayedWith.sort();
        }
    }

    result = sortObj(result);

    console.log(JSON.stringify(result));

    function sortObj(obj) {
        var keys = Object.keys(obj);
        keys.sort();

        var sortedbj = {};

        for (var j = 0; j < keys.length; j++) {
            var key = keys[j];
            sortedbj[key] = obj[key];
        }
        return sortedbj;
    }
}

solve(['Germany / Argentina: 1-0',
       'Brazil / Netherlands: 0-3',
       'Netherlands / Argentina: 0-0',
       'Brazil / Germany: 1-7',
       'Argentina / Belgium: 1-0',
       'Netherlands / Costa Rica: 0-0',
       'France / Germany: 0-1',
       'Brazil / Colombia: 2-1'
]);