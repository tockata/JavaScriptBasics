function displayProperties() {
    var arr = Object.getOwnPropertyNames(document);
    arr.sort();
    /** print on the console **/
    console.log(arr.join(('\n')));

    /** print in browser **/
    var resultStr = arr.join('<br>');
    document.getElementById('result').innerHTML = resultStr;
}

displayProperties();
