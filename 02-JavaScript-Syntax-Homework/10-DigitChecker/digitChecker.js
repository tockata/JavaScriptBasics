function checkDigit(number) {
    if(Math.floor(number / 100) % 10 === 3){
        return true;
    } else {
        return false;
    }
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));