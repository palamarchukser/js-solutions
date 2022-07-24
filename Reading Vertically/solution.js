/**
 * Construct a string from the words in array
 *
 * @param {Array} a
 * @returns {String}
 */
const solution = (a) => {
    let l = a.length,
        result = '';

    const ml = Math.max.apply(null, a.map((el) => el.length))

    for (let i = 0, n = ml; i <= n; i++ ) {
        for (let j = 0, n = l; j < n; j++ ) {
            result += a[j].charAt(i) || '';
        }
    }

    return result;
}


console.log(solution(["Daisy", "Rose", "Hyacinth", "Poppy"]))
