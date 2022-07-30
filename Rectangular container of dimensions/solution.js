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

    let wMin = Math.ceil(s / h);

    while (str > h){
        let n = 0;

        str = 0;
        while (n < b.length){
            let sum = 0;

            while (sum < wMin && n < b.length){
                sum += b[n];
                if (sum > wMin) {
                    sum -= b[n];
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
