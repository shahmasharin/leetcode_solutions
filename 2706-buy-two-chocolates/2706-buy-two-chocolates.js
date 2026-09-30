/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);

    let cost = prices[0] + prices[1];

    return cost <= money ? money - cost : money;
};