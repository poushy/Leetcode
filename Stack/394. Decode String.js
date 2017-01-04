/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var stackString = [], numStack = [], finalString = '';
    for(var i=0; i < s.length; i++) {
        if(s[i] == '[') {
            var tempNum = '';
            while(stackString.length > 0 && stackString[stackString.length - 1].match(/[0-9]/)) {
                var top = stackString.pop();
                tempNum = top + tempNum;
            }
            numStack.push(Number(tempNum));
            
            stackString.push(s[i]);
        }
        else if(s[i] == ']') {
            var count = numStack.pop(),tempString = '';
            while(1) {
                var top = stackString.pop();
                if(top == '[') {
                    for(var j=0; j<count; j++) {
                        stackString.push(tempString);
                    }
                    break;
                }
                else {
                    tempString = top + tempString;
                }
            }
            
        }
        else {
            stackString.push(s[i]);
        }
    }
    while(stackString.length > 0) {
        var top = stackString.pop();
        finalString = top + finalString;
    }
    
    return finalString;
    
};