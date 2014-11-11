function replaceATag(str) {
    str = str.replace(/<a/g, '[URL');
    str = str.replace(/<\/a>/g, '[/URL]');

    for(var i = 0; i < str.length; i++) {
        if(str[i] === '[') {
            var j = i;
            while(true) {
                j++;
                if(str[j] === '>') {
                    str = setCharAt(str,j,']');
                    i = j + 1;
                    break;
                }
            }
        }
    }

    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }

    return str;
}

console.log(replaceATag('<ul>\n<li>\n<a href=http://softuni.bg>SoftUni</a>\n</li>\n</ul>'));