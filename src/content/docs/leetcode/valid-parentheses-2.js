// Valid Parentheses - Counter Solution
// Time: O(n), Space: O(1) for simple parentheses only

function isValid(s) {
    // This approach only works for simple parentheses ()
    // For mixed brackets, use the stack approach
    let count = 0;
    
    for (let char of s) {
        if (char === '(') {
            count++;
        } else if (char === ')') {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    
    return count === 0;
}

// Note: This solution only works for () parentheses
// For full bracket support, use the stack solution
// Example usage:
// isValid("()") → true
// isValid("(())") → true
// isValid("()(") → false