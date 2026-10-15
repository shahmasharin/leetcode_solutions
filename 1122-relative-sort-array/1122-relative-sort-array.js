/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let order = {};

    for (let i = 0; i < arr2.length; i++) {
        order[arr2[i]] = i
    }

    return arr1.sort((a, b) => {
        if (a in order && b in order) {
            return order[a] - order[b]
        }
        if (a in order) return -1
        if (b in order) return 1
        return a - b;
    });
};