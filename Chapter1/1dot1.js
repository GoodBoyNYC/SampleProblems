function uniqueChars(word) {
    var boolArray = new Array(256, false);
    var value;
    for (var i = 0; i < word.length; i++) {
        value = word.charAt(i);
        if (boolArray[value]) {
            return false;
        }
        boolArray[value] = true;
    }
    return true;
};