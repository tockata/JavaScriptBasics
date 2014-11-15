function solve(arr) {
    var resultObj = {};

    for(var i = 0; i < arr.length; i++) {
        var splittedArrRow = (arr[i].split(/\s?[|]\s?/));
        var student = splittedArrRow[0].trim();
        var course = splittedArrRow[1].trim();
        var grade = parseFloat(splittedArrRow[2]);
        var visit = parseFloat(splittedArrRow[3]);
        if(!resultObj[course]) {
            resultObj[course] = {'avgGrade':0, 'gradeCount': 0, 'avgVisits': 0, 'visitsCount': 0, 'students': []};
        }
        resultObj[course].avgGrade += grade;
        resultObj[course].gradeCount++;
        resultObj[course].avgVisits += visit;
        resultObj[course].visitsCount++;
        if(resultObj[course].students.indexOf(student) < 0){
            resultObj[course].students.push(student);
        }
    }

    for(var key in resultObj) {
        resultObj[key].avgGrade = parseFloat((resultObj[key].avgGrade / resultObj[key].gradeCount).toFixed(2));
        resultObj[key].avgVisits = parseFloat((resultObj[key].avgVisits / resultObj[key].visitsCount).toFixed(2));
        delete  resultObj[key].gradeCount;
        delete  resultObj[key].visitsCount;
        resultObj[key].students.sort();
    }

    resultObj = sortKeys(resultObj);

    console.log(JSON.stringify(resultObj));

    function sortKeys(obj) {
        var keys = Object.keys(obj);
        keys.sort();
        var sortedObj = {};

        for(var i = 0; i < keys.length; i++) {
            sortedObj[keys[i]] = resultObj[keys[i]];
        }

        return sortedObj;
    }
}

/**
solve(['Peter Nikolov | PHP  | 5.50 | 8', 'Maria Ivanova | Java | 5.83 | 7',
        'Ivan Petrov   | PHP  | 3.00 | 2', 'Ivan Petrov   | C#   | 3.00 | 2',
        'Peter Nikolov | C#   | 5.50 | 8', 'Maria Ivanova | C#   | 5.83 | 7',
        'Ivan Petrov   | C#   | 4.12 | 5', 'Ivan Petrov   | PHP  | 3.10 | 2',
        'Peter Nikolov | Java | 6.00 | 9']);
 **/