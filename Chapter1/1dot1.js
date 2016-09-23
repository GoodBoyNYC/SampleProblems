uniqueChars("ABCDEFGG");
function uniqueChars(word) {
    var boolArray = new Array();
    var currentLetter;
    for (var i = 0; i < word.length; i++) {
        currentLetter = word.charAt(i);
        if (boolArray[currentLetter]) {
            return false;//break out of loop when character exists in array
        }
        boolArray[currentLetter] = true;
    }
    return true;
};