const solution = (a) => {
    const newArray = [];

    for (let i of a) {
        if (newArray[i-1]) return i;
        newArray[i-1] = -1;
    }

    return -1
}

console.log(solution([2, 1, 3, 5, 3, 2])) // 3
console.log(solution([2, 2])) // 2
console.log(solution([2, 4, 3, 5, 1])) // -1
