function extractHyperlinks(arr) {
    for (var i = 0; i < arr.length; i++) {
        var resultStr = arr[i].match(/<a\s+.+<\/a>/g);
        console.log(resultStr + "\n");
    }
}


extractHyperlinks(['<ul><li><a   href="/"  id="home">Home</a></li><li><a class="selected" href=/courses>Courses</a>'],
['</li><li><a href = \'/forum\' >Forum</a></li><li><a class="href" onclick="go()" href= "#">Forum</a>']);