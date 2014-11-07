function soothsayer(numsArr, langsArr, citiesArr, carsArr) {
    function generateRandomIndex() {
        return Math.floor(Math.random() * 5);
    }

    return [numsArr[generateRandomIndex()], langsArr[generateRandomIndex()],
            citiesArr[generateRandomIndex()], carsArr[generateRandomIndex()]];
}

var result = soothsayer([3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
    ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
    ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']);
console.log("You will work " + result[0].toString() + " years on " +
            result[1] + ". You will live in " + result[2] + " and drive " +
            result[3] + ".");