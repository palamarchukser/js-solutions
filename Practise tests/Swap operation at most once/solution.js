const solution = (n) => {
    let l = n.length;
    let result = true;

    for (let i=0; i<l-1; i++ ){
        if (n[i] > n[i+1]) {
            const reverseNumber = +(n[i].toString().split('').reverse().join(''));
            if (reverseNumber > n[i+1] || reverseNumber <= n[i-1]) result = false
        }
    }

    return result;
}

console.log(solution([1, 5, 10, 20])) // true
console.log(solution([1, 3, 900, 10])) // true
console.log(solution([13, 31, 30])) // false
