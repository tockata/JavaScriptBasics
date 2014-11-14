Array.prototype.removeItem = function(value) {
    for (i = 0; i < this.length; i++) {
        if(this[i] === value) {
            this.splice(i, 1);
        }
    }
}

var arr1 = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr1.removeItem(1);
console.log(arr1);

var arr2 = ['hi', 'bye', 'hello' ];
arr2.removeItem('bye');
console.log(arr2);