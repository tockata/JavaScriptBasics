function variablesTypes(arr) {
    var nameType = typeof(arr[0]);
    var ageType = typeof(arr[1]);
    var genderType = typeof(arr[2]);
    var foodsType = typeof(arr[3]);

    return "My name: " + arr[0] + " // type is " + nameType + "\n" +
            "My age: " + arr[1] + " // type is " + ageType + "\n" +
            "I am " + arr[2] + " // type is " + genderType + "\n" +
            "My favorite foods are: " + arr[3] + " // type is " + foodsType;
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));