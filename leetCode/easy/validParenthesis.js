// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

var isValid = function(s) {
    const openingParenthesis = '({[';
    const closingParenthesis = ')}]';
    let stack = [];

    for (let char of s) {
        if (openingParenthesis.includes(char)) {
            stack.push(openingParenthesis.indexOf(char));  // push opening index
        } else if (closingParenthesis.includes(char)) {
            if (stack.length === 0) return false;  // nothing to match or a single closing one
            let openIdx = stack.pop();  // last opening
            let closeIdx = closingParenthesis.indexOf(char);  // this closing
            if (openIdx !== closeIdx) return false;  // mismatch
        }
    }

    return stack.length === 0;  // valid only if nothing left unclosed
};


console.log(isValid("()"));
console.log(isValid("(]"));