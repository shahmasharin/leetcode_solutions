/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    const its = new Set();
    for (let num of nums) {
        if (its.has(num)) return true;
        its.add(num);
    }
    return false;
}
