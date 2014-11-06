var firstRound;
var secondRound;

function roundNumber(number) {
    firstRound = Math.floor(number);
    secondRound = Math.round(number);
}


roundNumber(22.7);
console.log(firstRound);
console.log(secondRound);

roundNumber(12.3);
console.log(firstRound);
console.log(secondRound);

roundNumber(58.7);
console.log(firstRound);
console.log(secondRound);