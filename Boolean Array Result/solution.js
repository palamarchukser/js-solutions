/**
 * Calculate a boolean array result
 *
 * @param {Array} numbers
 * @param {Number} left
 * @param {Number} right
 * @returns {Array}
 */
const solution = (numbers, left, right) => {
    let result = [];

    for(let i=0, n = numbers.length; i < n; i++) {
        const x = numbers[i] / (i + 1);
        const isInteger = (x ^ 0) === x;

        result.push(isInteger ? x >= left && x<=right : false);
    }

    return result;
}

console.log(solution([8, 5, 6, 16, 5], 1, 3) )
