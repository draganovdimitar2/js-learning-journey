// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function(s) {
    let longestSubstring = '';
    let currentSubstring = '';

    for (let char of s) {
        const index = currentSubstring.indexOf(char);

        if (index !== -1) {
            // Remove characters up to and including the duplicate
            currentSubstring = currentSubstring.slice(index + 1);
        }

        currentSubstring += char;

        if (currentSubstring.length > longestSubstring.length) {
            longestSubstring = currentSubstring;
        }
    }

    return longestSubstring.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring(""));