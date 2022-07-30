/**
 * Merge Strings, lexicographical order
 *
 * @param {Array} a
 * @param {Number} k
 * @returns {Number}
 */
const solution = (a, k) => {
    const max = Math.max.apply(null, a);
    let pieces = 0,
        piecesArray = [],
        result = 0;

    for (let j=1; j < max; j++){
        pieces = 0;
        for (let i=0, n = a.length; i < n; i++){
            pieces += Math.floor(a[i] / j);
        }
        piecesArray.push(pieces);
    }

    piecesArray.find((v, i) => {
        if (v < k && result === 0) result = i;
    })

    return result;
}

console.log(solution([5, 2, 7, 4, 9], 5)) //4
console.log(solution([1, 2, 3, 4, 9], 6)) //2


/*
ALL TEST PASSED
const solution = (a, k) => {
  let low = 0;
  let high = 9999999999;

  while (low < high) {
      const mid = (low + high + 1) >> 1;
      let cnt = 0;

      for (let ribbon of a) {
          cnt += Math.floor(ribbon / mid);
      }

      if (cnt < k) {
          high = mid - 1;
      } else {
          low = mid;
      }
  }

  return low;
}

*/
