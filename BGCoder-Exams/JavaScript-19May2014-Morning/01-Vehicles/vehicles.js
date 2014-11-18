function solve(arr) {
    var wheels = parseInt(arr[0]);
    var tempSum = 0;
    var carsWheels;
    var truckWheels;
    var trikesWheels;
    var count = 0;

    for (var i = 0; i <= 20; i++) {
        truckWheels = 10 * i;
        for (var j = 0; j <= 50; j++) {
            carsWheels = 4 * j;
            for (var k = 0; k <= 67; k++) {
                trikesWheels = 3 * k;
                tempSum = trikesWheels + carsWheels + truckWheels;
                if (tempSum === wheels) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}

solve('7');
solve(['10']);
solve(['40']);