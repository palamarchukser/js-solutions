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
        const term1 = i === 0 ? 0 : a[i - 1];
        const term2 = a[i];
        const term3 = i === (a.length - 1) ? 0 : a[i + 1];

        result[i] = term1 + term2 + term3;
    }

    return result;
}

console.log(solution(5, [4, 0, 1, -2, 3]))
