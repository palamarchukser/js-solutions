/**
 * Array mutation
 *
 * @param {String} s
 * @returns {Number}
 */
const solution = (s) => {
    let count = 0,
        l = s.length;

    for (let i = 0; i < l-2; i++) {
        for (let j = i+1; j < l-1; j++) {
            const [a, b, c] = [
                s.slice(0, i+1),
                s.slice(i+1, j+1),
                s.slice(j+1, l),
            ];

            if((a+b !== b+c) && (b+c !== c+a) && (a+b !== c+a)) count++;
        }
    }

    return count;
}

console.log(solution('xzxzx'))
