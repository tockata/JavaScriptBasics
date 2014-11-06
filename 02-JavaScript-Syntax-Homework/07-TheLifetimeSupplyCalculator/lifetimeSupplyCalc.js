function calcSupply(age, maxAge, food, foodPerDay) {
    var foodQuantity = ((maxAge - age) * 365) * foodPerDay;
    return foodQuantity + 'kg of ' + food + ' would be enough until I am ' +
        maxAge + ' years old.';
}


console.log(calcSupply(38, 118, 'chocolate', 0.5));
console.log(calcSupply(20, 87, 'fruits', 2));
console.log(calcSupply(16, 102, 'nuts', 1.1));