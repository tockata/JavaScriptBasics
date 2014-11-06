function convertKWtoHP(number) {
    var horsePowers = Math.round( number * 1.34102209 * 100) / 100;
    return horsePowers;
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));