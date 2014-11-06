function calcCylinderVol(arr) {
    var volume = Math.PI * Math.pow(arr[0], 2) * arr[1];
    volume = Math.round(volume*1000) / 1000;
    return volume;
}

console.log(calcCylinderVol([2, 4]));
console.log(calcCylinderVol([5, 8]));
console.log(calcCylinderVol([12, 3]));