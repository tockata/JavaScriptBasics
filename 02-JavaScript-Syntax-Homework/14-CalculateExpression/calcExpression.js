function calcExpression() {
    var input = document.getElementById("expression").value;
    var result = eval(input);

    document.getElementById("result").innerHTML = result;
}
