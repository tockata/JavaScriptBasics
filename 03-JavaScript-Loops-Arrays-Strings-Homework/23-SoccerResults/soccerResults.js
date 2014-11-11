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