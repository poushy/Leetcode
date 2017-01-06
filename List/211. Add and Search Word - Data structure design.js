var letterNode = function(letter) {
    this.letter = letter;
    this.next = [];
    this.end = false;
};
/**
 * @constructor
 */
var WordDictionary = function() {
    this.root = new letterNode('\\');
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
    var curr = this.root;
    for(var i=0; i< word.length; i++) {
        if(curr.next[word[i]]) {
            curr = curr.next[word[i]];
        }
        else {
           var letter = new letterNode(word[i]);
           curr.next[word[i]] = letter;
           curr = letter;
        }
    }
    curr.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    var found = false;
    function doSearch(ind, curr){ 
         if(!curr) {
            return;
        }
        if(found || (ind == word.length && curr.end == true)) {
            found = true;
            return;
        }
        if(word[ind] == '.') {
            for(var i in curr.next) {
                doSearch(ind + 1, curr.next[i]);
            }
        }
        else if(curr.next[word[ind]]) {
            doSearch(ind +1 , curr.next[word[ind]]);
        }
    }
    doSearch(0, this.root);
    return found;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
