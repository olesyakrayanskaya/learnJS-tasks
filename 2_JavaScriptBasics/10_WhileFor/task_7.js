function isPrime(num) {
    if (num < 2) {
        return false;
    }
    let max = Math.sqrt(num);
    for (let i = 2; i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let n = 11;

for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        console.log(i)
    } else {
        continue
    }
}