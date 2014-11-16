function solve(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var splittedRow = arr[i].split(/\s+/g).filter(Boolean);
        var program = splittedRow[0];
        var extension = splittedRow[1];
        var size = parseFloat(splittedRow[2].substring(0, splittedRow[2].length - 2));

        if (!result[extension]) {
            result[extension] = {'files':[], 'memory': 0};
        }

        result[extension]['files'].push(program);
        result[extension]['memory'] += size;
    }

    for (var key in result) {
        result[key]['files'].sort();
        result[key]['memory'] = result[key]['memory'].toFixed(2);
    }

    result = sortKeys(result);
    console.log(JSON.stringify(result));

    function sortKeys(obj) {
        var keys = Object.keys(obj);
        keys.sort();
        var sortedObj = {};

        for (var i = 0; i < keys.length; i++) {
            sortedObj[keys[i]] = result[keys[i]];
        }
        return sortedObj;
    }
}

solve(['sentinel .exe 15MB', 'zoomIt .msi 3MB', 'skype .exe 45MB', 'trojanStopper .bat 23MB',
        'kindleInstaller .exe 120MB', 'setup .msi 33.4MB', 'winBlock .bat 1MB']);