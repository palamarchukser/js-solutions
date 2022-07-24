/**
 * Calculate the number of ways to pick two different indices
 *
 * @param {Array} m
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const solution = (m, a, b) => {
    let arrSum = [];

    const getSum = (m, a, b) => {
        let cl = m[0].length,
            rl = m.length,
            sum = 0,
            l, r;

        for (let i=0; i < cl; i++) {
            for (let j = 0; j < rl; j++) {
                if ((i >= a-1) && (i <= cl-b) && (j <= rl-(a+b-1))) {
                    sum = m[j][i];
                    l = i;
                    r = i;

                    for (let k = 1; k < a + b - 1; k++) {
                        l = k < a ? l - 1 : l + 1;
                        r = k < b ? r + 1 : r - 1;

                        for (let q = l; q < r + 1; q++) {
                            sum += m[j + k][q];
                        }
                    }

                    arrSum.push(sum);
                }
            }
        }
    }

    getSum(m,a,b);
    getSum(m,b,a); // Other diagonal

    return (Math.max.apply(null, arrSum));
}


console.log(solution([[1, 2, 3, 4, 0],
    [5, 6, 7, 8, 1],
    [3, 2, 4, 1, 4],
    [4, 3, 5, 1, 6]], 2, 3))

console.log(solution([[-2, 3, 5, -1],
    [4, 3, -10, 10]], 1, 1))

console.log(solution([[-2, 3],
    [4, 3]], 1, 2))

/*
Tests:
    Input:
        m: [[1, 2, 3, 4, 0],
          [5, 6, 7, 8, 1],
          [3, 2, 4, 1, 4],
          [4, 3, 5, 1, 6]]
        a: 2
        b: 3
    Expected Output: 36


    Input:
        m: [[-2, 3, 5, -1],
          [4, 3, -10, 10]]
        a: 1
        b: 1
    Expected Output: 10

    Input:
        m: [[-2, 3],
          [4, 3]]
        a: 1
        b: 2
    Expected Output: 10
*/

