function solve(arr) {
    var turns = parseFloat(arr[arr.length - 1].trim());
    var starSystems = [];
    var location = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (i < arr.length - 2) {
            starSystems.push(arr[i].split(/\s+/g).filter(Boolean));
            for (var j = 0; j < starSystems[i].length; j++) {
                starSystems[i][j] = starSystems[i][j].trim().toLowerCase();
                if (j > 0) {
                    starSystems[i][j] = parseFloat(starSystems[i][j]);
                }
            }
        } else {
            location= arr[i].split(/\s+/g).filter(Boolean);
            location[0] = parseFloat(location[0].trim());
            location[1] = parseFloat(location[1].trim());
        }
    }

    var x = location[0];
    var y = location[1];
    var star1Name = starSystems[0][0];
    var star1X = starSystems[0][1];
    var star1Y = starSystems[0][2];
    var star2Name = starSystems[1][0];
    var star2X = starSystems[1][1];
    var star2Y = starSystems[1][2];
    var star3Name = starSystems[2][0];
    var star3X = starSystems[2][1];
    var star3Y = starSystems[2][2];

    for (var i = 0; i <= turns; i++) {
        console.log(checkPosition());
        y += 1;
    }

    function checkPosition() {
        if (x >= star1X -1 && x <= star1X + 1 && y >= star1Y - 1 && y <= star1Y + 1) {
            return star1Name;
        } else if (x >= star2X -1 && x <= star2X + 1 && y >= star2Y - 1 && y <= star2Y + 1) {
            return star2Name;
        } else if (x >= star3X -1 && x <= star3X + 1 && y >= star3Y - 1 && y <= star3Y + 1) {
            return star3Name;
        } else {
            return 'space';
        }
    }
}

solve(['Sirius 3 7', 'Alpha-Centauri 7 5', 'Gamma-Cygni 10 10', '8 1', '6']);
solve(['Terra-Nova 16 2', 'Perseus 2.6 4.8', 'Virgo 1.6 7', '2 5', '4']);