/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = n => {
    const digits = [...`${n}`].map(Number)
    return digits.reduce((p, d) => p * d, 1) -
           digits.reduce((s, d) => s + d, 0)
};