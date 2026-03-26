/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    let n = s.length - 1;
    let count = 0;

    while (n >= 0 && s[n] === " ") {
        n--;
    }

    while (n >= 0 && s[n] !== " ") {
        count ++;
        n--;
    }
    return count;
}