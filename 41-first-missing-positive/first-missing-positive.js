/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
    const n = nums.length;

    // Put numbers in correct poistion
    for (let i = 0; i < n; i++) {
        while(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            let correctIndex = nums[i] - 1;
    // Swap
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
    }

    // Find first incorrect position
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all positions are correct
    return n + 1;
}