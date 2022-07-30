/**
 * Calculate the digits that occur the most number of times in the array
 *
 * @param {Array} a
 * @returns {Array}
 */
const solution = (a) => {
    let digitCounts = [],
        result = [];

    for(let i = 0; i <= 9; i++) {
        digitCounts.push(a.toString().split(i.toString()).length - 1);
    }

    const max = Math.max.apply(null, digitCounts);

    digitCounts.map((v, i) => {
        if (v === max) result.push(i);
    })

    return result;
}

console.log(solution([25, 2, 3, 57, 38, 41]))

