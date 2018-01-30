/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    var arr = [];
    
    for(var i=0; i< nums.length; i++) {
        var rem = target - nums[i];
        hash[rem] = i;
    }
    
    for(var i=0; i< nums.length; i++) {
        if(hash[nums[i]] && hash[nums[i]] !== i) {
            arr.push(i, hash[nums[i]]);
        }
    }
    
    
    return _.uniq(arr);
};
