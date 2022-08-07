/**
 * All the given blocks into a rectangular container of dimensions
 *
 * @param {Array} blocks
 * @param {Number} height
 * @returns {Number}
 */
const solution = (blocks, height) => {
    let b = blocks;
    let h = height;

    let s = 0;
    let str = h+1;

    for (let i=0; i < blocks.length; i++) {
        s = s + blocks[i];
    }

    let wMin1 = Math.ceil(s / h);
    let wMin2 = Math.max.apply(null, b);
    let wMin = wMin1 > wMin2 ? wMin1 : wMin2;

    while (str > h){
        let n = 0;

        str = 0;
        while (n < b.length){
            let sum = 0;

            while (sum < wMin && n < b.length){
                sum += b[n];
                if (sum > wMin) {
                    if (n===0) {
                        wMin = b[0]
                        n = n+1;
                    } else {
                        sum -= b[n];
                    }
                    break;
                } else {
                    n = n+1;
                }
            }

            str += 1;
        }

        if (str > h) {
            wMin += 1;
        }
    }

    return wMin;
}

console.log(solution([1, 3, 1, 3, 3], 2)) //6
console.log(solution([2, 3, 1, 1, 1], 2)) //5
console.log(solution([4, 1, 1], 2)) //4
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100000)) //1


/*
Input:
    blocks: [4, 1, 1]
height: 2
Expected Output:
    4


Input:
blocks: [3]
height: 2
Expected Output:
3





 Input:
blocks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
height: 1
Expected Output:
10




Input:
blocks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
height: 1000000000
Output:
undefined
Expected Output:
1

*/
