/**
 * Merge Strings, lexicographical order
 *
 * @param {String} s1
 * @param {String} s2
 * @returns {String}
 */
const solution = (s1, s2) => {
    const maxLength = s1.length + s2.length;
    let prevS1 = s1,
        prevS2 = s2,
        result = '';

    for (let i = 0; i < maxLength; i++) {
        let arr = [];

        if (prevS1.localeCompare(prevS2) === -1){
            arr.push(prevS1, prevS2);
        } else {
            arr.push(prevS2, prevS1);
        }

        let charS1 = prevS1.slice(0 , 1)
        let charS2 = prevS2.slice(0 , 1)

        if (arr[0] === prevS1) {
            result = '' + result + charS1;
            prevS1 = prevS1.substring(1);
        } else {
            result = '' + result + charS2;
            prevS2 = prevS2.substring(1);
        }
    }


    if (s1.length === s2.length) {
        result = '' + result + prevS1 + prevS2;
    } else if (s1.length < s2.length){
        result = '' + prevS1 + prevS2 + result;
    } else if (s1.length > s2.length){
        result = '' + result + prevS1 + prevS2;
    }

    return result
}

console.log(solution('dce', 'cccbd' )) //dcecccbd
console.log(solution('super', 'tower' )) //dcecccbd


