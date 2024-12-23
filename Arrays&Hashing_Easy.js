/* ----- Contains Duplicate -----
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

*/
function hasDuplicates(nums) {
    const newSet = new Set();
    for (const num of nums) {
        if (newSet.has(num)) {
            return true;
        }
        newSet.add(num);
    }
    return false;
}
console.log(hasDuplicates(new int[1, 2, 3, 3]))
