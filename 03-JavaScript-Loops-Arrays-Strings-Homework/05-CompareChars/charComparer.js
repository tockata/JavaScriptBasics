function compareChars(arr1, arr2) {
    if(arr1.length != arr2.length) {
        console.log('Not equal')
    } else {
        var equal = true;
        for(var i = 0; i < arr1.length; i++) {
            if(arr1[i] !== arr2[i]) {
                equal = false;
                console.log('Not equal');
                break;
            }
        }
        if(equal) {
            console.log('Equal');
        }
    }
}

var arr1 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
var arr2 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
var arr3 = ['3', '5', 'g', 'd'];
var arr4 = ['5', '3', 'g', 'd'];
var arr5 = ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'];
var arr6 = ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'];
compareChars(arr1, arr2);
compareChars(arr3, arr4);
compareChars(arr5, arr6);