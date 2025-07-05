// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.



/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longestPrefix = '';
    let currentPrefix = '';

    for (let char of strs[0]) {
        currentPrefix+=char;
        let isSame = true;
        for (let word of strs.slice(1)) {
            let wordPrefix = word.slice(0, currentPrefix.length);
            if (wordPrefix == currentPrefix) {
                continue;
            } else {
                isSame = false;
                break;
            }
        }

        if (isSame && currentPrefix.length > longestPrefix.length) {
            longestPrefix = currentPrefix;
        }
    }
    return longestPrefix;
};
