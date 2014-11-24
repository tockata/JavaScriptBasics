function solve(arr) {
    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');
    var bladeType;

    for (var i = 0; i < arr.length; i++) {
        var length = Math.floor(Number(arr[i]));
        bladeType = length % 5;
        if (length > 40) {
            switch (bladeType) {
                case 0: console.log('<tr><td>' + length + '</td><td>sword</td><td>*rap-poker</td></tr>'); break;
                case 1: console.log('<tr><td>' + length + '</td><td>sword</td><td>blade</td></tr>'); break;
                case 2: console.log('<tr><td>' + length + '</td><td>sword</td><td>quite a blade</td></tr>'); break;
                case 3: console.log('<tr><td>' + length + '</td><td>sword</td><td>pants-scraper</td></tr>'); break;
                case 4: console.log('<tr><td>' + length + '</td><td>sword</td><td>frog-butcher</td></tr>'); break;
            default: break;
            }
        } else if(length > 10) {
            switch (bladeType) {
                case 0: console.log('<tr><td>' + length + '</td><td>dagger</td><td>*rap-poker</td></tr>'); break;
                case 1: console.log('<tr><td>' + length + '</td><td>dagger</td><td>blade</td></tr>'); break;
                case 2: console.log('<tr><td>' + length + '</td><td>dagger</td><td>quite a blade</td></tr>'); break;
                case 3: console.log('<tr><td>' + length + '</td><td>dagger</td><td>pants-scraper</td></tr>'); break;
                case 4: console.log('<tr><td>' + length + '</td><td>dagger</td><td>frog-butcher</td></tr>'); break;
                default: break;
            }
        }
    }

    console.log('</tbody>');
    console.log('</table>');
}

solve([
    '17.8', '19.4', '13', '55.8', '126.96541651', '3'
]);