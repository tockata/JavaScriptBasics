function inputCheck() {
    var input = document.getElementById('text');
    var inputValue = input.value;
    var isNumber =  /^\d+$/.test(inputValue);
    if(!isNumber) {
        input.style.backgroundColor = 'red';
        input.value = inputValue.substring(0, inputValue.length - 1);
        setTimeout(function(){
            input.style.backgroundColor = 'white';
        },500);
    }
}

