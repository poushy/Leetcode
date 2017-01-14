/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var count = 0,prevSpace = true;
    for(var i=0; i< s.length; i++) {
        if(s[i] != ' ' && prevSpace == true) {
            count++;
            prevSpace = false;
        }
        else if(s[i] == ' '){
            prevSpace = true;
        }
    }
    return count;
};
