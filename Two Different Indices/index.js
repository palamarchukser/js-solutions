/**
 * Calculate the number of ways to pick two different indices
 *
 * @param {Array} a
 * @param {Number} k
 * @returns {Number}
 */
const solution = (a, k) => {
    let count = 0;

    for (let i = 0, n = a.length; i < n -1; i++ ) {
        for (let j = i + 1, n = a.length; j < n; j++ ) {
            if (i < j && ((a[i] + a[j]) % k) === 0) count++;
        }
    }

    return count;
}


console.log(solution([1, 2, 3, 4, 5], 3))
console.log(solution([1, 3, 5, 7, 9], 2))


/*
Tests:

    Input:
        a: [1, 2, 3, 4, 5]
        k: 3
    Expected Output: 4


    Input:
        a: [1, 3, 5, 7, 9]
        k: 2
    Expected Output: 10
*/
