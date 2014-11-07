function calcExpression() {
    var input = document.getElementById("expression").value;
    input = input.replace(/[^\d\+\-\*\/]/g, "");
    var result = eval(input);

    document.getElementById("result").innerHTML = result;
}
