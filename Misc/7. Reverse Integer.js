/**
 * Created by pmukh2 on 7/28/17.
 */


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var rev = 0, neg = false;
    if(x < 0) {
        neg = true;
        x = x*-1;
    }
    while(x != 0) {
        rev = rev*10 + x%10;
        x = Math.floor(x/10)
    }
    if(rev > 2147483647) {
        return 0;
    }
    if(neg) {
        rev = rev*-1;
    }
    return rev;

};
