/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    // Edge case
    if (needle === "") return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;

        // Check if substring matches
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }

        // If we matched the whole needle
        if (j === needle.length) {
            return i;
        }
    }

    return -1;
}