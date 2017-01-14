/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var match = s.match(/[^ ]+/g);
    return match == null ? 0 : match.length;
    
};
