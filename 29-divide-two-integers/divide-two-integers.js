/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    let sign = 1;
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
        sign = -1;
    }

    let x = Math.abs(dividend);
    let y = Math.abs(divisor);

    let result = 0;

    while (x >= y) {  
        let temp = y;
        let count = 1;

        while (x >= temp + temp) { 
            temp = temp + temp;
            count = count + count;
        }

        x = x - temp; 
        result = result + count;
    }

    return sign * result;
}