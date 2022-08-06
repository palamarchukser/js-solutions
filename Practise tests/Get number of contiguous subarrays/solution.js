/**
 * Get number of contiguous subarrays
 *
 * @param {Array} a
 * @returns {Number}
 */
const solution = (a) => {
    let l = a.length,
        result = a.length;

    for (let i = 0; i < l; i++ ) {
        for (let j = i; j < l - 1; j++ ) {
            if (a[j] <= a[j + 1]) break;
            result++;
        }
    }

    return result;
}

console.log(solution([9, 8, 7, 6, 5])) //15
console.log(solution([10, 10, 10])) //3
