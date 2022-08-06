function solution(s, t) {
    let result = 0;

    for(let i = 0, n = s.length; i < n; i++) {
        if (!isNaN(s.charAt(i))) {
            if (t.localeCompare(s.slice(0, i) + s.slice(i+1)) === 1) result++;
        }

        if (!isNaN(t.charAt(i))) {
            if (s.localeCompare(t.slice(0, i) + t.slice(i+1)) === -1) result++;
        }
    }

    return result;
}


console.log(solution('ab12c', '1zz456')) // 1
console.log(solution('ab12c', 'ab24z')) // 3
