/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    function digitSum(n) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }

    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (digitSum(i) % 2 === 0) {
            count++;
        }
    }
    return count;
};
