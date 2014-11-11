function solve(arr) {
    var results = {};

    for(var i = 0; i < arr.length; i++) {
        var splittedArr = arr[i].split(/\s?[\/|:|-]\s?/g);
        var homeTeam = splittedArr[0];
        var awayTeam = splittedArr[1];
        var homeGoals = parseInt(splittedArr[2]);
        var awayGoals = parseInt(splittedArr[3]);

        if(!results[homeTeam]) {
            results[homeTeam] = {};
        }
        if(!results[homeTeam]['goalsScored']) {
            results[homeTeam]['goalsScored'] = 0;
        }
        if(!results[homeTeam]['goalsConceded']) {
            results[homeTeam]['goalsConceded'] = 0;
        }
        if(!results[homeTeam]['matchesPlayedWith']) {
            results[homeTeam]['matchesPlayedWith'] = [];
        }
        results[homeTeam]['goalsScored'] += homeGoals;
        results[homeTeam]['goalsConceded'] += awayGoals;
        if(results[homeTeam]['matchesPlayedWith'].indexOf(awayTeam) < 0){
            results[homeTeam]['matchesPlayedWith'].push(awayTeam);
        }

        if(!results[awayTeam]) {
            results[awayTeam] = {};
        }
        if(!results[awayTeam]['goalsScored']) {
            results[awayTeam]['goalsScored'] = 0;
        }
        if(!results[awayTeam]['goalsConceded']) {
            results[awayTeam]['goalsConceded'] = 0;
        }
        if(!results[awayTeam]['matchesPlayedWith']) {
            results[awayTeam]['matchesPlayedWith'] = [];
        }
        results[awayTeam]['goalsScored'] += awayGoals;
        results[awayTeam]['goalsConceded'] += homeGoals;
        if(results[awayTeam]['matchesPlayedWith'].indexOf(homeTeam) < 0){
            results[awayTeam]['matchesPlayedWith'].push(homeTeam);
        }

        results[homeTeam]['matchesPlayedWith'].sort();
        results[awayTeam]['matchesPlayedWith'].sort();
    }

    results = sortObject(results);

    console.log(JSON.stringify(results));

    function sortObject(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedResults = {};

        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedResults[key] = obj[key];
        }

        return sortedResults;
    }
}


solve(['Levski / CSKA: 0-2', 'Pavlikeni / Loko Gorna: 4-2', 'Loko Gorna / Levski: 1-4',
        'Litex / Loko Gorna: 0-0', 'Beroe / Botev Plovdiv: 2-1', 'Loko Gorna / Beroe: 3-1',
        'Pavlikeni / Ludogorets: 0-2', 'Loko Sofia / Litex: 0-2', 'Pavlikeni / Marek: 1-1',
        'Litex / Levski: 0-0', 'Beroe / Litex: 3-2', 'Litex / Beroe: 1-0', 'Ludogorets / Litex: 3-0',
        'Litex / Ludogorets: 1-0', 'CSKA / Beroe: 1-0', 'Botev Plovdiv / CSKA: 1-1',
        'Ludogorets / Loko Sofia: 1-0', 'Litex / CSKA: 0-1', 'Marek / Haskovo: 0-1', 'Levski / Loko Gorna: 1-1']);