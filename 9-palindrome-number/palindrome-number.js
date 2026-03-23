/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    const original = x;
    let reversed = 0;

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
}