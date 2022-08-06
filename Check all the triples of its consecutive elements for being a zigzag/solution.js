const solution = (n) => {
    let result = [];

    for(let i = 0, l=n.length - 2; i < l; i++) {
        result.push(Number((n[i] < n[i+1] && n[i+1] > n[i+2]) || (n[i] > n[i+1] && n[i+1] < n[i+2])))
    }

    return result;
}


console.log(solution([1, 2, 1, 3, 4])) // [1, 1, 0]
console.log(solution([1, 2, 3, 4])) // [0, 0]
console.log(solution([1000000000, 1000000000, 1000000000])) // [0]
