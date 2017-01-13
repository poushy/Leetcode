/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(/[^ ]+/g).length -1;
};