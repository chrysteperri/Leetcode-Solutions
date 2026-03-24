/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    const intMin = -2147483648;
    const intMax = 2147483647;

    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let reversed = 0;

    while (x > 0 ) {
        let digit = x % 10;

        if (reversed > Math.floor((intMax - digit) / 10)) {
            return 0;
        }

        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    return reversed * sign;
}