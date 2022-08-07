/**
 * Array mutation
 *
 * @param {Number} n
 * @param {Array} a
 * @returns {Array}
 */
const solution = (n, a) => {
    const result = [];

    for (let i = 0; i < n; i++) {
        result[i] = (a[i-1] || 0) + a[i] + (a[i+1] || 0);
    }

    return result;
}

console.log(solution(5, [4, 0, 1, -2, 3]))
