function bitChecker(number) {
    var mask = 1 << 3;
    var numberAndMask = number & mask;
    var bit = numberAndMask >> 3;
    if(bit === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));