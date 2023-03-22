function sumTo(n) {

    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;

}

function sumToRec(n) {

    return (n == 1) ? n : (n + sumToRec(n-1));

}

function sumToProgress(n) {

    return (1 + n)*n/2;

}

console.log(sumToProgress(5));