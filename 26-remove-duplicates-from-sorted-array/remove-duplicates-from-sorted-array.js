/**
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(nums) {
    let write = 1;

    for (let read = 1; read < nums.length; read ++) {
        if (nums[read] !== nums[read - 1]){
            nums[write] = nums[read];
            write ++;
        }
    }
    return write;
};